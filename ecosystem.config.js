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
      name: "cron-bpjson-kylin",
      script: 'index.ts',
      env: {
        NODEOS_ENDPOINT: "https://kylin.eosn.io",
        BPJSON_ENDPOINT: "https://eosnation.io/kylin.json",
        PRODUCER_ACCOUNT_NAME: "eosnationftw",
        PERMISSION: "ops",
      },
      autorestart: true,
      log_date_format : "YYYY-MM-DD HH:mm"
    }
  ]
};