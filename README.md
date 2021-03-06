# Cronjob `bp.json`

> Checks `bp.json` from website and on-chain and pushes changes on chain if different.

## Install

```
git clone git@github.com:eosnationftw/cron-bpjson.git
cd cron-bpjson
npm install
```

## Configure

Add a `.env` or `ecosystem.config.js` with the appropriate account permissions & network configurations.

**.env**
```env
NODEOS_ENDPOINT="https://api.eosn.io"
BPJSON_ENDPOINT="https://eosnation.io/bp.json"
PRODUCER_ACCOUNT_NAME="eosnationftw"
PRIVATE_KEY="<PRIVATE KEY>"
PERMISSION="active"
CRON_TIME="0 0 * * *"
TIMEZONE="America/Toronto"
```

**ecosystem.config.js**

```typescript
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
```

## Start

**NodeJS**

```bash
npm start
```

**pm2**

```bash
pm2 start
```