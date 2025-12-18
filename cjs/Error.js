"use strict";
/* eslint-disable camelcase */
/* eslint-disable no-warning-comments */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemporarySessionExpiredError = exports.StripeUnknownError = exports.StripeInvalidGrantError = exports.StripeIdempotencyError = exports.StripeSignatureVerificationError = exports.StripeConnectionError = exports.StripeRateLimitError = exports.StripePermissionError = exports.StripeAuthenticationError = exports.StripeAPIError = exports.StripeInvalidRequestError = exports.StripeCardError = exports.StripeError = exports.generateV2Error = exports.generateV1Error = void 0;
const generateV1Error = (rawStripeError) => {
    switch (rawStripeError.type) {
        case 'card_error':
            return new StripeCardError(rawStripeError);
        case 'invalid_request_error':
            return new StripeInvalidRequestError(rawStripeError);
        case 'api_error':
            return new StripeAPIError(rawStripeError);
        case 'authentication_error':
            return new StripeAuthenticationError(rawStripeError);
        case 'rate_limit_error':
            return new StripeRateLimitError(rawStripeError);
        case 'idempotency_error':
            return new StripeIdempotencyError(rawStripeError);
        case 'invalid_grant':
            return new StripeInvalidGrantError(rawStripeError);
        default:
            return new StripeUnknownError(rawStripeError);
    }
};
exports.generateV1Error = generateV1Error;
// eslint-disable-next-line complexity
const generateV2Error = (rawStripeError) => {
    switch (rawStripeError.type) {
        // switchCases: The beginning of the section generated from our OpenAPI spec
        case 'temporary_session_expired':
            return new TemporarySessionExpiredError(rawStripeError);
        // switchCases: The end of the section generated from our OpenAPI spec
    }
    // Special handling for requests with missing required fields in V2 APIs.
    // invalid_field response in V2 APIs returns the field 'code' instead of 'type'.
    switch (rawStripeError.code) {
        case 'invalid_fields':
            return new StripeInvalidRequestError(rawStripeError);
    }
    return (0, exports.generateV1Error)(rawStripeError);
};
exports.generateV2Error = generateV2Error;
/**
 * StripeError is the base error from which all other more specific Stripe errors derive.
 * Specifically for errors returned from Stripe's REST API.
 */
class StripeError extends Error {
    constructor(raw = {}, type = null) {
        var _a;
        super(raw.message);
        this.type = type || this.constructor.name;
        this.raw = raw;
        this.rawType = raw.type;
        this.code = raw.code;
        this.doc_url = raw.doc_url;
        this.param = raw.param;
        this.detail = raw.detail;
        this.headers = raw.headers;
        this.requestId = raw.requestId;
        this.statusCode = raw.statusCode;
        this.message = (_a = raw.message) !== null && _a !== void 0 ? _a : '';
        this.userMessage = raw.user_message;
        this.charge = raw.charge;
        this.decline_code = raw.decline_code;
        this.payment_intent = raw.payment_intent;
        this.payment_method = raw.payment_method;
        this.payment_method_type = raw.payment_method_type;
        this.setup_intent = raw.setup_intent;
        this.source = raw.source;
    }
}
exports.StripeError = StripeError;
/**
 * Helper factory which takes raw stripe errors and outputs wrapping instances
 */
StripeError.generate = exports.generateV1Error;
// Specific Stripe Error types:
/**
 * CardError is raised when a user enters a card that can't be charged for
 * some reason.
 */
class StripeCardError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeCardError');
    }
}
exports.StripeCardError = StripeCardError;
/**
 * InvalidRequestError is raised when a request is initiated with invalid
 * parameters.
 */
class StripeInvalidRequestError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeInvalidRequestError');
    }
}
exports.StripeInvalidRequestError = StripeInvalidRequestError;
/**
 * APIError is a generic error that may be raised in cases where none of the
 * other named errors cover the problem. It could also be raised in the case
 * that a new error has been introduced in the API, but this version of the
 * Node.JS SDK doesn't know how to handle it.
 */
class StripeAPIError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeAPIError');
    }
}
exports.StripeAPIError = StripeAPIError;
/**
 * AuthenticationError is raised when invalid credentials are used to connect
 * to Stripe's servers.
 */
class StripeAuthenticationError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeAuthenticationError');
    }
}
exports.StripeAuthenticationError = StripeAuthenticationError;
/**
 * PermissionError is raised in cases where access was attempted on a resource
 * that wasn't allowed.
 */
class StripePermissionError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripePermissionError');
    }
}
exports.StripePermissionError = StripePermissionError;
/**
 * RateLimitError is raised in cases where an account is putting too much load
 * on Stripe's API servers (usually by performing too many requests). Please
 * back off on request rate.
 */
class StripeRateLimitError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeRateLimitError');
    }
}
exports.StripeRateLimitError = StripeRateLimitError;
/**
 * StripeConnectionError is raised in the event that the SDK can't connect to
 * Stripe's servers. That can be for a variety of different reasons from a
 * downed network to a bad TLS certificate.
 */
class StripeConnectionError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeConnectionError');
    }
}
exports.StripeConnectionError = StripeConnectionError;
/**
 * SignatureVerificationError is raised when the signature verification for a
 * webhook fails
 */
class StripeSignatureVerificationError extends StripeError {
    constructor(header, payload, raw = {}) {
        super(raw, 'StripeSignatureVerificationError');
        this.header = header;
        this.payload = payload;
    }
}
exports.StripeSignatureVerificationError = StripeSignatureVerificationError;
/**
 * IdempotencyError is raised in cases where an idempotency key was used
 * improperly.
 */
class StripeIdempotencyError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeIdempotencyError');
    }
}
exports.StripeIdempotencyError = StripeIdempotencyError;
/**
 * InvalidGrantError is raised when a specified code doesn't exist, is
 * expired, has been used, or doesn't belong to you; a refresh token doesn't
 * exist, or doesn't belong to you; or if an API key's mode (live or test)
 * doesn't match the mode of a code or refresh token.
 */
class StripeInvalidGrantError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeInvalidGrantError');
    }
}
exports.StripeInvalidGrantError = StripeInvalidGrantError;
/**
 * Any other error from Stripe not specifically captured above
 */
class StripeUnknownError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeUnknownError');
    }
}
exports.StripeUnknownError = StripeUnknownError;
// classDefinitions: The beginning of the section generated from our OpenAPI spec
class TemporarySessionExpiredError extends StripeError {
    constructor(rawStripeError = {}) {
        super(rawStripeError, 'TemporarySessionExpiredError');
    }
}
exports.TemporarySessionExpiredError = TemporarySessionExpiredError;
// classDefinitions: The end of the section generated from our OpenAPI spec
