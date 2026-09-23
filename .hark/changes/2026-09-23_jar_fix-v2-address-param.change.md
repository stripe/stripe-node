---
title: Use a neutral address parameter type for V2 requests
semver_level: major
jira_tickets_closed:
  - DEVSDK-3119
---

- ⚠️ Change V2 request address properties from `JapanAddressParam` to `V2AddressParam`. The new type supports the standard address fields and `town` without implying that the address must be in Japan.
