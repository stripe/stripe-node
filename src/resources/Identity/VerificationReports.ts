// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../lib.js';
import {PaginationParams, RangeQueryParam, Address} from '../../shared.js';
import {ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class VerificationReportResource extends StripeResource {
  /**
   * List all verification reports.
   */
  list(
    params?: Identity.VerificationReportListParams,
    options?: RequestOptions
  ): ApiListPromise<VerificationReport>;
  list(options?: RequestOptions): ApiListPromise<VerificationReport>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/identity/verification_reports',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieves an existing VerificationReport
   */
  retrieve(
    id: string,
    params?: Identity.VerificationReportRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<VerificationReport>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<VerificationReport>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/identity/verification_reports/{report}',
    }).call(this, ...args);
  }
}
export interface VerificationReport {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'identity.verification_report';

  /**
   * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
   */
  client_reference_id: string | null;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Result from a document check
   */
  document?: Identity.VerificationReport.Document;

  /**
   * Result from a email check
   */
  email?: Identity.VerificationReport.Email;

  /**
   * Result from an id_number check
   */
  id_number?: Identity.VerificationReport.IdNumber;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  options?: Identity.VerificationReport.Options;

  /**
   * Result from a phone check
   */
  phone?: Identity.VerificationReport.Phone;

  /**
   * Result from a selfie check
   */
  selfie?: Identity.VerificationReport.Selfie;

  /**
   * Type of report.
   */
  type: Identity.VerificationReport.Type;

  /**
   * The configuration token of a verification flow from the dashboard.
   */
  verification_flow?: string;

  /**
   * ID of the VerificationSession that created this report.
   */
  verification_session: string | null;
}
export namespace Identity {
  export namespace VerificationReport {
    export interface Document {
      /**
       * Address as it appears in the document.
       */
      address: Address | null;

      /**
       * Date of birth as it appears in the document.
       */
      dob?: Document.Dob | null;

      /**
       * Details on the verification error. Present when status is `unverified`.
       */
      error: Document.Error | null;

      /**
       * Expiration date of the document.
       */
      expiration_date?: Document.ExpirationDate | null;

      /**
       * Array of [File](https://stripe.com/docs/api/files) ids containing images for this document.
       */
      files: Array<string> | null;

      /**
       * First name as it appears in the document.
       */
      first_name: string | null;

      /**
       * Issued date of the document.
       */
      issued_date: Document.IssuedDate | null;

      /**
       * Issuing country of the document.
       */
      issuing_country: string | null;

      /**
       * Last name as it appears in the document.
       */
      last_name: string | null;

      /**
       * Document ID number.
       */
      number?: string | null;

      /**
       * Sex of the person in the document.
       */
      sex?: Document.Sex | null;

      /**
       * Status of this `document` check.
       */
      status: Document.Status;

      /**
       * Type of the document.
       */
      type: Document.Type | null;

      /**
       * Place of birth as it appears in the document.
       */
      unparsed_place_of_birth?: string | null;

      /**
       * Sex as it appears in the document.
       */
      unparsed_sex?: string | null;
    }

    export interface Email {
      /**
       * Email to be verified.
       */
      email: string | null;

      /**
       * Details on the verification error. Present when status is `unverified`.
       */
      error: Email.Error | null;

      /**
       * Status of this `email` check.
       */
      status: Email.Status;
    }

    export interface IdNumber {
      /**
       * Date of birth.
       */
      dob?: IdNumber.Dob | null;

      /**
       * Details on the verification error. Present when status is `unverified`.
       */
      error: IdNumber.Error | null;

      /**
       * First name.
       */
      first_name: string | null;

      /**
       * ID number. When `id_number_type` is `us_ssn`, only the last 4 digits are present.
       */
      id_number?: string | null;

      /**
       * Type of ID number.
       */
      id_number_type: IdNumber.IdNumberType | null;

      /**
       * Last name.
       */
      last_name: string | null;

      /**
       * Status of this `id_number` check.
       */
      status: IdNumber.Status;
    }

    export interface Options {
      document?: Options.Document;

      id_number?: Options.IdNumber;
    }

    export interface Phone {
      /**
       * Details on the verification error. Present when status is `unverified`.
       */
      error: Phone.Error | null;

