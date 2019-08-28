import { JsonRpc, Api } from 'eosjs';
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig';
import * as fetch from "isomorphic-fetch";
import * as dotenv from "dotenv"
import { Authorization } from "./interfaces";
const { TextEncoder, TextDecoder } = require('util');

dotenv.config();

if (!process.env.NODEOS_ENDPOINT) throw new Error("[NODEOS_ENDPOINT] is required in .env");
if (!process.env.PRIVATE_KEY) throw new Error("[PRIVATE_KEY] is required in .env");
if (!process.env.PRODUCER_ACCOUNT_NAME) throw new Error("[PRODUCER_ACCOUNT_NAME] is required in .env");
if (!process.env.BPJSON_ENDPOINT) throw new Error("[BPJSON_ENDPOINT] is required in .env");

export const NODEOS_ENDPOINT: string = process.env.NODEOS_ENDPOINT;
export const PRIVATE_KEY: string = process.env.PRIVATE_KEY;
export const PRODUCER_ACCOUNT_NAME: string = process.env.PRODUCER_ACCOUNT_NAME;
export const BPJSON_ENDPOINT: string = process.env.BPJSON_ENDPOINT;

export const CRON_TIME: string = process.env.CRON_TIME || "0 * * * *";
export const PERMISSION: string = process.env.PERMISSION || "active";
export const TIMEZONE: string = process.env.TIMEZONE || "America/Toronto";

if (PRIVATE_KEY.includes("PRIVATE")) throw new Error("[PRIVATE_KEY] invalid key")

// EOSIO API & RPC
export const rpc = new JsonRpc(NODEOS_ENDPOINT, { fetch });
const signatureProvider = new JsSignatureProvider([PRIVATE_KEY]);
export const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
export const authorization: Authorization[] = [{
    actor: PRODUCER_ACCOUNT_NAME,
    permission: PERMISSION,
}];

console.log("Configurations")
console.log("--------------")
console.log("NODEOS_ENDPOINT:", NODEOS_ENDPOINT);
console.log("CRON_TIME:", CRON_TIME);
console.log("PRODUCER_ACCOUNT_NAME:", PRODUCER_ACCOUNT_NAME);
console.log("BPJSON_ENDPOINT:", BPJSON_ENDPOINT);
console.log("PERMISSION:", PERMISSION);
console.log("TIMEZONE:", TIMEZONE);
