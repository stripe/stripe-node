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
 * Create subclass of internal Error class
 * (Specifically for errors returned from Stripe's REST API)
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

class StripeCardError extends StripeError {}

class StripeInvalidRequestError extends StripeError {}

class StripeAPIError extends StripeError {}

class StripeAuthenticationError extends StripeError {}

class StripePermissionError extends StripeError {}

class StripeRateLimitError extends StripeError {}

class StripeConnectionError extends StripeError {}

class StripeSignatureVerificationError extends StripeError {}

class StripeIdempotencyError extends StripeError {}

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
