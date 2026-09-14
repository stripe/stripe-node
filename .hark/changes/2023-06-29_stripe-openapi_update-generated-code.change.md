---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/1823
is_stripe_api_change: true
released_in_version: 12.11.0
---

* Add support for new value `application_fees_not_allowed` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Add support for new tax IDs `ad_nrt`, `ar_cuit`, `bo_tin`, `cn_tin`, `co_nit`, `cr_tin`, `do_rcn`, `ec_ruc`, `pe_ruc`, `rs_pib`, `sv_nit`, `uy_ruc`, `ve_rif`, and `vn_tin`
* Add support for `effective_at` on `CreditNoteCreateParams`, `CreditNotePreviewLinesParams`, `CreditNotePreviewParams`, `CreditNote`, `InvoiceCreateParams`, `InvoiceUpdateParams`, and `Invoice`
