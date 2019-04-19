import { getBpjson, getProducerJson, createHash } from "./src/utils";
import { BPJSON_ENDPOINT, PRODUCER_ACCOUNT_NAME } from "./src/config";

(async () => {
  const bpjson = await getBpjson(BPJSON_ENDPOINT);
  console.log(createHash(JSON.stringify(bpjson)));
  const producerjson = await getProducerJson(PRODUCER_ACCOUNT_NAME);
  console.log(createHash(JSON.stringify(producerjson)));
})();

// const bpjson = JSON.parse(fs.readFileSync(bpjsonFilePath));
// const bpjsonString = JSON.stringify(JSON.stringify(bpjson));
// const owner = bpjson.producer_account_name

// console.log(`cleos push action producerjson set '{"owner": "${owner}", "json": ${bpjsonString}}' -p ${owner}@active`);
