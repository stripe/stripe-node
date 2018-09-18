'use strict';

var utils = require('./utils');
var makeRequest = require('./makeRequest');
var makeAutoPaginationMethods = require('./autoPagination').makeAutoPaginationMethods;

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
 * @param [spec.host] Hostname for the request.
 */
function stripeMethod(spec) {
  return function() {
    var self = this;
    var args = [].slice.call(arguments);

    var callback = typeof args[args.length - 1] == 'function' && args.pop();

    var requestPromise = utils.callbackifyPromiseWithTimeout(makeRequest(self, args, spec, {}), callback)

    if (spec.methodType === 'list') {
      var autoPaginationMethods = makeAutoPaginationMethods(self, args, spec, requestPromise);
      Object.assign(requestPromise, autoPaginationMethods);
    }

    return requestPromise;
  };
}

module.exports = stripeMethod;
