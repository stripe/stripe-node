// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {
  MetadataParam,
  OtherString,
  RangeQueryParam,
  Metadata,
} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class FundingIntentResource extends StripeResource {
  /**
   * Lists FundingIntents.
   */
  list(
    params?: V2.MoneyManagement.FundingIntentListParams,
    options?: RequestOptions
  ): V2ListPromise<FundingIntent> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/funding_intents',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Creates a FundingIntent that adds funds to a FinancialAccount.
   * @throws Stripe.CannotProceedError
   * @throws Stripe.FeatureNotEnabledError
   * @throws Stripe.CapabilityNotEnabledError
   */
  create(
    params: V2.MoneyManagement.FundingIntentCreateParams,
    options?: RequestOptions
  ): Promise<Response<FundingIntent>> {
    return this._makeRequest(
      'POST',
      '/v2/money_management/funding_intents',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves a FundingIntent by ID.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.FundingIntentRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<FundingIntent>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/funding_intents/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates the mutable details of a FundingIntent.
   * @throws Stripe.CannotProceedError
   */
  update(
    id: string,
    params?: V2.MoneyManagement.FundingIntentUpdateParams,
    options?: RequestOptions
  ): Promise<Response<FundingIntent>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/funding_intents/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Cancels a FundingIntent that can still be canceled.
   * @throws Stripe.CannotProceedError
   */
  cancel(
    id: string,
    params?: V2.MoneyManagement.FundingIntentCancelParams,
    options?: RequestOptions
  ): Promise<Response<FundingIntent>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/funding_intents/${encodeURIComponent(id)}/cancel`,
      params,
      options
    ) as any;
  }
  /**
   * Confirms a FundingIntent that is ready for processing.
   * @throws Stripe.CannotProceedError
   */
  confirm(
    id: string,
    params?: V2.MoneyManagement.FundingIntentConfirmParams,
    options?: RequestOptions
  ): Promise<Response<FundingIntent>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/funding_intents/${encodeURIComponent(id)}/confirm`,
      params,
      options
    ) as any;
  }
}
export interface FundingIntent {
  /**
   * Unique identifier for the FundingIntent.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.funding_intent';

  /**
   * The amount to add to the destination.
   */
  amount: V2Amount;

  /**
   * Whether you can cancel the FundingIntent.
   */
  cancelable: boolean;

  /**
   * Details for a check FundingIntent.
   */
  check?: FundingIntent.Check;

  /**
   * How the FundingIntent is confirmed after validation.
   */
  confirmation_method: FundingIntent.ConfirmationMethod;

  /**
   * Time at which the FundingIntent was created.
   */
  created: string;

  /**
   * An arbitrary string attached to the FundingIntent.
   */
  description?: string;

  /**
   * Details about the latest underlying money movement attempt.
   */
  latest_attempt?: FundingIntent.LatestAttempt;

  /**
   * Whether the FundingIntent exists in live mode.
   */
  livemode: boolean;

  /**
   * Set of key-value pairs attached to the FundingIntent.
   */
  metadata?: Metadata;

  /**
   * The action required to continue processing the FundingIntent.
   */
  next_action?: FundingIntent.NextAction;

  /**
   * The information to review before confirming the FundingIntent.
   */
  next_confirmation?: FundingIntent.NextConfirmation;

  /**
   * Controls when the funds become available after processing.
   */
  settlement_timing?: FundingIntent.SettlementTiming;

  /**
   * The current status of the FundingIntent.
   */
  status: FundingIntent.Status;

  /**
   * Additional details about the current status.
   */
  status_details?: FundingIntent.StatusDetails;

  /**
   * Timestamps for the FundingIntent's status transitions.
   */
  status_transitions: FundingIntent.StatusTransitions;

  /**
   * The destination for the funds.
   */
  to: FundingIntent.To;

  /**
   * The type of FundingIntent.
   */
  type: FundingIntent.Type;
}
export namespace FundingIntent {
  export interface Check {
    /**
     * The ID of a File containing the back image of the check.
     */
    back_image?: string;

    /**
     * The ID of a File containing the front image of the check.
     */
    front_image?: string;
  }

  export type ConfirmationMethod = 'automatic' | 'manual' | OtherString;

  export interface LatestAttempt {
    /**
     * The ID of the InboundFunding created by the attempt.
     */
    inbound_funding: string;

    /**
     * The type of underlying money movement created by the attempt.
     */
    type: LatestAttempt.Type;
  }

