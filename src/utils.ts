import { rpc, api, authorization } from "./config";
import { RpcError } from "eosjs";
import * as fetch from "isomorphic-fetch";
import * as crypto from 'crypto';
import { GetTableRows, ProducerJson, Action } from "./interfaces";

export function createHash(json: any) {
  const data = JSON.stringify(json);
  return crypto.createHash('md5').update(data).digest("hex");
}

export async function getProducerJson(owner: string) {
    const response: GetTableRows<ProducerJson> = await rpc.get_table_rows({
      json: true,
      code: "producerjson",
      scope: "producerjson",
      table: "producerjson",
      lower_bound: owner,
      upper_bound: owner
    })
    if (response.rows.length === 0) throw new Error("rows are missing");
    return JSON.parse(response.rows[0].json);
}

export async function getBpjson(endpoint: string) {
  const response = await fetch(endpoint);
  return response.json();
}

/**
 * Transaction
 */
export async function transact(actions: Action[]) {
    try {
        const result = await api.transact({actions}, { blocksBehind: 3, expireSeconds: 30 });
        const trx_id = result.transaction_id;
        for (const action of actions) {
            console.log(`${action.account}::${action.name} [${JSON.stringify(action.data)}] => ${trx_id}`);
        }
    } catch (e) {
        if (e instanceof RpcError) {
            const {name, what, details} = e.json.error
            const message = (details[0]) ? details[0].message : `[${name}] ${what}`;
            console.error(message);
        }
    }
}

export function setProducerJson(owner: string, json: Object): Action {
    return {
        account: "producerjson",
        name: "set",
        authorization,
        data: {
            owner,
            json: JSON.stringify(json),
        },
    }
};