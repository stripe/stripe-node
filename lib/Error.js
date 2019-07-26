'use strict';

/**
 * Generic Error class to wrap any errors returned by stripe-node
 */
class GenericError extends Error {
  constructor(message) {
    super(message);
    // Saving class name in the property of our custom error as a shortcut.
    this.type = this.constructor.name;
    this.name = this.constructor.name;

    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * StripeError is the base error from which all other more specific Stripe
 * errors derive.
 * (Specifically for errors returned from Stripe's REST API)
 *
 * @typedef {{ message: string, type?: string, code?: number, param?: string, detail: string, headers?: Record<string, string>, requestId?: string, statusCode?: number }} ErrorParams
 */
class StripeError extends GenericError {
  /**
   *
   * @param {ErrorParams} raw
   */
  constructor(raw) {
    super(raw.message);
    this.rawType = raw.type;
    this.code = raw.code;
    this.param = raw.param;
    this.message = raw.message;
    this.detail = raw.detail;
    this.raw = raw;
    this.headers = raw.headers;
    this.requestId = raw.requestId;
    this.statusCode = raw.statusCode;
  }

  /**
   * Helper factory which takes raw stripe errors and outputs wrapping instances
   *
   * @param {ErrorParams} rawStripeError
   */
  static generate(rawStripeError) {
    switch (rawStripeError.type) {
      case 'card_error':
        return new StripeCardError(rawStripeError);
      case 'invalid_request_error':
        return new StripeInvalidRequestError(rawStripeError);
      case 'api_error':
        return new StripeAPIError(rawStripeError);
      case 'idempotency_error':
        return new StripeIdempotencyError(rawStripeError);
      case 'invalid_grant':
        return new StripeInvalidGrantError(rawStripeError);
      default:
        return new GenericError('Unknown Error');
    }
  }
}

// Specific Stripe Error types:

/**
 * CardError is raised when a user enters a card that can't be charged for
 * some reason.
 */
class StripeCardError extends StripeError {}

/**
 * InvalidRequestError is raised when a request is initiated with invalid
 * parameters.
 */
class StripeInvalidRequestError extends StripeError {}

/**
 * APIError is a generic error that may be raised in cases where none of the
 * other named errors cover the problem. It could also be raised in the case
 * that a new error has been introduced in the API, but this version of the
 * Node.JS SDK doesn't know how to handle it.
 */
class StripeAPIError extends StripeError {}

/**
 * AuthenticationError is raised when invalid credentials are used to connect
 * to Stripe's servers.
 */
class StripeAuthenticationError extends StripeError {}

/**
 * PermissionError is raised in cases where access was attempted on a resource
 * that wasn't allowed.
 */
class StripePermissionError extends StripeError {}

/**
 * RateLimitError is raised in cases where an account is putting too much load
 * on Stripe's API servers (usually by performing too many requests). Please
 * back off on request rate.
 */
class StripeRateLimitError extends StripeError {}

/**
 * StripeConnectionError is raised in the event that the SDK can't connect to
 * Stripe's servers. That can be for a variety of different reasons from a
 * downed network to a bad TLS certificate.
 */
class StripeConnectionError extends StripeError {}

/**
 * SignatureVerificationError is raised when the signature verification for a
 * webhook fails
 */
class StripeSignatureVerificationError extends StripeError {}

/**
 * IdempotencyError is raised in cases where an idempotency key was used
 * improperly.
 */
class StripeIdempotencyError extends StripeError {}

/**
 * InvalidGrantError is raised when a specified code doesn't exist, is
 * expired, has been used, or doesn't belong to you; a refresh token doesn't
 * exist, or doesn't belong to you; or if an API key's mode (live or test)
 * doesn't match the mode of a code or refresh token.
 */
class StripeInvalidGrantError extends StripeError {}

module.exports = {
  GenericError,
  StripeError,
  StripeCardError,
  StripeInvalidRequestError,
  StripeAPIError,
  StripeAuthenticationError,
  StripePermissionError,
  StripeRateLimitError,
  StripeConnectionError,
  StripeSignatureVerificationError,
  StripeIdempotencyError,
  StripeInvalidGrantError,
};
