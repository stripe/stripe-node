// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      interface CreditUnderwritingRecordRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface CreditUnderwritingRecordListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface CreditUnderwritingRecordCorrectParams {
        /**
         * Details about the application submission.
         */
        application?: CreditUnderwritingRecordCorrectParams.Application;

        /**
         * Information about the company or person applying or holding the account.
         */
        credit_user?: CreditUnderwritingRecordCorrectParams.CreditUser;

        /**
         * Date when a decision was made.
         */
        decided_at?: number;

        /**
         * Details about the decision.
         */
        decision?: CreditUnderwritingRecordCorrectParams.Decision;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * File containing regulatory reporting data for the decision. Required if you are subject to this [reporting requirement](https://stripe.com/docs/issuing/credit/report-required-regulatory-data-for-credit-decisions). Optional if previously provided and no changes are needed.
         */
        regulatory_reporting_file?: string;

        /**
         * If an exception to the usual underwriting criteria was made for this decision, details about the exception must be provided. Exceptions should only be granted in rare circumstances, in consultation with Stripe Compliance.
         */
        underwriting_exception?: CreditUnderwritingRecordCorrectParams.UnderwritingException;
      }

      namespace CreditUnderwritingRecordCorrectParams {
        interface Application {
          /**
           * The channel through which the applicant has submitted their application. Defaults to `online`.
           */
          application_method?: Application.ApplicationMethod;

          /**
           * Scope of demand made by the applicant.
           */
          purpose: Application.Purpose;

          /**
           * Date when the applicant submitted their application.
           */
          submitted_at: number;
        }

        namespace Application {
          type ApplicationMethod = 'in_person' | 'mail' | 'online' | 'phone';

          type Purpose = 'credit_limit_increase' | 'credit_line_opening';
        }

        interface CreditUser {
          /**
           * Email of the applicant or accountholder.
           */
          email: string;

          /**
           * Full name of the company or person.
           */
          name: string;
        }

        interface Decision {
          /**
           * Details about the application rejection.
           */
          application_rejected?: Decision.ApplicationRejected;

          /**
           * Details about the credit limit approved. An approved credit limit is required before you can set a `credit_limit_amount` in the [CreditPolicy API](https://stripe.com/docs/api/issuing/credit_policy/)
           */
          credit_limit_approved?: Decision.CreditLimitApproved;

          /**
           * Details about the credit limit decreased.
           */
          credit_limit_decreased?: Decision.CreditLimitDecreased;

          /**
           * Details about the credit line closed.
           */
          credit_line_closed?: Decision.CreditLineClosed;

          /**
           * Outcome of the decision.
           */
          type: Decision.Type;
        }

        namespace Decision {
          interface ApplicationRejected {
            /**
             * Details about the `reasons.other` when present.
             */
            reason_other_explanation?: string;

            /**
             * List of reasons why the application was rejected, up to 4 reasons, in order of importance.
             */
            reasons: Array<ApplicationRejected.Reason>;
          }

          namespace ApplicationRejected {
            type Reason =
              | 'applicant_is_not_beneficial_owner'
              | 'applicant_too_young'
              | 'application_is_not_beneficial_owner'
              | 'bankruptcy'
              | 'business_size_too_small'
              | 'current_account_tier_ineligible'
              | 'customer_already_exists'
              | 'customer_requested_account_closure'
              | 'debt_to_cash_balance_ratio_too_high'
              | 'debt_to_equity_ratio_too_high'
              | 'delinquent_credit_obligations'
              | 'dispute_rate_too_high'
              | 'duration_of_residence'
              | 'excessive_income_or_revenue_obligations'
              | 'expenses_to_cash_balance_ratio_too_high'
              | 'foreclosure_or_repossession'
              | 'frozen_file_at_credit_bureau'
              | 'garnishment_or_attachment'
              | 'government_loan_program_criteria'
              | 'high_concentration_of_clients'
              | 'high_risk_industry'
              | 'incomplete_application'
              | 'inconsistent_monthly_revenues'
              | 'insufficient_account_history_with_platform'
              | 'insufficient_bank_account_history'
              | 'insufficient_cash_balance'
              | 'insufficient_cash_flow'
              | 'insufficient_collateral'
              | 'insufficient_credit_experience'
              | 'insufficient_deposits'
              | 'insufficient_income'
              | 'insufficient_margin_ratio'
              | 'insufficient_operating_profit'
              | 'insufficient_period_in_operation'
              | 'insufficient_reserves'
              | 'insufficient_revenue'
              | 'insufficient_social_media_performance'
              | 'insufficient_time_in_network'
              | 'insufficient_trade_credit_insurance'
              | 'invalid_business_license'
              | 'lacking_cash_account'
              | 'late_payment_history_reported_to_bureau'
              | 'lien_collection_action_or_judgement'
              | 'negative_public_information'
              | 'no_credit_file'
              | 'other'
              | 'outside_supported_country'
              | 'outside_supported_state'
              | 'poor_payment_history_with_platform'
              | 'prior_or_current_legal_action'
              | 'prohibited_industry'
              | 'rate_of_cash_balance_fluctuation_too_high'
              | 'recent_inquiries_on_business_credit_report'
              | 'removal_of_bank_account_connection'
              | 'revenue_discrepancy'
              | 'runway_too_short'
              | 'suspected_fraud'
              | 'too_many_non_sufficient_funds_or_overdrafts'
              | 'unable_to_verify_address'
              | 'unable_to_verify_identity'
              | 'unable_to_verify_income_or_revenue'
              | 'unprofitable'
              | 'unsupportable_business_type';
          }

          interface CreditLimitApproved {
            /**
             * The credit approved, in the currency of the account and [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
             */
            amount: number;

            /**
             * The currency of the credit approved, will default to the Account's Issuing currency.
             */
            currency?: string;
          }

          interface CreditLimitDecreased {
            /**
             * The credit approved, in the currency of the account and [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
             */
            amount: number;

            /**
             * The currency of the credit approved, will default to the Account's Issuing currency.
             */
            currency?: string;

            /**
             * Details about the `reasons.other` when present.
             */
            reason_other_explanation?: string;

            /**
             * List of reasons why the existing credit was decreased, up to 4 reasons, in order of importance.
             */
            reasons: Array<CreditLimitDecreased.Reason>;
          }

          namespace CreditLimitDecreased {
            type Reason =
              | 'applicant_is_not_beneficial_owner'
              | 'applicant_too_young'
              | 'application_is_not_beneficial_owner'
              | 'bankruptcy'
              | 'business_size_too_small'
              | 'change_in_financial_state'
              | 'change_in_utilization_of_credit_line'
              | 'current_account_tier_ineligible'
              | 'customer_already_exists'
              | 'customer_requested_account_closure'
              | 'debt_to_cash_balance_ratio_too_high'
              | 'debt_to_equity_ratio_too_high'
              | 'decrease_in_income_to_expense_ratio'
              | 'decrease_in_social_media_performance'
              | 'delinquent_credit_obligations'
              | 'dispute_rate_too_high'
              | 'duration_of_residence'
              | 'exceeds_acceptable_platform_exposure'
              | 'excessive_income_or_revenue_obligations'
              | 'expenses_to_cash_balance_ratio_too_high'
              | 'foreclosure_or_repossession'
              | 'frozen_file_at_credit_bureau'
              | 'garnishment_or_attachment'
              | 'government_loan_program_criteria'
              | 'has_recent_credit_limit_increase'
              | 'high_concentration_of_clients'
              | 'high_risk_industry'
              | 'incomplete_application'
              | 'inconsistent_monthly_revenues'
              | 'insufficient_account_history_with_platform'
              | 'insufficient_bank_account_history'
              | 'insufficient_cash_balance'
              | 'insufficient_cash_flow'
              | 'insufficient_collateral'
              | 'insufficient_credit_experience'
              | 'insufficient_credit_utilization'
              | 'insufficient_deposits'
              | 'insufficient_income'
              | 'insufficient_margin_ratio'
              | 'insufficient_operating_profit'
              | 'insufficient_period_in_operation'
              | 'insufficient_reserves'
              | 'insufficient_revenue'
              | 'insufficient_social_media_performance'
              | 'insufficient_time_in_network'
              | 'insufficient_trade_credit_insurance'
              | 'insufficient_usage_as_qualified_expenses'
              | 'invalid_business_license'
              | 'lacking_cash_account'
              | 'late_payment_history_reported_to_bureau'
              | 'lien_collection_action_or_judgement'
              | 'negative_public_information'
              | 'no_credit_file'
              | 'other'
              | 'outside_supported_country'
              | 'outside_supported_state'
              | 'poor_payment_history_with_platform'
              | 'prior_or_current_legal_action'
              | 'prohibited_industry'
              | 'rate_of_cash_balance_fluctuation_too_high'
              | 'recent_inquiries_on_business_credit_report'
              | 'removal_of_bank_account_connection'
              | 'revenue_discrepancy'
              | 'runway_too_short'
              | 'suspected_fraud'
              | 'too_many_non_sufficient_funds_or_overdrafts'
              | 'unable_to_verify_address'
              | 'unable_to_verify_identity'
              | 'unable_to_verify_income_or_revenue'
              | 'unprofitable'
              | 'unsupportable_business_type';
          }

          interface CreditLineClosed {
            /**
             * Details about the `reasons.other` when present.
             */
            reason_other_explanation?: string;

            /**
             * List of reasons why the credit line was closed, up to 4 reasons, in order of importance.
             */
            reasons: Array<CreditLineClosed.Reason>;
          }

          namespace CreditLineClosed {
            type Reason =
              | 'applicant_is_not_beneficial_owner'
              | 'applicant_too_young'
              | 'application_is_not_beneficial_owner'
              | 'bankruptcy'
              | 'business_size_too_small'
              | 'change_in_financial_state'
              | 'change_in_utilization_of_credit_line'
              | 'current_account_tier_ineligible'
              | 'customer_already_exists'
              | 'customer_requested_account_closure'
              | 'debt_to_cash_balance_ratio_too_high'
              | 'debt_to_equity_ratio_too_high'
              | 'decrease_in_income_to_expense_ratio'
              | 'decrease_in_social_media_performance'
              | 'delinquent_credit_obligations'
              | 'dispute_rate_too_high'
              | 'duration_of_residence'
              | 'exceeds_acceptable_platform_exposure'
              | 'excessive_income_or_revenue_obligations'
              | 'expenses_to_cash_balance_ratio_too_high'
              | 'foreclosure_or_repossession'
              | 'frozen_file_at_credit_bureau'
              | 'garnishment_or_attachment'
              | 'government_loan_program_criteria'
              | 'has_recent_credit_limit_increase'
              | 'high_concentration_of_clients'
              | 'high_risk_industry'
              | 'incomplete_application'
              | 'inconsistent_monthly_revenues'
              | 'insufficient_account_history_with_platform'
              | 'insufficient_bank_account_history'
              | 'insufficient_cash_balance'
              | 'insufficient_cash_flow'
              | 'insufficient_collateral'
              | 'insufficient_credit_experience'
              | 'insufficient_credit_utilization'
              | 'insufficient_deposits'
              | 'insufficient_income'
              | 'insufficient_margin_ratio'
              | 'insufficient_operating_profit'
              | 'insufficient_period_in_operation'
              | 'insufficient_reserves'
              | 'insufficient_revenue'
              | 'insufficient_social_media_performance'
              | 'insufficient_time_in_network'
              | 'insufficient_trade_credit_insurance'
              | 'insufficient_usage_as_qualified_expenses'
              | 'invalid_business_license'
              | 'lacking_cash_account'
              | 'late_payment_history_reported_to_bureau'
              | 'lien_collection_action_or_judgement'
              | 'negative_public_information'
              | 'no_credit_file'
              | 'other'
              | 'outside_supported_country'
              | 'outside_supported_state'
              | 'poor_payment_history_with_platform'
              | 'prior_or_current_legal_action'
              | 'prohibited_industry'
              | 'rate_of_cash_balance_fluctuation_too_high'
              | 'recent_inquiries_on_business_credit_report'
              | 'removal_of_bank_account_connection'
              | 'revenue_discrepancy'
              | 'runway_too_short'
              | 'suspected_fraud'
              | 'too_many_non_sufficient_funds_or_overdrafts'
              | 'unable_to_verify_address'
              | 'unable_to_verify_identity'
              | 'unable_to_verify_income_or_revenue'
              | 'unprofitable'
              | 'unsupportable_business_type';
          }

          type Type =
            | 'additional_information_requested'
            | 'application_rejected'
            | 'credit_limit_approved'
            | 'credit_limit_decreased'
            | 'credit_line_closed'
            | 'no_changes'
            | 'withdrawn_by_applicant';
        }

        interface UnderwritingException {
          /**
           * Written explanation for the exception.
           */
          explanation: string;

          /**
           * The decision before the exception was applied.
           */
          original_decision_type: UnderwritingException.OriginalDecisionType;
        }

        namespace UnderwritingException {
          type OriginalDecisionType =
            | 'additional_information_requested'
            | 'application_rejected'
            | 'credit_limit_approved'
            | 'credit_limit_decreased'
            | 'credit_line_closed'
            | 'no_changes'
            | 'withdrawn_by_applicant';
        }
      }

      interface CreditUnderwritingRecordCreateFromApplicationParams {
        /**
         * Details about the application submission.
         */
        application: CreditUnderwritingRecordCreateFromApplicationParams.Application;

        /**
         * Information about the company or person applying or holding the account.
         */
        credit_user: CreditUnderwritingRecordCreateFromApplicationParams.CreditUser;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;
      }

      namespace CreditUnderwritingRecordCreateFromApplicationParams {
        interface Application {
          /**
           * The channel through which the applicant has submitted their application. Defaults to `online`.
           */
          application_method?: Application.ApplicationMethod;

          /**
           * Scope of demand made by the applicant.
           */
          purpose: Application.Purpose;

          /**
           * Date when the applicant submitted their application.
           */
          submitted_at: number;
        }

        namespace Application {
          type ApplicationMethod = 'in_person' | 'mail' | 'online' | 'phone';

          type Purpose = 'credit_limit_increase' | 'credit_line_opening';
        }

        interface CreditUser {
          /**
           * Email of the applicant or accountholder.
           */
          email: string;

          /**
           * Full name of the company or person.
           */
          name: string;
        }
      }

      interface CreditUnderwritingRecordCreateFromProactiveReviewParams {
        /**
         * Information about the company or person applying or holding the account.
         */
        credit_user: CreditUnderwritingRecordCreateFromProactiveReviewParams.CreditUser;

        /**
         * Date when a decision was made.
         */
        decided_at: number;

        /**
         * Details about the decision.
         */
        decision: CreditUnderwritingRecordCreateFromProactiveReviewParams.Decision;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * File containing regulatory reporting data for the decision. Required if you are subject to this [reporting requirement](https://stripe.com/docs/issuing/credit/report-required-regulatory-data-for-credit-decisions).
         */
        regulatory_reporting_file?: string;

        /**
         * If an exception to the usual underwriting criteria was made for this decision, details about the exception must be provided. Exceptions should only be granted in rare circumstances, in consultation with Stripe Compliance.
         */
        underwriting_exception?: CreditUnderwritingRecordCreateFromProactiveReviewParams.UnderwritingException;
      }

      namespace CreditUnderwritingRecordCreateFromProactiveReviewParams {
        interface CreditUser {
          /**
           * Email of the applicant or accountholder.
           */
          email: string;

          /**
           * Full name of the company or person.
           */
          name: string;
        }

        interface Decision {
          /**
           * Details about the credit limit approved. An approved credit limit is required before you can set a `credit_limit_amount` in the [CreditPolicy API](https://stripe.com/docs/api/issuing/credit_policy/)
           */
          credit_limit_approved?: Decision.CreditLimitApproved;

          /**
           * Details about the credit limit decreased.
           */
          credit_limit_decreased?: Decision.CreditLimitDecreased;

          /**
           * Details about the credit line closed.
           */
          credit_line_closed?: Decision.CreditLineClosed;

          /**
           * Outcome of the decision.
           */
          type: Decision.Type;
        }

        namespace Decision {
          interface CreditLimitApproved {
            /**
             * The credit approved, in the currency of the account and [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
             */
            amount: number;

            /**
             * The currency of the credit approved, will default to the Account's Issuing currency.
             */
            currency?: string;
          }

          interface CreditLimitDecreased {
            /**
             * The credit approved, in the currency of the account and [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
             */
            amount: number;

            /**
             * The currency of the credit approved, will default to the Account's Issuing currency.
             */
            currency?: string;

            /**
             * Details about the `reasons.other` when present.
             */
            reason_other_explanation?: string;

            /**
             * List of reasons why the existing credit was decreased, up to 4 reasons, in order of importance.
             */
            reasons: Array<CreditLimitDecreased.Reason>;
          }

          namespace CreditLimitDecreased {
            type Reason =
              | 'applicant_is_not_beneficial_owner'
              | 'applicant_too_young'
              | 'application_is_not_beneficial_owner'
              | 'bankruptcy'
              | 'business_size_too_small'
              | 'change_in_financial_state'
              | 'change_in_utilization_of_credit_line'
              | 'current_account_tier_ineligible'
              | 'customer_already_exists'
              | 'customer_requested_account_closure'
              | 'debt_to_cash_balance_ratio_too_high'
              | 'debt_to_equity_ratio_too_high'
              | 'decrease_in_income_to_expense_ratio'
              | 'decrease_in_social_media_performance'
              | 'delinquent_credit_obligations'
              | 'dispute_rate_too_high'
              | 'duration_of_residence'
              | 'exceeds_acceptable_platform_exposure'
              | 'excessive_income_or_revenue_obligations'
              | 'expenses_to_cash_balance_ratio_too_high'
              | 'foreclosure_or_repossession'
              | 'frozen_file_at_credit_bureau'
              | 'garnishment_or_attachment'
              | 'government_loan_program_criteria'
              | 'has_recent_credit_limit_increase'
              | 'high_concentration_of_clients'
              | 'high_risk_industry'
              | 'incomplete_application'
              | 'inconsistent_monthly_revenues'
              | 'insufficient_account_history_with_platform'
              | 'insufficient_bank_account_history'
              | 'insufficient_cash_balance'
              | 'insufficient_cash_flow'
              | 'insufficient_collateral'
              | 'insufficient_credit_experience'
              | 'insufficient_credit_utilization'
              | 'insufficient_deposits'
              | 'insufficient_income'
              | 'insufficient_margin_ratio'
              | 'insufficient_operating_profit'
              | 'insufficient_period_in_operation'
              | 'insufficient_reserves'
              | 'insufficient_revenue'
              | 'insufficient_social_media_performance'
              | 'insufficient_time_in_network'
              | 'insufficient_trade_credit_insurance'
              | 'insufficient_usage_as_qualified_expenses'
              | 'invalid_business_license'
              | 'lacking_cash_account'
              | 'late_payment_history_reported_to_bureau'
              | 'lien_collection_action_or_judgement'
              | 'negative_public_information'
              | 'no_credit_file'
              | 'other'
              | 'outside_supported_country'
              | 'outside_supported_state'
              | 'poor_payment_history_with_platform'
              | 'prior_or_current_legal_action'
              | 'prohibited_industry'
              | 'rate_of_cash_balance_fluctuation_too_high'
              | 'recent_inquiries_on_business_credit_report'
              | 'removal_of_bank_account_connection'
              | 'revenue_discrepancy'
              | 'runway_too_short'
              | 'suspected_fraud'
              | 'too_many_non_sufficient_funds_or_overdrafts'
              | 'unable_to_verify_address'
              | 'unable_to_verify_identity'
              | 'unable_to_verify_income_or_revenue'
              | 'unprofitable'
              | 'unsupportable_business_type';
          }

          interface CreditLineClosed {
            /**
             * Details about the `reasons.other` when present.
             */
            reason_other_explanation?: string;

            /**
             * List of reasons why the credit line was closed, up to 4 reasons, in order of importance.
             */
            reasons: Array<CreditLineClosed.Reason>;
          }

          namespace CreditLineClosed {
            type Reason =
              | 'applicant_is_not_beneficial_owner'
              | 'applicant_too_young'
              | 'application_is_not_beneficial_owner'
              | 'bankruptcy'
              | 'business_size_too_small'
              | 'change_in_financial_state'
              | 'change_in_utilization_of_credit_line'
              | 'current_account_tier_ineligible'
              | 'customer_already_exists'
              | 'customer_requested_account_closure'
              | 'debt_to_cash_balance_ratio_too_high'
              | 'debt_to_equity_ratio_too_high'
              | 'decrease_in_income_to_expense_ratio'
              | 'decrease_in_social_media_performance'
              | 'delinquent_credit_obligations'
              | 'dispute_rate_too_high'
              | 'duration_of_residence'
              | 'exceeds_acceptable_platform_exposure'
              | 'excessive_income_or_revenue_obligations'
              | 'expenses_to_cash_balance_ratio_too_high'
              | 'foreclosure_or_repossession'
              | 'frozen_file_at_credit_bureau'
              | 'garnishment_or_attachment'
              | 'government_loan_program_criteria'
              | 'has_recent_credit_limit_increase'
              | 'high_concentration_of_clients'
              | 'high_risk_industry'
              | 'incomplete_application'
              | 'inconsistent_monthly_revenues'
              | 'insufficient_account_history_with_platform'
              | 'insufficient_bank_account_history'
              | 'insufficient_cash_balance'
              | 'insufficient_cash_flow'
              | 'insufficient_collateral'
              | 'insufficient_credit_experience'
              | 'insufficient_credit_utilization'
              | 'insufficient_deposits'
              | 'insufficient_income'
              | 'insufficient_margin_ratio'
              | 'insufficient_operating_profit'
              | 'insufficient_period_in_operation'
              | 'insufficient_reserves'
              | 'insufficient_revenue'
              | 'insufficient_social_media_performance'
              | 'insufficient_time_in_network'
              | 'insufficient_trade_credit_insurance'
              | 'insufficient_usage_as_qualified_expenses'
              | 'invalid_business_license'
              | 'lacking_cash_account'
              | 'late_payment_history_reported_to_bureau'
              | 'lien_collection_action_or_judgement'
              | 'negative_public_information'
              | 'no_credit_file'
              | 'other'
              | 'outside_supported_country'
              | 'outside_supported_state'
              | 'poor_payment_history_with_platform'
              | 'prior_or_current_legal_action'
              | 'prohibited_industry'
              | 'rate_of_cash_balance_fluctuation_too_high'
              | 'recent_inquiries_on_business_credit_report'
              | 'removal_of_bank_account_connection'
              | 'revenue_discrepancy'
              | 'runway_too_short'
              | 'suspected_fraud'
              | 'too_many_non_sufficient_funds_or_overdrafts'
              | 'unable_to_verify_address'
              | 'unable_to_verify_identity'
              | 'unable_to_verify_income_or_revenue'
              | 'unprofitable'
              | 'unsupportable_business_type';
          }

          type Type =
            | 'credit_limit_approved'
            | 'credit_limit_decreased'
            | 'credit_line_closed'
            | 'no_changes';
        }

        interface UnderwritingException {
          /**
           * Written explanation for the exception.
           */
          explanation: string;

          /**
           * The decision before the exception was applied.
           */
          original_decision_type: UnderwritingException.OriginalDecisionType;
        }

        namespace UnderwritingException {
          type OriginalDecisionType =
            | 'additional_information_requested'
            | 'application_rejected'
            | 'credit_limit_approved'
            | 'credit_limit_decreased'
            | 'credit_line_closed'
            | 'no_changes'
            | 'withdrawn_by_applicant';
        }
      }

      interface CreditUnderwritingRecordReportDecisionParams {
        /**
         * Date when a decision was made.
         */
        decided_at: number;

        /**
         * Details about the decision.
         */
        decision: CreditUnderwritingRecordReportDecisionParams.Decision;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * File containing regulatory reporting data for the decision. Required if you are subject to this [reporting requirement](https://stripe.com/docs/issuing/credit/report-required-regulatory-data-for-credit-decisions).
         */
        regulatory_reporting_file?: string;

        /**
         * If an exception to the usual underwriting criteria was made for this decision, details about the exception must be provided. Exceptions should only be granted in rare circumstances, in consultation with Stripe Compliance.
         */
        underwriting_exception?: CreditUnderwritingRecordReportDecisionParams.UnderwritingException;
      }

      namespace CreditUnderwritingRecordReportDecisionParams {
        interface Decision {
          /**
           * Details about the application rejection.
           */
          application_rejected?: Decision.ApplicationRejected;

          /**
           * Details about the credit limit approved. An approved credit limit is required before you can set a `credit_limit_amount` in the [CreditPolicy API](https://stripe.com/docs/api/issuing/credit_policy/)
           */
          credit_limit_approved?: Decision.CreditLimitApproved;

          /**
           * Outcome of the decision.
           */
          type: Decision.Type;
        }

        namespace Decision {
          interface ApplicationRejected {
            /**
             * Details about the `reasons.other` when present.
             */
            reason_other_explanation?: string;

            /**
             * List of reasons why the application was rejected, up to 4 reasons, in order of importance.
             */
            reasons: Array<ApplicationRejected.Reason>;
          }

          namespace ApplicationRejected {
            type Reason =
              | 'applicant_is_not_beneficial_owner'
              | 'applicant_too_young'
              | 'application_is_not_beneficial_owner'
              | 'bankruptcy'
              | 'business_size_too_small'
              | 'current_account_tier_ineligible'
              | 'customer_already_exists'
              | 'customer_requested_account_closure'
              | 'debt_to_cash_balance_ratio_too_high'
              | 'debt_to_equity_ratio_too_high'
              | 'delinquent_credit_obligations'
              | 'dispute_rate_too_high'
              | 'duration_of_residence'
              | 'excessive_income_or_revenue_obligations'
              | 'expenses_to_cash_balance_ratio_too_high'
              | 'foreclosure_or_repossession'
              | 'frozen_file_at_credit_bureau'
              | 'garnishment_or_attachment'
              | 'government_loan_program_criteria'
              | 'high_concentration_of_clients'
              | 'high_risk_industry'
              | 'incomplete_application'
              | 'inconsistent_monthly_revenues'
              | 'insufficient_account_history_with_platform'
              | 'insufficient_bank_account_history'
              | 'insufficient_cash_balance'
              | 'insufficient_cash_flow'
              | 'insufficient_collateral'
              | 'insufficient_credit_experience'
              | 'insufficient_deposits'
              | 'insufficient_income'
              | 'insufficient_margin_ratio'
              | 'insufficient_operating_profit'
              | 'insufficient_period_in_operation'
              | 'insufficient_reserves'
              | 'insufficient_revenue'
              | 'insufficient_social_media_performance'
              | 'insufficient_time_in_network'
              | 'insufficient_trade_credit_insurance'
              | 'invalid_business_license'
              | 'lacking_cash_account'
              | 'late_payment_history_reported_to_bureau'
              | 'lien_collection_action_or_judgement'
              | 'negative_public_information'
              | 'no_credit_file'
              | 'other'
              | 'outside_supported_country'
              | 'outside_supported_state'
              | 'poor_payment_history_with_platform'
              | 'prior_or_current_legal_action'
              | 'prohibited_industry'
              | 'rate_of_cash_balance_fluctuation_too_high'
              | 'recent_inquiries_on_business_credit_report'
              | 'removal_of_bank_account_connection'
              | 'revenue_discrepancy'
              | 'runway_too_short'
              | 'suspected_fraud'
              | 'too_many_non_sufficient_funds_or_overdrafts'
              | 'unable_to_verify_address'
              | 'unable_to_verify_identity'
              | 'unable_to_verify_income_or_revenue'
              | 'unprofitable'
              | 'unsupportable_business_type';
          }

          interface CreditLimitApproved {
            /**
             * The credit approved, in the currency of the account and [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
             */
            amount: number;

            /**
             * The currency of the credit approved, will default to the Account's Issuing currency.
             */
            currency?: string;
          }

          type Type =
            | 'additional_information_requested'
            | 'application_rejected'
            | 'credit_limit_approved'
            | 'withdrawn_by_applicant';
        }

        interface UnderwritingException {
          /**
           * Written explanation for the exception.
           */
          explanation: string;

          /**
           * The decision before the exception was applied.
           */
          original_decision_type: UnderwritingException.OriginalDecisionType;
        }

        namespace UnderwritingException {
          type OriginalDecisionType =
            | 'additional_information_requested'
            | 'application_rejected'
            | 'credit_limit_approved'
            | 'credit_limit_decreased'
            | 'credit_line_closed'
            | 'no_changes'
            | 'withdrawn_by_applicant';
        }
      }

      class CreditUnderwritingRecordsResource {
        /**
         * Retrieves a CreditUnderwritingRecord object.
         */
        retrieve(
          id: string,
          params?: CreditUnderwritingRecordRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.CreditUnderwritingRecord>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.CreditUnderwritingRecord>>;

        /**
         * Retrieves a list of CreditUnderwritingRecord objects. The objects are sorted in descending order by creation date, with the most-recently-created object appearing first.
         */
        list(
          params?: CreditUnderwritingRecordListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.CreditUnderwritingRecord>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.CreditUnderwritingRecord>;

        /**
         * Update a CreditUnderwritingRecord object to correct mistakes.
         */
        correct(
          id: string,
          params?: CreditUnderwritingRecordCorrectParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.CreditUnderwritingRecord>>;
        correct(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.CreditUnderwritingRecord>>;

        /**
         * Creates a CreditUnderwritingRecord object with information about a credit application submission.
         */
        createFromApplication(
          params: CreditUnderwritingRecordCreateFromApplicationParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.CreditUnderwritingRecord>>;

        /**
         * Creates a CreditUnderwritingRecord object from an underwriting decision coming from a proactive review of an existing accountholder.
         */
        createFromProactiveReview(
          params: CreditUnderwritingRecordCreateFromProactiveReviewParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.CreditUnderwritingRecord>>;

        /**
         * Update a CreditUnderwritingRecord object from a decision made on a credit application.
         */
        reportDecision(
          id: string,
          params: CreditUnderwritingRecordReportDecisionParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.CreditUnderwritingRecord>>;
      }
    }
  }
}