  export interface NextAction {
    /**
     * Details for handling a failed attempt.
     */
    handle_failure?: NextAction.HandleFailure;

    /**
     * The reason that you must provide a different check.
     */
    provide_new_check?: NextAction.ProvideNewCheck;

    /**
     * Issues that require corrected check images or an updated amount.
     */
    provide_new_images?: NextAction.ProvideNewImages;

    /**
     * The type of action required.
     */
    type: NextAction.Type;
  }

  export interface NextConfirmation {
    /**
     * Factors to review before confirming the FundingIntent.
     */
    requires_review?: NextConfirmation.RequiresReview;

    /**
     * The type of confirmation required.
     */
    type: NextConfirmation.Type;
  }

  export interface SettlementTiming {
    /**
     * The number of days to delay the availability of funds after processing completes.
     */
    delay_days_override?: number;
  }

  export type Status =
    | 'canceled'
    | 'processing'
    | 'requires_action'
    | 'requires_confirmation'
    | 'succeeded'
    | 'validating'
    | OtherString;

  export interface StatusDetails {
    /**
     * Details present when the FundingIntent is canceled.
     */
    canceled?: StatusDetails.Canceled;
  }

  export interface StatusTransitions {
    /**
     * Time at which the FundingIntent entered the `canceled` status.
     */
    canceled_at?: string;

    /**
     * Time at which the FundingIntent entered the `processing` status.
     */
    processing_at?: string;

    /**
     * Time at which the FundingIntent entered the `requires_action` status.
     */
    requires_action_at?: string;

    /**
     * Time at which the FundingIntent entered the `requires_confirmation` status.
     */
    requires_confirmation_at?: string;

    /**
     * Time at which the FundingIntent entered the `succeeded` status.
     */
    succeeded_at?: string;

    /**
     * Time at which the FundingIntent entered the `validating` status.
     */
    validating_at?: string;
  }

  export interface To {
    /**
     * The currency of the destination FinancialAccount balance.
     */
    currency: string;

    /**
     * The ID of the FinancialAccount that receives the funds.
     */
    financial_account: string;
  }

  export type Type = 'check' | OtherString;

  export namespace LatestAttempt {
    export type Type = 'inbound_funding' | OtherString;
  }

  export namespace NextAction {
    export interface HandleFailure {
      /**
       * The reason the attempt failed.
       */
      reason: HandleFailure.Reason;

      /**
       * Whether you can retry the FundingIntent.
       */
      retryable: boolean;
    }

    export interface ProvideNewCheck {
      /**
       * A human-readable description of the factor.
       */
      description: string;

      /**
       * A machine-readable reason for the factor.
       */
      reason: ProvideNewCheck.Reason;
    }

    export interface ProvideNewImages {
      /**
       * Issues detected in the check amount.
       */
      amount_issues: Array<ProvideNewImages.AmountIssue>;

      /**
       * Issues detected in the back image of the check.
       */
      back_image: Array<ProvideNewImages.BackImage>;

      /**
       * Issues detected in the front image of the check.
       */
      front_image: Array<ProvideNewImages.FrontImage>;
    }

    export type Type =
      | 'handle_failure'
      | 'provide_new_check'
      | 'provide_new_images'
      | 'requires_check_images'
      | OtherString;

    export namespace HandleFailure {
      export type Reason =
        | 'insufficient_funds'
        | 'not_authorized'
        | 'stripe_rejected'
        | OtherString;
    }

    export namespace ProvideNewCheck {
      export type Reason =
        | 'amount_variance_exceeds_threshold'
        | 'amount_variance_nearing_threshold'
        | 'back_image_not_processed'
        | 'back_looks_like_front'
        | 'back_signature_not_detected'
        | 'bad_payee_name'
        | 'date_invalid'
        | 'date_in_future'
        | 'date_older_than_one_year'
        | 'date_older_than_six_months'
        | 'duplicate_check'
        | 'endorsement_missing'
        | 'folded_or_torn_corners'
        | 'front_image_dimension_mismatch'
        | 'front_image_not_processed'
        | 'front_image_too_dark'
        | 'front_image_too_light'
        | 'front_image_too_small'
        | 'front_signature_not_detected'
        | 'high_risk'
        | 'image_cannot_be_processed'
        | 'image_out_of_focus'
        | 'invalid_check_type'
        | 'invalid_routing_number'
        | 'not_accepted_please_contact'
        | 'no_routing_number_detected'
        | 'safe_harbor_phrase_missing'
        | 'savings_bond_detected'
        | 'travelers_check'
        | 'unable_to_read_account_info'
        | OtherString;
    }

