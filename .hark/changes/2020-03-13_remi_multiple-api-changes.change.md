---
title: "Multiple API changes for Issuing:"
pr_link: https://github.com/stripe/stripe-node/pull/836
released_in_version: 8.32.0
---

- Rename `speed` to `service` on Issuing `Card`
- Rename `wallet_provider` to `wallet` and `address_zip_check` to `address_postal_code_check` on Issuing `Authorization`
- Mark `is_default` as deprecated on Issuing `Cardholder`
