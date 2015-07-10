'use strict';

var utils = require('./utils');

module.exports = StripeError;

/**
 * Generic Error class to wrap any errors returned by stripe-node
 */
function StripeError(raw) {
  this.populate.apply(this, arguments);
  this.stack = (new Error(this.message)).stack;
}

// Extend Native Error
StripeError.prototype = Object.create(Error.prototype);

StripeError.prototype.type = 'GenericError';
StripeError.prototype.populate = function(type, message) {
  this.type = type;
  this.message = message;
};

StripeError.extend = utils.protoExtend;

/**
 * Create subclass of internal Error klass
 * (Specifically for errors returned from Stripe's REST API)
 */
var StripeError = StripeError.StripeError = StripeError.extend({
  type: 'StripeError',
  populate: function(raw) {

    // Move from prototype def (so it appears in stringified obj)
    this.type = this.type;

    this.stack = (new Error(raw.message)).stack;
    this.rawType = raw.type;
    this.code = raw.code;
    this.param = raw.param;
    this.message = raw.message;
    this.detail = raw.detail;
    this.raw = raw;
    this.requestId = raw.requestId;
  }
});

/**
 * Helper factory which takes raw stripe errors and outputs wrapping instances
 */
StripeError.generate = function(rawStripeError) {
  switch (rawStripeError.type) {
    case 'card_error':
      return new StripeError.StripeCardError(rawStripeError);
    case 'invalid_request_error':
      return new StripeError.StripeInvalidRequestError(rawStripeError);
    case 'api_error':
      return new StripeError.StripeAPIError(rawStripeError);
  }
  return new StripeError('Generic', 'Unknown Error');
};

// Specific Stripe Error types:
StripeError.StripeCardError = StripeError.extend({ type: 'StripeCardError' });
StripeError.StripeInvalidRequestError = StripeError.extend({ type: 'StripeInvalidRequest' });
StripeError.StripeAPIError = StripeError.extend({ type: 'StripeAPIError' });
StripeError.StripeAuthenticationError = StripeError.extend({ type: 'StripeAuthenticationError' });
StripeError.StripeConnectionError = StripeError.extend({ type: 'StripeConnectionError' });
