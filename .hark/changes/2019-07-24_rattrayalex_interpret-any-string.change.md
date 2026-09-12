---
title: Interpret any string in args as API Key instead of a regex
pr_url: https://github.com/stripe/stripe-node/pull/660
is_breaking: true
released_in_version: 7.5.0
---

- ⚠️ Careful: passing strings which are not API Keys as as the final argument to a request previously would have ignored those strings, and would now result in the request failing with an authentication error.
- ⚠️ Careful: The private api `utils.isAuthKey` was removed.
