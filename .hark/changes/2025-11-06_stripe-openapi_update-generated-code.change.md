---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2489
is_stripe_api_change: true
released_in_version: 19.4.0-alpha.1
---

* Add support for new resources `TransitBalance`, `V2.Reporting.ReportRun`, `V2.Reporting.Report`
* Add support for `create` and `retrieve` methods on resource `V2.Reporting.ReportRun`
* Add support for `retrieve` method on resource `V2.Reporting.Report`
* Add support for `create` and `refill` test helper methods on resource `Capital.FinancingOffer`
* Add support for `allocated_funds` on `Charge`, `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, and `PaymentIntentUpdateParams`
* Add support for thin events `V2ReportingReportRunCreatedEvent`, `V2ReportingReportRunFailedEvent`, `V2ReportingReportRunSucceededEvent`, and `V2ReportingReportRunUpdatedEvent` with related object `V2.Reporting.ReportRun`
