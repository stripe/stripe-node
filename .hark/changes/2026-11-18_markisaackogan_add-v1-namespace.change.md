---
title: Add a v1 namespace for API services
semver_level: minor
---

Add `stripe.v1` as a typed alias for existing v1 API services, including nested services such as `stripe.v1.checkout.sessions`. Both access paths share the same resource instances and client configuration. Root-level calls remain supported without deprecation; `stripe.v2`, OAuth, and client utilities are unchanged.