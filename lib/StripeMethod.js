'use strict';

const utils = require('./utils');
const makeRequest = require('./makeRequest');
const makeAutoPaginationMethods = require('./autoPagination')
  .makeAutoPaginationMethods;

/**
 * Create an API method from the declared spec.
 *
 * @param [spec.method='GET'] Request Method (POST, GET, DELETE, PUT)
 * @param [spec.path=''] Path to be appended to the API BASE_PATH, joined with
 *  the instance's path (e.g. 'charges' or 'customers')
 * @param [spec.fullPath=''] Fully qualified path to the method (eg. /v1/a/b/c).
 *  If this is specified, path should not be specified.
 * @param [spec.urlParams=[]] Array of required arguments in the order that they
 *  must be passed by the consumer of the API. Subsequent optional arguments are
 *  optionally passed through a hash (Object) as the penultimate argument
 *  (preceding the also-optional callback argument
 * @param [spec.encode] Function for mutating input parameters to a method.
 *  Usefully for applying transforms to data on a per-method basis.
 * @param [spec.host] Hostname for the request.
 */
function stripeMethod(spec) {
  if (spec.path !== undefined && spec.fullPath !== undefined) {
    throw new Error(
      `Method spec specified both a 'path' (${spec.path}) and a 'fullPath' (${spec.fullPath}).`
    );
  }
  return function(...args) {
    const callback = typeof args[args.length - 1] == 'function' && args.pop();

    spec.urlParams = utils.extractUrlParams(
      spec.fullPath || this.createResourcePathWithSymbols(spec.path || '')
    );

    const requestPromise = utils.callbackifyPromiseWithTimeout(
      makeRequest(this, args, spec, {}),
      callback
    );

    // Please note `spec.methodType === 'search'` is beta functionality and this
    // interface is subject to change/removal at any time.
    if (spec.methodType === 'list' || spec.methodType === 'search') {
      const autoPaginationMethods = makeAutoPaginationMethods(
        this,
        args,
        spec,
        requestPromise
      );
      Object.assign(requestPromise, autoPaginationMethods);
    }

    return requestPromise;
  };
}

module.exports = stripeMethod;
