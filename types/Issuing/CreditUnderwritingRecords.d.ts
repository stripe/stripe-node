// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      /**
       * Every time an applicant submits an application for a Charge Card product your platform offers, or every time your platform takes a proactive credit decision on an existing account, you must record the decision by creating a new `CreditUnderwritingRecord` object on a connected account.
       *
       * [Follow the guide](https://stripe.com/docs/issuing/credit/report-credit-decisions-and-manage-aans) to learn about your requirements as a platform.
       */
      interface CreditUnderwritingRecord {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'issuing.credit_underwriting_record';

        /**
         * For decisions triggered by an application, details about the submission.
         */
        application: CreditUnderwritingRecord.Application | null;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * The event that triggered the underwriting.
         */
        created_from: CreditUnderwritingRecord.CreatedFrom;

        credit_user: CreditUnderwritingRecord.CreditUser;

        /**
         * Date when a decision was made.
         */
        decided_at: number | null;

        /**
         * Details about the decision.
         */
        decision: CreditUnderwritingRecord.Decision | null;

        /**
         * For underwriting initiated by an application, a decision must be taken 30 days after the submission.
         */
        decision_deadline: number | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata | null;

        /**
         * File containing regulatory reporting data for the decision. Required if you are subject to this [reporting requirement](https://stripe.com/docs/issuing/credit/report-required-regulatory-data-for-credit-decisions).
         */
        regulatory_reporting_file: string | null;

        /**
         * If an exception to the usual underwriting criteria was made for this application, details about the exception must be provided. Exceptions should only be granted in rare circumstances, in consultation with Stripe Compliance.
         */
        underwriting_exception: CreditUnderwritingRecord.UnderwritingException | null;
      }

      namespace CreditUnderwritingRecord {
        interface Application {
          /**
           * The channel through which the applicant has submitted their application.
           */
          application_method: Application.ApplicationMethod;

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

        type CreatedFrom = 'application' | 'proactive_review';

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
           * Details about a decision application_rejected.
           */
          application_rejected: Decision.ApplicationRejected | null;

          /**
           * Details about a decision credit_limit_approved.
           */
          credit_limit_approved: Decision.CreditLimitApproved | null;

          /**
           * Details about a decision credit_limit_decreased.
           */
          credit_limit_decreased: Decision.CreditLimitDecreased | null;

          /**
           * Details about a decision credit_line_closed.
           */
          credit_line_closed: Decision.CreditLineClosed | null;

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
            reason_other_explanation: string | null;

            /**
             * List of reasons why the application was rejected up to 4 reasons, in order of importance.
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
             * Credit amount approved. An approved credit limit is required before you can set a amount in the [CreditPolicy API](https://stripe.com/docs/api/issuing/credit_policy).
             */
            amount: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;
          }

          interface CreditLimitDecreased {
            /**
             * Credit amount approved after decrease. An approved credit limit is required before you can set a amount in the [CreditPolicy API](https://stripe.com/docs/api/issuing/credit_policy).
             */
            amount: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;

            /**
             * Details about the `reasons.other` when present.
             */
            reason_other_explanation: string | null;

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
            reason_other_explanation: string | null;

            /**
             * List of reasons why the existing account was closed, up to 4 reasons, in order of importance.
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
    }
  }
}