      /**
       * Phone to be verified.
       */
      phone: string | null;

      /**
       * Status of this `phone` check.
       */
      status: Phone.Status;
    }

    export interface Selfie {
      /**
       * ID of the [File](https://stripe.com/docs/api/files) holding the image of the identity document used in this check.
       */
      document: string | null;

      /**
       * Details on the verification error. Present when status is `unverified`.
       */
      error: Selfie.Error | null;

      /**
       * ID of the [File](https://stripe.com/docs/api/files) holding the image of the selfie used in this check.
       */
      selfie: string | null;

      /**
       * Status of this `selfie` check.
       */
      status: Selfie.Status;
    }

    export type Type = 'document' | 'id_number' | 'verification_flow';

    export namespace Document {
      export interface Dob {
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

      export interface Error {
        /**
         * A short machine-readable string giving the reason for the verification failure.
         */
        code: Error.Code | null;

        /**
         * A human-readable message giving the reason for the failure. These messages can be shown to your users.
         */
        reason: string | null;
      }

      export interface ExpirationDate {
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

      export interface IssuedDate {
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

      export type Sex = '[redacted]' | 'female' | 'male' | 'unknown';

      export type Status = 'unverified' | 'verified';

      export type Type = 'driving_license' | 'id_card' | 'passport';

      export namespace Error {
        export type Code =
          | 'document_expired'
          | 'document_type_not_supported'
          | 'document_unverified_other';
      }
    }

    export namespace Email {
      export interface Error {
        /**
         * A short machine-readable string giving the reason for the verification failure.
         */
        code: Error.Code | null;

        /**
         * A human-readable message giving the reason for the failure. These messages can be shown to your users.
         */
        reason: string | null;
      }

      export type Status = 'unverified' | 'verified';

      export namespace Error {
        export type Code =
          | 'email_unverified_other'
          | 'email_verification_declined';
      }
    }

    export namespace IdNumber {
      export interface Dob {
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

      export interface Error {
        /**
         * A short machine-readable string giving the reason for the verification failure.
         */
        code: Error.Code | null;

        /**
         * A human-readable message giving the reason for the failure. These messages can be shown to your users.
         */
        reason: string | null;
      }

      export type IdNumberType = 'br_cpf' | 'sg_nric' | 'us_ssn';

      export type Status = 'unverified' | 'verified';

      export namespace Error {
        export type Code =
          | 'id_number_insufficient_document_data'
          | 'id_number_mismatch'
          | 'id_number_unverified_other';
      }
    }

    export namespace Options {
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

      export interface IdNumber {}

      export namespace Document {
        export type AllowedType = 'driving_license' | 'id_card' | 'passport';
      }
    }

    export namespace Phone {
      export interface Error {
        /**
         * A short machine-readable string giving the reason for the verification failure.
         */
        code: Error.Code | null;

        /**
         * A human-readable message giving the reason for the failure. These messages can be shown to your users.
         */
        reason: string | null;
      }

      export type Status = 'unverified' | 'verified';

      export namespace Error {
        export type Code =
          | 'phone_unverified_other'
          | 'phone_verification_declined';
      }
    }

    export namespace Selfie {
      export interface Error {
        /**
         * A short machine-readable string giving the reason for the verification failure.
         */
        code: Error.Code | null;

        /**
         * A human-readable message giving the reason for the failure. These messages can be shown to your users.
         */
        reason: string | null;
      }

      export type Status = 'unverified' | 'verified';

      export namespace Error {
        export type Code =
          | 'selfie_document_missing_photo'
          | 'selfie_face_mismatch'
          | 'selfie_manipulated'
          | 'selfie_unverified_other';
      }
    }
  }
}
export namespace Identity {
  export interface VerificationReportRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Identity {
  export interface VerificationReportListParams extends PaginationParams {
    /**
     * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
     */
    client_reference_id?: string;

    /**
     * Only return VerificationReports that were created during the given date interval.
     */
    created?: RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return VerificationReports of this type
     */
    type?: VerificationReportListParams.Type;

    /**
     * Only return VerificationReports created by this VerificationSession ID. It is allowed to provide a VerificationIntent ID.
     */
    verification_session?: string;
  }

  export namespace VerificationReportListParams {
    export type Type = 'document' | 'id_number';
  }
}
