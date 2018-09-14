'use strict';

var utils = require('./utils');
var makeRequest = require('./makeRequest');
var autoPagingEach = require('./autoPagination').autoPagingEach;
var autoPagingToArray = require('./autoPagination').autoPagingToArray;

/**
 * Create an API method from the declared spec.
 *
 * @param [spec.method='GET'] Request Method (POST, GET, DELETE, PUT)
 * @param [spec.path=''] Path to be appended to the API BASE_PATH, joined with
 *  the instance's path (e.g. 'charges' or 'customers')
 * @param [spec.required=[]] Array of required arguments in the order that they
 *  must be passed by the consumer of the API. Subsequent optional arguments are
 *  optionally passed through a hash (Object) as the penultimate argument
 *  (preceding the also-optional callback argument
  * @param [spec.encode] Function for mutating input parameters to a method.
 *  Usefully for applying transforms to data on a per-method basis.
 */
function stripeMethod(spec) {
  return function() {
    var self = this;
    var args = [].slice.call(arguments);

    var callback = typeof args[args.length - 1] == 'function' && args.pop();

    var requestPromise = makeRequest(self, args, spec, {});

    if (spec.methodType === 'list') {
      requestPromise.autoPagingEach = autoPagingEach(self, args, spec, requestPromise);
      requestPromise.autoPagingToArray = autoPagingToArray(requestPromise.autoPagingEach);
    }

    return utils.callbackifyPromise(requestPromise, callback);
  };
}

module.exports = stripeMethod;
