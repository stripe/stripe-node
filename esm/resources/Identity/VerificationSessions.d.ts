import { StripeResource } from '../../StripeResource.js';
import { RequestOptions } from '../../Types.js';
import { VerificationReport } from './VerificationReports.js';
import { MetadataParam, Emptyable, PaginationParams, RangeQueryParam, Metadata, Address } from '../../shared.js';
import { ApiListPromise, Response } from '../../lib.js';
export declare class VerificationSessionResource extends StripeResource {
    /**
     * Returns a list of VerificationSessions
     */
    list(params?: Identity.VerificationSessionListParams, options?: RequestOptions): ApiListPromise<VerificationSession>;
    list(options?: RequestOptions): ApiListPromise<VerificationSession>;
    /**
     * Creates a VerificationSession object.
     *
     * After the VerificationSession is created, display a verification modal using the session client_secret or send your users to the session's url.
     *
     * If your API key is in test mode, verification checks won't actually process, though everything else will occur as if in live mode.
     *
     * Related guide: [Verify your users' identity documents](https://docs.stripe.com/docs/identity/verify-identity-documents)
     */
    create(params?: Identity.VerificationSessionCreateParams, options?: RequestOptions): Promise<Response<VerificationSession>>;
    create(options?: RequestOptions): Promise<Response<VerificationSession>>;
    /**
     * Retrieves the details of a VerificationSession that was previously created.
     *
     * When the session status is requires_input, you can use this method to retrieve a valid
     * client_secret or url to allow re-submission.
     */
    retrieve(id: string, params?: Identity.VerificationSessionRetrieveParams, options?: RequestOptions): Promise<Response<VerificationSession>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<VerificationSession>>;
    /**
     * Updates a VerificationSession object.
     *
     * When the session status is requires_input, you can use this method to update the
     * verification check and options.
     */
    update(id: string, params?: Identity.VerificationSessionUpdateParams, options?: RequestOptions): Promise<Response<VerificationSession>>;
    /**
     * A VerificationSession object can be canceled when it is in requires_input [status](https://docs.stripe.com/docs/identity/how-sessions-work).
     *
     * Once canceled, future submission attempts are disabled. This cannot be undone. [Learn more](https://docs.stripe.com/docs/identity/verification-sessions#cancel).
     */
    cancel(id: string, params?: Identity.VerificationSessionCancelParams, options?: RequestOptions): Promise<Response<VerificationSession>>;
    cancel(id: string, options?: RequestOptions): Promise<Response<VerificationSession>>;
    /**
     * Redact a VerificationSession to remove all collected information from Stripe. This will redact
     * the VerificationSession and all objects related to it, including VerificationReports, Events,
     * request logs, etc.
     *
     * A VerificationSession object can be redacted when it is in requires_input or verified
     * [status](https://docs.stripe.com/docs/identity/how-sessions-work). Redacting a VerificationSession in requires_action
     * state will automatically cancel it.
     *
     * The redaction process may take up to four days. When the redaction process is in progress, the
     * VerificationSession's redaction.status field will be set to processing; when the process is
     * finished, it will change to redacted and an identity.verification_session.redacted event
     * will be emitted.
     *
     * Redaction is irreversible. Redacted objects are still accessible in the Stripe API, but all the
     * fields that contain personal data will be replaced by the string [redacted] or a similar
     * placeholder. The metadata field will also be erased. Redacted objects cannot be updated or
     * used for any purpose.
     *
     * [Learn more](https://docs.stripe.com/docs/identity/verification-sessions#redact).
     */
    redact(id: string, params?: Identity.VerificationSessionRedactParams, options?: RequestOptions): Promise<Response<VerificationSession>>;
    redact(id: string, options?: RequestOptions): Promise<Response<VerificationSession>>;
}
export /**
 * A VerificationSession guides you through the process of collecting and verifying the identities
 * of your users. It contains details about the type of verification, such as what [verification
 * check](https://docs.stripe.com/docs/identity/verification-checks) to perform. Only create one VerificationSession for
 * each verification in your system.
 *
 * A VerificationSession transitions through [multiple
 * statuses](https://docs.stripe.com/docs/identity/how-sessions-work) throughout its lifetime as it progresses through
 * the verification flow. The VerificationSession contains the user's verified data after
 * verification checks are complete.
 *
 * Related guide: [The Verification Sessions API](https://stripe.com/docs/identity/verification-sessions)
 */ interface VerificationSession {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'identity.verification_session';
    /**
     * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
     */
    client_reference_id: string | null;
    /**
     * The short-lived client secret used by Stripe.js to [show a verification modal](https://stripe.com/docs/js/identity/modal) inside your app. This client secret expires after 24 hours and can only be used once. Don't store it, log it, embed it in a URL, or expose it to anyone other than the user. Make sure that you have TLS enabled on any page that includes the client secret. Refer to our docs on [passing the client secret to the frontend](https://stripe.com/docs/identity/verification-sessions#client-secret) to learn more.
     */
    client_secret: string | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * If present, this property tells you the last error encountered when processing the verification.
     */
    last_error: Identity.VerificationSession.LastError | null;
    /**
     * ID of the most recent VerificationReport. [Learn more about accessing detailed verification results.](https://stripe.com/docs/identity/verification-sessions#results)
     */
    last_verification_report: string | VerificationReport | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Metadata;
    /**
     * A set of options for the session's verification checks.
     */
    options: Identity.VerificationSession.Options | null;
    /**
     * Details provided about the user being verified. These details may be shown to the user.
     */
    provided_details?: Identity.VerificationSession.ProvidedDetails | null;
    /**
     * Redaction status of this VerificationSession. If the VerificationSession is not redacted, this field will be null.
     */
    redaction: Identity.VerificationSession.Redaction | null;
    /**
     * Customer ID
     */
    related_customer: string | null;
    related_person?: Identity.VerificationSession.RelatedPerson;
    /**
     * Status of this VerificationSession. [Learn more about the lifecycle of sessions](https://stripe.com/docs/identity/how-sessions-work).
     */
    status: Identity.VerificationSession.Status;
    /**
     * The type of [verification check](https://stripe.com/docs/identity/verification-checks) to be performed.
     */
    type: Identity.VerificationSession.Type;
    /**
     * The short-lived URL that you use to redirect a user to Stripe to submit their identity information. This URL expires after 48 hours and can only be used once. Don't store it, log it, send it in emails or expose it to anyone other than the user. Refer to our docs on [verifying identity documents](https://stripe.com/docs/identity/verify-identity-documents?platform=web&type=redirect) to learn how to redirect users to Stripe.
     */
    url: string | null;
    /**
     * The configuration token of a verification flow from the dashboard.
     */
    verification_flow?: string;
    /**
     * The user's verified data.
     */
    verified_outputs?: Identity.VerificationSession.VerifiedOutputs | null;
}
export declare namespace Identity {
    namespace VerificationSession {
        interface LastError {
            /**
             * A short machine-readable string giving the reason for the verification or user-session failure.
             */
            code: LastError.Code | null;
            /**
             * A message that explains the reason for verification or user-session failure.
             */
            reason: string | null;
        }
        interface Options {
            document?: Options.Document;
            email?: Options.Email;
            id_number?: Options.IdNumber;
            matching?: Options.Matching;
            phone?: Options.Phone;
        }
        interface ProvidedDetails {
            /**
             * Email of user being verified
             */
            email?: string;
            /**
             * Phone number of user being verified
             */
            phone?: string;
        }
        interface Redaction {
            /**
             * Indicates whether this object and its related objects have been redacted or not.
             */
            status: Redaction.Status;
        }
        interface RelatedPerson {
            /**
             * Token referencing the associated Account of the related Person resource.
             */
            account: string;
            /**
             * Token referencing the related Person resource.
             */
            person: string;
        }
        type Status = 'canceled' | 'processing' | 'requires_input' | 'verified';
        type Type = 'document' | 'id_number' | 'verification_flow';
        interface VerifiedOutputs {
            /**
             * The user's verified address.
             */
            address: Address | null;
            /**
             * The user's verified date of birth.
             */
            dob?: VerifiedOutputs.Dob | null;
            /**
             * The user's verified email address
             */
            email: string | null;
            /**
             * The user's verified first name.
             */
            first_name: string | null;
            /**
             * The user's verified id number.
             */
            id_number?: string | null;
            /**
             * The user's verified id number type.
             */
            id_number_type: VerifiedOutputs.IdNumberType | null;
            /**
             * The user's verified last name.
             */
            last_name: string | null;
            /**
             * The user's verified phone number
             */
            phone: string | null;
            /**
             * The user's verified sex.
             */
            sex?: VerifiedOutputs.Sex | null;
            /**
             * The user's verified place of birth as it appears in the document.
             */
            unparsed_place_of_birth?: string | null;
            /**
             * The user's verified sex as it appears in the document.
             */
            unparsed_sex?: string | null;
        }
        namespace LastError {
            type Code = 'abandoned' | 'consent_declined' | 'country_not_supported' | 'device_not_supported' | 'document_expired' | 'document_type_not_supported' | 'document_unverified_other' | 'email_unverified_other' | 'email_verification_declined' | 'id_number_insufficient_document_data' | 'id_number_mismatch' | 'id_number_unverified_other' | 'phone_unverified_other' | 'phone_verification_declined' | 'selfie_document_missing_photo' | 'selfie_face_mismatch' | 'selfie_manipulated' | 'selfie_unverified_other' | 'under_supported_age';
        }
        namespace Options {
            interface Document {
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
            interface Email {
                /**
                 * Request one time password verification of `provided_details.email`.
                 */
                require_verification?: boolean;
            }
            interface IdNumber {
            }
            interface Matching {
                /**
                 * Strictness of the DOB matching policy to apply.
                 */
                dob?: Matching.Dob;
                /**
                 * Strictness of the name matching policy to apply.
                 */
                name?: Matching.Name;
            }
            interface Phone {
                /**
                 * Request one time password verification of `provided_details.phone`.
                 */
                require_verification?: boolean;
            }
            namespace Document {
                type AllowedType = 'driving_license' | 'id_card' | 'passport';
            }
            namespace Matching {
                type Dob = 'none' | 'similar';
                type Name = 'none' | 'similar';
            }
        }
        namespace Redaction {
            type Status = 'processing' | 'redacted';
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
            type Sex = '[redacted]' | 'female' | 'male' | 'unknown';
        }
    }
}
export declare namespace Identity {
    interface VerificationSessionCreateParams {
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
        metadata?: MetadataParam;
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
        interface Options {
            /**
             * Options that apply to the [document check](https://stripe.com/docs/identity/verification-checks?type=document).
             */
            document?: Emptyable<Options.Document>;
        }
        interface ProvidedDetails {
            /**
             * Email of user being verified
             */
            email?: string;
            /**
             * Phone number of user being verified
             */
            phone?: string;
        }
        interface RelatedPerson {
            /**
             * A token representing a connected account. If provided, the person parameter is also required and must be associated with the account.
             */
            account: string;
            /**
             * A token referencing a Person resource that this verification is being used to verify.
             */
            person: string;
        }
        type Type = 'document' | 'id_number';
        namespace Options {
            interface Document {
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
                type AllowedType = 'driving_license' | 'id_card' | 'passport';
            }
        }
    }
}
export declare namespace Identity {
    interface VerificationSessionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Identity {
    interface VerificationSessionUpdateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;
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
        interface Options {
            /**
             * Options that apply to the [document check](https://stripe.com/docs/identity/verification-checks?type=document).
             */
            document?: Emptyable<Options.Document>;
        }
        interface ProvidedDetails {
            /**
             * Email of user being verified
             */
            email?: string;
            /**
             * Phone number of user being verified
             */
            phone?: string;
        }
        type Type = 'document' | 'id_number';
        namespace Options {
            interface Document {
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
                type AllowedType = 'driving_license' | 'id_card' | 'passport';
            }
        }
    }
}
export declare namespace Identity {
    interface VerificationSessionListParams extends PaginationParams {
        /**
         * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
         */
        client_reference_id?: string;
        /**
         * Only return VerificationSessions that were created during the given date interval.
         */
        created?: RangeQueryParam | number;
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
        type Status = 'canceled' | 'processing' | 'requires_input' | 'verified';
    }
}
export declare namespace Identity {
    interface VerificationSessionCancelParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Identity {
    interface VerificationSessionRedactParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
