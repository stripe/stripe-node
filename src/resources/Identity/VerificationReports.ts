// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {BlocklistEntry} from './BlocklistEntries.js';
import {
  PaginationParams,
  RangeQueryParam,
  OtherString,
  Address,
} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class VerificationReportResource extends StripeResource {
  /**
   * List all verification reports.
   */
  list(
    params?: Identity.VerificationReportListParams,
    options?: RequestOptions
  ): ApiListPromise<VerificationReport> {
    return this._makeRequest(
      'GET',
      '/v1/identity/verification_reports',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves an existing VerificationReport
   */
  retrieve(
    id: string,
    params?: Identity.VerificationReportRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<VerificationReport>> {
    return this._makeRequest(
      'GET',
      `/v1/identity/verification_reports/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
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
  document?: VerificationReport.Document;

  /**
   * Result from a email check
   */
  email?: VerificationReport.Email;

  /**
   * Result from an id_number check
   */
  id_number?: VerificationReport.IdNumber;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  options?: VerificationReport.Options;

  /**
   * Result from a phone check
   */
  phone?: VerificationReport.Phone;

  /**
   * Result from a selfie check
   */
  selfie?: VerificationReport.Selfie;

  signals?: VerificationReport.Signals;

  /**
   * Type of report.
   */
  type: VerificationReport.Type;

  /**
   * The configuration token of a verification flow from the dashboard.
   */
  verification_flow?: string;

  /**
   * ID of the VerificationSession that created this report.
   */
  verification_session: string | null;
}
export namespace VerificationReport {
  export interface Document {
    /**
     * Address as it appears in the document.
     */
    address: Address | null;

    /**
     * If document was not verified due to extracted data being on the blocklist, this is the token of the BlocklistEntry that blocked it
     */
    blocked_by_entry?: string | BlocklistEntry | null;

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
     * Array of [File](https://docs.stripe.com/api/files) ids containing images for this document.
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
     * Confidence that the provided address matches the email records.
     */
    address_match_confidence?: Email.AddressMatchConfidence;

    /**
     * Additional email verification details
     */
    details?: Email.Details;

    /**
     * Two-letter country code of the email domain's country.
     */
    domain_country?: string;

    /**
     * Email to be verified.
     */
    email: string | null;

    /**
     * Confidence that the email address exists.
     */
    email_exists_confidence?: Email.EmailExistsConfidence;

    /**
     * Details on the verification error. Present when status is `unverified`.
     */
    error: Email.Error | null;

    /**
     * Confidence that the provided name matches the email records.
     */
    name_match_confidence?: Email.NameMatchConfidence;

    /**
     * The observed number of days the email domain has existed.
     */
    observed_domain_tenure_days?: number;

    /**
     * The observed number of days the email address has existed.
     */
    observed_email_tenure_days?: number;

    /**
     * Confidence that the provided phone matches the email records.
     */
    phone_match_confidence?: Email.PhoneMatchConfidence;

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
     * Confidence that the provided address matches the phone records.
     */
    address_match_confidence?: Phone.AddressMatchConfidence;

    /**
     * The phone carrier.
     */
    carrier?: string;

    /**
     * Details on the verification error. Present when status is `unverified`.
     */
    error: Phone.Error | null;

    /**
     * The type of phone line.
     */
    line_type?: Phone.LineType;

    /**
     * Confidence that the provided name matches the phone records.
     */
    name_match_confidence?: Phone.NameMatchConfidence;

    /**
     * The observed number of days the person has owned the phone number.
     */
    observed_phone_tenure_days?: number;

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
     * If selfie was not verified due to being on the blocklist, this is the token of the BlocklistEntry that blocked it
     */
    blocked_by_entry?: string | BlocklistEntry | null;

    /**
     * ID of the [File](https://docs.stripe.com/api/files) holding the image of the identity document used in this check.
     */
    document: string | null;

    /**
     * Details on the verification error. Present when status is `unverified`.
     */
    error: Selfie.Error | null;

    /**
     * ID of the [File](https://docs.stripe.com/api/files) holding the image of the selfie used in this check.
     */
    selfie: string | null;

    /**
     * Status of this `selfie` check.
     */
    status: Selfie.Status;
  }

  export interface Signals {
    fraudulent_email?: Signals.FraudulentEmail;

    fraudulent_person?: Signals.FraudulentPerson;

    fraudulent_phone?: Signals.FraudulentPhone;
  }

  export type Type =
    | 'document'
    | 'email'
    | 'id_number'
    | 'verification_flow'
    | OtherString;

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

    export type Sex =
      | '[redacted]'
      | 'female'
      | 'male'
      | 'unknown'
      | OtherString;

    export type Status = 'unverified' | 'verified' | OtherString;

    export type Type = 'driving_license' | 'id_card' | 'passport' | OtherString;

    export namespace Error {
      export type Code =
        | 'document_expired'
        | 'document_type_not_supported'
        | 'document_unverified_other'
        | OtherString;
    }
  }

  export namespace Email {
    export type AddressMatchConfidence =
      | 'highest'
      | 'low'
      | 'normal'
      | 'unknown'
      | OtherString;

    export interface Details {
      /**
       * Number of days from the time when the email domain was first observed to the time of verification.
       */
      days_since_domain_creation?: number;

      /**
       * Number of days from the time when the email address was first observed to the time of verification.
       */
      days_since_ownership_started?: number;

      /**
       * Two-letter ISO 3166-1 alpha-2 country code of the email domain's country.
       */
      domain_country?: string;
    }

    export type EmailExistsConfidence =
      | 'highest'
      | 'low'
      | 'normal'
      | 'unknown'
      | OtherString;

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

    export type NameMatchConfidence =
      | 'highest'
      | 'low'
      | 'normal'
      | 'unknown'
      | OtherString;

    export type PhoneMatchConfidence =
      | 'highest'
      | 'low'
      | 'normal'
      | 'unknown'
      | OtherString;

    export type Status = 'unverified' | 'verified' | OtherString;

    export namespace Error {
      export type Code =
        | 'email_address_mismatch'
        | 'email_name_mismatch'
        | 'email_ownership_unverified'
        | 'email_phone_mismatch'
        | 'email_short_tenure'
        | 'email_unverified_other'
        | 'email_verification_declined'
        | OtherString;
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

    export type IdNumberType = 'br_cpf' | 'sg_nric' | 'us_ssn' | OtherString;

    export type Status = 'unverified' | 'verified' | OtherString;

    export namespace Error {
      export type Code =
        | 'id_number_insufficient_document_data'
        | 'id_number_mismatch'
        | 'id_number_unverified_other'
        | OtherString;
    }
  }

  export namespace Options {
    export interface Document {
      /**
       * Array of strings of allowed identity document types. If the provided identity document isn't one of the allowed types, the verification check will fail with a document_type_not_allowed error code.
       */
      allowed_types?: Array<Document.AllowedType>;

      /**
       * Collect an ID number and perform an [ID number check](https://docs.stripe.com/identity/verification-checks?type=id-number) with the document's extracted name and date of birth.
       */
      require_id_number?: boolean;

      /**
       * Disable image uploads, identity document images have to be captured using the device's camera.
       */
      require_live_capture?: boolean;

      /**
       * Capture a face image and perform a [selfie check](https://docs.stripe.com/identity/verification-checks?type=selfie) comparing a photo ID and a picture of your user's face. [Learn more](https://docs.stripe.com/identity/selfie).
       */
      require_matching_selfie?: boolean;
    }

    export interface IdNumber {}

    export namespace Document {
      export type AllowedType =
        | 'driving_license'
        | 'id_card'
        | 'passport'
        | OtherString;
    }
  }

  export namespace Phone {
    export type AddressMatchConfidence =
      | 'highest'
      | 'low'
      | 'normal'
      | 'unknown'
      | OtherString;

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

    export type LineType = 'landline' | 'mobile' | 'voip' | OtherString;

    export type NameMatchConfidence =
      | 'highest'
      | 'low'
      | 'normal'
      | 'unknown'
      | OtherString;

    export type Status = 'unverified' | 'verified' | OtherString;

    export namespace Error {
      export type Code =
        | 'phone_address_mismatch'
        | 'phone_invalid'
        | 'phone_invalid_line_type'
        | 'phone_name_mismatch'
        | 'phone_ownership_unverified'
        | 'phone_short_tenure'
        | 'phone_unsupported_country'
        | 'phone_unverified_other'
        | 'phone_verification_declined'
        | OtherString;
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

    export type Status = 'unverified' | 'verified' | OtherString;

    export namespace Error {
      export type Code =
        | 'selfie_document_missing_photo'
        | 'selfie_face_mismatch'
        | 'selfie_manipulated'
        | 'selfie_unverified_other'
        | OtherString;
    }
  }

  export namespace Signals {
    export interface FraudulentEmail {
      /**
       * Array of objects representing individual factors that contributed to the calculated risk level.
       */
      indicators: Array<FraudulentEmail.Indicator>;

      /**
       * Categorical assessment of the email risk.
       */
      risk_level: FraudulentEmail.RiskLevel;
    }

    export interface FraudulentPerson {
      /**
       * Array of objects representing individual factors that contributed to the calculated risk level.
       */
      indicators: Array<FraudulentPerson.Indicator>;

      /**
       * Categorical assessment of the fraudulent person risk.
       */
      risk_level: FraudulentPerson.RiskLevel;
    }

    export interface FraudulentPhone {
      /**
       * Array of objects representing individual factors that contributed to the calculated risk level.
       */
      indicators: Array<FraudulentPhone.Indicator>;

      /**
       * Categorical assessment of the phone risk.
       */
      risk_level: FraudulentPhone.RiskLevel;
    }

    export namespace FraudulentEmail {
      export interface Indicator {
        /**
         * A brief explanation of how this indicator contributed to the risk level
         */
        explanation: string;

        /**
         * The effect this indicator had on the overall risk level.
         */
        impact: Indicator.Impact;

        /**
         * The name of the specific indicator used in the risk assessment.
         */
        indicator: Indicator.Indicator;
      }

      export type RiskLevel =
        | 'elevated'
        | 'highest'
        | 'low'
        | 'normal'
        | 'not_assessed'
        | 'unknown'
        | OtherString;

      export namespace Indicator {
        export type Impact =
          | 'decrease'
          | 'neutral'
          | 'slight_increase'
          | 'strong_increase'
          | OtherString;

        export type Indicator =
          | 'address_mismatch'
          | 'domain_reputation'
          | 'domain_tenure'
          | 'email_reputation'
          | 'email_tenure'
          | 'gibberish_email'
          | 'invalid_email'
          | 'name_mismatch'
          | 'other'
          | 'phone_mismatch'
          | OtherString;
      }
    }

    export namespace FraudulentPerson {
      export interface Indicator {
        /**
         * A brief explanation of how this indicator contributed to the risk level
         */
        explanation: string;

        /**
         * The effect this indicator had on the overall risk level.
         */
        impact: Indicator.Impact;

        /**
         * The name of the specific indicator used in the risk assessment.
         */
        indicator: Indicator.Indicator;
      }

      export type RiskLevel =
        | 'elevated'
        | 'highest'
        | 'low'
        | 'normal'
        | 'not_assessed'
        | 'unknown'
        | OtherString;

      export namespace Indicator {
        export type Impact =
          | 'decrease'
          | 'neutral'
          | 'slight_increase'
          | 'strong_increase'
          | OtherString;

        export type Indicator =
          | 'fraudulent_person_match'
          | 'no_transaction_match'
          | 'other'
          | OtherString;
      }
    }

    export namespace FraudulentPhone {
      export interface Indicator {
        /**
         * A brief explanation of how this indicator contributed to the risk level
         */
        explanation: string;

        /**
         * The effect this indicator had on the overall risk level.
         */
        impact: Indicator.Impact;

        /**
         * The name of the specific indicator used in the risk assessment.
         */
        indicator: Indicator.Indicator;
      }

      export type RiskLevel =
        | 'elevated'
        | 'highest'
        | 'low'
        | 'normal'
        | 'not_assessed'
        | 'unknown'
        | OtherString;

      export namespace Indicator {
        export type Impact =
          | 'decrease'
          | 'neutral'
          | 'slight_increase'
          | 'strong_increase'
          | OtherString;

        export type Indicator =
          | 'address_mismatch'
          | 'carrier_reputation'
          | 'line_type'
          | 'name_mismatch'
          | 'other'
          | 'phone_reputation'
          | 'phone_tenure'
          | 'phone_velocity'
          | OtherString;
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
     * Only return VerificationReports that were blocked by this BlocklistEntry id.
     */
    blocked_by_entry?: string;

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
    export type Type = 'document' | 'email' | 'id_number' | OtherString;
  }
}
