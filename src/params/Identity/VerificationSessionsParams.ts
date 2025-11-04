// File generated from our OpenAPI spec

namespace Identity {
  export interface VerificationSessionCreateParams {
    /**
     * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
     */
    client_reference_id?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.MetadataParam;

    /**
     * A set of options for the session's verification checks.
     */
    options?: VerificationSessionCreateParams.Options;

    /**
     * Details provided about the user being verified. These details may be shown to the user.
     */
    provided_details?: VerificationSessionCreateParams.ProvidedDetails;

    /**
     * Customer ID
     */
    related_customer?: string;

    /**
     * Tokens referencing a Person resource and it's associated account.
     */
    related_person?: VerificationSessionCreateParams.RelatedPerson;

    /**
     * The URL that the user will be redirected to upon completing the verification flow.
     */
    return_url?: string;

    /**
     * The type of [verification check](https://stripe.com/docs/identity/verification-checks) to be performed. You must provide a `type` if not passing `verification_flow`.
     */
    type?: VerificationSessionCreateParams.Type;

    /**
     * The ID of a verification flow from the Dashboard. See https://docs.stripe.com/identity/verification-flows.
     */
    verification_flow?: string;
  }

  namespace VerificationSessionCreateParams {
    export interface Options {
      /**
       * Options that apply to the [document check](https://stripe.com/docs/identity/verification-checks?type=document).
       */
      document?: Stripe.Emptyable<Options.Document>;
    }

    export interface ProvidedDetails {
      /**
       * Email of user being verified
       */
      email?: string;

      /**
       * Phone number of user being verified
       */
      phone?: string;
    }

    export interface RelatedPerson {
      /**
       * A token representing a connected account. If provided, the person parameter is also required and must be associated with the account.
       */
      account: string;

      /**
       * A token referencing a Person resource that this verification is being used to verify.
       */
      person: string;
    }

    export type Type = 'document' | 'id_number';

    namespace Options {
      export interface Document {
        /**
         * Array of strings of allowed identity document types. If the provided identity document isn't one of the allowed types, the verification check will fail with a document_type_not_allowed error code.
         */
        allowed_types?: Array<Document.AllowedType>;

        /**
         * Collect an ID number and perform an [ID number check](https://stripe.com/docs/identity/verification-checks?type=id-number) with the document's extracted name and date of birth.
         */
        require_id_number?: boolean;

        /**
         * Disable image uploads, identity document images have to be captured using the device's camera.
         */
        require_live_capture?: boolean;

        /**
         * Capture a face image and perform a [selfie check](https://stripe.com/docs/identity/verification-checks?type=selfie) comparing a photo ID and a picture of your user's face. [Learn more](https://stripe.com/docs/identity/selfie).
         */
        require_matching_selfie?: boolean;
      }

      namespace Document {
        export type AllowedType = 'driving_license' | 'id_card' | 'passport';
      }
    }
  }
}
namespace Identity {
  export interface VerificationSessionRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Identity {
  export interface VerificationSessionUpdateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.MetadataParam;

    /**
     * A set of options for the session's verification checks.
     */
    options?: VerificationSessionUpdateParams.Options;

    /**
     * Details provided about the user being verified. These details may be shown to the user.
     */
    provided_details?: VerificationSessionUpdateParams.ProvidedDetails;

    /**
     * The type of [verification check](https://stripe.com/docs/identity/verification-checks) to be performed.
     */
    type?: VerificationSessionUpdateParams.Type;
  }

  namespace VerificationSessionUpdateParams {
    export interface Options {
      /**
       * Options that apply to the [document check](https://stripe.com/docs/identity/verification-checks?type=document).
       */
      document?: Stripe.Emptyable<Options.Document>;
    }

    export interface ProvidedDetails {
      /**
       * Email of user being verified
       */
      email?: string;

      /**
       * Phone number of user being verified
       */
      phone?: string;
    }

    export type Type = 'document' | 'id_number';

    namespace Options {
      export interface Document {
        /**
         * Array of strings of allowed identity document types. If the provided identity document isn't one of the allowed types, the verification check will fail with a document_type_not_allowed error code.
         */
        allowed_types?: Array<Document.AllowedType>;

        /**
         * Collect an ID number and perform an [ID number check](https://stripe.com/docs/identity/verification-checks?type=id-number) with the document's extracted name and date of birth.
         */
        require_id_number?: boolean;

        /**
         * Disable image uploads, identity document images have to be captured using the device's camera.
         */
        require_live_capture?: boolean;

        /**
         * Capture a face image and perform a [selfie check](https://stripe.com/docs/identity/verification-checks?type=selfie) comparing a photo ID and a picture of your user's face. [Learn more](https://stripe.com/docs/identity/selfie).
         */
        require_matching_selfie?: boolean;
      }

      namespace Document {
        export type AllowedType = 'driving_license' | 'id_card' | 'passport';
      }
    }
  }
}
namespace Identity {
  export interface VerificationSessionListParams extends PaginationParams {
    /**
     * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
     */
    client_reference_id?: string;

    /**
     * Only return VerificationSessions that were created during the given date interval.
     */
    created?: Stripe.RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    related_customer?: string;

    /**
     * Only return VerificationSessions with this status. [Learn more about the lifecycle of sessions](https://stripe.com/docs/identity/how-sessions-work).
     */
    status?: VerificationSessionListParams.Status;
  }

  namespace VerificationSessionListParams {
    export type Status =
      | 'canceled'
      | 'processing'
      | 'requires_input'
      | 'verified';
  }
}
namespace Identity {
  export interface VerificationSessionCancelParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Identity {
  export interface VerificationSessionRedactParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
