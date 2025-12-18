import { HttpClientResponseError } from './RequestSender.js';
import { RawErrorType, StripeRawError } from './Types.js';
export declare const generateV1Error: (rawStripeError: StripeRawError) => StripeError;
export declare const generateV2Error: (rawStripeError: StripeRawError) => StripeError;
/**
 * StripeError is the base error from which all other more specific Stripe errors derive.
 * Specifically for errors returned from Stripe's REST API.
 */
export declare class StripeError extends Error {
    readonly message: string;
    readonly userMessage?: string;
    readonly type: string;
    readonly raw: unknown;
    readonly rawType?: RawErrorType;
    readonly headers?: {
        [header: string]: string;
    };
    readonly requestId?: string;
    readonly code?: string;
    readonly doc_url?: string;
    readonly param?: string;
    readonly detail?: string | Error | HttpClientResponseError;
    readonly statusCode?: number;
    readonly charge?: string;
    readonly decline_code?: string;
    readonly payment_method_type?: string;
    readonly payment_intent?: any;
    readonly payment_method?: any;
    readonly setup_intent?: any;
    readonly source?: any;
    constructor(raw?: StripeRawError, type?: string | null);
    /**
     * Helper factory which takes raw stripe errors and outputs wrapping instances
     */
    static generate: (rawStripeError: StripeRawError) => StripeError;
}
/**
 * CardError is raised when a user enters a card that can't be charged for
 * some reason.
 */
export declare class StripeCardError extends StripeError {
    constructor(raw?: StripeRawError);
}
/**
 * InvalidRequestError is raised when a request is initiated with invalid
 * parameters.
 */
export declare class StripeInvalidRequestError extends StripeError {
    constructor(raw?: StripeRawError);
}
/**
 * APIError is a generic error that may be raised in cases where none of the
 * other named errors cover the problem. It could also be raised in the case
 * that a new error has been introduced in the API, but this version of the
 * Node.JS SDK doesn't know how to handle it.
 */
export declare class StripeAPIError extends StripeError {
    constructor(raw?: StripeRawError);
}
/**
 * AuthenticationError is raised when invalid credentials are used to connect
 * to Stripe's servers.
 */
export declare class StripeAuthenticationError extends StripeError {
    constructor(raw?: StripeRawError);
}
/**
 * PermissionError is raised in cases where access was attempted on a resource
 * that wasn't allowed.
 */
export declare class StripePermissionError extends StripeError {
    constructor(raw?: StripeRawError);
}
/**
 * RateLimitError is raised in cases where an account is putting too much load
 * on Stripe's API servers (usually by performing too many requests). Please
 * back off on request rate.
 */
export declare class StripeRateLimitError extends StripeError {
    constructor(raw?: StripeRawError);
}
/**
 * StripeConnectionError is raised in the event that the SDK can't connect to
 * Stripe's servers. That can be for a variety of different reasons from a
 * downed network to a bad TLS certificate.
 */
export declare class StripeConnectionError extends StripeError {
    constructor(raw?: StripeRawError);
}
/**
 * SignatureVerificationError is raised when the signature verification for a
 * webhook fails
 */
export declare class StripeSignatureVerificationError extends StripeError {
    header: string | Uint8Array;
    payload: string | Uint8Array;
    constructor(header: string | Uint8Array, payload: string | Uint8Array, raw?: StripeRawError);
}
/**
 * IdempotencyError is raised in cases where an idempotency key was used
 * improperly.
 */
export declare class StripeIdempotencyError extends StripeError {
    constructor(raw?: StripeRawError);
}
/**
 * InvalidGrantError is raised when a specified code doesn't exist, is
 * expired, has been used, or doesn't belong to you; a refresh token doesn't
 * exist, or doesn't belong to you; or if an API key's mode (live or test)
 * doesn't match the mode of a code or refresh token.
 */
export declare class StripeInvalidGrantError extends StripeError {
    constructor(raw?: StripeRawError);
}
/**
 * Any other error from Stripe not specifically captured above
 */
export declare class StripeUnknownError extends StripeError {
    constructor(raw?: StripeRawError);
}
export declare class TemporarySessionExpiredError extends StripeError {
    constructor(rawStripeError?: StripeRawError);
}
