---
title: RawRequest now allows you set `host` and `streaming` in request options.
pr_link: https://github.com/stripe/stripe-node/pull/2308
released_in_version: 18.1.1
---

```typescript
const file = await stripe.rawRequest(
  'GET',
  '/v1/files/file_123/contents',
  {},
  {host: 'files.stripe.com', streaming: true}
);
```
