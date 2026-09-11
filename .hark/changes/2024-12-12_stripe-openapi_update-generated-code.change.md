---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2235
is_stripe_api_change: true
released_in_version: 17.5.0-beta.3
---

* Change `Account.business_profile.annual_revenue` and `Account.business_profile.estimated_worker_count` to be optional
* Add support for `allow_redisplay` on `Card` and `Source`
* Add support for new values `am_tin`, `ao_tin`, `ba_tin`, `bb_tin`, `bs_tin`, `cd_nif`, `gn_nif`, `kh_tin`, `me_pib`, `mk_vat`, `mr_nif`, `np_pan`, `sn_ninea`, `sr_fin`, `tj_tin`, `ug_tin`, `zm_tin`, and `zw_tin` on enums `Checkout.Session.collected_information.tax_ids[].type` and `Order.tax_details.tax_ids[].type`
* Add support for new value `network_fallback` on enum `Issuing.Authorization.request_history[].reason`
* Add support for new values `am_tin`, `ao_tin`, `ba_tin`, `bb_tin`, `bs_tin`, `cd_nif`, `gn_nif`, `kh_tin`, `me_pib`, `mk_vat`, `mr_nif`, `np_pan`, `sn_ninea`, `sr_fin`, `tj_tin`, `ug_tin`, `zm_tin`, and `zw_tin` on enums `OrderCreateParams.tax_details.tax_ids[].type` and `OrderUpdateParams.tax_details.tax_ids[].type`
* Remove support for `amount_refunded` on `PaymentRecord`
* Add support for `account` on `Terminal.Reader.action.collect_payment_method`, `Terminal.Reader.action.confirm_payment_intent`, `Terminal.Reader.action.process_payment_intent`, and `Terminal.Reader.action.refund_payment`
