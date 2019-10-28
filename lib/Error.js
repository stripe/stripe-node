'use strict';

const utils = require('./utils');

/**
 * StripeError is the base error from which all other more specific Stripe errors derive.
 * Specifically for errors returned from Stripe's REST API.
 */
class StripeError extends Error {
  constructor(raw = {}) {
    super(raw.message);
    // This splat is here for back-compat and should be removed in the next major version.
    this.populate(...arguments);
    this.type = this.constructor.name;
  }

  /**
   * DEPRECATED
   * This will be inlined in the constructor in the future.
   */
  populate(raw) {
    this.raw = raw;
    if (!raw || typeof raw !== 'object') {
      return;
    }

    this.rawType = raw.type;
    this.code = raw.code;
    this.param = raw.param;
    this.detail = raw.detail;
    this.headers = raw.headers;
    this.requestId = raw.requestId;
    this.statusCode = raw.statusCode;
    this.message = raw.message;

    this.charge = raw.charge;
    this.decline_code = raw.decline_code;
    this.payment_intent = raw.payment_intent;
    this.payment_method = raw.payment_method;
    this.setup_intent = raw.setup_intent;
    this.source = raw.source;
  }

  /**
   * Helper factory which takes raw stripe errors and outputs wrapping instances
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

  /**
   * DEPRECATED
   * Please use class inheritance instead.
   */
  static extend(options) {
    const type = options.type;
    class CustomError extends StripeError {}
    Object.defineProperty(CustomError, 'name', {
      value: type,
    });
    delete options.type;
    Object.assign(CustomError.prototype, options);
    return CustomError;
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
 * DEPRECATED
 * This is here for backwards compatibility and will be removed in the next major version.
 */
function _Error(raw) {
  this.populate(...arguments);
  this.stack = new Error(this.message).stack;
}
_Error.prototype = Object.create(Error.prototype);
_Error.prototype.type = 'GenericError';
_Error.prototype.populate = function(type, message) {
  this.type = type;
  this.message = message;
};
_Error.extend = utils.protoExtend;

/**
 * DEPRECATED.
 * Do not use the default export; it may be removed or change in a future version.
 */
module.exports = _Error;

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
