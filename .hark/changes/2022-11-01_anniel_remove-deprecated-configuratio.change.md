---
title: Remove deprecated configuration setter methods (`setHost`, `setProtocol`, `setPort`, `setApiVersion`, `setApiKey`, `setTimeout`, `setAppInfo`, `setHttpAgent`, `setMaxNetworkRetries`, and `setTelemetryEnabled`).
pr_url: https://github.com/stripe/stripe-node/pull/1597
is_breaking: true
section: ⚠️ Removed
released_in_version: 11.0.0
---

Use the config object to set these options instead, for example:
```typescript
const stripe = Stripe('sk_test_...', {
  apiVersion: '2019-08-08',
  maxNetworkRetries: 1,
  httpAgent: new ProxyAgent(process.env.http_proxy),
  timeout: 1000,
  host: 'api.example.com',
  port: 123,
  telemetry: true,
});
```
