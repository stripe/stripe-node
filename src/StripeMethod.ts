const utils = require('./utils');
import makeRequest = require('./makeRequest');
import autoPagination = require('./autoPagination');
const makeAutoPaginationMethods = autoPagination.makeAutoPaginationMethods;

type StripeMethodSpec = {
  method?: 'GET' | 'POST' | 'DELETE';
  path: void; // removed in v11.0.0
  fullPath: string;
  urlParams?: Array<string>;
  encode: any;
  host?: string;
  methodType?: 'list' | 'search';
};
/**
 * Create an API method from the declared spec.
 *
 * @param [spec.method='GET'] Request Method (POST, GET, DELETE, PUT)
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
function stripeMethod(spec: StripeMethodSpec) {
  if (spec.path !== undefined) {
    throw new Error(
      `Support for relative 'path' was removed in stripe-node v11.0.0. Please specify 'fullPath'`
    );
  }
  if (!spec.fullPath) {
    throw new Error(`'fullPath' must be provided when calling 'stripeMethod'`);
  }
  return function(...args) {
    const callback = typeof args[args.length - 1] == 'function' && args.pop();

    spec.urlParams = utils.extractUrlParams(spec.fullPath);

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

export = stripeMethod;
