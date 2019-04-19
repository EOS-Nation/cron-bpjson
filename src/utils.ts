import { rpc } from "./config";
import * as fetch from "isomorphic-fetch";
import * as crypto from 'crypto';

interface ProducerJson {
  owner: string,
  json: string,
}

interface GetTableRows<T> {
  rows: T[],
  more: string,
}

export function createHash(data: string) {
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
