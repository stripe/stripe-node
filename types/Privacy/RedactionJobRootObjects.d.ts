// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Privacy {
      /**
       * The objects to redact, grouped by type. All redactable objects associated with these objects will be redacted as well.
       */
      interface RedactionJobRootObjects {
        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'privacy.redaction_job_root_objects';

        charges: Array<string> | null;

        checkout_sessions: Array<string> | null;

        customers: Array<string> | null;

        identity_verification_sessions: Array<string> | null;

        invoices: Array<string> | null;

        issuing_cardholders: Array<string> | null;

        payment_intents: Array<string> | null;

        radar_value_list_items: Array<string> | null;

        setup_intents: Array<string> | null;
      }
    }
  }
}
