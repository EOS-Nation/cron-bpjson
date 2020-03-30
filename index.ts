import {CronJob} from "cron";
import {createHash, getBpjson, getProducerJson, setProducerJson, transact} from "./src/utils";
import {BPJSON_ENDPOINT, CRON_TIME, PRODUCER_ACCOUNT_NAME, PRODUCERJSON, rpc, TIMEZONE} from "./src/config";

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
            console.log(`[${PRODUCERJSON}] & [bp.json] hashes are the same, nothing to update`);
        }
    } else {
        console.log('first time publishing');
    }

    // Push actions
    const action = setProducerJson(PRODUCER_ACCOUNT_NAME, bpjson);
    await transact([action]);
}

new CronJob(CRON_TIME, async () => {
    main().catch(e => {
        console.error(e.message);
        process.exit(1);
    });
}, () => {
}, true, TIMEZONE);
