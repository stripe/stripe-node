---
title: Remove deprecated basic method definitions.
pr_link: https://github.com/stripe/stripe-node/pull/1600
is_breaking: true
section: ⚠️ Removed
released_in_version: 11.0.0
---

Use basic methods defined on the resource instead.
```typescript
// Before
basicMethods: true

// After
create: stripeMethod({
  method: 'POST',
  fullPath: '/v1/resource',
}),
list: stripeMethod({
  method: 'GET',
  methodType: 'list',
  fullPath: '/v1/resource',
}),
retrieve: stripeMethod({
  method: 'GET',
  fullPath: '/v1/resource/{id}',
}),
update: stripeMethod({
  method: 'POST',
  fullPath: '/v1/resource/{id}',
}),
// Avoid 'delete' keyword in JS
del: stripeMethod({
  method: 'DELETE',
  fullPath: '/v1/resource/{id}',
}),
```
