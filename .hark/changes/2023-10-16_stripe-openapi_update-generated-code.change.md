---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/1932
is_stripe_api_change: true
released_in_version: 14.0.0
---

* Add support for `legal_guardian` on `AccountPersonsParams.relationship` and `TokenCreateParams.person.relationship`
* Add support for new values `invalid_address_highway_contract_box`, `invalid_address_private_mailbox`, `invalid_business_profile_name_denylisted`, `invalid_business_profile_name`, `invalid_company_name_denylisted`, `invalid_dob_age_over_maximum`, `invalid_product_description_length`, `invalid_product_description_url_match`, `invalid_statement_descriptor_business_mismatch`, `invalid_statement_descriptor_denylisted`, `invalid_statement_descriptor_length`, `invalid_statement_descriptor_prefix_denylisted`, `invalid_statement_descriptor_prefix_mismatch`, `invalid_tax_id_format`, `invalid_tax_id`, `invalid_url_denylisted`, `invalid_url_format`, `invalid_url_length`, `invalid_url_web_presence_detected`, `invalid_url_website_business_information_mismatch`, `invalid_url_website_empty`, `invalid_url_website_inaccessible_geoblocked`, `invalid_url_website_inaccessible_password_protected`, `invalid_url_website_inaccessible`, `invalid_url_website_incomplete_cancellation_policy`, `invalid_url_website_incomplete_customer_service_details`, `invalid_url_website_incomplete_legal_restrictions`, `invalid_url_website_incomplete_refund_policy`, `invalid_url_website_incomplete_return_policy`, `invalid_url_website_incomplete_terms_and_conditions`, `invalid_url_website_incomplete_under_construction`, `invalid_url_website_incomplete`, and `invalid_url_website_other` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `BankAccount.future_requirements.errors[].code`, and `BankAccount.requirements.errors[].code`
* Add support for `additional_tos_acceptances` on `TokenCreateParams.person`
* Add support for new value `2023-10-16` on enum `WebhookEndpointCreateParams.api_version`
