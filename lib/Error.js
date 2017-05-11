'use strict';

var utils = require('./utils');

module.exports = _Error;

/**
 * Generic Error klass to wrap any errors returned by stripe-node
 */
function _Error(raw) {
  this.populate.apply(this, arguments);
  this.stack = (new Error(this.message)).stack;
}

// Extend Native Error
_Error.prototype = Object.create(Error.prototype);

_Error.prototype.type = 'GenericError';
_Error.prototype.populate = function(type, message) {
  this.type = type;
  this.message = message;
};

_Error.extend = utils.protoExtend;

/**
 * Create subclass of internal Error klass
 * (Specifically for errors returned from Stripe's REST API)
 */
var StripeError = _Error.StripeError = _Error.extend({
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
    this.statusCode = raw.statusCode;
  },
});

/**
 * Helper factory which takes raw stripe errors and outputs wrapping instances
 */
StripeError.generate = function(rawStripeError) {
  switch (rawStripeError.type) {
    case 'card_error':
      return new _Error.StripeCardError(rawStripeError);
    case 'invalid_request_error':
      return new _Error.StripeInvalidRequestError(rawStripeError);
    case 'api_error':
      return new _Error.StripeAPIError(rawStripeError);
  }
  return new _Error('Generic', 'Unknown Error');
};

// Specific Stripe Error types:
_Error.StripeCardError = StripeError.extend({type: 'StripeCardError'});
_Error.StripeInvalidRequestError = StripeError.extend({type: 'StripeInvalidRequestError'});
_Error.StripeAPIError = StripeError.extend({type: 'StripeAPIError'});
_Error.StripeAuthenticationError = StripeError.extend({type: 'StripeAuthenticationError'});
_Error.StripePermissionError = StripeError.extend({type: 'StripePermissionError'});
_Error.StripeRateLimitError = StripeError.extend({type: 'StripeRateLimitError'});
_Error.StripeConnectionError = StripeError.extend({type: 'StripeConnectionError'});
_Error.StripeSignatureVerificationError = StripeError.extend({type: 'StripeSignatureVerificationError'});
