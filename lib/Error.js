

const utils = require('./utils');

module.exports = GenericError;

/**
 * Generic Error klass to wrap any errors returned by stripe-node
 */
function GenericError(raw) {
  this.populate.apply(this, arguments);
  this.stack = (new Error(this.message)).stack;
}

// Extend Native Error
GenericError.prototype = Object.create(Error.prototype);

GenericError.prototype.type = 'GenericError';
GenericError.prototype.populate = function populate(type, message) {
  this.type = type;
  this.message = message;
};

GenericError.extend = utils.protoExtend;

/**
 * Create subclass of internal Error klass
 * (Specifically for errors returned from Stripe's REST API)
 */
const StripeError = GenericError.StripeError = GenericError.extend({
  type: 'StripeError',
  populate(raw) {
    // Move from prototype def (so it appears in stringified obj)
    this.type = this.type;

    this.stack = (new Error(raw.message)).stack;
    this.rawType = raw.type;
    this.code = raw.code;
    this.param = raw.param;
    this.message = raw.message;
    this.detail = raw.detail;
    this.raw = raw;
    this.headers = raw.headers;
    this.requestId = raw.requestId;
    this.statusCode = raw.statusCode;
  },
});

/**
 * Helper factory which takes raw stripe errors and outputs wrapping instances
 */
StripeError.generate = (rawStripeError) => {
  switch (rawStripeError.type) {
    case 'card_error':
      return new GenericError.StripeCardError(rawStripeError);
    case 'invalid_request_error':
      return new GenericError.StripeInvalidRequestError(rawStripeError);
    case 'api_error':
      return new GenericError.StripeAPIError(rawStripeError);
  }
  return new GenericError('Generic', 'Unknown Error');
};

// Specific Stripe Error types:
GenericError.StripeCardError = StripeError.extend({ type: 'StripeCardError' });
GenericError.StripeInvalidRequestError = StripeError.extend({ type: 'StripeInvalidRequestError' });
GenericError.StripeAPIError = StripeError.extend({ type: 'StripeAPIError' });
GenericError.StripeAuthenticationError = StripeError.extend({ type: 'StripeAuthenticationError' });
GenericError.StripePermissionError = StripeError.extend({ type: 'StripePermissionError' });
GenericError.StripeRateLimitError = StripeError.extend({ type: 'StripeRateLimitError' });
GenericError.StripeConnectionError = StripeError.extend({ type: 'StripeConnectionError' });
GenericError.StripeSignatureVerificationError = StripeError.extend({ type: 'StripeSignatureVerificationError' });
