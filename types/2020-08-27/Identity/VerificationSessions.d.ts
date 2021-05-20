// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Identity {
      /**
       * The VerificationSession object.
       */
      interface VerificationSession {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'identity.verification_session';

        /**
         * This string value can be passed to stripe.js to embed a verification flow directly into your app.
         */
        client_secret: string | null;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Hash of details on the last error encountered in the verification process.
         */
        last_error: VerificationSession.LastError | null;

        /**
         * Link to the most recent completed VerificationReport for this Session.
         */
        last_verification_report:
          | string
          | Stripe.Identity.VerificationReport
          | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        options: VerificationSession.Options;

        /**
         * Redaction status of this VerificationSession. If the VerificationSession is not redacted, this field will be null.
         */
        redaction: VerificationSession.Redaction | null;

        /**
         * Status of this VerificationSession. Read more about each [VerificationSession status](https://stripe.com/docs/identity/how-sessions-work).
         */
        status: VerificationSession.Status;

        /**
         * Type of report requested.
         */
        type: VerificationSession.Type;

        /**
         * Link to the Stripe-hosted identity verification portal that you can send a user to for verification.
         */
        url: string | null;

        /**
         * Hash of verified data about this person that results from a successful verification report.
         */
        verified_outputs: VerificationSession.VerifiedOutputs | null;
      }

      namespace VerificationSession {
        interface LastError {
          /**
           * A short machine-readable string giving the reason for the verification or user-session failure.
           */
          code: LastError.Code | null;

          /**
           * A human-readable message giving the reason for the failure. These messages can be shown to your users.
           */
          reason: string | null;
        }

        namespace LastError {
          type Code =
            | 'abandoned'
            | 'consent_declined'
            | 'country_not_supported'
            | 'device_not_supported'
            | 'document_expired'
            | 'document_type_not_supported'
            | 'document_unverified_other'
            | 'id_number_insufficient_document_data'
            | 'id_number_mismatch'
            | 'id_number_unverified_other'
            | 'selfie_document_missing_photo'
            | 'selfie_face_mismatch'
            | 'selfie_manipulated'
            | 'selfie_unverified_other'
            | 'under_supported_age';
        }

        interface Options {
          document?: Options.Document;

          id_number?: Options.IdNumber;
        }

        namespace Options {
          interface Document {
            /**
             * Restrict the list of allowed document type to these types.
             */
            allowed_types?: Array<Document.AllowedType>;

            /**
             * Require that the user provide an id number which will be verified.
             */
            require_id_number?: boolean;

            /**
             * Require that the user capture documents live with their webcam or phone camera.
             */
            require_live_capture?: boolean;

            /**
             * Require that the user provide a selfie to compare against the document photo.
             */
            require_matching_selfie?: boolean;
          }

          namespace Document {
            type AllowedType = 'driving_license' | 'id_card' | 'passport';
          }

          interface IdNumber {}
        }

        interface Redaction {
          /**
           * Indicates whether this object and its related objects have been redacted or not.
           */
          status: Redaction.Status;
        }

        namespace Redaction {
          type Status = 'processing' | 'redacted';
        }

        type Status = 'canceled' | 'processing' | 'requires_input' | 'verified';

        type Type = 'document' | 'id_number';

        interface VerifiedOutputs {
          /**
           * Verified address of the user.
           */
          address: Stripe.Address | null;

          /**
           * Verified date of birth of the user.
           */
          dob: VerifiedOutputs.Dob | null;

          /**
           * Verified first name of the user.
           */
          first_name: string | null;

          /**
           * Verified national id number of the user.
           */
          id_number: string | null;

          /**
           * Country / type of verified national id number.
           */
          id_number_type: VerifiedOutputs.IdNumberType | null;

          /**
           * Verified last name of the user.
           */
          last_name: string | null;
        }

        namespace VerifiedOutputs {
          interface Dob {
            /**
             * Numerical day between 1 and 31.
             */
            day: number | null;

            /**
             * Numerical month between 1 and 12.
             */
            month: number | null;

            /**
             * The four-digit year.
             */
            year: number | null;
          }

          type IdNumberType = 'br_cpf' | 'sg_nric' | 'us_ssn';
        }
      }

      interface VerificationSessionCreateParams {
        /**
         * The primary type of verification being performed with this Session.
         */
        type: VerificationSessionCreateParams.Type;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * An optional hash of configuration options for each verification rule that is requested
         */
        options?: VerificationSessionCreateParams.Options;

        /**
         * The URL the user will be redirected to after Stripe collects the required identity information.
         */
        return_url?: string;
      }

      namespace VerificationSessionCreateParams {
        interface Options {
          /**
           * Verification configuration options for the `document` record_type.
           */
          document?: Stripe.Emptyable<Options.Document>;
        }

        namespace Options {
          interface Document {
            /**
             * Restrict the list of allowed document type to these types.
             */
            allowed_types?: Array<Document.AllowedType>;

            /**
             * Require that the user provide an id number which will be verified.
             */
            require_id_number?: boolean;

            /**
             * Require that the user capture documents live with their webcam or phone camera.
             */
            require_live_capture?: boolean;

            /**
             * Require that the user provide a selfie to compare against the document photo.
             */
            require_matching_selfie?: boolean;
          }

          namespace Document {
            type AllowedType = 'driving_license' | 'id_card' | 'passport';
          }
        }

        type Type = 'document' | 'id_number';
      }

      interface VerificationSessionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface VerificationSessionUpdateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * New configuration options.
         */
        options?: VerificationSessionUpdateParams.Options;

        /**
         * New verification type.
         */
        type?: VerificationSessionUpdateParams.Type;
      }

      namespace VerificationSessionUpdateParams {
        interface Options {
          /**
           * Verification configuration options for the `document` record_type.
           */
          document?: Stripe.Emptyable<Options.Document>;
        }

        namespace Options {
          interface Document {
            /**
             * Restrict the list of allowed document type to these types.
             */
            allowed_types?: Array<Document.AllowedType>;

            /**
             * Require that the user provide an id number which will be verified.
             */
            require_id_number?: boolean;

            /**
             * Require that the user capture documents live with their webcam or phone camera.
             */
            require_live_capture?: boolean;

            /**
             * Require that the user provide a selfie to compare against the document photo.
             */
            require_matching_selfie?: boolean;
          }

          namespace Document {
            type AllowedType = 'driving_license' | 'id_card' | 'passport';
          }
        }

        type Type = 'document' | 'id_number';
      }

      interface VerificationSessionListParams extends PaginationParams {
        created?: Stripe.RangeQueryParam | number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return VerificationSessions with this status.
         */
        status?: VerificationSessionListParams.Status;
      }

      namespace VerificationSessionListParams {
        type Status = 'canceled' | 'processing' | 'requires_input' | 'verified';
      }

      interface VerificationSessionCancelParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface VerificationSessionRedactParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class VerificationSessionsResource {
        /**
         * Create a new VerificationSession to begin the verification process.
         */
        create(
          params: VerificationSessionCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.VerificationSession>>;

        /**
         * Retrieves an existing VerificationSession. When the session status is requires_input, this method guarantees
         * that the redirect url is fresh: if your user has previously visited this session, a new url will be returned.
         * Before redirecting your user to Stripe, ensure that you have just Created or Retrieved the VerificationSession;
         * never cache or store the url.
         */
        retrieve(
          id: string,
          params?: VerificationSessionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.VerificationSession>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.VerificationSession>>;

        /**
         * Update properties on a VerificationSession
         */
        update(
          id: string,
          params?: VerificationSessionUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.VerificationSession>>;

        /**
         * List all verification sessions. Can optionally provide a status to return only VerificationSessions with that status. Can optionally specify a query filter on created timestamp.
         */
        list(
          params?: VerificationSessionListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Identity.VerificationSession>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Identity.VerificationSession>;

        /**
         * Mark a VerificationSession as canceled.
         *
         * If the VerificationSession is in the processing state, you must wait until it
         * finishes before cancelling it.
         */
        cancel(
          id: string,
          params?: VerificationSessionCancelParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.VerificationSession>>;
        cancel(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.VerificationSession>>;

        /**
         * Redact a VerificationSession to delete all collected information from Stripe.
         * This will redact the VerificationSession and all objects related to it, including
         * VerificationReports, Events, Files, request logs, etc. This redaction process may
         * take up to four days. When the redaction process is in progress, the
         * VerificationSession's redaction.status field will be set to processing; when
         * the process is finished, it will change to redacted.
         *
         * Redaction is irreversible. Redacted objects are still accessible in the Stripe API,
         * but all the fields that contain personal data will be replaced by the string
         * [redacted] or a similar placeholder. The metadata field will also be erased.
         * Redacted objects cannot be updated or used for any purpose.
         *
         * If the VerificationSession is in the processing state, you must wait until it
         * finishes before redacting it. Redacting a VerificationSession in requires_action
         * state will automatically [cancel](https://stripe.com/docs/api/verification_sessions/cancel) it.
         *
         * An [identity.verification_session.redacted](https://stripe.com/docs/api/events/types#event_types-identity.verification_session.redacted)
         * webhook will be sent when a VerificationSession is redacted.
         */
        redact(
          id: string,
          params?: VerificationSessionRedactParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.VerificationSession>>;
        redact(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.VerificationSession>>;
      }
    }
  }
}
