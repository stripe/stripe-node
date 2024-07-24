// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A notice to a Connected account. Notice can be sent by Stripe on your behalf or you can opt to send the notices yourself.
     *
     * See the [guide to send notices](https://stripe.com/docs/issuing/compliance-us/issuing-regulated-customer-notices) to your connected accounts.
     */
    interface AccountNotice {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'account_notice';

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * When present, the deadline for sending the notice to meet the relevant regulations.
       */
      deadline: number | null;

      /**
       * Information about the email when sent.
       */
      email: AccountNotice.Email | null;

      /**
       * Information about objects related to the notice.
       */
      linked_objects: AccountNotice.LinkedObjects | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * Reason the notice is being sent. The reason determines what copy the notice must contain. See the [regulated customer notices](https://stripe.com/docs/issuing/compliance-us/issuing-regulated-customer-notices) guide. All reasons might not apply to your integration, and Stripe might add new reasons in the future, so we recommend an internal warning when you receive an unknown reason.
       */
      reason: AccountNotice.Reason;

      /**
       * Date when the notice was sent. When absent, you must send the notice, update the content of the email and date when it was sent.
       */
      sent_at: number | null;
    }

    namespace AccountNotice {
      interface Email {
        /**
         * Content of the email in plain text. The copy must match exactly the language that Stripe Compliance has approved for use.
         */
        plain_text: string;

        /**
         * Email address of the recipient.
         */
        recipient: string;

        /**
         * Subject of the email.
         */
        subject: string;
      }

      interface LinkedObjects {
        /**
         * Associated [Capability](https://stripe.com/docs/api/capabilities)
         */
        capability: string | null;

        /**
         * Associated [Credit Underwriting Record](https://stripe.com/docs/api/issuing/credit_underwriting_record)
         */
        issuing_credit_underwriting_record?: string | null;

        /**
         * Associated [Issuing Dispute](https://stripe.com/docs/api/issuing/disputes)
         */
        issuing_dispute: string | null;
      }

      type Reason =
        | 'issuing.account_closed_for_inactivity'
        | 'issuing.account_closed_for_not_providing_business_model_clarification'
        | 'issuing.account_closed_for_not_providing_url_clarification'
        | 'issuing.account_closed_for_not_providing_use_case_clarification'
        | 'issuing.account_closed_for_terms_of_service_violation'
        | 'issuing.application_rejected_for_failure_to_verify'
        | 'issuing.credit_application_rejected'
        | 'issuing.credit_increase_application_rejected'
        | 'issuing.credit_limit_decreased'
        | 'issuing.credit_line_closed'
        | 'issuing.dispute_lost'
        | 'issuing.dispute_submitted'
        | 'issuing.dispute_won';
    }
  }
}
