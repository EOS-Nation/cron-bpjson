module.exports = {
  apps: [
    {
      name: "bpjson-eos",
      script: 'index.ts',
      env: {
        NODEOS_ENDPOINT: "https://api.eosn.io",
        BPJSON_ENDPOINT: "https://eosnation.io/bp.json",
        PRODUCER_ACCOUNT_NAME: "eosnationftw",
        PERMISSION: "ops",
      },
      autorestart: true,
      log_date_format : "YYYY-MM-DD HH:mm"
    },
    {
      name: "bpjson-bos",
      script: 'index.ts',
      env: {
        NODEOS_ENDPOINT: "https://bos.eosn.io",
        BPJSON_ENDPOINT: "https://eosnation.io/bos.json",
        PRODUCER_ACCOUNT_NAME: "bosnationftw",
        PERMISSION: "ops",
      },
      autorestart: true,
      log_date_format : "YYYY-MM-DD HH:mm"
    },
    {
      name: "bpjson-jungle",
      script: 'index.ts',
      env: {
        NODEOS_ENDPOINT: "https://jungle.eosn.io",
        BPJSON_ENDPOINT: "https://eosnation.io/jungle.json",
        PRODUCER_ACCOUNT_NAME: "eosnationftw",
        PERMISSION: "ops",
      },
      autorestart: true,
      log_date_format : "YYYY-MM-DD HH:mm"
    },
    {
      name: "bpjson-kylin",
      script: 'index.ts',
      env: {
        NODEOS_ENDPOINT: "https://kylin.eosn.io",
        BPJSON_ENDPOINT: "https://eosnation.io/kylin.json",
        PRODUCER_ACCOUNT_NAME: "eosnationftw",
        PERMISSION: "ops",
      },
      autorestart: true,
      log_date_format : "YYYY-MM-DD HH:mm"
    },
    {
      name: "bpjson-wax",
      script: 'index.ts',
      env: {
        NODEOS_ENDPOINT: "https://wax.eosn.io",
        BPJSON_ENDPOINT: "https://eosnation.io/wax.json",
        PRODUCER_ACCOUNT_NAME: "nation.wax",
        PERMISSION: "ops",
      },
      autorestart: true,
      log_date_format : "YYYY-MM-DD HH:mm"
    },
    {
      name: "bpjson-meetone",
      script: 'index.ts',
      env: {
        NODEOS_ENDPOINT: "https://meetone.eosn.io",
        BPJSON_ENDPOINT: "https://eosnation.io/meetone.json",
        PRODUCER_ACCOUNT_NAME: "eosnation.m",
        PERMISSION: "ops",
      },
      autorestart: true,
      log_date_format : "YYYY-MM-DD HH:mm"
    }
  ]
};