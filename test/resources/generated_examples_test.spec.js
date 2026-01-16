// File generated from our OpenAPI spec

'use strict';

const testUtils = require('../testUtils.js');
const stripe = testUtils.getStripeMockClient();
const realStripe = require('../../src/stripe.cjs.node.js')('sk_test_123');
const nock = require('nock');
const expect = require('chai').expect;

describe('Generated tests', function() {
  it('test_account_links_post', async function() {
    const accountLink = await stripe.accountLinks.create({
      account: 'acct_xxxxxxxxxxxxx',
      refresh_url: 'https://example.com/reauth',
      return_url: 'https://example.com/return',
      type: 'account_onboarding',
    });
    expect(accountLink).not.to.be.null;
  });

  it('test_accounts_capabilities_get', async function() {
    const capabilities = await stripe.accounts.listCapabilities(
      'acct_xxxxxxxxxxxxx'
    );
    expect(capabilities).not.to.be.null;
  });

  it('test_accounts_capabilities_get_2', async function() {
    const capability = await stripe.accounts.retrieveCapability(
      'acct_xxxxxxxxxxxxx',
      'card_payments'
    );
    expect(capability).not.to.be.null;
  });

  it('test_accounts_capabilities_post', async function() {
    const capability = await stripe.accounts.updateCapability(
      'acct_xxxxxxxxxxxxx',
      'card_payments',
      {
        requested: true,
      }
    );
    expect(capability).not.to.be.null;
  });

  it('test_accounts_delete', async function() {
    const deleted = await stripe.accounts.del('acct_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('test_accounts_external_accounts_delete', async function() {
    const deleted = await stripe.accounts.deleteExternalAccount(
      'acct_xxxxxxxxxxxxx',
      'ba_xxxxxxxxxxxxx'
    );
    expect(deleted).not.to.be.null;
  });

  it('test_accounts_external_accounts_delete_2', async function() {
    const deleted = await stripe.accounts.deleteExternalAccount(
      'acct_xxxxxxxxxxxxx',
      'card_xxxxxxxxxxxxx'
    );
    expect(deleted).not.to.be.null;
  });

  it('test_accounts_external_accounts_get', async function() {
    const externalAccounts = await stripe.accounts.listExternalAccounts(
      'acct_xxxxxxxxxxxxx',
      {
        limit: 3,
      }
    );
    expect(externalAccounts).not.to.be.null;
  });

  it('test_accounts_external_accounts_get_2', async function() {
    const externalAccounts = await stripe.accounts.listExternalAccounts(
      'acct_xxxxxxxxxxxxx',
      {
        object: 'bank_account',
        limit: 3,
      }
    );
    expect(externalAccounts).not.to.be.null;
  });

  it('test_accounts_external_accounts_get_3', async function() {
    const externalAccounts = await stripe.accounts.listExternalAccounts(
      'acct_xxxxxxxxxxxxx',
      {
        object: 'card',
        limit: 3,
      }
    );
    expect(externalAccounts).not.to.be.null;
  });

  it('test_accounts_external_accounts_get_4', async function() {
    const externalAccount = await stripe.accounts.retrieveExternalAccount(
      'acct_xxxxxxxxxxxxx',
      'ba_xxxxxxxxxxxxx'
    );
    expect(externalAccount).not.to.be.null;
  });

  it('test_accounts_external_accounts_get_5', async function() {
    const externalAccount = await stripe.accounts.retrieveExternalAccount(
      'acct_xxxxxxxxxxxxx',
      'card_xxxxxxxxxxxxx'
    );
    expect(externalAccount).not.to.be.null;
  });

  it('test_accounts_external_accounts_post', async function() {
    const externalAccount = await stripe.accounts.createExternalAccount(
      'acct_xxxxxxxxxxxxx',
      {
        external_account: 'btok_xxxxxxxxxxxxx',
      }
    );
    expect(externalAccount).not.to.be.null;
  });

  it('test_accounts_external_accounts_post_2', async function() {
    const externalAccount = await stripe.accounts.createExternalAccount(
      'acct_xxxxxxxxxxxxx',
      {
        external_account: 'tok_xxxx_debit',
      }
    );
    expect(externalAccount).not.to.be.null;
  });

  it('test_accounts_external_accounts_post_3', async function() {
    const externalAccount = await stripe.accounts.updateExternalAccount(
      'acct_xxxxxxxxxxxxx',
      'ba_xxxxxxxxxxxxx',
      {
        metadata: {
          order_id: '6735',
        },
      }
    );
    expect(externalAccount).not.to.be.null;
  });

  it('test_accounts_external_accounts_post_4', async function() {
    const externalAccount = await stripe.accounts.updateExternalAccount(
      'acct_xxxxxxxxxxxxx',
      'card_xxxxxxxxxxxxx',
      {
        metadata: {
          order_id: '6735',
        },
      }
    );
    expect(externalAccount).not.to.be.null;
  });

  it('test_accounts_get', async function() {
    const accounts = await stripe.accounts.list({
      limit: 3,
    });
    expect(accounts).not.to.be.null;
  });

  it('test_accounts_get_2', async function() {
    const account = await stripe.accounts.retrieve('acct_xxxxxxxxxxxxx');
    expect(account).not.to.be.null;
  });

  it('test_accounts_get_3', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'GET',
        path: '/v1/accounts/acc_123',
        response:
          '{"business_profile":{"annual_revenue":{"amount":1413853096,"currency":"usd","fiscal_year_end":"fiscal_year_end"},"estimated_worker_count":884794319,"mcc":"mcc","minority_owned_business_designation":["prefer_not_to_answer"],"monthly_estimated_revenue":{"amount":1413853096,"currency":"usd"},"name":"name","product_description":"product_description","support_address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"support_email":"support_email","support_phone":"support_phone","support_url":"support_url","url":"url"},"business_type":"government_entity","capabilities":{"acss_debit_payments":"inactive","affirm_payments":"pending","afterpay_clearpay_payments":"inactive","alma_payments":"pending","amazon_pay_payments":"inactive","au_becs_debit_payments":"active","bacs_debit_payments":"active","bancontact_payments":"inactive","bank_transfer_payments":"pending","billie_payments":"active","blik_payments":"inactive","boleto_payments":"inactive","card_issuing":"active","card_payments":"active","cartes_bancaires_payments":"active","cashapp_payments":"active","crypto_payments":"inactive","eps_payments":"inactive","fpx_payments":"active","gb_bank_transfer_payments":"pending","giropay_payments":"active","grabpay_payments":"pending","ideal_payments":"inactive","india_international_payments":"inactive","jcb_payments":"inactive","jp_bank_transfer_payments":"pending","kakao_pay_payments":"active","klarna_payments":"active","konbini_payments":"active","kr_card_payments":"inactive","legacy_payments":"active","link_payments":"inactive","mb_way_payments":"active","mobilepay_payments":"pending","multibanco_payments":"inactive","mx_bank_transfer_payments":"pending","naver_pay_payments":"active","nz_bank_account_becs_debit_payments":"active","oxxo_payments":"pending","p24_payments":"inactive","pay_by_bank_payments":"active","payco_payments":"inactive","paynow_payments":"active","payto_payments":"pending","pix_payments":"inactive","promptpay_payments":"active","revolut_pay_payments":"inactive","samsung_pay_payments":"pending","satispay_payments":"pending","sepa_bank_transfer_payments":"pending","sepa_debit_payments":"inactive","sofort_payments":"active","swish_payments":"inactive","tax_reporting_us_1099_k":"inactive","tax_reporting_us_1099_misc":"pending","transfers":"inactive","treasury":"pending","twint_payments":"inactive","us_bank_account_ach_payments":"pending","us_bank_transfer_payments":"pending","zip_payments":"pending"},"charges_enabled":true,"company":{"address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"address_kana":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state","town":"town"},"address_kanji":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state","town":"town"},"directors_provided":true,"directorship_declaration":{"date":3076014,"ip":"ip","user_agent":"user_agent"},"executives_provided":true,"export_license_id":"export_license_id","export_purpose_code":"export_purpose_code","name":"name","name_kana":"name_kana","name_kanji":"name_kanji","owners_provided":true,"ownership_declaration":{"date":3076014,"ip":"ip","user_agent":"user_agent"},"ownership_exemption_reason":"qualified_entity_exceeds_ownership_threshold","phone":"phone","registration_date":{"day":99228,"month":104080000,"year":3704893},"representative_declaration":{"date":3076014,"ip":"ip","user_agent":"user_agent"},"structure":"single_member_llc","tax_id_provided":true,"tax_id_registrar":"tax_id_registrar","vat_id_provided":true,"verification":{"document":{"back":{"created":1028554472,"expires_at":833811170,"filename":"filename","id":"obj_123","links":{"object":"list","has_more":false,"data":[{"created":1028554472,"expired":true,"expires_at":833811170,"file":{"created":1028554472,"expires_at":833811170,"filename":"filename","id":"obj_123","links":{"object":"list","has_more":false,"data":[null]},"object":"file","purpose":"business_icon","size":3530753,"title":"title","type":"type","url":"url"},"id":"obj_123","livemode":true,"metadata":{"key":"metadata"},"object":"file_link","url":"url"}]},"object":"file","purpose":"business_icon","size":3530753,"title":"title","type":"type","url":"url"},"details":"details","details_code":"details_code","front":{"created":1028554472,"expires_at":833811170,"filename":"filename","id":"obj_123","links":{"object":"list","has_more":false,"data":[{"created":1028554472,"expired":true,"expires_at":833811170,"file":{"created":1028554472,"expires_at":833811170,"filename":"filename","id":"obj_123","links":{"object":"list","has_more":false,"data":[null]},"object":"file","purpose":"business_icon","size":3530753,"title":"title","type":"type","url":"url"},"id":"obj_123","livemode":true,"metadata":{"key":"metadata"},"object":"file_link","url":"url"}]},"object":"file","purpose":"business_icon","size":3530753,"title":"title","type":"type","url":"url"}}}},"controller":{"fees":{"payer":"application"},"is_controller":true,"losses":{"payments":"stripe"},"requirement_collection":"application","stripe_dashboard":{"type":"express"},"type":"account"},"country":"country","created":1028554472,"default_currency":"usd","details_submitted":true,"email":"email","external_accounts":{"object":"list","has_more":false,"data":[{"account":{"business_profile":{"annual_revenue":{"amount":1413853096,"currency":"usd","fiscal_year_end":"fiscal_year_end"},"estimated_worker_count":884794319,"mcc":"mcc","minority_owned_business_designation":["prefer_not_to_answer"],"monthly_estimated_revenue":{"amount":1413853096,"currency":"usd"},"name":"name","product_description":"product_description","support_address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"support_email":"support_email","support_phone":"support_phone","support_url":"support_url","url":"url"},"business_type":"government_entity","capabilities":{"acss_debit_payments":"inactive","affirm_payments":"pending","afterpay_clearpay_payments":"inactive","alma_payments":"pending","amazon_pay_payments":"inactive","au_becs_debit_payments":"active","bacs_debit_payments":"active","bancontact_payments":"inactive","bank_transfer_payments":"pending","billie_payments":"active","blik_payments":"inactive","boleto_payments":"inactive","card_issuing":"active","card_payments":"active","cartes_bancaires_payments":"active","cashapp_payments":"active","crypto_payments":"inactive","eps_payments":"inactive","fpx_payments":"active","gb_bank_transfer_payments":"pending","giropay_payments":"active","grabpay_payments":"pending","ideal_payments":"inactive","india_international_payments":"inactive","jcb_payments":"inactive","jp_bank_transfer_payments":"pending","kakao_pay_payments":"active","klarna_payments":"active","konbini_payments":"active","kr_card_payments":"inactive","legacy_payments":"active","link_payments":"inactive","mb_way_payments":"active","mobilepay_payments":"pending","multibanco_payments":"inactive","mx_bank_transfer_payments":"pending","naver_pay_payments":"active","nz_bank_account_becs_debit_payments":"active","oxxo_payments":"pending","p24_payments":"inactive","pay_by_bank_payments":"active","payco_payments":"inactive","paynow_payments":"active","payto_payments":"pending","pix_payments":"inactive","promptpay_payments":"active","revolut_pay_payments":"inactive","samsung_pay_payments":"pending","satispay_payments":"pending","sepa_bank_transfer_payments":"pending","sepa_debit_payments":"inactive","sofort_payments":"active","swish_payments":"inactive","tax_reporting_us_1099_k":"inactive","tax_reporting_us_1099_misc":"pending","transfers":"inactive","treasury":"pending","twint_payments":"inactive","us_bank_account_ach_payments":"pending","us_bank_transfer_payments":"pending","zip_payments":"pending"},"charges_enabled":true,"company":{"address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"address_kana":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state","town":"town"},"address_kanji":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state","town":"town"},"directors_provided":true,"directorship_declaration":{"date":3076014,"ip":"ip","user_agent":"user_agent"},"executives_provided":true,"export_license_id":"export_license_id","export_purpose_code":"export_purpose_code","name":"name","name_kana":"name_kana","name_kanji":"name_kanji","owners_provided":true,"ownership_declaration":{"date":3076014,"ip":"ip","user_agent":"user_agent"},"ownership_exemption_reason":"qualified_entity_exceeds_ownership_threshold","phone":"phone","registration_date":{"day":99228,"month":104080000,"year":3704893},"representative_declaration":{"date":3076014,"ip":"ip","user_agent":"user_agent"},"structure":"single_member_llc","tax_id_provided":true,"tax_id_registrar":"tax_id_registrar","vat_id_provided":true,"verification":{"document":{"back":null,"details":"details","details_code":"details_code","front":null}}},"controller":{"fees":{"payer":"application"},"is_controller":true,"losses":{"payments":"stripe"},"requirement_collection":"application","stripe_dashboard":{"type":"express"},"type":"account"},"country":"country","created":1028554472,"default_currency":"usd","details_submitted":true,"email":"email","external_accounts":{"object":"list","has_more":false,"data":[null]},"future_requirements":{"alternatives":[{"alternative_fields_due":["alternative_fields_due"],"original_fields_due":["original_fields_due"]}],"current_deadline":270965154,"currently_due":["currently_due"],"disabled_reason":"rejected.listed","errors":[{"code":"verification_missing_owners","reason":"reason","requirement":"requirement"}],"eventually_due":["eventually_due"],"past_due":["past_due"],"pending_verification":["pending_verification"]},"groups":{"payments_pricing":"payments_pricing"},"id":"obj_123","individual":null,"metadata":{"key":"metadata"},"object":"account","payouts_enabled":true,"requirements":{"alternatives":[{"alternative_fields_due":["alternative_fields_due"],"original_fields_due":["original_fields_due"]}],"current_deadline":270965154,"currently_due":["currently_due"],"disabled_reason":"rejected.listed","errors":[{"code":"verification_missing_owners","reason":"reason","requirement":"requirement"}],"eventually_due":["eventually_due"],"past_due":["past_due"],"pending_verification":["pending_verification"]},"settings":{"bacs_debit_payments":{"display_name":"display_name","service_user_number":"service_user_number"},"branding":{"icon":null,"logo":null,"primary_color":"primary_color","secondary_color":"secondary_color"},"card_issuing":{"tos_acceptance":{"date":3076014,"ip":"ip","user_agent":"user_agent"}},"card_payments":{"decline_on":{"avs_failure":true,"cvc_failure":true},"statement_descriptor_prefix":"statement_descriptor_prefix","statement_descriptor_prefix_kana":"statement_descriptor_prefix_kana","statement_descriptor_prefix_kanji":"statement_descriptor_prefix_kanji"},"dashboard":{"display_name":"display_name","timezone":"timezone"},"invoices":{"default_account_tax_ids":[null],"hosted_payment_method_save":"offer"},"payments":{"statement_descriptor":"statement_descriptor","statement_descriptor_kana":"statement_descriptor_kana","statement_descriptor_kanji":"statement_descriptor_kanji","statement_descriptor_prefix_kana":"statement_descriptor_prefix_kana","statement_descriptor_prefix_kanji":"statement_descriptor_prefix_kanji"},"payouts":{"debit_negative_balances":true,"schedule":{"delay_days":1647351405,"interval":"interval","monthly_anchor":1920305369,"monthly_payout_days":[656202210],"weekly_anchor":"weekly_anchor","weekly_payout_days":["friday"]},"statement_descriptor":"statement_descriptor"},"sepa_debit_payments":{"creditor_id":"creditor_id"},"treasury":{"tos_acceptance":{"date":3076014,"ip":"ip","user_agent":"user_agent"}}},"tos_acceptance":{"date":3076014,"ip":"ip","service_agreement":"service_agreement","user_agent":"user_agent"},"type":"none"},"account_holder_name":"account_holder_name","account_holder_type":"account_holder_type","account_type":"account_type","available_payout_methods":["standard"],"bank_name":"bank_name","country":"country","currency":"usd","customer":{"address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"balance":339185956,"business_name":"business_name","cash_balance":null,"created":1028554472,"currency":"usd","customer_account":"customer_account","default_source":null,"delinquent":true,"description":"description","discount":null,"email":"email","id":"obj_123","individual_name":"individual_name","invoice_credit_balance":{"key":1267696360},"invoice_prefix":"invoice_prefix","invoice_settings":{"custom_fields":[{"name":"name","value":"value"}],"default_payment_method":null,"footer":"footer","rendering_options":{"amount_tax_display":"amount_tax_display","template":"template"}},"livemode":true,"metadata":{"key":"metadata"},"name":"name","next_invoice_sequence":1356358751,"object":"customer","phone":"phone","preferred_locales":["preferred_locales"],"shipping":{"address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"carrier":"carrier","name":"name","phone":"phone","tracking_number":"tracking_number"},"sources":{"object":"list","has_more":false,"data":[null]},"subscriptions":{"object":"list","has_more":false,"data":[null]},"tax":{"automatic_tax":"unrecognized_location","ip_address":"ip_address","location":{"country":"country","source":"ip_address","state":"state"},"provider":"stripe"},"tax_exempt":"reverse","tax_ids":{"object":"list","has_more":false,"data":[null]},"test_clock":null},"default_for_currency":true,"fingerprint":"fingerprint","future_requirements":{"currently_due":["currently_due"],"errors":[{"code":"verification_missing_owners","reason":"reason","requirement":"requirement"}],"past_due":["past_due"],"pending_verification":["pending_verification"]},"id":"obj_123","last4":"last4","metadata":{"key":"metadata"},"object":"bank_account","requirements":{"currently_due":["currently_due"],"errors":[{"code":"verification_missing_owners","reason":"reason","requirement":"requirement"}],"past_due":["past_due"],"pending_verification":["pending_verification"]},"routing_number":"routing_number","status":"status"}]},"future_requirements":{"alternatives":[{"alternative_fields_due":["alternative_fields_due"],"original_fields_due":["original_fields_due"]}],"current_deadline":270965154,"currently_due":["currently_due"],"disabled_reason":"rejected.listed","errors":[{"code":"verification_missing_owners","reason":"reason","requirement":"requirement"}],"eventually_due":["eventually_due"],"past_due":["past_due"],"pending_verification":["pending_verification"]},"groups":{"payments_pricing":"payments_pricing"},"id":"obj_123","individual":{"account":"account","additional_tos_acceptances":{"account":{"date":3076014,"ip":"ip","user_agent":"user_agent"}},"address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"address_kana":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state","town":"town"},"address_kanji":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state","town":"town"},"created":1028554472,"dob":{"day":99228,"month":104080000,"year":3704893},"email":"email","first_name":"first_name","first_name_kana":"first_name_kana","first_name_kanji":"first_name_kanji","full_name_aliases":["full_name_aliases"],"future_requirements":{"alternatives":[{"alternative_fields_due":["alternative_fields_due"],"original_fields_due":["original_fields_due"]}],"currently_due":["currently_due"],"errors":[{"code":"verification_missing_owners","reason":"reason","requirement":"requirement"}],"eventually_due":["eventually_due"],"past_due":["past_due"],"pending_verification":["pending_verification"]},"gender":"gender","id":"obj_123","id_number_provided":true,"id_number_secondary_provided":true,"last_name":"last_name","last_name_kana":"last_name_kana","last_name_kanji":"last_name_kanji","maiden_name":"maiden_name","metadata":{"key":"metadata"},"nationality":"nationality","object":"person","phone":"phone","political_exposure":"none","registered_address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"relationship":{"authorizer":true,"director":true,"executive":true,"legal_guardian":true,"owner":true,"percent_ownership":760989685,"representative":true,"title":"title"},"requirements":{"alternatives":[{"alternative_fields_due":["alternative_fields_due"],"original_fields_due":["original_fields_due"]}],"currently_due":["currently_due"],"errors":[{"code":"verification_missing_owners","reason":"reason","requirement":"requirement"}],"eventually_due":["eventually_due"],"past_due":["past_due"],"pending_verification":["pending_verification"]},"ssn_last_4_provided":true,"us_cfpb_data":{"ethnicity_details":{"ethnicity":["not_hispanic_or_latino"],"ethnicity_other":"ethnicity_other"},"race_details":{"race":["haitian"],"race_other":"race_other"},"self_identified_gender":"self_identified_gender"},"verification":{"additional_document":{"back":{"created":1028554472,"expires_at":833811170,"filename":"filename","id":"obj_123","links":{"object":"list","has_more":false,"data":[{"created":1028554472,"expired":true,"expires_at":833811170,"file":null,"id":"obj_123","livemode":true,"metadata":{"key":"metadata"},"object":"file_link","url":"url"}]},"object":"file","purpose":"business_icon","size":3530753,"title":"title","type":"type","url":"url"},"details":"details","details_code":"details_code","front":{"created":1028554472,"expires_at":833811170,"filename":"filename","id":"obj_123","links":{"object":"list","has_more":false,"data":[{"created":1028554472,"expired":true,"expires_at":833811170,"file":null,"id":"obj_123","livemode":true,"metadata":{"key":"metadata"},"object":"file_link","url":"url"}]},"object":"file","purpose":"business_icon","size":3530753,"title":"title","type":"type","url":"url"}},"details":"details","details_code":"details_code","document":{"back":{"created":1028554472,"expires_at":833811170,"filename":"filename","id":"obj_123","links":{"object":"list","has_more":false,"data":[{"created":1028554472,"expired":true,"expires_at":833811170,"file":null,"id":"obj_123","livemode":true,"metadata":{"key":"metadata"},"object":"file_link","url":"url"}]},"object":"file","purpose":"business_icon","size":3530753,"title":"title","type":"type","url":"url"},"details":"details","details_code":"details_code","front":{"created":1028554472,"expires_at":833811170,"filename":"filename","id":"obj_123","links":{"object":"list","has_more":false,"data":[{"created":1028554472,"expired":true,"expires_at":833811170,"file":null,"id":"obj_123","livemode":true,"metadata":{"key":"metadata"},"object":"file_link","url":"url"}]},"object":"file","purpose":"business_icon","size":3530753,"title":"title","type":"type","url":"url"}},"status":"status"}},"metadata":{"key":"metadata"},"object":"account","payouts_enabled":true,"requirements":{"alternatives":[{"alternative_fields_due":["alternative_fields_due"],"original_fields_due":["original_fields_due"]}],"current_deadline":270965154,"currently_due":["currently_due"],"disabled_reason":"rejected.listed","errors":[{"code":"verification_missing_owners","reason":"reason","requirement":"requirement"}],"eventually_due":["eventually_due"],"past_due":["past_due"],"pending_verification":["pending_verification"]},"settings":{"bacs_debit_payments":{"display_name":"display_name","service_user_number":"service_user_number"},"branding":{"icon":{"created":1028554472,"expires_at":833811170,"filename":"filename","id":"obj_123","links":{"object":"list","has_more":false,"data":[{"created":1028554472,"expired":true,"expires_at":833811170,"file":{"created":1028554472,"expires_at":833811170,"filename":"filename","id":"obj_123","links":{"object":"list","has_more":false,"data":[null]},"object":"file","purpose":"business_icon","size":3530753,"title":"title","type":"type","url":"url"},"id":"obj_123","livemode":true,"metadata":{"key":"metadata"},"object":"file_link","url":"url"}]},"object":"file","purpose":"business_icon","size":3530753,"title":"title","type":"type","url":"url"},"logo":{"created":1028554472,"expires_at":833811170,"filename":"filename","id":"obj_123","links":{"object":"list","has_more":false,"data":[{"created":1028554472,"expired":true,"expires_at":833811170,"file":{"created":1028554472,"expires_at":833811170,"filename":"filename","id":"obj_123","links":{"object":"list","has_more":false,"data":[null]},"object":"file","purpose":"business_icon","size":3530753,"title":"title","type":"type","url":"url"},"id":"obj_123","livemode":true,"metadata":{"key":"metadata"},"object":"file_link","url":"url"}]},"object":"file","purpose":"business_icon","size":3530753,"title":"title","type":"type","url":"url"},"primary_color":"primary_color","secondary_color":"secondary_color"},"card_issuing":{"tos_acceptance":{"date":3076014,"ip":"ip","user_agent":"user_agent"}},"card_payments":{"decline_on":{"avs_failure":true,"cvc_failure":true},"statement_descriptor_prefix":"statement_descriptor_prefix","statement_descriptor_prefix_kana":"statement_descriptor_prefix_kana","statement_descriptor_prefix_kanji":"statement_descriptor_prefix_kanji"},"dashboard":{"display_name":"display_name","timezone":"timezone"},"invoices":{"default_account_tax_ids":[{"country":"country","created":1028554472,"customer":{"address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"balance":339185956,"business_name":"business_name","cash_balance":{"available":{"key":733902135},"customer":"customer","customer_account":"customer_account","livemode":true,"object":"cash_balance","settings":{"reconciliation_mode":"manual","using_merchant_default":true}},"created":1028554472,"currency":"usd","customer_account":"customer_account","default_source":null,"delinquent":true,"description":"description","discount":{"checkout_session":"checkout_session","customer":null,"customer_account":"customer_account","end":100571,"id":"obj_123","invoice":"invoice","invoice_item":"invoice_item","object":"discount","promotion_code":null,"source":{"coupon":null,"type":"coupon"},"start":109757538,"subscription":"subscription","subscription_item":"subscription_item"},"email":"email","id":"obj_123","individual_name":"individual_name","invoice_credit_balance":{"key":1267696360},"invoice_prefix":"invoice_prefix","invoice_settings":{"custom_fields":[{"name":"name","value":"value"}],"default_payment_method":{"acss_debit":{"bank_name":"bank_name","fingerprint":"fingerprint","institution_number":"institution_number","last4":"last4","transit_number":"transit_number"},"affirm":{},"afterpay_clearpay":{},"alipay":{},"allow_redisplay":"unspecified","alma":{},"amazon_pay":{},"au_becs_debit":{"bsb_number":"bsb_number","fingerprint":"fingerprint","last4":"last4"},"bacs_debit":{"fingerprint":"fingerprint","last4":"last4","sort_code":"sort_code"},"bancontact":{},"billie":{},"billing_details":{"address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"email":"email","name":"name","phone":"phone","tax_id":"tax_id"},"blik":{},"boleto":{"tax_id":"tax_id"},"card":{"brand":"brand","checks":{"address_line1_check":"address_line1_check","address_postal_code_check":"address_postal_code_check","cvc_check":"cvc_check"},"country":"country","description":"description","display_brand":"display_brand","exp_month":40417826,"exp_year":1940618977,"fingerprint":"fingerprint","funding":"funding","generated_from":{"charge":"charge","payment_method_details":{"card_present":{"amount_authorized":1406151710,"brand":"brand","brand_product":"brand_product","capture_before":2079401320,"cardholder_name":"cardholder_name","country":"country","description":"description","emv_auth_data":"emv_auth_data","exp_month":40417826,"exp_year":1940618977,"fingerprint":"fingerprint","funding":"funding","generated_card":"generated_card","iin":"iin","incremental_authorization_supported":true,"issuer":"issuer","last4":"last4","network":"network","network_transaction_id":"network_transaction_id","offline":{"stored_at":1692436047,"type":"deferred"},"overcapture_supported":true,"preferred_locales":["preferred_locales"],"read_method":"magnetic_stripe_track2","receipt":{"account_type":"checking","application_cryptogram":"application_cryptogram","application_preferred_name":"application_preferred_name","authorization_code":"authorization_code","authorization_response_code":"authorization_response_code","cardholder_verification_method":"cardholder_verification_method","dedicated_file_name":"dedicated_file_name","terminal_verification_results":"terminal_verification_results","transaction_status_information":"transaction_status_information"},"wallet":{"type":"samsung_pay"}},"type":"type"},"setup_attempt":null},"iin":"iin","issuer":"issuer","last4":"last4","networks":{"available":["available"],"preferred":"preferred"},"regulated_status":"regulated","three_d_secure_usage":{"supported":true},"wallet":{"amex_express_checkout":{},"apple_pay":{},"dynamic_last4":"dynamic_last4","google_pay":{},"link":{},"masterpass":{"billing_address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"email":"email","name":"name","shipping_address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"}},"samsung_pay":{},"type":"link","visa_checkout":{"billing_address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"email":"email","name":"name","shipping_address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"}}}},"card_present":{"brand":"brand","brand_product":"brand_product","cardholder_name":"cardholder_name","country":"country","description":"description","exp_month":40417826,"exp_year":1940618977,"fingerprint":"fingerprint","funding":"funding","iin":"iin","issuer":"issuer","last4":"last4","networks":{"available":["available"],"preferred":"preferred"},"offline":{"stored_at":1692436047,"type":"deferred"},"preferred_locales":["preferred_locales"],"read_method":"magnetic_stripe_track2","wallet":{"type":"samsung_pay"}},"cashapp":{"buyer_id":"buyer_id","cashtag":"cashtag"},"created":1028554472,"crypto":{},"custom":{"display_name":"display_name","logo":{"content_type":"content_type","url":"url"},"type":"type"},"customer":null,"customer_account":"customer_account","customer_balance":{},"eps":{"bank":"btv_vier_lander_bank"},"fpx":{"account_holder_type":"individual","bank":"bsn"},"giropay":{},"grabpay":{},"id":"obj_123","ideal":{"bank":"bunq","bic":"NNBANL2G"},"interac_present":{"brand":"brand","cardholder_name":"cardholder_name","country":"country","description":"description","exp_month":40417826,"exp_year":1940618977,"fingerprint":"fingerprint","funding":"funding","iin":"iin","issuer":"issuer","last4":"last4","networks":{"available":["available"],"preferred":"preferred"},"preferred_locales":["preferred_locales"],"read_method":"magnetic_stripe_track2"},"kakao_pay":{},"klarna":{"dob":{"day":99228,"month":104080000,"year":3704893}},"konbini":{},"kr_card":{"brand":"lotte","last4":"last4"},"link":{"email":"email","persistent_token":"persistent_token"},"livemode":true,"mb_way":{},"metadata":{"key":"metadata"},"mobilepay":{},"multibanco":{},"naver_pay":{"buyer_id":"buyer_id","funding":"points"},"nz_bank_account":{"account_holder_name":"account_holder_name","bank_code":"bank_code","bank_name":"bank_name","branch_code":"branch_code","last4":"last4","suffix":"suffix"},"object":"payment_method","oxxo":{},"p24":{"bank":"noble_pay"},"pay_by_bank":{},"payco":{},"paynow":{},"paypal":{"country":"country","payer_email":"payer_email","payer_id":"payer_id"},"payto":{"bsb_number":"bsb_number","last4":"last4","pay_id":"pay_id"},"pix":{},"promptpay":{},"radar_options":{"session":"session"},"revolut_pay":{},"samsung_pay":{},"satispay":{},"sepa_debit":{"bank_code":"bank_code","branch_code":"branch_code","country":"country","fingerprint":"fingerprint","generated_from":{"charge":null,"setup_attempt":null},"last4":"last4"},"sofort":{"country":"country"},"swish":{},"twint":{},"type":"eps","us_bank_account":{"account_holder_type":"individual","account_type":"checking","bank_name":"bank_name","financial_connections_account":"financial_connections_account","fingerprint":"fingerprint","last4":"last4","networks":{"preferred":"preferred","supported":["ach"]},"routing_number":"routing_number","status_details":{"blocked":{"network_code":"R29","reason":"bank_account_frozen"}}},"wechat_pay":{},"zip":{}},"footer":"footer","rendering_options":{"amount_tax_display":"amount_tax_display","template":"template"}},"livemode":true,"metadata":{"key":"metadata"},"name":"name","next_invoice_sequence":1356358751,"object":"customer","phone":"phone","preferred_locales":["preferred_locales"],"shipping":{"address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"carrier":"carrier","name":"name","phone":"phone","tracking_number":"tracking_number"},"sources":{"object":"list","has_more":false,"data":[null]},"subscriptions":{"object":"list","has_more":false,"data":[{"application":null,"application_fee_percent":282303517,"automatic_tax":{"disabled_reason":"requires_location_inputs","enabled":true,"liability":{"account":null,"type":"account"}},"billing_cycle_anchor":672980850,"billing_cycle_anchor_config":{"day_of_month":1361669285,"hour":3208676,"minute":1074026988,"month":104080000,"second":906279820},"billing_mode":{"flexible":{"proration_discounts":"itemized"},"type":"classic","updated_at":295464393},"billing_thresholds":{"amount_gte":1424546639,"reset_billing_cycle_anchor":true},"cancel_at":476575768,"cancel_at_period_end":true,"canceled_at":1566574183,"cancellation_details":{"comment":"comment","feedback":"other","reason":"payment_disputed"},"collection_method":"charge_automatically","created":1028554472,"currency":"usd","customer":null,"customer_account":"customer_account","days_until_due":555548757,"default_payment_method":null,"default_source":null,"default_tax_rates":[null],"description":"description","discounts":[null],"ended_at":1730606040,"id":"obj_123","invoice_settings":{"account_tax_ids":[null],"issuer":{"account":null,"type":"account"}},"items":{"object":"list","has_more":false,"data":[null]},"latest_invoice":null,"livemode":true,"metadata":{"key":"metadata"},"next_pending_invoice_item_invoice":1422145209,"object":"subscription","on_behalf_of":null,"pause_collection":{"behavior":"mark_uncollectible","resumes_at":556162772},"payment_settings":{"payment_method_options":{"acss_debit":{"mandate_options":{"transaction_type":"personal"},"verification_method":"microdeposits"},"bancontact":{"preferred_language":"fr"},"card":{"mandate_options":{"amount":1413853096,"amount_type":"maximum","description":"description"},"network":"diners","request_three_d_secure":"any"},"customer_balance":{"bank_transfer":{"eu_bank_transfer":{"country":"ES"},"type":"type"},"funding_type":"bank_transfer"},"konbini":{},"payto":{"mandate_options":{"amount":1413853096,"amount_type":"maximum","purpose":"pension"}},"sepa_debit":{},"us_bank_account":{"financial_connections":{"filters":{"account_subcategories":["checking"]},"permissions":["balances"],"prefetch":["ownership"]},"verification_method":"microdeposits"}},"payment_method_types":["customer_balance"],"save_default_payment_method":"off"},"pending_invoice_item_interval":{"interval":"month","interval_count":797691627},"pending_setup_intent":null,"pending_update":{"billing_cycle_anchor":672980850,"expires_at":833811170,"subscription_items":[null],"trial_end":816100302,"trial_from_plan":true},"schedule":null,"start_date":1573629589,"status":"trialing","test_clock":null,"transfer_data":{"amount_percent":268993374,"destination":null},"trial_end":816100302,"trial_settings":{"end_behavior":{"missing_payment_method":"cancel"}},"trial_start":1719733753}]},"tax":{"automatic_tax":"unrecognized_location","ip_address":"ip_address","location":{"country":"country","source":"ip_address","state":"state"},"provider":"stripe"},"tax_exempt":"reverse","tax_ids":{"object":"list","has_more":false,"data":[{"country":"country","created":1028554472,"customer":null,"customer_account":"customer_account","id":"obj_123","livemode":true,"object":"tax_id","owner":{"account":null,"application":null,"customer":null,"customer_account":"customer_account","type":"customer"},"type":"np_pan","value":"value","verification":{"status":"unverified","verified_address":"verified_address","verified_name":"verified_name"}}]},"test_clock":{"created":1028554472,"deletes_after":73213179,"frozen_time":2033541876,"id":"obj_123","livemode":true,"name":"name","object":"test_helpers.test_clock","status":"advancing","status_details":{"advancing":{"target_frozen_time":833971362}}}},"customer_account":"customer_account","id":"obj_123","livemode":true,"object":"tax_id","owner":{"account":{"business_profile":{"annual_revenue":{"amount":1413853096,"currency":"usd","fiscal_year_end":"fiscal_year_end"},"estimated_worker_count":884794319,"mcc":"mcc","minority_owned_business_designation":["prefer_not_to_answer"],"monthly_estimated_revenue":{"amount":1413853096,"currency":"usd"},"name":"name","product_description":"product_description","support_address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"support_email":"support_email","support_phone":"support_phone","support_url":"support_url","url":"url"},"business_type":"government_entity","capabilities":{"acss_debit_payments":"inactive","affirm_payments":"pending","afterpay_clearpay_payments":"inactive","alma_payments":"pending","amazon_pay_payments":"inactive","au_becs_debit_payments":"active","bacs_debit_payments":"active","bancontact_payments":"inactive","bank_transfer_payments":"pending","billie_payments":"active","blik_payments":"inactive","boleto_payments":"inactive","card_issuing":"active","card_payments":"active","cartes_bancaires_payments":"active","cashapp_payments":"active","crypto_payments":"inactive","eps_payments":"inactive","fpx_payments":"active","gb_bank_transfer_payments":"pending","giropay_payments":"active","grabpay_payments":"pending","ideal_payments":"inactive","india_international_payments":"inactive","jcb_payments":"inactive","jp_bank_transfer_payments":"pending","kakao_pay_payments":"active","klarna_payments":"active","konbini_payments":"active","kr_card_payments":"inactive","legacy_payments":"active","link_payments":"inactive","mb_way_payments":"active","mobilepay_payments":"pending","multibanco_payments":"inactive","mx_bank_transfer_payments":"pending","naver_pay_payments":"active","nz_bank_account_becs_debit_payments":"active","oxxo_payments":"pending","p24_payments":"inactive","pay_by_bank_payments":"active","payco_payments":"inactive","paynow_payments":"active","payto_payments":"pending","pix_payments":"inactive","promptpay_payments":"active","revolut_pay_payments":"inactive","samsung_pay_payments":"pending","satispay_payments":"pending","sepa_bank_transfer_payments":"pending","sepa_debit_payments":"inactive","sofort_payments":"active","swish_payments":"inactive","tax_reporting_us_1099_k":"inactive","tax_reporting_us_1099_misc":"pending","transfers":"inactive","treasury":"pending","twint_payments":"inactive","us_bank_account_ach_payments":"pending","us_bank_transfer_payments":"pending","zip_payments":"pending"},"charges_enabled":true,"company":{"address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"address_kana":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state","town":"town"},"address_kanji":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state","town":"town"},"directors_provided":true,"directorship_declaration":{"date":3076014,"ip":"ip","user_agent":"user_agent"},"executives_provided":true,"export_license_id":"export_license_id","export_purpose_code":"export_purpose_code","name":"name","name_kana":"name_kana","name_kanji":"name_kanji","owners_provided":true,"ownership_declaration":{"date":3076014,"ip":"ip","user_agent":"user_agent"},"ownership_exemption_reason":"qualified_entity_exceeds_ownership_threshold","phone":"phone","registration_date":{"day":99228,"month":104080000,"year":3704893},"representative_declaration":{"date":3076014,"ip":"ip","user_agent":"user_agent"},"structure":"single_member_llc","tax_id_provided":true,"tax_id_registrar":"tax_id_registrar","vat_id_provided":true,"verification":{"document":{"back":{"created":1028554472,"expires_at":833811170,"filename":"filename","id":"obj_123","links":{"object":"list","has_more":false,"data":[null]},"object":"file","purpose":"business_icon","size":3530753,"title":"title","type":"type","url":"url"},"details":"details","details_code":"details_code","front":{"created":1028554472,"expires_at":833811170,"filename":"filename","id":"obj_123","links":{"object":"list","has_more":false,"data":[null]},"object":"file","purpose":"business_icon","size":3530753,"title":"title","type":"type","url":"url"}}}},"controller":{"fees":{"payer":"application"},"is_controller":true,"losses":{"payments":"stripe"},"requirement_collection":"application","stripe_dashboard":{"type":"express"},"type":"account"},"country":"country","created":1028554472,"default_currency":"usd","details_submitted":true,"email":"email","external_accounts":{"object":"list","has_more":false,"data":[null]},"future_requirements":{"alternatives":[{"alternative_fields_due":["alternative_fields_due"],"original_fields_due":["original_fields_due"]}],"current_deadline":270965154,"currently_due":["currently_due"],"disabled_reason":"rejected.listed","errors":[{"code":"verification_missing_owners","reason":"reason","requirement":"requirement"}],"eventually_due":["eventually_due"],"past_due":["past_due"],"pending_verification":["pending_verification"]},"groups":{"payments_pricing":"payments_pricing"},"id":"obj_123","individual":{"account":"account","additional_tos_acceptances":{"account":{"date":3076014,"ip":"ip","user_agent":"user_agent"}},"address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"address_kana":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state","town":"town"},"address_kanji":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state","town":"town"},"created":1028554472,"dob":{"day":99228,"month":104080000,"year":3704893},"email":"email","first_name":"first_name","first_name_kana":"first_name_kana","first_name_kanji":"first_name_kanji","full_name_aliases":["full_name_aliases"],"future_requirements":{"alternatives":[{"alternative_fields_due":["alternative_fields_due"],"original_fields_due":["original_fields_due"]}],"currently_due":["currently_due"],"errors":[{"code":"verification_missing_owners","reason":"reason","requirement":"requirement"}],"eventually_due":["eventually_due"],"past_due":["past_due"],"pending_verification":["pending_verification"]},"gender":"gender","id":"obj_123","id_number_provided":true,"id_number_secondary_provided":true,"last_name":"last_name","last_name_kana":"last_name_kana","last_name_kanji":"last_name_kanji","maiden_name":"maiden_name","metadata":{"key":"metadata"},"nationality":"nationality","object":"person","phone":"phone","political_exposure":"none","registered_address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"relationship":{"authorizer":true,"director":true,"executive":true,"legal_guardian":true,"owner":true,"percent_ownership":760989685,"representative":true,"title":"title"},"requirements":{"alternatives":[{"alternative_fields_due":["alternative_fields_due"],"original_fields_due":["original_fields_due"]}],"currently_due":["currently_due"],"errors":[{"code":"verification_missing_owners","reason":"reason","requirement":"requirement"}],"eventually_due":["eventually_due"],"past_due":["past_due"],"pending_verification":["pending_verification"]},"ssn_last_4_provided":true,"us_cfpb_data":{"ethnicity_details":{"ethnicity":["not_hispanic_or_latino"],"ethnicity_other":"ethnicity_other"},"race_details":{"race":["haitian"],"race_other":"race_other"},"self_identified_gender":"self_identified_gender"},"verification":{"additional_document":{"back":null,"details":"details","details_code":"details_code","front":null},"details":"details","details_code":"details_code","document":{"back":null,"details":"details","details_code":"details_code","front":null},"status":"status"}},"metadata":{"key":"metadata"},"object":"account","payouts_enabled":true,"requirements":{"alternatives":[{"alternative_fields_due":["alternative_fields_due"],"original_fields_due":["original_fields_due"]}],"current_deadline":270965154,"currently_due":["currently_due"],"disabled_reason":"rejected.listed","errors":[{"code":"verification_missing_owners","reason":"reason","requirement":"requirement"}],"eventually_due":["eventually_due"],"past_due":["past_due"],"pending_verification":["pending_verification"]},"settings":{"bacs_debit_payments":{"display_name":"display_name","service_user_number":"service_user_number"},"branding":{"icon":{"created":1028554472,"expires_at":833811170,"filename":"filename","id":"obj_123","links":{"object":"list","has_more":false,"data":[null]},"object":"file","purpose":"business_icon","size":3530753,"title":"title","type":"type","url":"url"},"logo":{"created":1028554472,"expires_at":833811170,"filename":"filename","id":"obj_123","links":{"object":"list","has_more":false,"data":[null]},"object":"file","purpose":"business_icon","size":3530753,"title":"title","type":"type","url":"url"},"primary_color":"primary_color","secondary_color":"secondary_color"},"card_issuing":{"tos_acceptance":{"date":3076014,"ip":"ip","user_agent":"user_agent"}},"card_payments":{"decline_on":{"avs_failure":true,"cvc_failure":true},"statement_descriptor_prefix":"statement_descriptor_prefix","statement_descriptor_prefix_kana":"statement_descriptor_prefix_kana","statement_descriptor_prefix_kanji":"statement_descriptor_prefix_kanji"},"dashboard":{"display_name":"display_name","timezone":"timezone"},"invoices":{"default_account_tax_ids":[{"country":"country","created":1028554472,"customer":null,"customer_account":"customer_account","id":"obj_123","livemode":true,"object":"tax_id","owner":{"account":null,"application":null,"customer":null,"customer_account":"customer_account","type":"customer"},"type":"np_pan","value":"value","verification":{"status":"unverified","verified_address":"verified_address","verified_name":"verified_name"}}],"hosted_payment_method_save":"offer"},"payments":{"statement_descriptor":"statement_descriptor","statement_descriptor_kana":"statement_descriptor_kana","statement_descriptor_kanji":"statement_descriptor_kanji","statement_descriptor_prefix_kana":"statement_descriptor_prefix_kana","statement_descriptor_prefix_kanji":"statement_descriptor_prefix_kanji"},"payouts":{"debit_negative_balances":true,"schedule":{"delay_days":1647351405,"interval":"interval","monthly_anchor":1920305369,"monthly_payout_days":[656202210],"weekly_anchor":"weekly_anchor","weekly_payout_days":["friday"]},"statement_descriptor":"statement_descriptor"},"sepa_debit_payments":{"creditor_id":"creditor_id"},"treasury":{"tos_acceptance":{"date":3076014,"ip":"ip","user_agent":"user_agent"}}},"tos_acceptance":{"date":3076014,"ip":"ip","service_agreement":"service_agreement","user_agent":"user_agent"},"type":"none"},"application":{"id":"obj_123","name":"name","object":"application"},"customer":{"address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"balance":339185956,"business_name":"business_name","cash_balance":{"available":{"key":733902135},"customer":"customer","customer_account":"customer_account","livemode":true,"object":"cash_balance","settings":{"reconciliation_mode":"manual","using_merchant_default":true}},"created":1028554472,"currency":"usd","customer_account":"customer_account","default_source":null,"delinquent":true,"description":"description","discount":{"checkout_session":"checkout_session","customer":null,"customer_account":"customer_account","end":100571,"id":"obj_123","invoice":"invoice","invoice_item":"invoice_item","object":"discount","promotion_code":null,"source":{"coupon":null,"type":"coupon"},"start":109757538,"subscription":"subscription","subscription_item":"subscription_item"},"email":"email","id":"obj_123","individual_name":"individual_name","invoice_credit_balance":{"key":1267696360},"invoice_prefix":"invoice_prefix","invoice_settings":{"custom_fields":[{"name":"name","value":"value"}],"default_payment_method":{"acss_debit":{"bank_name":"bank_name","fingerprint":"fingerprint","institution_number":"institution_number","last4":"last4","transit_number":"transit_number"},"affirm":{},"afterpay_clearpay":{},"alipay":{},"allow_redisplay":"unspecified","alma":{},"amazon_pay":{},"au_becs_debit":{"bsb_number":"bsb_number","fingerprint":"fingerprint","last4":"last4"},"bacs_debit":{"fingerprint":"fingerprint","last4":"last4","sort_code":"sort_code"},"bancontact":{},"billie":{},"billing_details":{"address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"email":"email","name":"name","phone":"phone","tax_id":"tax_id"},"blik":{},"boleto":{"tax_id":"tax_id"},"card":{"brand":"brand","checks":{"address_line1_check":"address_line1_check","address_postal_code_check":"address_postal_code_check","cvc_check":"cvc_check"},"country":"country","description":"description","display_brand":"display_brand","exp_month":40417826,"exp_year":1940618977,"fingerprint":"fingerprint","funding":"funding","generated_from":{"charge":"charge","payment_method_details":{"card_present":{"amount_authorized":1406151710,"brand":"brand","brand_product":"brand_product","capture_before":2079401320,"cardholder_name":"cardholder_name","country":"country","description":"description","emv_auth_data":"emv_auth_data","exp_month":40417826,"exp_year":1940618977,"fingerprint":"fingerprint","funding":"funding","generated_card":"generated_card","iin":"iin","incremental_authorization_supported":true,"issuer":"issuer","last4":"last4","network":"network","network_transaction_id":"network_transaction_id","offline":{"stored_at":1692436047,"type":"deferred"},"overcapture_supported":true,"preferred_locales":["preferred_locales"],"read_method":"magnetic_stripe_track2","receipt":{"account_type":"checking","application_cryptogram":"application_cryptogram","application_preferred_name":"application_preferred_name","authorization_code":"authorization_code","authorization_response_code":"authorization_response_code","cardholder_verification_method":"cardholder_verification_method","dedicated_file_name":"dedicated_file_name","terminal_verification_results":"terminal_verification_results","transaction_status_information":"transaction_status_information"},"wallet":{"type":"samsung_pay"}},"type":"type"},"setup_attempt":null},"iin":"iin","issuer":"issuer","last4":"last4","networks":{"available":["available"],"preferred":"preferred"},"regulated_status":"regulated","three_d_secure_usage":{"supported":true},"wallet":{"amex_express_checkout":{},"apple_pay":{},"dynamic_last4":"dynamic_last4","google_pay":{},"link":{},"masterpass":{"billing_address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"email":"email","name":"name","shipping_address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"}},"samsung_pay":{},"type":"link","visa_checkout":{"billing_address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"email":"email","name":"name","shipping_address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"}}}},"card_present":{"brand":"brand","brand_product":"brand_product","cardholder_name":"cardholder_name","country":"country","description":"description","exp_month":40417826,"exp_year":1940618977,"fingerprint":"fingerprint","funding":"funding","iin":"iin","issuer":"issuer","last4":"last4","networks":{"available":["available"],"preferred":"preferred"},"offline":{"stored_at":1692436047,"type":"deferred"},"preferred_locales":["preferred_locales"],"read_method":"magnetic_stripe_track2","wallet":{"type":"samsung_pay"}},"cashapp":{"buyer_id":"buyer_id","cashtag":"cashtag"},"created":1028554472,"crypto":{},"custom":{"display_name":"display_name","logo":{"content_type":"content_type","url":"url"},"type":"type"},"customer":null,"customer_account":"customer_account","customer_balance":{},"eps":{"bank":"btv_vier_lander_bank"},"fpx":{"account_holder_type":"individual","bank":"bsn"},"giropay":{},"grabpay":{},"id":"obj_123","ideal":{"bank":"bunq","bic":"NNBANL2G"},"interac_present":{"brand":"brand","cardholder_name":"cardholder_name","country":"country","description":"description","exp_month":40417826,"exp_year":1940618977,"fingerprint":"fingerprint","funding":"funding","iin":"iin","issuer":"issuer","last4":"last4","networks":{"available":["available"],"preferred":"preferred"},"preferred_locales":["preferred_locales"],"read_method":"magnetic_stripe_track2"},"kakao_pay":{},"klarna":{"dob":{"day":99228,"month":104080000,"year":3704893}},"konbini":{},"kr_card":{"brand":"lotte","last4":"last4"},"link":{"email":"email","persistent_token":"persistent_token"},"livemode":true,"mb_way":{},"metadata":{"key":"metadata"},"mobilepay":{},"multibanco":{},"naver_pay":{"buyer_id":"buyer_id","funding":"points"},"nz_bank_account":{"account_holder_name":"account_holder_name","bank_code":"bank_code","bank_name":"bank_name","branch_code":"branch_code","last4":"last4","suffix":"suffix"},"object":"payment_method","oxxo":{},"p24":{"bank":"noble_pay"},"pay_by_bank":{},"payco":{},"paynow":{},"paypal":{"country":"country","payer_email":"payer_email","payer_id":"payer_id"},"payto":{"bsb_number":"bsb_number","last4":"last4","pay_id":"pay_id"},"pix":{},"promptpay":{},"radar_options":{"session":"session"},"revolut_pay":{},"samsung_pay":{},"satispay":{},"sepa_debit":{"bank_code":"bank_code","branch_code":"branch_code","country":"country","fingerprint":"fingerprint","generated_from":{"charge":null,"setup_attempt":null},"last4":"last4"},"sofort":{"country":"country"},"swish":{},"twint":{},"type":"eps","us_bank_account":{"account_holder_type":"individual","account_type":"checking","bank_name":"bank_name","financial_connections_account":"financial_connections_account","fingerprint":"fingerprint","last4":"last4","networks":{"preferred":"preferred","supported":["ach"]},"routing_number":"routing_number","status_details":{"blocked":{"network_code":"R29","reason":"bank_account_frozen"}}},"wechat_pay":{},"zip":{}},"footer":"footer","rendering_options":{"amount_tax_display":"amount_tax_display","template":"template"}},"livemode":true,"metadata":{"key":"metadata"},"name":"name","next_invoice_sequence":1356358751,"object":"customer","phone":"phone","preferred_locales":["preferred_locales"],"shipping":{"address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"carrier":"carrier","name":"name","phone":"phone","tracking_number":"tracking_number"},"sources":{"object":"list","has_more":false,"data":[null]},"subscriptions":{"object":"list","has_more":false,"data":[{"application":null,"application_fee_percent":282303517,"automatic_tax":{"disabled_reason":"requires_location_inputs","enabled":true,"liability":{"account":null,"type":"account"}},"billing_cycle_anchor":672980850,"billing_cycle_anchor_config":{"day_of_month":1361669285,"hour":3208676,"minute":1074026988,"month":104080000,"second":906279820},"billing_mode":{"flexible":{"proration_discounts":"itemized"},"type":"classic","updated_at":295464393},"billing_thresholds":{"amount_gte":1424546639,"reset_billing_cycle_anchor":true},"cancel_at":476575768,"cancel_at_period_end":true,"canceled_at":1566574183,"cancellation_details":{"comment":"comment","feedback":"other","reason":"payment_disputed"},"collection_method":"charge_automatically","created":1028554472,"currency":"usd","customer":null,"customer_account":"customer_account","days_until_due":555548757,"default_payment_method":null,"default_source":null,"default_tax_rates":[null],"description":"description","discounts":[null],"ended_at":1730606040,"id":"obj_123","invoice_settings":{"account_tax_ids":[null],"issuer":{"account":null,"type":"account"}},"items":{"object":"list","has_more":false,"data":[null]},"latest_invoice":null,"livemode":true,"metadata":{"key":"metadata"},"next_pending_invoice_item_invoice":1422145209,"object":"subscription","on_behalf_of":null,"pause_collection":{"behavior":"mark_uncollectible","resumes_at":556162772},"payment_settings":{"payment_method_options":{"acss_debit":{"mandate_options":{"transaction_type":"personal"},"verification_method":"microdeposits"},"bancontact":{"preferred_language":"fr"},"card":{"mandate_options":{"amount":1413853096,"amount_type":"maximum","description":"description"},"network":"diners","request_three_d_secure":"any"},"customer_balance":{"bank_transfer":{"eu_bank_transfer":{"country":"ES"},"type":"type"},"funding_type":"bank_transfer"},"konbini":{},"payto":{"mandate_options":{"amount":1413853096,"amount_type":"maximum","purpose":"pension"}},"sepa_debit":{},"us_bank_account":{"financial_connections":{"filters":{"account_subcategories":["checking"]},"permissions":["balances"],"prefetch":["ownership"]},"verification_method":"microdeposits"}},"payment_method_types":["customer_balance"],"save_default_payment_method":"off"},"pending_invoice_item_interval":{"interval":"month","interval_count":797691627},"pending_setup_intent":null,"pending_update":{"billing_cycle_anchor":672980850,"expires_at":833811170,"subscription_items":[null],"trial_end":816100302,"trial_from_plan":true},"schedule":null,"start_date":1573629589,"status":"trialing","test_clock":null,"transfer_data":{"amount_percent":268993374,"destination":null},"trial_end":816100302,"trial_settings":{"end_behavior":{"missing_payment_method":"cancel"}},"trial_start":1719733753}]},"tax":{"automatic_tax":"unrecognized_location","ip_address":"ip_address","location":{"country":"country","source":"ip_address","state":"state"},"provider":"stripe"},"tax_exempt":"reverse","tax_ids":{"object":"list","has_more":false,"data":[{"country":"country","created":1028554472,"customer":null,"customer_account":"customer_account","id":"obj_123","livemode":true,"object":"tax_id","owner":{"account":null,"application":null,"customer":null,"customer_account":"customer_account","type":"customer"},"type":"np_pan","value":"value","verification":{"status":"unverified","verified_address":"verified_address","verified_name":"verified_name"}}]},"test_clock":{"created":1028554472,"deletes_after":73213179,"frozen_time":2033541876,"id":"obj_123","livemode":true,"name":"name","object":"test_helpers.test_clock","status":"advancing","status_details":{"advancing":{"target_frozen_time":833971362}}}},"customer_account":"customer_account","type":"customer"},"type":"np_pan","value":"value","verification":{"status":"unverified","verified_address":"verified_address","verified_name":"verified_name"}}],"hosted_payment_method_save":"offer"},"payments":{"statement_descriptor":"statement_descriptor","statement_descriptor_kana":"statement_descriptor_kana","statement_descriptor_kanji":"statement_descriptor_kanji","statement_descriptor_prefix_kana":"statement_descriptor_prefix_kana","statement_descriptor_prefix_kanji":"statement_descriptor_prefix_kanji"},"payouts":{"debit_negative_balances":true,"schedule":{"delay_days":1647351405,"interval":"interval","monthly_anchor":1920305369,"monthly_payout_days":[656202210],"weekly_anchor":"weekly_anchor","weekly_payout_days":["friday"]},"statement_descriptor":"statement_descriptor"},"sepa_debit_payments":{"creditor_id":"creditor_id"},"treasury":{"tos_acceptance":{"date":3076014,"ip":"ip","user_agent":"user_agent"}}},"tos_acceptance":{"date":3076014,"ip":"ip","service_agreement":"service_agreement","user_agent":"user_agent"},"type":"none"}',
      },
    ]);
    const account = await stripe.accounts.retrieve('acc_123');
    expect(account).not.to.be.null;
  });

  it('test_accounts_login_links_post', async function() {
    const loginLink = await stripe.accounts.createLoginLink(
      'acct_xxxxxxxxxxxxx'
    );
    expect(loginLink).not.to.be.null;
  });

  it('test_accounts_persons_delete', async function() {
    const deleted = await stripe.accounts.deletePerson(
      'acct_xxxxxxxxxxxxx',
      'person_xxxxxxxxxxxxx'
    );
    expect(deleted).not.to.be.null;
  });

  it('test_accounts_persons_get', async function() {
    const persons = await stripe.accounts.listPersons('acct_xxxxxxxxxxxxx', {
      limit: 3,
    });
    expect(persons).not.to.be.null;
  });

  it('test_accounts_persons_get_2', async function() {
    const person = await stripe.accounts.retrievePerson(
      'acct_xxxxxxxxxxxxx',
      'person_xxxxxxxxxxxxx'
    );
    expect(person).not.to.be.null;
  });

  it('test_accounts_persons_post', async function() {
    const person = await stripe.accounts.createPerson('acct_xxxxxxxxxxxxx', {
      first_name: 'Jane',
      last_name: 'Diaz',
    });
    expect(person).not.to.be.null;
  });

  it('test_accounts_persons_post_2', async function() {
    const person = await stripe.accounts.updatePerson(
      'acct_xxxxxxxxxxxxx',
      'person_xxxxxxxxxxxxx',
      {
        metadata: {
          order_id: '6735',
        },
      }
    );
    expect(person).not.to.be.null;
  });

  it('test_accounts_post', async function() {
    const account = await stripe.accounts.create({
      type: 'custom',
      country: 'US',
      email: 'jenny.rosen@example.com',
      capabilities: {
        card_payments: {
          requested: true,
        },
        transfers: {
          requested: true,
        },
      },
    });
    expect(account).not.to.be.null;
  });

  it('test_accounts_post_2', async function() {
    const account = await stripe.accounts.update('acct_xxxxxxxxxxxxx', {
      metadata: {
        order_id: '6735',
      },
    });
    expect(account).not.to.be.null;
  });

  it('test_accounts_reject_post', async function() {
    const account = await stripe.accounts.reject('acct_xxxxxxxxxxxxx', {
      reason: 'fraud',
    });
    expect(account).not.to.be.null;
  });

  it('test_application_fees_get', async function() {
    const applicationFees = await stripe.applicationFees.list({
      limit: 3,
    });
    expect(applicationFees).not.to.be.null;
  });

  it('test_application_fees_get_2', async function() {
    const applicationFee = await stripe.applicationFees.retrieve(
      'fee_xxxxxxxxxxxxx'
    );
    expect(applicationFee).not.to.be.null;
  });

  it('test_application_fees_refunds_get', async function() {
    const feeRefunds = await stripe.applicationFees.listRefunds(
      'fee_xxxxxxxxxxxxx',
      {
        limit: 3,
      }
    );
    expect(feeRefunds).not.to.be.null;
  });

  it('test_application_fees_refunds_get_2', async function() {
    const feeRefund = await stripe.applicationFees.retrieveRefund(
      'fee_xxxxxxxxxxxxx',
      'fr_xxxxxxxxxxxxx'
    );
    expect(feeRefund).not.to.be.null;
  });

  it('test_application_fees_refunds_post', async function() {
    const feeRefund = await stripe.applicationFees.createRefund(
      'fee_xxxxxxxxxxxxx'
    );
    expect(feeRefund).not.to.be.null;
  });

  it('test_application_fees_refunds_post_2', async function() {
    const feeRefund = await stripe.applicationFees.updateRefund(
      'fee_xxxxxxxxxxxxx',
      'fr_xxxxxxxxxxxxx',
      {
        metadata: {
          order_id: '6735',
        },
      }
    );
    expect(feeRefund).not.to.be.null;
  });

  it('test_apps_secrets_delete_post', async function() {
    const secret = await stripe.apps.secrets.deleteWhere({
      name: 'my-api-key',
      scope: {
        type: 'account',
      },
    });
    expect(secret).not.to.be.null;
  });

  it('test_apps_secrets_find_get', async function() {
    const secret = await stripe.apps.secrets.find({
      name: 'sec_123',
      scope: {
        type: 'account',
      },
    });
    expect(secret).not.to.be.null;
  });

  it('test_apps_secrets_get', async function() {
    const secrets = await stripe.apps.secrets.list({
      scope: {
        type: 'account',
      },
      limit: 2,
    });
    expect(secrets).not.to.be.null;
  });

  it('test_apps_secrets_get_2', async function() {
    const secrets = await stripe.apps.secrets.list({
      scope: {
        type: 'account',
      },
      limit: 2,
    });
    expect(secrets).not.to.be.null;
  });

  it('test_apps_secrets_post', async function() {
    const secret = await stripe.apps.secrets.create({
      name: 'sec_123',
      payload: 'very secret string',
      scope: {
        type: 'account',
      },
    });
    expect(secret).not.to.be.null;
  });

  it('test_apps_secrets_post_2', async function() {
    const secret = await stripe.apps.secrets.create({
      name: 'my-api-key',
      payload: 'secret_key_xxxxxx',
      scope: {
        type: 'account',
      },
    });
    expect(secret).not.to.be.null;
  });

  it('test_balance_transactions_get', async function() {
    const balanceTransactions = await stripe.balanceTransactions.list({
      limit: 3,
    });
    expect(balanceTransactions).not.to.be.null;
  });

  it('test_balance_transactions_get_2', async function() {
    const balanceTransaction = await stripe.balanceTransactions.retrieve(
      'txn_xxxxxxxxxxxxx'
    );
    expect(balanceTransaction).not.to.be.null;
  });

  it('test_billing_portal_configurations_get', async function() {
    const configurations = await stripe.billingPortal.configurations.list({
      limit: 3,
    });
    expect(configurations).not.to.be.null;
  });

  it('test_billing_portal_configurations_get_2', async function() {
    const configuration = await stripe.billingPortal.configurations.retrieve(
      'bpc_xxxxxxxxxxxxx'
    );
    expect(configuration).not.to.be.null;
  });

  it('test_billing_portal_configurations_post', async function() {
    const configuration = await stripe.billingPortal.configurations.create({
      features: {
        customer_update: {
          allowed_updates: ['email', 'tax_id'],
          enabled: true,
        },
        invoice_history: {
          enabled: true,
        },
      },
      business_profile: {
        privacy_policy_url: 'https://example.com/privacy',
        terms_of_service_url: 'https://example.com/terms',
      },
    });
    expect(configuration).not.to.be.null;
  });

  it('test_billing_portal_configurations_post_2', async function() {
    const configuration = await stripe.billingPortal.configurations.update(
      'bpc_xxxxxxxxxxxxx',
      {
        business_profile: {
          privacy_policy_url: 'https://example.com/privacy',
          terms_of_service_url: 'https://example.com/terms',
        },
      }
    );
    expect(configuration).not.to.be.null;
  });

  it('test_billing_portal_sessions_post', async function() {
    const session = await stripe.billingPortal.sessions.create({
      customer: 'cus_xxxxxxxxxxxxx',
      return_url: 'https://example.com/account',
    });
    expect(session).not.to.be.null;
  });

  it('test_charges_capture_post', async function() {
    const charge = await stripe.charges.capture('ch_xxxxxxxxxxxxx');
    expect(charge).not.to.be.null;
  });

  it('test_charges_get', async function() {
    const charges = await stripe.charges.list({
      limit: 3,
    });
    expect(charges).not.to.be.null;
  });

  it('test_charges_get_2', async function() {
    const charge = await stripe.charges.retrieve('ch_xxxxxxxxxxxxx');
    expect(charge).not.to.be.null;
  });

  it('test_charges_post', async function() {
    const charge = await stripe.charges.create({
      amount: 2000,
      currency: 'usd',
      source: 'tok_xxxx',
      description:
        'My First Test Charge (created for API docs at https://www.stripe.com/docs/api)',
    });
    expect(charge).not.to.be.null;
  });

  it('test_charges_post_2', async function() {
    const charge = await stripe.charges.update('ch_xxxxxxxxxxxxx', {
      metadata: {
        order_id: '6735',
      },
    });
    expect(charge).not.to.be.null;
  });

  it('test_charges_search_get', async function() {
    const charges = await stripe.charges.search({
      query: "amount>999 AND metadata['order_id']:'6735'",
    });
    expect(charges).not.to.be.null;
  });

  it('test_checkout_sessions_expire_post', async function() {
    const session = await stripe.checkout.sessions.expire('sess_xyz');
    expect(session).not.to.be.null;
  });

  it('test_checkout_sessions_expire_post_2', async function() {
    const session = await stripe.checkout.sessions.expire(
      'cs_test_xxxxxxxxxxxxx'
    );
    expect(session).not.to.be.null;
  });

  it('test_checkout_sessions_get', async function() {
    const sessions = await stripe.checkout.sessions.list({
      limit: 3,
    });
    expect(sessions).not.to.be.null;
  });

  it('test_checkout_sessions_get_2', async function() {
    const session = await stripe.checkout.sessions.retrieve(
      'cs_test_xxxxxxxxxxxxx'
    );
    expect(session).not.to.be.null;
  });

  it('test_checkout_sessions_line_items_get', async function() {
    const lineItems = await stripe.checkout.sessions.listLineItems('sess_xyz');
    expect(lineItems).not.to.be.null;
  });

  it('test_checkout_sessions_post', async function() {
    const session = await stripe.checkout.sessions.create({
      success_url: 'https://example.com/success',
      cancel_url: 'https://example.com/cancel',
      mode: 'payment',
      shipping_options: [
        {
          shipping_rate: 'shr_standard',
        },
        {
          shipping_rate_data: {
            display_name: 'Standard',
            delivery_estimate: {
              minimum: {
                unit: 'day',
                value: 5,
              },
              maximum: {
                unit: 'day',
                value: 7,
              },
            },
          },
        },
      ],
    });
    expect(session).not.to.be.null;
  });

  it('test_checkout_sessions_post_2', async function() {
    const session = await stripe.checkout.sessions.create({
      success_url: 'https://example.com/success',
      line_items: [
        {
          price: 'price_xxxxxxxxxxxxx',
          quantity: 2,
        },
      ],
      mode: 'payment',
    });
    expect(session).not.to.be.null;
  });

  it('test_core_events_get', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'GET',
        path: '/v2/core/events/ll_123',
        response:
          '{"changes":{"int_key":123,"string_key":"value","boolean_key":true,"object_key":{"object_int_key":123,"object_string_key":"value","object_boolean_key":true},"array_key":[1,2,3]},"context":"context","created":"1970-01-12T21:42:34.472Z","id":"obj_123","livemode":true,"object":"v2.core.event","reason":{"type":"request","request":{"id":"obj_123","idempotency_key":"idempotency_key"}},"type":"type"}',
      },
    ]);
    const event = await stripe.v2.core.events.retrieve('ll_123');
    expect(event).not.to.be.null;
  });

  it('test_country_specs_get', async function() {
    const countrySpecs = await stripe.countrySpecs.list({
      limit: 3,
    });
    expect(countrySpecs).not.to.be.null;
  });

  it('test_country_specs_get_2', async function() {
    const countrySpec = await stripe.countrySpecs.retrieve('US');
    expect(countrySpec).not.to.be.null;
  });

  it('test_coupons_delete', async function() {
    const deleted = await stripe.coupons.del('Z4OV52SU');
    expect(deleted).not.to.be.null;
  });

  it('test_coupons_get', async function() {
    const coupons = await stripe.coupons.list({
      limit: 3,
    });
    expect(coupons).not.to.be.null;
  });

  it('test_coupons_get_2', async function() {
    const coupon = await stripe.coupons.retrieve('Z4OV52SU');
    expect(coupon).not.to.be.null;
  });

  it('test_coupons_post', async function() {
    const coupon = await stripe.coupons.create({
      percent_off: 25.5,
      duration: 'once',
    });
    expect(coupon).not.to.be.null;
  });

  it('test_coupons_post_2', async function() {
    const coupon = await stripe.coupons.update('Z4OV52SU', {
      metadata: {
        order_id: '6735',
      },
    });
    expect(coupon).not.to.be.null;
  });

  it('test_credit_notes_get', async function() {
    const creditNotes = await stripe.creditNotes.list({
      limit: 3,
    });
    expect(creditNotes).not.to.be.null;
  });

  it('test_credit_notes_lines_get', async function() {
    const creditNoteLineItems = await stripe.creditNotes.listLineItems(
      'cn_xxxxxxxxxxxxx',
      {
        limit: 3,
      }
    );
    expect(creditNoteLineItems).not.to.be.null;
  });

  it('test_credit_notes_post', async function() {
    const creditNote = await stripe.creditNotes.create({
      invoice: 'in_xxxxxxxxxxxxx',
      lines: [
        {
          type: 'invoice_line_item',
          invoice_line_item: 'il_xxxxxxxxxxxxx',
          quantity: 1,
        },
      ],
    });
    expect(creditNote).not.to.be.null;
  });

  it('test_credit_notes_preview_get', async function() {
    const creditNote = await stripe.creditNotes.preview({
      invoice: 'in_xxxxxxxxxxxxx',
      lines: [
        {
          type: 'invoice_line_item',
          invoice_line_item: 'il_xxxxxxxxxxxxx',
          quantity: 1,
        },
      ],
    });
    expect(creditNote).not.to.be.null;
  });

  it('test_credit_notes_preview_lines_get', async function() {
    const creditNoteLineItems = await stripe.creditNotes.listPreviewLineItems({
      limit: 3,
      invoice: 'in_xxxxxxxxxxxxx',
    });
    expect(creditNoteLineItems).not.to.be.null;
  });

  it('test_credit_notes_void_post', async function() {
    const creditNote = await stripe.creditNotes.voidCreditNote(
      'cn_xxxxxxxxxxxxx'
    );
    expect(creditNote).not.to.be.null;
  });

  it('test_customer_sessions_post', async function() {
    const customerSession = await stripe.customerSessions.create({
      customer: 'cus_123',
      components: {
        buy_button: {
          enabled: true,
        },
      },
    });
    expect(customerSession).not.to.be.null;
  });

  it('test_customers_balance_transactions_get', async function() {
    const customerBalanceTransactions = await stripe.customers.listBalanceTransactions(
      'cus_xxxxxxxxxxxxx',
      {
        limit: 3,
      }
    );
    expect(customerBalanceTransactions).not.to.be.null;
  });

  it('test_customers_balance_transactions_get_2', async function() {
    const customerBalanceTransaction = await stripe.customers.retrieveBalanceTransaction(
      'cus_xxxxxxxxxxxxx',
      'cbtxn_xxxxxxxxxxxxx'
    );
    expect(customerBalanceTransaction).not.to.be.null;
  });

  it('test_customers_balance_transactions_post', async function() {
    const customerBalanceTransaction = await stripe.customers.createBalanceTransaction(
      'cus_xxxxxxxxxxxxx',
      {
        amount: -500,
        currency: 'usd',
      }
    );
    expect(customerBalanceTransaction).not.to.be.null;
  });

  it('test_customers_balance_transactions_post_2', async function() {
    const customerBalanceTransaction = await stripe.customers.updateBalanceTransaction(
      'cus_xxxxxxxxxxxxx',
      'cbtxn_xxxxxxxxxxxxx',
      {
        metadata: {
          order_id: '6735',
        },
      }
    );
    expect(customerBalanceTransaction).not.to.be.null;
  });

  it('test_customers_cash_balance_get', async function() {
    const cashBalance = await stripe.customers.retrieveCashBalance('cus_123');
    expect(cashBalance).not.to.be.null;
  });

  it('test_customers_cash_balance_post', async function() {
    const cashBalance = await stripe.customers.updateCashBalance('cus_123', {
      settings: {
        reconciliation_mode: 'manual',
      },
    });
    expect(cashBalance).not.to.be.null;
  });

  it('test_customers_cash_balance_transactions_get', async function() {
    const customerCashBalanceTransactions = await stripe.customers.listCashBalanceTransactions(
      'cus_123',
      {
        limit: 3,
      }
    );
    expect(customerCashBalanceTransactions).not.to.be.null;
  });

  it('test_customers_delete', async function() {
    const deleted = await stripe.customers.del('cus_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('test_customers_funding_instructions_post', async function() {
    const fundingInstructions = await stripe.customers.createFundingInstructions(
      'cus_123',
      {
        bank_transfer: {
          requested_address_types: ['zengin'],
          type: 'jp_bank_transfer',
        },
        currency: 'usd',
        funding_type: 'bank_transfer',
      }
    );
    expect(fundingInstructions).not.to.be.null;
  });

  it('test_customers_get', async function() {
    const customers = await stripe.customers.list({
      limit: 3,
    });
    expect(customers).not.to.be.null;
  });

  it('test_customers_get_2', async function() {
    const customers = await stripe.customers.list({
      limit: 3,
    });
    expect(customers).not.to.be.null;
  });

  it('test_customers_get_3', async function() {
    const customer = await stripe.customers.retrieve('cus_xxxxxxxxxxxxx');
    expect(customer).not.to.be.null;
  });

  it('test_customers_payment_methods_get', async function() {
    const paymentMethods = await stripe.customers.listPaymentMethods(
      'cus_xyz',
      {
        type: 'card',
      }
    );
    expect(paymentMethods).not.to.be.null;
  });

  it('test_customers_payment_methods_get_2', async function() {
    const paymentMethods = await stripe.customers.listPaymentMethods(
      'cus_xxxxxxxxxxxxx',
      {
        type: 'card',
      }
    );
    expect(paymentMethods).not.to.be.null;
  });

  it('test_customers_post', async function() {
    const customer = await stripe.customers.create({
      description:
        'My First Test Customer (created for API docs at https://www.stripe.com/docs/api)',
    });
    expect(customer).not.to.be.null;
  });

  it('test_customers_post_2', async function() {
    const customer = await stripe.customers.update('cus_xxxxxxxxxxxxx', {
      metadata: {
        order_id: '6735',
      },
    });
    expect(customer).not.to.be.null;
  });

  it('test_customers_search_get', async function() {
    const customers = await stripe.customers.search({
      query: "name:'fakename' AND metadata['foo']:'bar'",
    });
    expect(customers).not.to.be.null;
  });

  it('test_customers_search_get_2', async function() {
    const customers = await stripe.customers.search({
      query: "name:'fakename' AND metadata['foo']:'bar'",
    });
    expect(customers).not.to.be.null;
  });

  it('test_customers_sources_delete', async function() {
    const customerSource = await stripe.customers.deleteSource(
      'cus_xxxxxxxxxxxxx',
      'ba_xxxxxxxxxxxxx'
    );
    expect(customerSource).not.to.be.null;
  });

  it('test_customers_sources_delete_2', async function() {
    const customerSource = await stripe.customers.deleteSource(
      'cus_xxxxxxxxxxxxx',
      'card_xxxxxxxxxxxxx'
    );
    expect(customerSource).not.to.be.null;
  });

  it('test_customers_sources_get', async function() {
    const customerSources = await stripe.customers.listSources(
      'cus_xxxxxxxxxxxxx',
      {
        object: 'bank_account',
        limit: 3,
      }
    );
    expect(customerSources).not.to.be.null;
  });

  it('test_customers_sources_get_2', async function() {
    const customerSources = await stripe.customers.listSources(
      'cus_xxxxxxxxxxxxx',
      {
        object: 'card',
        limit: 3,
      }
    );
    expect(customerSources).not.to.be.null;
  });

  it('test_customers_sources_get_3', async function() {
    const customerSource = await stripe.customers.retrieveSource(
      'cus_xxxxxxxxxxxxx',
      'ba_xxxxxxxxxxxxx'
    );
    expect(customerSource).not.to.be.null;
  });

  it('test_customers_sources_get_4', async function() {
    const customerSource = await stripe.customers.retrieveSource(
      'cus_xxxxxxxxxxxxx',
      'card_xxxxxxxxxxxxx'
    );
    expect(customerSource).not.to.be.null;
  });

  it('test_customers_sources_post', async function() {
    const customerSource = await stripe.customers.updateSource(
      'cus_123',
      'card_123',
      {
        name: 'Kamil',
      }
    );
    expect(customerSource).not.to.be.null;
  });

  it('test_customers_sources_post_2', async function() {
    const customerSource = await stripe.customers.createSource(
      'cus_xxxxxxxxxxxxx',
      {
        source: 'btok_xxxxxxxxxxxxx',
      }
    );
    expect(customerSource).not.to.be.null;
  });

  it('test_customers_sources_post_3', async function() {
    const customerSource = await stripe.customers.createSource(
      'cus_xxxxxxxxxxxxx',
      {
        source: 'tok_xxxx',
      }
    );
    expect(customerSource).not.to.be.null;
  });

  it('test_customers_sources_post_4', async function() {
    const customerSource = await stripe.customers.updateSource(
      'cus_xxxxxxxxxxxxx',
      'ba_xxxxxxxxxxxxx',
      {
        metadata: {
          order_id: '6735',
        },
      }
    );
    expect(customerSource).not.to.be.null;
  });

  it('test_customers_sources_post_5', async function() {
    const customerSource = await stripe.customers.updateSource(
      'cus_xxxxxxxxxxxxx',
      'card_xxxxxxxxxxxxx',
      {
        name: 'Jenny Rosen',
      }
    );
    expect(customerSource).not.to.be.null;
  });

  it('test_customers_sources_verify_post', async function() {
    const bankAccount = await stripe.customers.verifySource(
      'cus_xxxxxxxxxxxxx',
      'ba_xxxxxxxxxxxxx',
      {
        amounts: [32, 45],
      }
    );
    expect(bankAccount).not.to.be.null;
  });

  it('test_customers_tax_ids_delete', async function() {
    const deleted = await stripe.customers.deleteTaxId(
      'cus_xxxxxxxxxxxxx',
      'txi_xxxxxxxxxxxxx'
    );
    expect(deleted).not.to.be.null;
  });

  it('test_customers_tax_ids_get', async function() {
    const taxIds = await stripe.customers.listTaxIds('cus_xxxxxxxxxxxxx', {
      limit: 3,
    });
    expect(taxIds).not.to.be.null;
  });

  it('test_customers_tax_ids_get_2', async function() {
    const taxId = await stripe.customers.retrieveTaxId(
      'cus_xxxxxxxxxxxxx',
      'txi_xxxxxxxxxxxxx'
    );
    expect(taxId).not.to.be.null;
  });

  it('test_customers_tax_ids_post', async function() {
    const taxId = await stripe.customers.createTaxId('cus_xxxxxxxxxxxxx', {
      type: 'eu_vat',
      value: 'DE123456789',
    });
    expect(taxId).not.to.be.null;
  });

  it('test_disputes_close_post', async function() {
    const dispute = await stripe.disputes.close('dp_xxxxxxxxxxxxx');
    expect(dispute).not.to.be.null;
  });

  it('test_disputes_get', async function() {
    const disputes = await stripe.disputes.list({
      limit: 3,
    });
    expect(disputes).not.to.be.null;
  });

  it('test_disputes_get_2', async function() {
    const dispute = await stripe.disputes.retrieve('dp_xxxxxxxxxxxxx');
    expect(dispute).not.to.be.null;
  });

  it('test_disputes_post', async function() {
    const dispute = await stripe.disputes.update('dp_xxxxxxxxxxxxx', {
      metadata: {
        order_id: '6735',
      },
    });
    expect(dispute).not.to.be.null;
  });

  it('test_events_get', async function() {
    const events = await stripe.events.list({
      limit: 3,
    });
    expect(events).not.to.be.null;
  });

  it('test_events_get_2', async function() {
    const event = await stripe.events.retrieve('evt_xxxxxxxxxxxxx');
    expect(event).not.to.be.null;
  });

  it('test_file_links_get', async function() {
    const fileLinks = await stripe.fileLinks.list({
      limit: 3,
    });
    expect(fileLinks).not.to.be.null;
  });

  it('test_file_links_get_2', async function() {
    const fileLink = await stripe.fileLinks.retrieve('link_xxxxxxxxxxxxx');
    expect(fileLink).not.to.be.null;
  });

  it('test_file_links_post', async function() {
    const fileLink = await stripe.fileLinks.create({
      file: 'file_xxxxxxxxxxxxx',
    });
    expect(fileLink).not.to.be.null;
  });

  it('test_file_links_post_2', async function() {
    const fileLink = await stripe.fileLinks.update('link_xxxxxxxxxxxxx', {
      metadata: {
        order_id: '6735',
      },
    });
    expect(fileLink).not.to.be.null;
  });

  it('test_financial_connections_accounts_disconnect_post', async function() {
    const account = await stripe.financialConnections.accounts.disconnect(
      'fca_xyz'
    );
    expect(account).not.to.be.null;
  });

  it('test_financial_connections_accounts_disconnect_post_2', async function() {
    const account = await stripe.financialConnections.accounts.disconnect(
      'fca_xxxxxxxxxxxxx'
    );
    expect(account).not.to.be.null;
  });

  it('test_financial_connections_accounts_get', async function() {
    const accounts = await stripe.financialConnections.accounts.list();
    expect(accounts).not.to.be.null;
  });

  it('test_financial_connections_accounts_get_2', async function() {
    const account = await stripe.financialConnections.accounts.retrieve(
      'fca_xyz'
    );
    expect(account).not.to.be.null;
  });

  it('test_financial_connections_accounts_get_3', async function() {
    const accounts = await stripe.financialConnections.accounts.list({
      account_holder: {
        customer: 'cus_xxxxxxxxxxxxx',
      },
    });
    expect(accounts).not.to.be.null;
  });

  it('test_financial_connections_accounts_get_4', async function() {
    const account = await stripe.financialConnections.accounts.retrieve(
      'fca_xxxxxxxxxxxxx'
    );
    expect(account).not.to.be.null;
  });

  it('test_financial_connections_accounts_owners_get', async function() {
    const accountOwners = await stripe.financialConnections.accounts.listOwners(
      'fca_xyz',
      {
        ownership: 'fcaowns_xyz',
      }
    );
    expect(accountOwners).not.to.be.null;
  });

  it('test_financial_connections_accounts_owners_get_2', async function() {
    const accountOwners = await stripe.financialConnections.accounts.listOwners(
      'fca_xxxxxxxxxxxxx',
      {
        limit: 3,
        ownership: 'fcaowns_xxxxxxxxxxxxx',
      }
    );
    expect(accountOwners).not.to.be.null;
  });

  it('test_financial_connections_accounts_refresh_post', async function() {
    const account = await stripe.financialConnections.accounts.refresh(
      'fca_xyz',
      {
        features: ['balance'],
      }
    );
    expect(account).not.to.be.null;
  });

  it('test_financial_connections_accounts_subscribe_post', async function() {
    const account = await stripe.financialConnections.accounts.subscribe(
      'fa_123',
      {
        features: ['transactions'],
      }
    );
    expect(account).not.to.be.null;
  });

  it('test_financial_connections_accounts_unsubscribe_post', async function() {
    const account = await stripe.financialConnections.accounts.unsubscribe(
      'fa_123',
      {
        features: ['transactions'],
      }
    );
    expect(account).not.to.be.null;
  });

  it('test_financial_connections_sessions_get', async function() {
    const session = await stripe.financialConnections.sessions.retrieve(
      'fcsess_xyz'
    );
    expect(session).not.to.be.null;
  });

  it('test_financial_connections_sessions_get_2', async function() {
    const session = await stripe.financialConnections.sessions.retrieve(
      'fcsess_xxxxxxxxxxxxx'
    );
    expect(session).not.to.be.null;
  });

  it('test_financial_connections_sessions_post', async function() {
    const session = await stripe.financialConnections.sessions.create({
      account_holder: {
        type: 'customer',
        customer: 'cus_123',
      },
      permissions: ['balances'],
    });
    expect(session).not.to.be.null;
  });

  it('test_financial_connections_sessions_post_2', async function() {
    const session = await stripe.financialConnections.sessions.create({
      account_holder: {
        type: 'customer',
        customer: 'cus_xxxxxxxxxxxxx',
      },
      permissions: ['payment_method', 'balances'],
      filters: {
        countries: ['US'],
      },
    });
    expect(session).not.to.be.null;
  });

  it('test_financial_connections_transactions_get', async function() {
    const transaction = await stripe.financialConnections.transactions.retrieve(
      'tr_123'
    );
    expect(transaction).not.to.be.null;
  });

  it('test_financial_connections_transactions_get_2', async function() {
    const transactions = await stripe.financialConnections.transactions.list({
      account: 'fca_xyz',
    });
    expect(transactions).not.to.be.null;
  });

  it('test_identity_verification_reports_get', async function() {
    const verificationReports = await stripe.identity.verificationReports.list({
      limit: 3,
    });
    expect(verificationReports).not.to.be.null;
  });

  it('test_identity_verification_reports_get_2', async function() {
    const verificationReport = await stripe.identity.verificationReports.retrieve(
      'vr_xxxxxxxxxxxxx'
    );
    expect(verificationReport).not.to.be.null;
  });

  it('test_identity_verification_sessions_cancel_post', async function() {
    const verificationSession = await stripe.identity.verificationSessions.cancel(
      'vs_xxxxxxxxxxxxx'
    );
    expect(verificationSession).not.to.be.null;
  });

  it('test_identity_verification_sessions_get', async function() {
    const verificationSessions = await stripe.identity.verificationSessions.list(
      {
        limit: 3,
      }
    );
    expect(verificationSessions).not.to.be.null;
  });

  it('test_identity_verification_sessions_get_2', async function() {
    const verificationSession = await stripe.identity.verificationSessions.retrieve(
      'vs_xxxxxxxxxxxxx'
    );
    expect(verificationSession).not.to.be.null;
  });

  it('test_identity_verification_sessions_post', async function() {
    const verificationSession = await stripe.identity.verificationSessions.create(
      {
        type: 'document',
      }
    );
    expect(verificationSession).not.to.be.null;
  });

  it('test_identity_verification_sessions_post_2', async function() {
    const verificationSession = await stripe.identity.verificationSessions.update(
      'vs_xxxxxxxxxxxxx',
      {
        type: 'id_number',
      }
    );
    expect(verificationSession).not.to.be.null;
  });

  it('test_identity_verification_sessions_redact_post', async function() {
    const verificationSession = await stripe.identity.verificationSessions.redact(
      'vs_xxxxxxxxxxxxx'
    );
    expect(verificationSession).not.to.be.null;
  });

  it('test_invoiceitems_delete', async function() {
    const deleted = await stripe.invoiceItems.del('ii_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('test_invoiceitems_get', async function() {
    const invoiceItems = await stripe.invoiceItems.list({
      limit: 3,
    });
    expect(invoiceItems).not.to.be.null;
  });

  it('test_invoiceitems_get_2', async function() {
    const invoiceItem = await stripe.invoiceItems.retrieve('ii_xxxxxxxxxxxxx');
    expect(invoiceItem).not.to.be.null;
  });

  it('test_invoiceitems_post', async function() {
    const invoiceItem = await stripe.invoiceItems.create({
      customer: 'cus_xxxxxxxxxxxxx',
    });
    expect(invoiceItem).not.to.be.null;
  });

  it('test_invoiceitems_post_2', async function() {
    const invoiceItem = await stripe.invoiceItems.update('ii_xxxxxxxxxxxxx', {
      metadata: {
        order_id: '6735',
      },
    });
    expect(invoiceItem).not.to.be.null;
  });

  it('test_invoices_delete', async function() {
    const deleted = await stripe.invoices.del('in_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('test_invoices_finalize_post', async function() {
    const invoice = await stripe.invoices.finalizeInvoice('in_xxxxxxxxxxxxx');
    expect(invoice).not.to.be.null;
  });

  it('test_invoices_get', async function() {
    const invoices = await stripe.invoices.list({
      limit: 3,
    });
    expect(invoices).not.to.be.null;
  });

  it('test_invoices_get_2', async function() {
    const invoice = await stripe.invoices.retrieve('in_xxxxxxxxxxxxx');
    expect(invoice).not.to.be.null;
  });

  it('test_invoices_get_3', async function() {
    const invoice = await stripe.invoices.retrieve('in_xxxxxxxxxxxxx', {
      expand: ['customer'],
    });
    expect(invoice).not.to.be.null;
  });

  it('test_invoices_mark_uncollectible_post', async function() {
    const invoice = await stripe.invoices.markUncollectible('in_xxxxxxxxxxxxx');
    expect(invoice).not.to.be.null;
  });

  it('test_invoices_pay_post', async function() {
    const invoice = await stripe.invoices.pay('in_xxxxxxxxxxxxx');
    expect(invoice).not.to.be.null;
  });

  it('test_invoices_post', async function() {
    const invoice = await stripe.invoices.create({
      customer: 'cus_xxxxxxxxxxxxx',
    });
    expect(invoice).not.to.be.null;
  });

  it('test_invoices_post_2', async function() {
    const invoice = await stripe.invoices.update('in_xxxxxxxxxxxxx', {
      metadata: {
        order_id: '6735',
      },
    });
    expect(invoice).not.to.be.null;
  });

  it('test_invoices_search_get', async function() {
    const invoices = await stripe.invoices.search({
      query: "total>999 AND metadata['order_id']:'6735'",
    });
    expect(invoices).not.to.be.null;
  });

  it('test_invoices_send_post', async function() {
    const invoice = await stripe.invoices.sendInvoice('in_xxxxxxxxxxxxx');
    expect(invoice).not.to.be.null;
  });

  it('test_invoices_void_post', async function() {
    const invoice = await stripe.invoices.voidInvoice('in_xxxxxxxxxxxxx');
    expect(invoice).not.to.be.null;
  });

  it('test_issuing_authorizations_approve_post', async function() {
    const authorization = await stripe.issuing.authorizations.approve(
      'iauth_xxxxxxxxxxxxx'
    );
    expect(authorization).not.to.be.null;
  });

  it('test_issuing_authorizations_decline_post', async function() {
    const authorization = await stripe.issuing.authorizations.decline(
      'iauth_xxxxxxxxxxxxx'
    );
    expect(authorization).not.to.be.null;
  });

  it('test_issuing_authorizations_get', async function() {
    const authorizations = await stripe.issuing.authorizations.list({
      limit: 3,
    });
    expect(authorizations).not.to.be.null;
  });

  it('test_issuing_authorizations_get_2', async function() {
    const authorization = await stripe.issuing.authorizations.retrieve(
      'iauth_xxxxxxxxxxxxx'
    );
    expect(authorization).not.to.be.null;
  });

  it('test_issuing_authorizations_post', async function() {
    const authorization = await stripe.issuing.authorizations.update(
      'iauth_xxxxxxxxxxxxx',
      {
        metadata: {
          order_id: '6735',
        },
      }
    );
    expect(authorization).not.to.be.null;
  });

  it('test_issuing_cardholders_get', async function() {
    const cardholders = await stripe.issuing.cardholders.list({
      limit: 3,
    });
    expect(cardholders).not.to.be.null;
  });

  it('test_issuing_cardholders_get_2', async function() {
    const cardholder = await stripe.issuing.cardholders.retrieve(
      'ich_xxxxxxxxxxxxx'
    );
    expect(cardholder).not.to.be.null;
  });

  it('test_issuing_cardholders_post', async function() {
    const cardholder = await stripe.issuing.cardholders.create({
      type: 'individual',
      name: 'Jenny Rosen',
      email: 'jenny.rosen@example.com',
      phone_number: '+18888675309',
      billing: {
        address: {
          line1: '1234 Main Street',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
          postal_code: '94111',
        },
      },
    });
    expect(cardholder).not.to.be.null;
  });

  it('test_issuing_cardholders_post_2', async function() {
    const cardholder = await stripe.issuing.cardholders.update(
      'ich_xxxxxxxxxxxxx',
      {
        metadata: {
          order_id: '6735',
        },
      }
    );
    expect(cardholder).not.to.be.null;
  });

  it('test_issuing_cards_get', async function() {
    const cards = await stripe.issuing.cards.list({
      limit: 3,
    });
    expect(cards).not.to.be.null;
  });

  it('test_issuing_cards_get_2', async function() {
    const card = await stripe.issuing.cards.retrieve('ic_xxxxxxxxxxxxx');
    expect(card).not.to.be.null;
  });

  it('test_issuing_cards_post', async function() {
    const card = await stripe.issuing.cards.create({
      cardholder: 'ich_xxxxxxxxxxxxx',
      currency: 'usd',
      type: 'virtual',
    });
    expect(card).not.to.be.null;
  });

  it('test_issuing_cards_post_2', async function() {
    const card = await stripe.issuing.cards.update('ic_xxxxxxxxxxxxx', {
      metadata: {
        order_id: '6735',
      },
    });
    expect(card).not.to.be.null;
  });

  it('test_issuing_disputes_get', async function() {
    const disputes = await stripe.issuing.disputes.list({
      limit: 3,
    });
    expect(disputes).not.to.be.null;
  });

  it('test_issuing_disputes_get_2', async function() {
    const dispute = await stripe.issuing.disputes.retrieve('idp_xxxxxxxxxxxxx');
    expect(dispute).not.to.be.null;
  });

  it('test_issuing_disputes_post', async function() {
    const dispute = await stripe.issuing.disputes.create({
      transaction: 'ipi_xxxxxxxxxxxxx',
      evidence: {
        reason: 'fraudulent',
        fraudulent: {
          explanation: 'Purchase was unrecognized.',
        },
      },
    });
    expect(dispute).not.to.be.null;
  });

  it('test_issuing_disputes_submit_post', async function() {
    const dispute = await stripe.issuing.disputes.submit('idp_xxxxxxxxxxxxx');
    expect(dispute).not.to.be.null;
  });

  it('test_issuing_personalization_designs_get', async function() {
    const personalizationDesigns = await stripe.issuing.personalizationDesigns.list();
    expect(personalizationDesigns).not.to.be.null;
  });

  it('test_issuing_personalization_designs_get_2', async function() {
    const personalizationDesign = await stripe.issuing.personalizationDesigns.retrieve(
      'pd_xyz'
    );
    expect(personalizationDesign).not.to.be.null;
  });

  it('test_issuing_personalization_designs_post', async function() {
    const personalizationDesign = await stripe.issuing.personalizationDesigns.create(
      {
        physical_bundle: 'pb_xyz',
      }
    );
    expect(personalizationDesign).not.to.be.null;
  });

  it('test_issuing_personalization_designs_post_2', async function() {
    const personalizationDesign = await stripe.issuing.personalizationDesigns.update(
      'pd_xyz'
    );
    expect(personalizationDesign).not.to.be.null;
  });

  it('test_issuing_physical_bundles_get', async function() {
    const physicalBundles = await stripe.issuing.physicalBundles.list();
    expect(physicalBundles).not.to.be.null;
  });

  it('test_issuing_physical_bundles_get_2', async function() {
    const physicalBundle = await stripe.issuing.physicalBundles.retrieve(
      'pb_xyz'
    );
    expect(physicalBundle).not.to.be.null;
  });

  it('test_issuing_transactions_get', async function() {
    const transactions = await stripe.issuing.transactions.list({
      limit: 3,
    });
    expect(transactions).not.to.be.null;
  });

  it('test_issuing_transactions_get_2', async function() {
    const transaction = await stripe.issuing.transactions.retrieve(
      'ipi_xxxxxxxxxxxxx'
    );
    expect(transaction).not.to.be.null;
  });

  it('test_issuing_transactions_post', async function() {
    const transaction = await stripe.issuing.transactions.update(
      'ipi_xxxxxxxxxxxxx',
      {
        metadata: {
          order_id: '6735',
        },
      }
    );
    expect(transaction).not.to.be.null;
  });

  it('test_mandates_get', async function() {
    const mandate = await stripe.mandates.retrieve('mandate_xxxxxxxxxxxxx');
    expect(mandate).not.to.be.null;
  });

  it('test_payment_intents_apply_customer_balance_post', async function() {
    const paymentIntent = await stripe.paymentIntents.applyCustomerBalance(
      'pi_xxxxxxxxxxxxx'
    );
    expect(paymentIntent).not.to.be.null;
  });

  it('test_payment_intents_cancel_post', async function() {
    const paymentIntent = await stripe.paymentIntents.cancel(
      'pi_xxxxxxxxxxxxx'
    );
    expect(paymentIntent).not.to.be.null;
  });

  it('test_payment_intents_capture_post', async function() {
    const paymentIntent = await stripe.paymentIntents.capture(
      'pi_xxxxxxxxxxxxx'
    );
    expect(paymentIntent).not.to.be.null;
  });

  it('test_payment_intents_confirm_post', async function() {
    const paymentIntent = await stripe.paymentIntents.confirm(
      'pi_xxxxxxxxxxxxx',
      {
        payment_method: 'pm_card_visa',
      }
    );
    expect(paymentIntent).not.to.be.null;
  });

  it('test_payment_intents_get', async function() {
    const paymentIntents = await stripe.paymentIntents.list({
      limit: 3,
    });
    expect(paymentIntents).not.to.be.null;
  });

  it('test_payment_intents_get_2', async function() {
    const paymentIntent = await stripe.paymentIntents.retrieve(
      'pi_xxxxxxxxxxxxx'
    );
    expect(paymentIntent).not.to.be.null;
  });

  it('test_payment_intents_increment_authorization_post', async function() {
    const paymentIntent = await stripe.paymentIntents.incrementAuthorization(
      'pi_xxxxxxxxxxxxx',
      {
        amount: 2099,
      }
    );
    expect(paymentIntent).not.to.be.null;
  });

  it('test_payment_intents_post', async function() {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: 'eur',
      automatic_payment_methods: {
        enabled: true,
      },
    });
    expect(paymentIntent).not.to.be.null;
  });

  it('test_payment_intents_post_2', async function() {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2000,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });
    expect(paymentIntent).not.to.be.null;
  });

  it('test_payment_intents_post_3', async function() {
    const paymentIntent = await stripe.paymentIntents.update(
      'pi_xxxxxxxxxxxxx',
      {
        metadata: {
          order_id: '6735',
        },
      }
    );
    expect(paymentIntent).not.to.be.null;
  });

  it('test_payment_intents_post_4', async function() {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 200,
      currency: 'usd',
      payment_method_data: {
        type: 'p24',
        p24: {
          bank: 'blik',
        },
      },
    });
    expect(paymentIntent).not.to.be.null;
  });

  it('test_payment_intents_search_get', async function() {
    const paymentIntents = await stripe.paymentIntents.search({
      query: "status:'succeeded' AND metadata['order_id']:'6735'",
    });
    expect(paymentIntents).not.to.be.null;
  });

  it('test_payment_intents_verify_microdeposits_post', async function() {
    const paymentIntent = await stripe.paymentIntents.verifyMicrodeposits(
      'pi_xxxxxxxxxxxxx'
    );
    expect(paymentIntent).not.to.be.null;
  });

  it('test_payment_intents_verify_microdeposits_post_2', async function() {
    const paymentIntent = await stripe.paymentIntents.verifyMicrodeposits(
      'pi_xxxxxxxxxxxxx',
      {
        amounts: [32, 45],
      }
    );
    expect(paymentIntent).not.to.be.null;
  });

  it('test_payment_links_get', async function() {
    const paymentLink = await stripe.paymentLinks.retrieve('pl_xyz');
    expect(paymentLink).not.to.be.null;
  });

  it('test_payment_links_get_2', async function() {
    const paymentLinks = await stripe.paymentLinks.list({
      limit: 3,
    });
    expect(paymentLinks).not.to.be.null;
  });

  it('test_payment_links_get_3', async function() {
    const paymentLink = await stripe.paymentLinks.retrieve(
      'plink_xxxxxxxxxxxxx'
    );
    expect(paymentLink).not.to.be.null;
  });

  it('test_payment_links_line_items_get', async function() {
    const lineItems = await stripe.paymentLinks.listLineItems('pl_xyz');
    expect(lineItems).not.to.be.null;
  });

  it('test_payment_links_post', async function() {
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [
        {
          price: 'price_xxxxxxxxxxxxx',
          quantity: 1,
        },
      ],
    });
    expect(paymentLink).not.to.be.null;
  });

  it('test_payment_links_post_2', async function() {
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [
        {
          price: 'price_xxxxxxxxxxxxx',
          quantity: 1,
        },
      ],
    });
    expect(paymentLink).not.to.be.null;
  });

  it('test_payment_links_post_3', async function() {
    const paymentLink = await stripe.paymentLinks.update(
      'plink_xxxxxxxxxxxxx',
      {
        active: false,
      }
    );
    expect(paymentLink).not.to.be.null;
  });

  it('test_payment_method_configurations_get', async function() {
    const paymentMethodConfigurations = await stripe.paymentMethodConfigurations.list(
      {
        application: 'foo',
      }
    );
    expect(paymentMethodConfigurations).not.to.be.null;
  });

  it('test_payment_method_configurations_get_2', async function() {
    const paymentMethodConfiguration = await stripe.paymentMethodConfigurations.retrieve(
      'foo'
    );
    expect(paymentMethodConfiguration).not.to.be.null;
  });

  it('test_payment_method_configurations_post', async function() {
    const paymentMethodConfiguration = await stripe.paymentMethodConfigurations.create(
      {
        acss_debit: {
          display_preference: {
            preference: 'none',
          },
        },
        affirm: {
          display_preference: {
            preference: 'none',
          },
        },
      }
    );
    expect(paymentMethodConfiguration).not.to.be.null;
  });

  it('test_payment_method_configurations_post_2', async function() {
    const paymentMethodConfiguration = await stripe.paymentMethodConfigurations.update(
      'foo',
      {
        acss_debit: {
          display_preference: {
            preference: 'on',
          },
        },
      }
    );
    expect(paymentMethodConfiguration).not.to.be.null;
  });

  it('test_payment_methods_attach_post', async function() {
    const paymentMethod = await stripe.paymentMethods.attach(
      'pm_xxxxxxxxxxxxx',
      {
        customer: 'cus_xxxxxxxxxxxxx',
      }
    );
    expect(paymentMethod).not.to.be.null;
  });

  it('test_payment_methods_detach_post', async function() {
    const paymentMethod = await stripe.paymentMethods.detach(
      'pm_xxxxxxxxxxxxx'
    );
    expect(paymentMethod).not.to.be.null;
  });

  it('test_payment_methods_get', async function() {
    const paymentMethods = await stripe.paymentMethods.list({
      customer: 'cus_xxxxxxxxxxxxx',
      type: 'card',
    });
    expect(paymentMethods).not.to.be.null;
  });

  it('test_payment_methods_get_2', async function() {
    const paymentMethod = await stripe.paymentMethods.retrieve(
      'pm_xxxxxxxxxxxxx'
    );
    expect(paymentMethod).not.to.be.null;
  });

  it('test_payment_methods_post', async function() {
    const paymentMethod = await stripe.paymentMethods.create({
      type: 'card',
      card: {
        number: '4242424242424242',
        exp_month: 8,
        exp_year: 2024,
        cvc: '314',
      },
    });
    expect(paymentMethod).not.to.be.null;
  });

  it('test_payment_methods_post_2', async function() {
    const paymentMethod = await stripe.paymentMethods.update(
      'pm_xxxxxxxxxxxxx',
      {
        metadata: {
          order_id: '6735',
        },
      }
    );
    expect(paymentMethod).not.to.be.null;
  });

  it('test_payouts_cancel_post', async function() {
    const payout = await stripe.payouts.cancel('po_xxxxxxxxxxxxx');
    expect(payout).not.to.be.null;
  });

  it('test_payouts_get', async function() {
    const payouts = await stripe.payouts.list({
      limit: 3,
    });
    expect(payouts).not.to.be.null;
  });

  it('test_payouts_get_2', async function() {
    const payout = await stripe.payouts.retrieve('po_xxxxxxxxxxxxx');
    expect(payout).not.to.be.null;
  });

  it('test_payouts_post', async function() {
    const payout = await stripe.payouts.create({
      amount: 1100,
      currency: 'usd',
    });
    expect(payout).not.to.be.null;
  });

  it('test_payouts_post_2', async function() {
    const payout = await stripe.payouts.update('po_xxxxxxxxxxxxx', {
      metadata: {
        order_id: '6735',
      },
    });
    expect(payout).not.to.be.null;
  });

  it('test_payouts_reverse_post', async function() {
    const payout = await stripe.payouts.reverse('po_xxxxxxxxxxxxx');
    expect(payout).not.to.be.null;
  });

  it('test_plans_delete', async function() {
    const deleted = await stripe.plans.del('price_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('test_plans_get', async function() {
    const plans = await stripe.plans.list({
      limit: 3,
    });
    expect(plans).not.to.be.null;
  });

  it('test_plans_get_2', async function() {
    const plan = await stripe.plans.retrieve('price_xxxxxxxxxxxxx');
    expect(plan).not.to.be.null;
  });

  it('test_plans_post', async function() {
    const plan = await stripe.plans.create({
      amount: 2000,
      currency: 'usd',
      interval: 'month',
      product: 'prod_xxxxxxxxxxxxx',
    });
    expect(plan).not.to.be.null;
  });

  it('test_plans_post_2', async function() {
    const plan = await stripe.plans.create({
      amount: 2000,
      currency: 'usd',
      interval: 'month',
      product: {
        name: 'My product',
      },
    });
    expect(plan).not.to.be.null;
  });

  it('test_plans_post_3', async function() {
    const plan = await stripe.plans.update('price_xxxxxxxxxxxxx', {
      metadata: {
        order_id: '6735',
      },
    });
    expect(plan).not.to.be.null;
  });

  it('test_prices_get', async function() {
    const prices = await stripe.prices.list({
      limit: 3,
    });
    expect(prices).not.to.be.null;
  });

  it('test_prices_get_2', async function() {
    const price = await stripe.prices.retrieve('price_xxxxxxxxxxxxx');
    expect(price).not.to.be.null;
  });

  it('test_prices_post', async function() {
    const price = await stripe.prices.create({
      unit_amount: 2000,
      currency: 'usd',
      currency_options: {
        uah: {
          unit_amount: 5000,
        },
        eur: {
          unit_amount: 1800,
        },
      },
      recurring: {
        interval: 'month',
      },
      product: 'prod_xxxxxxxxxxxxx',
    });
    expect(price).not.to.be.null;
  });

  it('test_prices_post_2', async function() {
    const price = await stripe.prices.create({
      unit_amount: 2000,
      currency: 'usd',
      recurring: {
        interval: 'month',
      },
      product: 'prod_xxxxxxxxxxxxx',
    });
    expect(price).not.to.be.null;
  });

  it('test_prices_post_3', async function() {
    const price = await stripe.prices.update('price_xxxxxxxxxxxxx', {
      metadata: {
        order_id: '6735',
      },
    });
    expect(price).not.to.be.null;
  });

  it('test_prices_search_get', async function() {
    const prices = await stripe.prices.search({
      query: "active:'true' AND metadata['order_id']:'6735'",
    });
    expect(prices).not.to.be.null;
  });

  it('test_products_delete', async function() {
    const deleted = await stripe.products.del('prod_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('test_products_get', async function() {
    const products = await stripe.products.list({
      limit: 3,
    });
    expect(products).not.to.be.null;
  });

  it('test_products_get_2', async function() {
    const product = await stripe.products.retrieve('prod_xxxxxxxxxxxxx');
    expect(product).not.to.be.null;
  });

  it('test_products_post', async function() {
    const product = await stripe.products.create({
      name: 'Gold Special',
    });
    expect(product).not.to.be.null;
  });

  it('test_products_post_2', async function() {
    const product = await stripe.products.update('prod_xxxxxxxxxxxxx', {
      metadata: {
        order_id: '6735',
      },
    });
    expect(product).not.to.be.null;
  });

  it('test_products_search_get', async function() {
    const products = await stripe.products.search({
      query: "active:'true' AND metadata['order_id']:'6735'",
    });
    expect(products).not.to.be.null;
  });

  it('test_promotion_codes_get', async function() {
    const promotionCodes = await stripe.promotionCodes.list({
      limit: 3,
    });
    expect(promotionCodes).not.to.be.null;
  });

  it('test_promotion_codes_get_2', async function() {
    const promotionCode = await stripe.promotionCodes.retrieve(
      'promo_xxxxxxxxxxxxx'
    );
    expect(promotionCode).not.to.be.null;
  });

  it('test_promotion_codes_post', async function() {
    const promotionCode = await stripe.promotionCodes.create({
      promotion: {
        type: 'coupon',
        coupon: 'Z4OV52SU',
      },
    });
    expect(promotionCode).not.to.be.null;
  });

  it('test_promotion_codes_post_2', async function() {
    const promotionCode = await stripe.promotionCodes.update(
      'promo_xxxxxxxxxxxxx',
      {
        metadata: {
          order_id: '6735',
        },
      }
    );
    expect(promotionCode).not.to.be.null;
  });

  it('test_quotes_accept_post', async function() {
    const quote = await stripe.quotes.accept('qt_xxxxxxxxxxxxx');
    expect(quote).not.to.be.null;
  });

  it('test_quotes_cancel_post', async function() {
    const quote = await stripe.quotes.cancel('qt_xxxxxxxxxxxxx');
    expect(quote).not.to.be.null;
  });

  it('test_quotes_finalize_post', async function() {
    const quote = await stripe.quotes.finalizeQuote('qt_xxxxxxxxxxxxx');
    expect(quote).not.to.be.null;
  });

  it('test_quotes_get', async function() {
    const quotes = await stripe.quotes.list({
      limit: 3,
    });
    expect(quotes).not.to.be.null;
  });

  it('test_quotes_get_2', async function() {
    const quote = await stripe.quotes.retrieve('qt_xxxxxxxxxxxxx');
    expect(quote).not.to.be.null;
  });

  it('test_quotes_line_items_get', async function() {
    const lineItems = await stripe.quotes.listLineItems('qt_xxxxxxxxxxxxx');
    expect(lineItems).not.to.be.null;
  });

  it('test_quotes_pdf_get', async function() {
    const file = await stripe.quotes.pdf('qt_xxxxxxxxxxxxx');
    expect(file).not.to.be.null;
  });

  it('test_quotes_post', async function() {
    const quote = await stripe.quotes.create({
      customer: 'cus_xxxxxxxxxxxxx',
      line_items: [
        {
          price: 'price_xxxxxxxxxxxxx',
          quantity: 2,
        },
      ],
    });
    expect(quote).not.to.be.null;
  });

  it('test_quotes_post_2', async function() {
    const quote = await stripe.quotes.update('qt_xxxxxxxxxxxxx', {
      metadata: {
        order_id: '6735',
      },
    });
    expect(quote).not.to.be.null;
  });

  it('test_radar_early_fraud_warnings_get', async function() {
    const earlyFraudWarnings = await stripe.radar.earlyFraudWarnings.list({
      limit: 3,
    });
    expect(earlyFraudWarnings).not.to.be.null;
  });

  it('test_radar_early_fraud_warnings_get_2', async function() {
    const earlyFraudWarning = await stripe.radar.earlyFraudWarnings.retrieve(
      'issfr_xxxxxxxxxxxxx'
    );
    expect(earlyFraudWarning).not.to.be.null;
  });

  it('test_radar_value_list_items_delete', async function() {
    const deleted = await stripe.radar.valueListItems.del('rsli_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('test_radar_value_list_items_get', async function() {
    const valueListItems = await stripe.radar.valueListItems.list({
      limit: 3,
      value_list: 'rsl_xxxxxxxxxxxxx',
    });
    expect(valueListItems).not.to.be.null;
  });

  it('test_radar_value_list_items_get_2', async function() {
    const valueListItem = await stripe.radar.valueListItems.retrieve(
      'rsli_xxxxxxxxxxxxx'
    );
    expect(valueListItem).not.to.be.null;
  });

  it('test_radar_value_list_items_post', async function() {
    const valueListItem = await stripe.radar.valueListItems.create({
      value_list: 'rsl_xxxxxxxxxxxxx',
      value: '1.2.3.4',
    });
    expect(valueListItem).not.to.be.null;
  });

  it('test_radar_value_lists_delete', async function() {
    const deleted = await stripe.radar.valueLists.del('rsl_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('test_radar_value_lists_get', async function() {
    const valueLists = await stripe.radar.valueLists.list({
      limit: 3,
    });
    expect(valueLists).not.to.be.null;
  });

  it('test_radar_value_lists_get_2', async function() {
    const valueList = await stripe.radar.valueLists.retrieve(
      'rsl_xxxxxxxxxxxxx'
    );
    expect(valueList).not.to.be.null;
  });

  it('test_radar_value_lists_post', async function() {
    const valueList = await stripe.radar.valueLists.create({
      alias: 'custom_ip_xxxxxxxxxxxxx',
      name: 'Custom IP Blocklist',
      item_type: 'ip_address',
    });
    expect(valueList).not.to.be.null;
  });

  it('test_radar_value_lists_post_2', async function() {
    const valueList = await stripe.radar.valueLists.update(
      'rsl_xxxxxxxxxxxxx',
      {
        name: 'Updated IP Block List',
      }
    );
    expect(valueList).not.to.be.null;
  });

  it('test_refunds_cancel_post', async function() {
    const refund = await stripe.refunds.cancel('re_xxxxxxxxxxxxx');
    expect(refund).not.to.be.null;
  });

  it('test_refunds_get', async function() {
    const refunds = await stripe.refunds.list({
      limit: 3,
    });
    expect(refunds).not.to.be.null;
  });

  it('test_refunds_get_2', async function() {
    const refund = await stripe.refunds.retrieve('re_xxxxxxxxxxxxx');
    expect(refund).not.to.be.null;
  });

  it('test_refunds_post', async function() {
    const refund = await stripe.refunds.create({
      charge: 'ch_xxxxxxxxxxxxx',
    });
    expect(refund).not.to.be.null;
  });

  it('test_refunds_post_2', async function() {
    const refund = await stripe.refunds.update('re_xxxxxxxxxxxxx', {
      metadata: {
        order_id: '6735',
      },
    });
    expect(refund).not.to.be.null;
  });

  it('test_reporting_report_runs_get', async function() {
    const reportRuns = await stripe.reporting.reportRuns.list({
      limit: 3,
    });
    expect(reportRuns).not.to.be.null;
  });

  it('test_reporting_report_runs_get_2', async function() {
    const reportRun = await stripe.reporting.reportRuns.retrieve(
      'frr_xxxxxxxxxxxxx'
    );
    expect(reportRun).not.to.be.null;
  });

  it('test_reporting_report_runs_post', async function() {
    const reportRun = await stripe.reporting.reportRuns.create({
      report_type: 'balance.summary.1',
      parameters: {
        interval_start: 1522540800,
        interval_end: 1525132800,
      },
    });
    expect(reportRun).not.to.be.null;
  });

  it('test_reporting_report_types_get', async function() {
    const reportTypes = await stripe.reporting.reportTypes.list();
    expect(reportTypes).not.to.be.null;
  });

  it('test_reporting_report_types_get_2', async function() {
    const reportType = await stripe.reporting.reportTypes.retrieve(
      'balance.summary.1'
    );
    expect(reportType).not.to.be.null;
  });

  it('test_reviews_approve_post', async function() {
    const review = await stripe.reviews.approve('prv_xxxxxxxxxxxxx');
    expect(review).not.to.be.null;
  });

  it('test_reviews_get', async function() {
    const reviews = await stripe.reviews.list({
      limit: 3,
    });
    expect(reviews).not.to.be.null;
  });

  it('test_reviews_get_2', async function() {
    const review = await stripe.reviews.retrieve('prv_xxxxxxxxxxxxx');
    expect(review).not.to.be.null;
  });

  it('test_setup_attempts_get', async function() {
    const setupAttempts = await stripe.setupAttempts.list({
      limit: 3,
      setup_intent: 'si_xyz',
    });
    expect(setupAttempts).not.to.be.null;
  });

  it('test_setup_intents_cancel_post', async function() {
    const setupIntent = await stripe.setupIntents.cancel('seti_xxxxxxxxxxxxx');
    expect(setupIntent).not.to.be.null;
  });

  it('test_setup_intents_confirm_post', async function() {
    const setupIntent = await stripe.setupIntents.confirm(
      'seti_xxxxxxxxxxxxx',
      {
        payment_method: 'pm_card_visa',
      }
    );
    expect(setupIntent).not.to.be.null;
  });

  it('test_setup_intents_get', async function() {
    const setupIntents = await stripe.setupIntents.list({
      limit: 3,
    });
    expect(setupIntents).not.to.be.null;
  });

  it('test_setup_intents_get_2', async function() {
    const setupIntent = await stripe.setupIntents.retrieve(
      'seti_xxxxxxxxxxxxx'
    );
    expect(setupIntent).not.to.be.null;
  });

  it('test_setup_intents_post', async function() {
    const setupIntent = await stripe.setupIntents.create({
      payment_method_types: ['card'],
    });
    expect(setupIntent).not.to.be.null;
  });

  it('test_setup_intents_post_2', async function() {
    const setupIntent = await stripe.setupIntents.update('seti_xxxxxxxxxxxxx', {
      metadata: {
        user_id: '3435453',
      },
    });
    expect(setupIntent).not.to.be.null;
  });

  it('test_setup_intents_verify_microdeposits_post', async function() {
    const setupIntent = await stripe.setupIntents.verifyMicrodeposits(
      'seti_xxxxxxxxxxxxx'
    );
    expect(setupIntent).not.to.be.null;
  });

  it('test_setup_intents_verify_microdeposits_post_2', async function() {
    const setupIntent = await stripe.setupIntents.verifyMicrodeposits(
      'seti_xxxxxxxxxxxxx',
      {
        amounts: [32, 45],
      }
    );
    expect(setupIntent).not.to.be.null;
  });

  it('test_shipping_rates_get', async function() {
    const shippingRates = await stripe.shippingRates.list();
    expect(shippingRates).not.to.be.null;
  });

  it('test_shipping_rates_get_2', async function() {
    const shippingRates = await stripe.shippingRates.list({
      limit: 3,
    });
    expect(shippingRates).not.to.be.null;
  });

  it('test_shipping_rates_get_3', async function() {
    const shippingRate = await stripe.shippingRates.retrieve(
      'shr_xxxxxxxxxxxxx'
    );
    expect(shippingRate).not.to.be.null;
  });

  it('test_shipping_rates_post', async function() {
    const shippingRate = await stripe.shippingRates.create({
      display_name: 'Sample Shipper',
      fixed_amount: {
        currency: 'usd',
        amount: 400,
      },
      type: 'fixed_amount',
    });
    expect(shippingRate).not.to.be.null;
  });

  it('test_shipping_rates_post_2', async function() {
    const shippingRate = await stripe.shippingRates.create({
      display_name: 'Ground shipping',
      type: 'fixed_amount',
      fixed_amount: {
        amount: 500,
        currency: 'usd',
      },
    });
    expect(shippingRate).not.to.be.null;
  });

  it('test_shipping_rates_post_3', async function() {
    const shippingRate = await stripe.shippingRates.update(
      'shr_xxxxxxxxxxxxx',
      {
        metadata: {
          order_id: '6735',
        },
      }
    );
    expect(shippingRate).not.to.be.null;
  });

  it('test_sigma_scheduled_query_runs_get', async function() {
    const scheduledQueryRuns = await stripe.sigma.scheduledQueryRuns.list({
      limit: 3,
    });
    expect(scheduledQueryRuns).not.to.be.null;
  });

  it('test_sigma_scheduled_query_runs_get_2', async function() {
    const scheduledQueryRun = await stripe.sigma.scheduledQueryRuns.retrieve(
      'sqr_xxxxxxxxxxxxx'
    );
    expect(scheduledQueryRun).not.to.be.null;
  });

  it('test_sources_get', async function() {
    const source = await stripe.sources.retrieve('src_xxxxxxxxxxxxx');
    expect(source).not.to.be.null;
  });

  it('test_sources_get_2', async function() {
    const source = await stripe.sources.retrieve('src_xxxxxxxxxxxxx');
    expect(source).not.to.be.null;
  });

  it('test_sources_post', async function() {
    const source = await stripe.sources.update('src_xxxxxxxxxxxxx', {
      metadata: {
        order_id: '6735',
      },
    });
    expect(source).not.to.be.null;
  });

  it('test_subscription_items_delete', async function() {
    const deleted = await stripe.subscriptionItems.del('si_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('test_subscription_items_get', async function() {
    const subscriptionItems = await stripe.subscriptionItems.list({
      subscription: 'sub_xxxxxxxxxxxxx',
    });
    expect(subscriptionItems).not.to.be.null;
  });

  it('test_subscription_items_get_2', async function() {
    const subscriptionItem = await stripe.subscriptionItems.retrieve(
      'si_xxxxxxxxxxxxx'
    );
    expect(subscriptionItem).not.to.be.null;
  });

  it('test_subscription_items_post', async function() {
    const subscriptionItem = await stripe.subscriptionItems.create({
      subscription: 'sub_xxxxxxxxxxxxx',
      price: 'price_xxxxxxxxxxxxx',
      quantity: 2,
    });
    expect(subscriptionItem).not.to.be.null;
  });

  it('test_subscription_items_post_2', async function() {
    const subscriptionItem = await stripe.subscriptionItems.update(
      'si_xxxxxxxxxxxxx',
      {
        metadata: {
          order_id: '6735',
        },
      }
    );
    expect(subscriptionItem).not.to.be.null;
  });

  it('test_subscription_schedules_cancel_post', async function() {
    const subscriptionSchedule = await stripe.subscriptionSchedules.cancel(
      'sub_sched_xxxxxxxxxxxxx'
    );
    expect(subscriptionSchedule).not.to.be.null;
  });

  it('test_subscription_schedules_get', async function() {
    const subscriptionSchedules = await stripe.subscriptionSchedules.list({
      limit: 3,
    });
    expect(subscriptionSchedules).not.to.be.null;
  });

  it('test_subscription_schedules_get_2', async function() {
    const subscriptionSchedule = await stripe.subscriptionSchedules.retrieve(
      'sub_sched_xxxxxxxxxxxxx'
    );
    expect(subscriptionSchedule).not.to.be.null;
  });

  it('test_subscription_schedules_post', async function() {
    const subscriptionSchedule = await stripe.subscriptionSchedules.create({
      customer: 'cus_xxxxxxxxxxxxx',
      start_date: 1676070661,
      end_behavior: 'release',
      phases: [
        {
          items: [
            {
              price: 'price_xxxxxxxxxxxxx',
              quantity: 1,
            },
          ],
        },
      ],
    });
    expect(subscriptionSchedule).not.to.be.null;
  });

  it('test_subscription_schedules_post_2', async function() {
    const subscriptionSchedule = await stripe.subscriptionSchedules.update(
      'sub_sched_xxxxxxxxxxxxx',
      {
        end_behavior: 'release',
      }
    );
    expect(subscriptionSchedule).not.to.be.null;
  });

  it('test_subscription_schedules_release_post', async function() {
    const subscriptionSchedule = await stripe.subscriptionSchedules.release(
      'sub_sched_xxxxxxxxxxxxx'
    );
    expect(subscriptionSchedule).not.to.be.null;
  });

  it('test_subscriptions_delete', async function() {
    const subscription = await stripe.subscriptions.cancel('sub_xxxxxxxxxxxxx');
    expect(subscription).not.to.be.null;
  });

  it('test_subscriptions_discount_delete', async function() {
    const deleted = await stripe.subscriptions.deleteDiscount('sub_xyz');
    expect(deleted).not.to.be.null;
  });

  it('test_subscriptions_get', async function() {
    const subscriptions = await stripe.subscriptions.list({
      limit: 3,
    });
    expect(subscriptions).not.to.be.null;
  });

  it('test_subscriptions_get_2', async function() {
    const subscription = await stripe.subscriptions.retrieve(
      'sub_xxxxxxxxxxxxx'
    );
    expect(subscription).not.to.be.null;
  });

  it('test_subscriptions_post', async function() {
    const subscription = await stripe.subscriptions.create({
      customer: 'cus_xxxxxxxxxxxxx',
      items: [
        {
          price: 'price_xxxxxxxxxxxxx',
        },
      ],
    });
    expect(subscription).not.to.be.null;
  });

  it('test_subscriptions_post_2', async function() {
    const subscription = await stripe.subscriptions.update(
      'sub_xxxxxxxxxxxxx',
      {
        metadata: {
          order_id: '6735',
        },
      }
    );
    expect(subscription).not.to.be.null;
  });

  it('test_subscriptions_search_get', async function() {
    const subscriptions = await stripe.subscriptions.search({
      query: "status:'active' AND metadata['order_id']:'6735'",
    });
    expect(subscriptions).not.to.be.null;
  });

  it('test_tax_calculations_line_items_get', async function() {
    const calculationLineItems = await stripe.tax.calculations.listLineItems(
      'xxx'
    );
    expect(calculationLineItems).not.to.be.null;
  });

  it('test_tax_calculations_post', async function() {
    const calculation = await stripe.tax.calculations.create({
      currency: 'usd',
      line_items: [
        {
          amount: 1000,
          reference: 'L1',
        },
      ],
      customer_details: {
        address: {
          line1: '354 Oyster Point Blvd',
          city: 'South San Francisco',
          state: 'CA',
          postal_code: '94080',
          country: 'US',
        },
        address_source: 'shipping',
      },
    });
    expect(calculation).not.to.be.null;
  });

  it('test_tax_codes_get', async function() {
    const taxCodes = await stripe.taxCodes.list({
      limit: 3,
    });
    expect(taxCodes).not.to.be.null;
  });

  it('test_tax_codes_get_2', async function() {
    const taxCode = await stripe.taxCodes.retrieve('txcd_xxxxxxxxxxxxx');
    expect(taxCode).not.to.be.null;
  });

  it('test_tax_ids_delete', async function() {
    const deleted = await stripe.taxIds.del('taxid_123');
    expect(deleted).not.to.be.null;
  });

  it('test_tax_ids_get', async function() {
    const taxIds = await stripe.taxIds.list();
    expect(taxIds).not.to.be.null;
  });

  it('test_tax_ids_get_2', async function() {
    const taxId = await stripe.taxIds.retrieve('taxid_123');
    expect(taxId).not.to.be.null;
  });

  it('test_tax_ids_post', async function() {
    const taxId = await stripe.taxIds.create({
      type: 'eu_vat',
      value: '123',
    });
    expect(taxId).not.to.be.null;
  });

  it('test_tax_rates_get', async function() {
    const taxRates = await stripe.taxRates.list({
      limit: 3,
    });
    expect(taxRates).not.to.be.null;
  });

  it('test_tax_rates_get_2', async function() {
    const taxRate = await stripe.taxRates.retrieve('txr_xxxxxxxxxxxxx');
    expect(taxRate).not.to.be.null;
  });

  it('test_tax_rates_post', async function() {
    const taxRate = await stripe.taxRates.create({
      display_name: 'VAT',
      description: 'VAT Germany',
      jurisdiction: 'DE',
      percentage: 16,
      inclusive: false,
    });
    expect(taxRate).not.to.be.null;
  });

  it('test_tax_rates_post_2', async function() {
    const taxRate = await stripe.taxRates.update('txr_xxxxxxxxxxxxx', {
      active: false,
    });
    expect(taxRate).not.to.be.null;
  });

  it('test_tax_registrations_get', async function() {
    const registrations = await stripe.tax.registrations.list({
      status: 'all',
    });
    expect(registrations).not.to.be.null;
  });

  it('test_tax_registrations_post', async function() {
    const registration = await stripe.tax.registrations.create({
      country: 'IE',
      country_options: {
        ie: {
          type: 'oss_union',
        },
      },
      active_from: 'now',
    });
    expect(registration).not.to.be.null;
  });

  it('test_tax_registrations_post_2', async function() {
    const registration = await stripe.tax.registrations.update(
      'taxreg_xxxxxxxxxxxxx',
      {
        expires_at: 'now',
      }
    );
    expect(registration).not.to.be.null;
  });

  it('test_tax_settings_get', async function() {
    const settings = await stripe.tax.settings.retrieve();
    expect(settings).not.to.be.null;
  });

  it('test_tax_settings_post', async function() {
    const settings = await stripe.tax.settings.update({
      defaults: {
        tax_code: 'txcd_10000000',
      },
    });
    expect(settings).not.to.be.null;
  });

  it('test_tax_transactions_create_from_calculation_post', async function() {
    const transaction = await stripe.tax.transactions.createFromCalculation({
      calculation: 'xxx',
      reference: 'yyy',
    });
    expect(transaction).not.to.be.null;
  });

  it('test_terminal_configurations_delete', async function() {
    const deleted = await stripe.terminal.configurations.del('uc_123');
    expect(deleted).not.to.be.null;
  });

  it('test_terminal_configurations_delete_2', async function() {
    const deleted = await stripe.terminal.configurations.del(
      'tmc_xxxxxxxxxxxxx'
    );
    expect(deleted).not.to.be.null;
  });

  it('test_terminal_configurations_get', async function() {
    const configurations = await stripe.terminal.configurations.list();
    expect(configurations).not.to.be.null;
  });

  it('test_terminal_configurations_get_2', async function() {
    const configuration = await stripe.terminal.configurations.retrieve(
      'uc_123'
    );
    expect(configuration).not.to.be.null;
  });

  it('test_terminal_configurations_get_3', async function() {
    const configurations = await stripe.terminal.configurations.list({
      limit: 3,
    });
    expect(configurations).not.to.be.null;
  });

  it('test_terminal_configurations_get_4', async function() {
    const configuration = await stripe.terminal.configurations.retrieve(
      'tmc_xxxxxxxxxxxxx'
    );
    expect(configuration).not.to.be.null;
  });

  it('test_terminal_configurations_post', async function() {
    const configuration = await stripe.terminal.configurations.create();
    expect(configuration).not.to.be.null;
  });

  it('test_terminal_configurations_post_2', async function() {
    const configuration = await stripe.terminal.configurations.update(
      'uc_123',
      {
        tipping: {
          usd: {
            fixed_amounts: [10],
          },
        },
      }
    );
    expect(configuration).not.to.be.null;
  });

  it('test_terminal_configurations_post_3', async function() {
    const configuration = await stripe.terminal.configurations.create({
      bbpos_wisepos_e: {
        splashscreen: 'file_xxxxxxxxxxxxx',
      },
    });
    expect(configuration).not.to.be.null;
  });

  it('test_terminal_configurations_post_4', async function() {
    const configuration = await stripe.terminal.configurations.update(
      'tmc_xxxxxxxxxxxxx',
      {
        bbpos_wisepos_e: {
          splashscreen: 'file_xxxxxxxxxxxxx',
        },
      }
    );
    expect(configuration).not.to.be.null;
  });

  it('test_terminal_connection_tokens_post', async function() {
    const connectionToken = await stripe.terminal.connectionTokens.create();
    expect(connectionToken).not.to.be.null;
  });

  it('test_terminal_locations_delete', async function() {
    const deleted = await stripe.terminal.locations.del('tml_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('test_terminal_locations_get', async function() {
    const locations = await stripe.terminal.locations.list({
      limit: 3,
    });
    expect(locations).not.to.be.null;
  });

  it('test_terminal_locations_get_2', async function() {
    const location = await stripe.terminal.locations.retrieve(
      'tml_xxxxxxxxxxxxx'
    );
    expect(location).not.to.be.null;
  });

  it('test_terminal_locations_post', async function() {
    const location = await stripe.terminal.locations.create({
      display_name: 'My First Store',
      address: {
        line1: '1234 Main Street',
        city: 'San Francisco',
        postal_code: '94111',
        state: 'CA',
        country: 'US',
      },
    });
    expect(location).not.to.be.null;
  });

  it('test_terminal_locations_post_2', async function() {
    const location = await stripe.terminal.locations.update(
      'tml_xxxxxxxxxxxxx',
      {
        display_name: 'My First Store',
      }
    );
    expect(location).not.to.be.null;
  });

  it('test_terminal_readers_cancel_action_post', async function() {
    const reader = await stripe.terminal.readers.cancelAction(
      'tmr_xxxxxxxxxxxxx'
    );
    expect(reader).not.to.be.null;
  });

  it('test_terminal_readers_delete', async function() {
    const deleted = await stripe.terminal.readers.del('tmr_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('test_terminal_readers_get', async function() {
    const readers = await stripe.terminal.readers.list({
      limit: 3,
    });
    expect(readers).not.to.be.null;
  });

  it('test_terminal_readers_get_2', async function() {
    const reader = await stripe.terminal.readers.retrieve('tmr_xxxxxxxxxxxxx');
    expect(reader).not.to.be.null;
  });

  it('test_terminal_readers_post', async function() {
    const reader = await stripe.terminal.readers.create({
      registration_code: 'puppies-plug-could',
      label: 'Blue Rabbit',
      location: 'tml_1234',
    });
    expect(reader).not.to.be.null;
  });

  it('test_terminal_readers_post_2', async function() {
    const reader = await stripe.terminal.readers.update('tmr_xxxxxxxxxxxxx', {
      label: 'Blue Rabbit',
    });
    expect(reader).not.to.be.null;
  });

  it('test_terminal_readers_process_payment_intent_post', async function() {
    const reader = await stripe.terminal.readers.processPaymentIntent(
      'tmr_xxxxxxxxxxxxx',
      {
        payment_intent: 'pi_xxxxxxxxxxxxx',
      }
    );
    expect(reader).not.to.be.null;
  });

  it('test_terminal_readers_process_setup_intent_post', async function() {
    const reader = await stripe.terminal.readers.processSetupIntent(
      'tmr_xxxxxxxxxxxxx',
      {
        setup_intent: 'seti_xxxxxxxxxxxxx',
        allow_redisplay: 'always',
      }
    );
    expect(reader).not.to.be.null;
  });

  it('test_test_helpers_customers_fund_cash_balance_post', async function() {
    const customerCashBalanceTransaction = await stripe.testHelpers.customers.fundCashBalance(
      'cus_123',
      {
        amount: 30,
        currency: 'eur',
      }
    );
    expect(customerCashBalanceTransaction).not.to.be.null;
  });

  it('test_test_helpers_issuing_authorizations_capture_post', async function() {
    const authorization = await stripe.testHelpers.issuing.authorizations.capture(
      'example_authorization',
      {
        capture_amount: 100,
        close_authorization: true,
        purchase_details: {
          flight: {
            departure_at: 1633651200,
            passenger_name: 'John Doe',
            refundable: true,
            segments: [
              {
                arrival_airport_code: 'SFO',
                carrier: 'Delta',
                departure_airport_code: 'LAX',
                flight_number: 'DL100',
                service_class: 'Economy',
                stopover_allowed: true,
              },
            ],
            travel_agency: 'Orbitz',
          },
          fuel: {
            type: 'diesel',
            unit: 'liter',
            unit_cost_decimal: '3.5',
            quantity_decimal: '10',
          },
          lodging: {
            check_in_at: 1633651200,
            nights: 2,
          },
          receipt: [
            {
              description: 'Room charge',
              quantity: '1',
              total: 200,
              unit_cost: 200,
            },
          ],
          reference: 'foo',
        },
      }
    );
    expect(authorization).not.to.be.null;
  });

  it('test_test_helpers_issuing_authorizations_expire_post', async function() {
    const authorization = await stripe.testHelpers.issuing.authorizations.expire(
      'example_authorization'
    );
    expect(authorization).not.to.be.null;
  });

  it('test_test_helpers_issuing_authorizations_increment_post', async function() {
    const authorization = await stripe.testHelpers.issuing.authorizations.increment(
      'example_authorization',
      {
        increment_amount: 50,
        is_amount_controllable: true,
      }
    );
    expect(authorization).not.to.be.null;
  });

  it('test_test_helpers_issuing_authorizations_post', async function() {
    const authorization = await stripe.testHelpers.issuing.authorizations.create(
      {
        amount: 100,
        amount_details: {
          atm_fee: 10,
          cashback_amount: 5,
        },
        authorization_method: 'chip',
        card: 'foo',
        currency: 'usd',
        is_amount_controllable: true,
        merchant_data: {
          category: 'ac_refrigeration_repair',
          city: 'foo',
          country: 'bar',
          name: 'foo',
          network_id: 'bar',
          postal_code: 'foo',
          state: 'bar',
          terminal_id: 'foo',
        },
        network_data: {
          acquiring_institution_id: 'foo',
        },
        verification_data: {
          address_line1_check: 'mismatch',
          address_postal_code_check: 'match',
          cvc_check: 'match',
          expiry_check: 'mismatch',
        },
        wallet: 'apple_pay',
      }
    );
    expect(authorization).not.to.be.null;
  });

  it('test_test_helpers_issuing_authorizations_reverse_post', async function() {
    const authorization = await stripe.testHelpers.issuing.authorizations.reverse(
      'example_authorization',
      {
        reverse_amount: 20,
      }
    );
    expect(authorization).not.to.be.null;
  });

  it('test_test_helpers_issuing_cards_shipping_deliver_post', async function() {
    const card = await stripe.testHelpers.issuing.cards.deliverCard('card_123');
    expect(card).not.to.be.null;
  });

  it('test_test_helpers_issuing_cards_shipping_fail_post', async function() {
    const card = await stripe.testHelpers.issuing.cards.failCard('card_123');
    expect(card).not.to.be.null;
  });

  it('test_test_helpers_issuing_cards_shipping_return_post', async function() {
    const card = await stripe.testHelpers.issuing.cards.returnCard('card_123');
    expect(card).not.to.be.null;
  });

  it('test_test_helpers_issuing_cards_shipping_ship_post', async function() {
    const card = await stripe.testHelpers.issuing.cards.shipCard('card_123');
    expect(card).not.to.be.null;
  });

  it('test_test_helpers_issuing_personalization_designs_activate_post', async function() {
    const personalizationDesign = await stripe.testHelpers.issuing.personalizationDesigns.activate(
      'pd_xyz'
    );
    expect(personalizationDesign).not.to.be.null;
  });

  it('test_test_helpers_issuing_personalization_designs_deactivate_post', async function() {
    const personalizationDesign = await stripe.testHelpers.issuing.personalizationDesigns.deactivate(
      'pd_xyz'
    );
    expect(personalizationDesign).not.to.be.null;
  });

  it('test_test_helpers_issuing_personalization_designs_reject_post', async function() {
    const personalizationDesign = await stripe.testHelpers.issuing.personalizationDesigns.reject(
      'pd_xyz',
      {
        rejection_reasons: {
          card_logo: ['geographic_location'],
        },
      }
    );
    expect(personalizationDesign).not.to.be.null;
  });

  it('test_test_helpers_issuing_transactions_create_force_capture_post', async function() {
    const transaction = await stripe.testHelpers.issuing.transactions.createForceCapture(
      {
        amount: 100,
        card: 'foo',
        currency: 'usd',
        merchant_data: {
          category: 'ac_refrigeration_repair',
          city: 'foo',
          country: 'US',
          name: 'foo',
          network_id: 'bar',
          postal_code: '10001',
          state: 'NY',
          terminal_id: 'foo',
        },
        purchase_details: {
          flight: {
            departure_at: 1633651200,
            passenger_name: 'John Doe',
            refundable: true,
            segments: [
              {
                arrival_airport_code: 'SFO',
                carrier: 'Delta',
                departure_airport_code: 'LAX',
                flight_number: 'DL100',
                service_class: 'Economy',
                stopover_allowed: true,
              },
            ],
            travel_agency: 'Orbitz',
          },
          fuel: {
            type: 'diesel',
            unit: 'liter',
            unit_cost_decimal: '3.5',
            quantity_decimal: '10',
          },
          lodging: {
            check_in_at: 1533651200,
            nights: 2,
          },
          receipt: [
            {
              description: 'Room charge',
              quantity: '1',
              total: 200,
              unit_cost: 200,
            },
          ],
          reference: 'foo',
        },
      }
    );
    expect(transaction).not.to.be.null;
  });

  it('test_test_helpers_issuing_transactions_create_unlinked_refund_post', async function() {
    const transaction = await stripe.testHelpers.issuing.transactions.createUnlinkedRefund(
      {
        amount: 100,
        card: 'foo',
        currency: 'usd',
        merchant_data: {
          category: 'ac_refrigeration_repair',
          city: 'foo',
          country: 'bar',
          name: 'foo',
          network_id: 'bar',
          postal_code: 'foo',
          state: 'bar',
          terminal_id: 'foo',
        },
        purchase_details: {
          flight: {
            departure_at: 1533651200,
            passenger_name: 'John Doe',
            refundable: true,
            segments: [
              {
                arrival_airport_code: 'SFO',
                carrier: 'Delta',
                departure_airport_code: 'LAX',
                flight_number: 'DL100',
                service_class: 'Economy',
                stopover_allowed: true,
              },
            ],
            travel_agency: 'Orbitz',
          },
          fuel: {
            type: 'diesel',
            unit: 'liter',
            unit_cost_decimal: '3.5',
            quantity_decimal: '10',
          },
          lodging: {
            check_in_at: 1533651200,
            nights: 2,
          },
          receipt: [
            {
              description: 'Room charge',
              quantity: '1',
              total: 200,
              unit_cost: 200,
            },
          ],
          reference: 'foo',
        },
      }
    );
    expect(transaction).not.to.be.null;
  });

  it('test_test_helpers_issuing_transactions_refund_post', async function() {
    const transaction = await stripe.testHelpers.issuing.transactions.refund(
      'example_transaction',
      {
        refund_amount: 50,
      }
    );
    expect(transaction).not.to.be.null;
  });

  it('test_test_helpers_refunds_expire_post', async function() {
    const refund = await stripe.testHelpers.refunds.expire('re_123');
    expect(refund).not.to.be.null;
  });

  it('test_test_helpers_test_clocks_advance_post', async function() {
    const testClock = await stripe.testHelpers.testClocks.advance('clock_xyz', {
      frozen_time: 142,
    });
    expect(testClock).not.to.be.null;
  });

  it('test_test_helpers_test_clocks_advance_post_2', async function() {
    const testClock = await stripe.testHelpers.testClocks.advance(
      'clock_xxxxxxxxxxxxx',
      {
        frozen_time: 1675552261,
      }
    );
    expect(testClock).not.to.be.null;
  });

  it('test_test_helpers_test_clocks_delete', async function() {
    const deleted = await stripe.testHelpers.testClocks.del('clock_xyz');
    expect(deleted).not.to.be.null;
  });

  it('test_test_helpers_test_clocks_delete_2', async function() {
    const deleted = await stripe.testHelpers.testClocks.del(
      'clock_xxxxxxxxxxxxx'
    );
    expect(deleted).not.to.be.null;
  });

  it('test_test_helpers_test_clocks_get', async function() {
    const testClocks = await stripe.testHelpers.testClocks.list();
    expect(testClocks).not.to.be.null;
  });

  it('test_test_helpers_test_clocks_get_2', async function() {
    const testClock = await stripe.testHelpers.testClocks.retrieve('clock_xyz');
    expect(testClock).not.to.be.null;
  });

  it('test_test_helpers_test_clocks_get_3', async function() {
    const testClocks = await stripe.testHelpers.testClocks.list({
      limit: 3,
    });
    expect(testClocks).not.to.be.null;
  });

  it('test_test_helpers_test_clocks_get_4', async function() {
    const testClock = await stripe.testHelpers.testClocks.retrieve(
      'clock_xxxxxxxxxxxxx'
    );
    expect(testClock).not.to.be.null;
  });

  it('test_test_helpers_test_clocks_post', async function() {
    const testClock = await stripe.testHelpers.testClocks.create({
      frozen_time: 123,
      name: 'cogsworth',
    });
    expect(testClock).not.to.be.null;
  });

  it('test_test_helpers_test_clocks_post_2', async function() {
    const testClock = await stripe.testHelpers.testClocks.create({
      frozen_time: 1577836800,
    });
    expect(testClock).not.to.be.null;
  });

  it('test_test_helpers_treasury_inbound_transfers_fail_post', async function() {
    const inboundTransfer = await stripe.testHelpers.treasury.inboundTransfers.fail(
      'ibt_123',
      {
        failure_details: {
          code: 'account_closed',
        },
      }
    );
    expect(inboundTransfer).not.to.be.null;
  });

  it('test_test_helpers_treasury_inbound_transfers_return_post', async function() {
    const inboundTransfer = await stripe.testHelpers.treasury.inboundTransfers.returnInboundTransfer(
      'ibt_123'
    );
    expect(inboundTransfer).not.to.be.null;
  });

  it('test_test_helpers_treasury_inbound_transfers_succeed_post', async function() {
    const inboundTransfer = await stripe.testHelpers.treasury.inboundTransfers.succeed(
      'ibt_123'
    );
    expect(inboundTransfer).not.to.be.null;
  });

  it('test_test_helpers_treasury_outbound_transfers_fail_post', async function() {
    const outboundTransfer = await stripe.testHelpers.treasury.outboundTransfers.fail(
      'obt_123'
    );
    expect(outboundTransfer).not.to.be.null;
  });

  it('test_test_helpers_treasury_outbound_transfers_post_post', async function() {
    const outboundTransfer = await stripe.testHelpers.treasury.outboundTransfers.post(
      'obt_123'
    );
    expect(outboundTransfer).not.to.be.null;
  });

  it('test_test_helpers_treasury_outbound_transfers_return_post', async function() {
    const outboundTransfer = await stripe.testHelpers.treasury.outboundTransfers.returnOutboundTransfer(
      'obt_123',
      {
        returned_details: {
          code: 'account_closed',
        },
      }
    );
    expect(outboundTransfer).not.to.be.null;
  });

  it('test_test_helpers_treasury_received_credits_post', async function() {
    const receivedCredit = await stripe.testHelpers.treasury.receivedCredits.create(
      {
        financial_account: 'fa_123',
        network: 'ach',
        amount: 1234,
        currency: 'usd',
      }
    );
    expect(receivedCredit).not.to.be.null;
  });

  it('test_test_helpers_treasury_received_debits_post', async function() {
    const receivedDebit = await stripe.testHelpers.treasury.receivedDebits.create(
      {
        financial_account: 'fa_123',
        network: 'ach',
        amount: 1234,
        currency: 'usd',
      }
    );
    expect(receivedDebit).not.to.be.null;
  });

  it('test_tokens_get', async function() {
    const token = await stripe.tokens.retrieve('tok_xxxx');
    expect(token).not.to.be.null;
  });

  it('test_tokens_post', async function() {
    const token = await stripe.tokens.create({
      card: {
        number: '4242424242424242',
        exp_month: '5',
        exp_year: '2023',
        cvc: '314',
      },
    });
    expect(token).not.to.be.null;
  });

  it('test_tokens_post_2', async function() {
    const token = await stripe.tokens.create({
      bank_account: {
        country: 'US',
        currency: 'usd',
        account_holder_name: 'Jenny Rosen',
        account_holder_type: 'individual',
        routing_number: '110000000',
        account_number: '000123456789',
      },
    });
    expect(token).not.to.be.null;
  });

  it('test_tokens_post_3', async function() {
    const token = await stripe.tokens.create({
      pii: {
        id_number: '000000000',
      },
    });
    expect(token).not.to.be.null;
  });

  it('test_tokens_post_4', async function() {
    const token = await stripe.tokens.create({
      account: {
        individual: {
          first_name: 'Jane',
          last_name: 'Doe',
        },
        tos_shown_and_accepted: true,
      },
    });
    expect(token).not.to.be.null;
  });

  it('test_tokens_post_5', async function() {
    const token = await stripe.tokens.create({
      person: {
        first_name: 'Jane',
        last_name: 'Doe',
        relationship: {
          owner: true,
        },
      },
    });
    expect(token).not.to.be.null;
  });

  it('test_tokens_post_6', async function() {
    const token = await stripe.tokens.create({
      cvc_update: {
        cvc: '123',
      },
    });
    expect(token).not.to.be.null;
  });

  it('test_topups_cancel_post', async function() {
    const topup = await stripe.topups.cancel('tu_xxxxxxxxxxxxx');
    expect(topup).not.to.be.null;
  });

  it('test_topups_get', async function() {
    const topups = await stripe.topups.list({
      limit: 3,
    });
    expect(topups).not.to.be.null;
  });

  it('test_topups_get_2', async function() {
    const topup = await stripe.topups.retrieve('tu_xxxxxxxxxxxxx');
    expect(topup).not.to.be.null;
  });

  it('test_topups_post', async function() {
    const topup = await stripe.topups.create({
      amount: 2000,
      currency: 'usd',
      description: 'Top-up for Jenny Rosen',
      statement_descriptor: 'Top-up',
    });
    expect(topup).not.to.be.null;
  });

  it('test_topups_post_2', async function() {
    const topup = await stripe.topups.update('tu_xxxxxxxxxxxxx', {
      metadata: {
        order_id: '6735',
      },
    });
    expect(topup).not.to.be.null;
  });

  it('test_transfers_get', async function() {
    const transfers = await stripe.transfers.list({
      limit: 3,
    });
    expect(transfers).not.to.be.null;
  });

  it('test_transfers_get_2', async function() {
    const transfer = await stripe.transfers.retrieve('tr_xxxxxxxxxxxxx');
    expect(transfer).not.to.be.null;
  });

  it('test_transfers_post', async function() {
    const transfer = await stripe.transfers.create({
      amount: 400,
      currency: 'usd',
      destination: 'acct_xxxxxxxxxxxxx',
      transfer_group: 'ORDER_95',
    });
    expect(transfer).not.to.be.null;
  });

  it('test_transfers_post_2', async function() {
    const transfer = await stripe.transfers.update('tr_xxxxxxxxxxxxx', {
      metadata: {
        order_id: '6735',
      },
    });
    expect(transfer).not.to.be.null;
  });

  it('test_transfers_reversals_get', async function() {
    const transferReversals = await stripe.transfers.listReversals(
      'tr_xxxxxxxxxxxxx',
      {
        limit: 3,
      }
    );
    expect(transferReversals).not.to.be.null;
  });

  it('test_transfers_reversals_get_2', async function() {
    const transferReversal = await stripe.transfers.retrieveReversal(
      'tr_xxxxxxxxxxxxx',
      'trr_xxxxxxxxxxxxx'
    );
    expect(transferReversal).not.to.be.null;
  });

  it('test_transfers_reversals_post', async function() {
    const transferReversal = await stripe.transfers.createReversal(
      'tr_xxxxxxxxxxxxx',
      {
        amount: 100,
      }
    );
    expect(transferReversal).not.to.be.null;
  });

  it('test_transfers_reversals_post_2', async function() {
    const transferReversal = await stripe.transfers.updateReversal(
      'tr_xxxxxxxxxxxxx',
      'trr_xxxxxxxxxxxxx',
      {
        metadata: {
          order_id: '6735',
        },
      }
    );
    expect(transferReversal).not.to.be.null;
  });

  it('test_treasury_credit_reversals_get', async function() {
    const creditReversals = await stripe.treasury.creditReversals.list({
      financial_account: 'fa_xxxxxxxxxxxxx',
      limit: 3,
    });
    expect(creditReversals).not.to.be.null;
  });

  it('test_treasury_credit_reversals_get_2', async function() {
    const creditReversal = await stripe.treasury.creditReversals.retrieve(
      'credrev_xxxxxxxxxxxxx'
    );
    expect(creditReversal).not.to.be.null;
  });

  it('test_treasury_credit_reversals_post', async function() {
    const creditReversal = await stripe.treasury.creditReversals.create({
      received_credit: 'rc_xxxxxxxxxxxxx',
    });
    expect(creditReversal).not.to.be.null;
  });

  it('test_treasury_debit_reversals_get', async function() {
    const debitReversals = await stripe.treasury.debitReversals.list({
      financial_account: 'fa_xxxxxxxxxxxxx',
      limit: 3,
    });
    expect(debitReversals).not.to.be.null;
  });

  it('test_treasury_debit_reversals_get_2', async function() {
    const debitReversal = await stripe.treasury.debitReversals.retrieve(
      'debrev_xxxxxxxxxxxxx'
    );
    expect(debitReversal).not.to.be.null;
  });

  it('test_treasury_debit_reversals_post', async function() {
    const debitReversal = await stripe.treasury.debitReversals.create({
      received_debit: 'rd_xxxxxxxxxxxxx',
    });
    expect(debitReversal).not.to.be.null;
  });

  it('test_treasury_financial_accounts_features_get', async function() {
    const financialAccountFeatures = await stripe.treasury.financialAccounts.retrieveFeatures(
      'fa_xxxxxxxxxxxxx'
    );
    expect(financialAccountFeatures).not.to.be.null;
  });

  it('test_treasury_financial_accounts_get', async function() {
    const financialAccounts = await stripe.treasury.financialAccounts.list({
      limit: 3,
    });
    expect(financialAccounts).not.to.be.null;
  });

  it('test_treasury_financial_accounts_get_2', async function() {
    const financialAccount = await stripe.treasury.financialAccounts.retrieve(
      'fa_xxxxxxxxxxxxx'
    );
    expect(financialAccount).not.to.be.null;
  });

  it('test_treasury_financial_accounts_post', async function() {
    const financialAccount = await stripe.treasury.financialAccounts.create({
      supported_currencies: ['usd'],
      features: {},
    });
    expect(financialAccount).not.to.be.null;
  });

  it('test_treasury_financial_accounts_post_2', async function() {
    const financialAccount = await stripe.treasury.financialAccounts.update(
      'fa_xxxxxxxxxxxxx',
      {
        metadata: {
          order_id: '6735',
        },
      }
    );
    expect(financialAccount).not.to.be.null;
  });

  it('test_treasury_inbound_transfers_cancel_post', async function() {
    const inboundTransfer = await stripe.treasury.inboundTransfers.cancel(
      'ibt_xxxxxxxxxxxxx'
    );
    expect(inboundTransfer).not.to.be.null;
  });

  it('test_treasury_inbound_transfers_get', async function() {
    const inboundTransfers = await stripe.treasury.inboundTransfers.list({
      financial_account: 'fa_xxxxxxxxxxxxx',
      limit: 3,
    });
    expect(inboundTransfers).not.to.be.null;
  });

  it('test_treasury_inbound_transfers_get_2', async function() {
    const inboundTransfer = await stripe.treasury.inboundTransfers.retrieve(
      'ibt_xxxxxxxxxxxxx'
    );
    expect(inboundTransfer).not.to.be.null;
  });

  it('test_treasury_inbound_transfers_post', async function() {
    const inboundTransfer = await stripe.treasury.inboundTransfers.create({
      financial_account: 'fa_xxxxxxxxxxxxx',
      amount: 10000,
      currency: 'usd',
      origin_payment_method: 'pm_xxxxxxxxxxxxx',
      description: 'InboundTransfer from my bank account',
    });
    expect(inboundTransfer).not.to.be.null;
  });

  it('test_treasury_outbound_payments_cancel_post', async function() {
    const outboundPayment = await stripe.treasury.outboundPayments.cancel(
      'bot_xxxxxxxxxxxxx'
    );
    expect(outboundPayment).not.to.be.null;
  });

  it('test_treasury_outbound_payments_get', async function() {
    const outboundPayments = await stripe.treasury.outboundPayments.list({
      financial_account: 'fa_xxxxxxxxxxxxx',
      limit: 3,
    });
    expect(outboundPayments).not.to.be.null;
  });

  it('test_treasury_outbound_payments_get_2', async function() {
    const outboundPayment = await stripe.treasury.outboundPayments.retrieve(
      'bot_xxxxxxxxxxxxx'
    );
    expect(outboundPayment).not.to.be.null;
  });

  it('test_treasury_outbound_payments_post', async function() {
    const outboundPayment = await stripe.treasury.outboundPayments.create({
      financial_account: 'fa_xxxxxxxxxxxxx',
      amount: 10000,
      currency: 'usd',
      customer: 'cus_xxxxxxxxxxxxx',
      destination_payment_method: 'pm_xxxxxxxxxxxxx',
      description: 'OutboundPayment to a 3rd party',
    });
    expect(outboundPayment).not.to.be.null;
  });

  it('test_treasury_outbound_transfers_cancel_post', async function() {
    const outboundTransfer = await stripe.treasury.outboundTransfers.cancel(
      'obt_xxxxxxxxxxxxx'
    );
    expect(outboundTransfer).not.to.be.null;
  });

  it('test_treasury_outbound_transfers_get', async function() {
    const outboundTransfers = await stripe.treasury.outboundTransfers.list({
      financial_account: 'fa_xxxxxxxxxxxxx',
      limit: 3,
    });
    expect(outboundTransfers).not.to.be.null;
  });

  it('test_treasury_outbound_transfers_get_2', async function() {
    const outboundTransfer = await stripe.treasury.outboundTransfers.retrieve(
      'obt_xxxxxxxxxxxxx'
    );
    expect(outboundTransfer).not.to.be.null;
  });

  it('test_treasury_outbound_transfers_post', async function() {
    const outboundTransfer = await stripe.treasury.outboundTransfers.create({
      financial_account: 'fa_xxxxxxxxxxxxx',
      destination_payment_method: 'pm_xxxxxxxxxxxxx',
      amount: 500,
      currency: 'usd',
      description: 'OutboundTransfer to my external bank account',
    });
    expect(outboundTransfer).not.to.be.null;
  });

  it('test_treasury_received_credits_get', async function() {
    const receivedCredits = await stripe.treasury.receivedCredits.list({
      financial_account: 'fa_xxxxxxxxxxxxx',
      limit: 3,
    });
    expect(receivedCredits).not.to.be.null;
  });

  it('test_treasury_received_credits_get_2', async function() {
    const receivedCredit = await stripe.treasury.receivedCredits.retrieve(
      'rc_xxxxxxxxxxxxx'
    );
    expect(receivedCredit).not.to.be.null;
  });

  it('test_treasury_received_debits_get', async function() {
    const receivedDebits = await stripe.treasury.receivedDebits.list({
      financial_account: 'fa_xxxxxxxxxxxxx',
      limit: 3,
    });
    expect(receivedDebits).not.to.be.null;
  });

  it('test_treasury_received_debits_get_2', async function() {
    const receivedDebit = await stripe.treasury.receivedDebits.retrieve(
      'rd_xxxxxxxxxxxxx'
    );
    expect(receivedDebit).not.to.be.null;
  });

  it('test_treasury_transaction_entries_get', async function() {
    const transactionEntries = await stripe.treasury.transactionEntries.list({
      financial_account: 'fa_xxxxxxxxxxxxx',
      limit: 3,
    });
    expect(transactionEntries).not.to.be.null;
  });

  it('test_treasury_transaction_entries_get_2', async function() {
    const transactionEntry = await stripe.treasury.transactionEntries.retrieve(
      'trxne_xxxxxxxxxxxxx'
    );
    expect(transactionEntry).not.to.be.null;
  });

  it('test_treasury_transactions_get', async function() {
    const transactions = await stripe.treasury.transactions.list({
      financial_account: 'fa_xxxxxxxxxxxxx',
      limit: 3,
    });
    expect(transactions).not.to.be.null;
  });

  it('test_treasury_transactions_get_2', async function() {
    const transaction = await stripe.treasury.transactions.retrieve(
      'trxn_xxxxxxxxxxxxx'
    );
    expect(transaction).not.to.be.null;
  });

  it('test_webhook_endpoints_delete', async function() {
    const deleted = await stripe.webhookEndpoints.del('we_xxxxxxxxxxxxx');
    expect(deleted).not.to.be.null;
  });

  it('test_webhook_endpoints_get', async function() {
    const webhookEndpoints = await stripe.webhookEndpoints.list({
      limit: 3,
    });
    expect(webhookEndpoints).not.to.be.null;
  });

  it('test_webhook_endpoints_get_2', async function() {
    const webhookEndpoint = await stripe.webhookEndpoints.retrieve(
      'we_xxxxxxxxxxxxx'
    );
    expect(webhookEndpoint).not.to.be.null;
  });

  it('test_webhook_endpoints_post', async function() {
    const webhookEndpoint = await stripe.webhookEndpoints.create({
      url: 'https://example.com/my/webhook/endpoint',
      enabled_events: ['charge.failed', 'charge.succeeded'],
    });
    expect(webhookEndpoint).not.to.be.null;
  });

  it('test_webhook_endpoints_post_2', async function() {
    const webhookEndpoint = await stripe.webhookEndpoints.update(
      'we_xxxxxxxxxxxxx',
      {
        url: 'https://example.com/new_endpoint',
      }
    );
    expect(webhookEndpoint).not.to.be.null;
  });

  it('test_v2_billing_meter_event_post', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'POST',
        path: '/v2/billing/meter_events',
        response:
          '{"created":"1970-01-12T21:42:34.472Z","event_name":"event_name","identifier":"identifier","object":"v2.billing.meter_event","payload":{"key":"payload"},"timestamp":"1970-01-01T15:18:46.294Z","livemode":true}',
      },
    ]);
    const meterEvent = await stripe.v2.billing.meterEvents.create({
      event_name: 'event_name',
      payload: {
        key: 'payload',
      },
    });
    expect(meterEvent).not.to.be.null;
  });

  it('test_v2_billing_meter_event_adjustment_post', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'POST',
        path: '/v2/billing/meter_event_adjustments',
        response:
          '{"cancel":{"identifier":"identifier"},"created":"1970-01-12T21:42:34.472Z","event_name":"event_name","id":"obj_123","object":"v2.billing.meter_event_adjustment","status":"complete","type":"cancel","livemode":true}',
      },
    ]);
    const meterEventAdjustment = await stripe.v2.billing.meterEventAdjustments.create(
      {
        cancel: {
          identifier: 'identifier',
        },
        event_name: 'event_name',
        type: 'cancel',
      }
    );
    expect(meterEventAdjustment).not.to.be.null;
  });

  it('test_v2_billing_meter_event_session_post', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'POST',
        path: '/v2/billing/meter_event_session',
        response:
          '{"authentication_token":"authentication_token","created":"1970-01-12T21:42:34.472Z","expires_at":"1970-01-10T15:36:51.170Z","id":"obj_123","object":"v2.billing.meter_event_session","livemode":true}',
      },
    ]);
    const meterEventSession = await stripe.v2.billing.meterEventSession.create();
    expect(meterEventSession).not.to.be.null;
  });

  it('test_v2_billing_meter_event_stream_post', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'POST',
        path: '/v2/billing/meter_event_stream',
        response: '{}',
      },
    ]);
    const emptyObject = await stripe.v2.billing.meterEventStream.create({
      events: [
        {
          event_name: 'event_name',
          identifier: 'identifier',
          payload: {
            key: 'payload',
          },
          timestamp: '1970-01-01T15:18:46.294Z',
        },
      ],
    });
    expect(emptyObject).to.eql({});
  });

  it('test_v2_core_account_get', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'GET',
        path: '/v2/core/accounts',
        response:
          '{"data":[{"applied_configurations":["recipient"],"created":"1970-01-12T21:42:34.472Z","id":"obj_123","object":"v2.core.account","livemode":true}],"next_page_url":null,"previous_page_url":null}',
      },
    ]);
    const accounts = await stripe.v2.core.accounts.list();
    expect(accounts).not.to.be.null;
  });

  it('test_v2_core_account_post', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'POST',
        path: '/v2/core/accounts',
        response:
          '{"applied_configurations":["recipient"],"created":"1970-01-12T21:42:34.472Z","id":"obj_123","object":"v2.core.account","livemode":true}',
      },
    ]);
    const account = await stripe.v2.core.accounts.create();
    expect(account).not.to.be.null;
  });

  it('test_v2_core_account_get_2', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'GET',
        path: '/v2/core/accounts/id_123',
        response:
          '{"applied_configurations":["recipient"],"created":"1970-01-12T21:42:34.472Z","id":"obj_123","object":"v2.core.account","livemode":true}',
      },
    ]);
    const account = await stripe.v2.core.accounts.retrieve('id_123');
    expect(account).not.to.be.null;
  });

  it('test_v2_core_account_post_2', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'POST',
        path: '/v2/core/accounts/id_123',
        response:
          '{"applied_configurations":["recipient"],"created":"1970-01-12T21:42:34.472Z","id":"obj_123","object":"v2.core.account","livemode":true}',
      },
    ]);
    const account = await stripe.v2.core.accounts.update('id_123');
    expect(account).not.to.be.null;
  });

  it('test_v2_core_account_post_3', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'POST',
        path: '/v2/core/accounts/id_123/close',
        response:
          '{"applied_configurations":["recipient"],"created":"1970-01-12T21:42:34.472Z","id":"obj_123","object":"v2.core.account","livemode":true}',
      },
    ]);
    const account = await stripe.v2.core.accounts.close('id_123');
    expect(account).not.to.be.null;
  });

  it('test_v2_core_accounts_person_get', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'GET',
        path: '/v2/core/accounts/account_id_123/persons',
        response:
          '{"data":[{"account":"account","created":"1970-01-12T21:42:34.472Z","id":"obj_123","object":"v2.core.account_person","updated":"1970-01-03T17:07:10.277Z","livemode":true}],"next_page_url":null,"previous_page_url":null}',
      },
    ]);
    const accountPersons = await stripe.v2.core.accounts.persons.list(
      'account_id_123'
    );
    expect(accountPersons).not.to.be.null;
  });

  it('test_v2_core_accounts_person_post', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'POST',
        path: '/v2/core/accounts/account_id_123/persons',
        response:
          '{"account":"account","created":"1970-01-12T21:42:34.472Z","id":"obj_123","object":"v2.core.account_person","updated":"1970-01-03T17:07:10.277Z","livemode":true}',
      },
    ]);
    const accountPerson = await stripe.v2.core.accounts.persons.create(
      'account_id_123'
    );
    expect(accountPerson).not.to.be.null;
  });

  it('test_v2_core_accounts_person_delete', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'DELETE',
        path: '/v2/core/accounts/account_id_123/persons/id_123',
        response: '{"id":"abc_123","object":"some.object.tag"}',
      },
    ]);
    const deleted = await stripe.v2.core.accounts.persons.del(
      'account_id_123',
      'id_123'
    );
    expect(deleted).not.to.be.null;
  });

  it('test_v2_core_accounts_person_get_2', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'GET',
        path: '/v2/core/accounts/account_id_123/persons/id_123',
        response:
          '{"account":"account","created":"1970-01-12T21:42:34.472Z","id":"obj_123","object":"v2.core.account_person","updated":"1970-01-03T17:07:10.277Z","livemode":true}',
      },
    ]);
    const accountPerson = await stripe.v2.core.accounts.persons.retrieve(
      'account_id_123',
      'id_123'
    );
    expect(accountPerson).not.to.be.null;
  });

  it('test_v2_core_accounts_person_post_2', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'POST',
        path: '/v2/core/accounts/account_id_123/persons/id_123',
        response:
          '{"account":"account","created":"1970-01-12T21:42:34.472Z","id":"obj_123","object":"v2.core.account_person","updated":"1970-01-03T17:07:10.277Z","livemode":true}',
      },
    ]);
    const accountPerson = await stripe.v2.core.accounts.persons.update(
      'account_id_123',
      'id_123'
    );
    expect(accountPerson).not.to.be.null;
  });

  it('test_v2_core_accounts_person_token_post', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'POST',
        path: '/v2/core/accounts/account_id_123/person_tokens',
        response:
          '{"created":"1970-01-12T21:42:34.472Z","expires_at":"1970-01-10T15:36:51.170Z","id":"obj_123","livemode":true,"object":"v2.core.account_person_token","used":true}',
      },
    ]);
    const accountPersonToken = await stripe.v2.core.accounts.personTokens.create(
      'account_id_123'
    );
    expect(accountPersonToken).not.to.be.null;
  });

  it('test_v2_core_accounts_person_token_get', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'GET',
        path: '/v2/core/accounts/account_id_123/person_tokens/id_123',
        response:
          '{"created":"1970-01-12T21:42:34.472Z","expires_at":"1970-01-10T15:36:51.170Z","id":"obj_123","livemode":true,"object":"v2.core.account_person_token","used":true}',
      },
    ]);
    const accountPersonToken = await stripe.v2.core.accounts.personTokens.retrieve(
      'account_id_123',
      'id_123'
    );
    expect(accountPersonToken).not.to.be.null;
  });

  it('test_v2_core_account_link_post', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'POST',
        path: '/v2/core/account_links',
        response:
          '{"account":"account","created":"1970-01-12T21:42:34.472Z","expires_at":"1970-01-10T15:36:51.170Z","object":"v2.core.account_link","url":"url","use_case":{"type":"account_onboarding"},"livemode":true}',
      },
    ]);
    const accountLink = await stripe.v2.core.accountLinks.create({
      account: 'account',
      use_case: {
        type: 'account_onboarding',
        account_onboarding: {
          collection_options: {
            fields: 'eventually_due',
            future_requirements: 'include',
          },
          configurations: ['merchant'],
          refresh_url: 'refresh_url',
          return_url: 'return_url',
        },
        account_update: {
          collection_options: {
            fields: 'eventually_due',
            future_requirements: 'include',
          },
          configurations: ['merchant'],
          refresh_url: 'refresh_url',
          return_url: 'return_url',
        },
      },
    });
    expect(accountLink).not.to.be.null;
  });

  it('test_v2_core_account_token_post', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'POST',
        path: '/v2/core/account_tokens',
        response:
          '{"created":"1970-01-12T21:42:34.472Z","expires_at":"1970-01-10T15:36:51.170Z","id":"obj_123","livemode":true,"object":"v2.core.account_token","used":true}',
      },
    ]);
    const accountToken = await stripe.v2.core.accountTokens.create();
    expect(accountToken).not.to.be.null;
  });

  it('test_v2_core_account_token_get', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'GET',
        path: '/v2/core/account_tokens/id_123',
        response:
          '{"created":"1970-01-12T21:42:34.472Z","expires_at":"1970-01-10T15:36:51.170Z","id":"obj_123","livemode":true,"object":"v2.core.account_token","used":true}',
      },
    ]);
    const accountToken = await stripe.v2.core.accountTokens.retrieve('id_123');
    expect(accountToken).not.to.be.null;
  });

  it('test_v2_core_event_get', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'GET',
        path: '/v2/core/events',
        response:
          '{"data":[{"created":"1970-01-12T21:42:34.472Z","id":"obj_123","livemode":true,"object":"v2.core.event","type":"type"}],"next_page_url":null,"previous_page_url":null}',
      },
    ]);
    const events = await stripe.v2.core.events.list();
    expect(events).not.to.be.null;
  });

  it('test_v2_core_event_get_2', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'GET',
        path: '/v2/core/events/id_123',
        response:
          '{"created":"1970-01-12T21:42:34.472Z","id":"obj_123","livemode":true,"object":"v2.core.event","type":"type"}',
      },
    ]);
    const event = await stripe.v2.core.events.retrieve('id_123');
    expect(event).not.to.be.null;
  });

  it('test_v2_core_event_destination_get', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'GET',
        path: '/v2/core/event_destinations',
        response:
          '{"data":[{"created":"1970-01-12T21:42:34.472Z","description":"description","enabled_events":["enabled_events"],"event_payload":"thin","id":"obj_123","name":"name","object":"v2.core.event_destination","status":"disabled","type":"amazon_eventbridge","updated":"1970-01-03T17:07:10.277Z","livemode":true}],"next_page_url":null,"previous_page_url":null}',
      },
    ]);
    const eventDestinations = await stripe.v2.core.eventDestinations.list();
    expect(eventDestinations).not.to.be.null;
  });

  it('test_v2_core_event_destination_post', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'POST',
        path: '/v2/core/event_destinations',
        response:
          '{"created":"1970-01-12T21:42:34.472Z","description":"description","enabled_events":["enabled_events"],"event_payload":"thin","id":"obj_123","name":"name","object":"v2.core.event_destination","status":"disabled","type":"amazon_eventbridge","updated":"1970-01-03T17:07:10.277Z","livemode":true}',
      },
    ]);
    const eventDestination = await stripe.v2.core.eventDestinations.create({
      enabled_events: ['enabled_events'],
      event_payload: 'thin',
      name: 'name',
      type: 'amazon_eventbridge',
    });
    expect(eventDestination).not.to.be.null;
  });

  it('test_v2_core_event_destination_delete', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'DELETE',
        path: '/v2/core/event_destinations/id_123',
        response: '{"id":"abc_123","object":"some.object.tag"}',
      },
    ]);
    const deleted = await stripe.v2.core.eventDestinations.del('id_123');
    expect(deleted).not.to.be.null;
  });

  it('test_v2_core_event_destination_get_2', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'GET',
        path: '/v2/core/event_destinations/id_123',
        response:
          '{"created":"1970-01-12T21:42:34.472Z","description":"description","enabled_events":["enabled_events"],"event_payload":"thin","id":"obj_123","name":"name","object":"v2.core.event_destination","status":"disabled","type":"amazon_eventbridge","updated":"1970-01-03T17:07:10.277Z","livemode":true}',
      },
    ]);
    const eventDestination = await stripe.v2.core.eventDestinations.retrieve(
      'id_123'
    );
    expect(eventDestination).not.to.be.null;
  });

  it('test_v2_core_event_destination_post_2', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'POST',
        path: '/v2/core/event_destinations/id_123',
        response:
          '{"created":"1970-01-12T21:42:34.472Z","description":"description","enabled_events":["enabled_events"],"event_payload":"thin","id":"obj_123","name":"name","object":"v2.core.event_destination","status":"disabled","type":"amazon_eventbridge","updated":"1970-01-03T17:07:10.277Z","livemode":true}',
      },
    ]);
    const eventDestination = await stripe.v2.core.eventDestinations.update(
      'id_123'
    );
    expect(eventDestination).not.to.be.null;
  });

  it('test_v2_core_event_destination_post_3', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'POST',
        path: '/v2/core/event_destinations/id_123/disable',
        response:
          '{"created":"1970-01-12T21:42:34.472Z","description":"description","enabled_events":["enabled_events"],"event_payload":"thin","id":"obj_123","name":"name","object":"v2.core.event_destination","status":"disabled","type":"amazon_eventbridge","updated":"1970-01-03T17:07:10.277Z","livemode":true}',
      },
    ]);
    const eventDestination = await stripe.v2.core.eventDestinations.disable(
      'id_123'
    );
    expect(eventDestination).not.to.be.null;
  });

  it('test_v2_core_event_destination_post_4', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'POST',
        path: '/v2/core/event_destinations/id_123/enable',
        response:
          '{"created":"1970-01-12T21:42:34.472Z","description":"description","enabled_events":["enabled_events"],"event_payload":"thin","id":"obj_123","name":"name","object":"v2.core.event_destination","status":"disabled","type":"amazon_eventbridge","updated":"1970-01-03T17:07:10.277Z","livemode":true}',
      },
    ]);
    const eventDestination = await stripe.v2.core.eventDestinations.enable(
      'id_123'
    );
    expect(eventDestination).not.to.be.null;
  });

  it('test_v2_core_event_destination_post_5', async function() {
    const stripe = testUtils.createMockClient([
      {
        method: 'POST',
        path: '/v2/core/event_destinations/id_123/ping',
        response:
          '{"created":"1970-01-12T21:42:34.472Z","id":"obj_123","livemode":true,"object":"v2.core.event","type":"type"}',
      },
    ]);
    const event = await stripe.v2.core.eventDestinations.ping('id_123');
    expect(event).not.to.be.null;
  });

  it('test_temporary_session_expired_error', async function() {
    const {TemporarySessionExpiredError} = require('../../src/Error.js');

    nock('https://meter-events.stripe.com')
      .post('/v2/billing/meter_event_stream')
      .reply(400, {
        error: {
          type: 'temporary_session_expired',
          code: 'billing_meter_event_session_expired',
        },
      });

    await realStripe.v2.billing.meterEventStream.create(
      {
        events: [
          {
            event_name: 'event_name',
            payload: {
              key: 'payload',
            },
          },
        ],
      },

      (err) => {
        expect(err).to.be.instanceOf(TemporarySessionExpiredError);
      }
    );
  });
});
