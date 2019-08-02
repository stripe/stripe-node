'use strict';

/**
 *  @typedef {{ message?: string, type?: string, code?: number, param?: string, detail?: string, headers?: Record<string, string>, requestId?: string, statusCode?: number }} ErrorParams
 */
/**
 * Generic Error class to wrap any errors returned by stripe-node
 */
class GenericError extends Error {
  /**
   *
   * @param  {string} type
   * @param {string} message
   */
  constructor(type, message) {
    super(message);
    this.type = type || this.constructor.name;
    // Saving class name in the property of our custom error as a shortcut.
    this.name = this.constructor.name;

    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);
  }

  /**
   *
   * @param {string} [type] - error type name
   * @param {string} [message]
   */
  populate(type, message) {
    this.type = type;
    this.message = message;
  }

  /**
   * DEPRECATED
   * Please use ES6 class inheritance instead.
   * @param {{ type: string, message?: string, [k:string]: any }} options
   */
  static extend(options) {
    class customError extends StripeError {
      /**
       * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#Function_names_in_classes}
       */
      // @ts-ignore
      static get name() {
        return options.type;
      }
    }
    Object.assign(customError.prototype, options);
    return customError;
  }
}

/**
 * StripeError is the base error from which all other more specific Stripe
 * errors derive.
 * (Specifically for errors returned from Stripe's REST API)
 *
 */
class StripeError extends GenericError {
  /**
   *
   * @param {ErrorParams} [raw]
   */
  constructor(raw = {}) {
    super(undefined, raw.message);
    this.populate(raw);
  }
  /**
   *
   * @param {ErrorParams} raw
   */
  // @ts-ignore
  populate(raw) {
    if (!raw || typeof raw !== 'object' || Object.keys(raw).length < 1) {
      return;
    }
    this.raw = raw;
    this.rawType = raw.type;
    this.code = raw.code;
    this.param = raw.param;
    this.detail = raw.detail;
    this.headers = raw.headers;
    this.requestId = raw.requestId;
    this.statusCode = raw.statusCode;
    this.message = raw.message;
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
        return new GenericError('Generic', 'Unknown Error');
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

/**
 * DEPRECATED: Default import from this module is deprecated and
 * will be removed in the next major version
 */
module.exports = GenericError;

module.exports.StripeError = StripeError;
module.exports.StripeCardError = StripeCardError;
module.exports.StripeInvalidRequestError = StripeInvalidRequestError;
module.exports.StripeAPIError = StripeAPIError;
module.exports.StripeAuthenticationError = StripeAuthenticationError;
module.exports.StripePermissionError = StripePermissionError;
module.exports.StripeRateLimitError = StripeRateLimitError;
module.exports.StripeConnectionError = StripeConnectionError;
module.exports.StripeSignatureVerificationError = StripeSignatureVerificationError;
module.exports.StripeIdempotencyError = StripeIdempotencyError;
module.exports.StripeInvalidGrantError = StripeInvalidGrantError;