    export namespace ProvideNewImages {
      export interface AmountIssue {
        /**
         * A human-readable description of the factor.
         */
        description: string;

        /**
         * A machine-readable reason for the factor.
         */
        reason: AmountIssue.Reason;
      }

      export interface BackImage {
        /**
         * A human-readable description of the factor.
         */
        description: string;

        /**
         * A machine-readable reason for the factor.
         */
        reason: BackImage.Reason;
      }

      export interface FrontImage {
        /**
         * A human-readable description of the factor.
         */
        description: string;

        /**
         * A machine-readable reason for the factor.
         */
        reason: FrontImage.Reason;
      }

      export namespace AmountIssue {
        export type Reason =
          | 'amount_variance_exceeds_threshold'
          | 'amount_variance_nearing_threshold'
          | 'back_image_not_processed'
          | 'back_looks_like_front'
          | 'back_signature_not_detected'
          | 'bad_payee_name'
          | 'date_invalid'
          | 'date_in_future'
          | 'date_older_than_one_year'
          | 'date_older_than_six_months'
          | 'duplicate_check'
          | 'endorsement_missing'
          | 'folded_or_torn_corners'
          | 'front_image_dimension_mismatch'
          | 'front_image_not_processed'
          | 'front_image_too_dark'
          | 'front_image_too_light'
          | 'front_image_too_small'
          | 'front_signature_not_detected'
          | 'high_risk'
          | 'image_cannot_be_processed'
          | 'image_out_of_focus'
          | 'invalid_check_type'
          | 'invalid_routing_number'
          | 'not_accepted_please_contact'
          | 'no_routing_number_detected'
          | 'safe_harbor_phrase_missing'
          | 'savings_bond_detected'
          | 'travelers_check'
          | 'unable_to_read_account_info'
          | OtherString;
      }

      export namespace BackImage {
        export type Reason =
          | 'amount_variance_exceeds_threshold'
          | 'amount_variance_nearing_threshold'
          | 'back_image_not_processed'
          | 'back_looks_like_front'
          | 'back_signature_not_detected'
          | 'bad_payee_name'
          | 'date_invalid'
          | 'date_in_future'
          | 'date_older_than_one_year'
          | 'date_older_than_six_months'
          | 'duplicate_check'
          | 'endorsement_missing'
          | 'folded_or_torn_corners'
          | 'front_image_dimension_mismatch'
          | 'front_image_not_processed'
          | 'front_image_too_dark'
          | 'front_image_too_light'
          | 'front_image_too_small'
          | 'front_signature_not_detected'
          | 'high_risk'
          | 'image_cannot_be_processed'
          | 'image_out_of_focus'
          | 'invalid_check_type'
          | 'invalid_routing_number'
          | 'not_accepted_please_contact'
          | 'no_routing_number_detected'
          | 'safe_harbor_phrase_missing'
          | 'savings_bond_detected'
          | 'travelers_check'
          | 'unable_to_read_account_info'
          | OtherString;
      }

      export namespace FrontImage {
        export type Reason =
          | 'amount_variance_exceeds_threshold'
          | 'amount_variance_nearing_threshold'
          | 'back_image_not_processed'
          | 'back_looks_like_front'
          | 'back_signature_not_detected'
          | 'bad_payee_name'
          | 'date_invalid'
          | 'date_in_future'
          | 'date_older_than_one_year'
          | 'date_older_than_six_months'
          | 'duplicate_check'
          | 'endorsement_missing'
          | 'folded_or_torn_corners'
          | 'front_image_dimension_mismatch'
          | 'front_image_not_processed'
          | 'front_image_too_dark'
          | 'front_image_too_light'
          | 'front_image_too_small'
          | 'front_signature_not_detected'
          | 'high_risk'
          | 'image_cannot_be_processed'
          | 'image_out_of_focus'
          | 'invalid_check_type'
          | 'invalid_routing_number'
          | 'not_accepted_please_contact'
          | 'no_routing_number_detected'
          | 'safe_harbor_phrase_missing'
          | 'savings_bond_detected'
          | 'travelers_check'
          | 'unable_to_read_account_info'
          | OtherString;
      }
    }
  }

  export namespace NextConfirmation {
    export interface RequiresReview {
      /**
       * Factors that require review.
       */
      factors: Array<RequiresReview.Factor>;
    }

