module.exports = {
  apps: [
    {
      name: "cron-bpjson",
      script: 'index.ts',
      env: {
        NODEOS_ENDPOINT: "https://api.eosn.io",
        BPJSON_ENDPOINT: "https://eosnation.io/bp.json",
        PRODUCER_ACCOUNT_NAME: "eosnationftw",
        PRIVATE_KEY: "<PRIVATE KEY>",
        PERMISSION: "active",
        CRON_TIME: "0 0 * * *",
        TIMEZONE: "America/Toronto",
      },
      autorestart: true,
      log_date_format : "YYYY-MM-DD HH:mm"
    }
  ]
};