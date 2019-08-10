import { CronJob } from "cron";
import { getBpjson, getProducerJson, createHash, setProducerJson, transact } from "./src/utils";
import { rpc, BPJSON_ENDPOINT, PRODUCER_ACCOUNT_NAME, TIMEZONE, CRON_TIME } from "./src/config";

async function main() {
  // Fetch bp.json from website
  const bpjson = await getBpjson(BPJSON_ENDPOINT);
  if (bpjson.producer_account_name !== PRODUCER_ACCOUNT_NAME) {
    throw new Error("[PRODUCER_ACCOUNT_NAME] does not match bp.json");
  }

  // Check if producer account exists
  try {
    await rpc.get_account(PRODUCER_ACCOUNT_NAME)
  } catch (e) {
    throw new Error(`[PRODUCER_ACCOUNT_NAME => ${PRODUCER_ACCOUNT_NAME}] does not exist`);
  }

  // Check if on-chain is different from website
  const producerjson = await getProducerJson(PRODUCER_ACCOUNT_NAME);

  if (producerjson) {
    console.log("comparing hashes", createHash(bpjson), createHash(producerjson));
    if (createHash(bpjson) === createHash(producerjson)) {
      throw new Error("[producerjson] & [bp.json] hashes are the same, nothing to update");
    }
  } else {
    console.log('first time publishing');
  }

  // Push actions
  const action = setProducerJson(PRODUCER_ACCOUNT_NAME, bpjson);
  await transact([action]);
}

new CronJob(CRON_TIME, async () => {
  main().catch(e => console.error(e.message));
}, () => {}, true, TIMEZONE);