    export type Type = 'requires_review' | OtherString;

    export namespace RequiresReview {
      export interface Factor {
        /**
         * A human-readable description of the factor.
         */
        description: string;

        /**
         * A machine-readable reason for the factor.
         */
        reason: Factor.Reason;
      }

      export namespace Factor {
        export type Reason =
          | 'amount_variance_exceeds_threshold'
          | 'amount_variance_nearing_threshold'
          | 'back_image_not_processed'
          | 'back_looks_like_front'
          | 'back_signature_not_detected'
          | 'bad_payee_name'
          | 'date_invalid'
          | 'date_in_future'
          | 'date_older_than_one_year'
          | 'date_older_than_six_months'
          | 'duplicate_check'
          | 'endorsement_missing'
          | 'folded_or_torn_corners'
          | 'front_image_dimension_mismatch'
          | 'front_image_not_processed'
          | 'front_image_too_dark'
          | 'front_image_too_light'
          | 'front_image_too_small'
          | 'front_signature_not_detected'
          | 'high_risk'
          | 'image_cannot_be_processed'
          | 'image_out_of_focus'
          | 'invalid_check_type'
          | 'invalid_routing_number'
          | 'not_accepted_please_contact'
          | 'no_routing_number_detected'
          | 'safe_harbor_phrase_missing'
          | 'savings_bond_detected'
          | 'travelers_check'
          | 'unable_to_read_account_info'
          | OtherString;
      }
    }
  }

  export namespace StatusDetails {
    export interface Canceled {
      /**
       * The reason the FundingIntent was canceled.
       */
      reason: Canceled.Reason;
    }

    export namespace Canceled {
      export type Reason = 'canceled_by_user' | OtherString;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FundingIntentCreateParams {
      /**
       * The amount to add to the destination.
       */
      amount: V2Amount;

      /**
       * The destination for the funds.
       */
      to: FundingIntentCreateParams.To;

      /**
       * The type of FundingIntent to create.
       */
      type: FundingIntentCreateParams.Type;

      /**
       * Details for a check FundingIntent.
       */
      check?: FundingIntentCreateParams.Check;

      /**
       * How to confirm the FundingIntent after validation.
       */
      confirmation_method?: FundingIntentCreateParams.ConfirmationMethod;

      /**
       * An arbitrary string to attach to the FundingIntent.
       */
      description?: string;

      /**
       * Set of key-value pairs to attach to the FundingIntent.
       */
      metadata?: MetadataParam;

      /**
       * Controls when the funds become available after processing.
       */
      settlement_timing?: FundingIntentCreateParams.SettlementTiming;
    }

    export namespace FundingIntentCreateParams {
      export interface To {
        /**
         * The currency of the destination FinancialAccount balance.
         */
        currency: string;

        /**
         * The ID of the FinancialAccount that receives the funds.
         */
        financial_account: string;
      }

      export type Type = 'check' | OtherString;

      export interface Check {
        /**
         * The ID of a File containing the back image of the check.
         */
        back_image?: string;

        /**
         * The ID of a File containing the front image of the check.
         */
        front_image?: string;
      }

      export type ConfirmationMethod = 'automatic' | 'manual' | OtherString;

      export interface SettlementTiming {
        /**
         * The number of days to delay the availability of funds after processing completes.
         */
        delay_days_override?: number;
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FundingIntentRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FundingIntentUpdateParams {
      /**
       * The updated amount to add to the destination.
       */
      amount?: V2Amount;

      /**
       * Updated details for a check FundingIntent.
       */
      check?: FundingIntentUpdateParams.Check;

      /**
       * The updated confirmation method.
       */
      confirmation_method?: FundingIntentUpdateParams.ConfirmationMethod;

      /**
       * The updated description.
       */
      description?: string;

      /**
       * Updates to the key-value pairs attached to the FundingIntent.
       */
      metadata?: MetadataParam;
    }

    export namespace FundingIntentUpdateParams {
      export interface Check {
        /**
         * The ID of a File containing the back image of the check.
         */
        back_image?: string;

        /**
         * The ID of a File containing the front image of the check.
         */
        front_image?: string;
      }

      export type ConfirmationMethod = 'automatic' | 'manual' | OtherString;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FundingIntentListParams {
      /**
       * Filters the results by their creation time.
       */
      created?: RangeQueryParam;

      /**
       * The maximum number of results to return.
       */
      limit?: number;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FundingIntentCancelParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FundingIntentConfirmParams {}
  }
}
