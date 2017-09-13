

const Promise = require('bluebird');
const utils = require('./utils');

const OPTIONAL_REGEX = /^optional!/;

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
  const commandPath = typeof spec.path === 'function' ? spec.path
    : utils.makeURLInterpolator(spec.path || '');
  const requestMethod = (spec.method || 'GET').toUpperCase();
  const urlParams = spec.urlParams || [];
  const encode = spec.encode || (data => data);

  return function stripeMethod() {
    const self = this;
    const args = [].slice.call(arguments);

    const callback = typeof args[args.length - 1] === 'function' && args.pop();
    const urlData = this.createUrlData();

    return this.wrapTimeout(new Promise(((resolve, reject) => {
      for (let i = 0, l = urlParams.length; i < l; i += 1) {
        let path;
        let err;

        // Note that we shift the args array after every iteration so this just
        // grabs the "next" argument for use as a URL parameter.
        const arg = args[0];

        let param = urlParams[i];

        const isOptional = OPTIONAL_REGEX.test(param);
        param = param.replace(OPTIONAL_REGEX, '');

        if (param === 'id' && typeof arg !== 'string') {
          path = this.createResourcePathWithSymbols(spec.path);
          err = new Error(`Stripe: "id" must be a string, but got: ${typeof arg
          } (on API request to \`${requestMethod} ${path}\`)`);
          reject(err);
          return;
        }

        if (!arg) {
          if (isOptional) {
            urlData[param] = '';
          } else {
            path = this.createResourcePathWithSymbols(spec.path);
            err = new Error(`Stripe: Argument "${urlParams[i]}" required, but got: ${arg
            } (on API request to \`${requestMethod} ${path}\`)`);
            reject(err);
            return;
          }
        }

        urlData[param] = args.shift();
      }

      const data = encode(utils.getDataFromArgs(args));
      const opts = utils.getOptionsFromArgs(args);

      if (args.length) {
        path = this.createResourcePathWithSymbols(spec.path);
        err = new Error(`Stripe: Unknown arguments (${args}). Did you mean to pass an options ` +
          'object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.' +
          ` (on API request to ${requestMethod} \`${path}\`)`);
        reject(err);
        return;
      }

      const requestPath = this.createFullPath(commandPath, urlData);
      const options = { headers: Object.assign(opts.headers, spec.headers) };

      if (spec.validator) {
        try {
          spec.validator(data, options);
        } catch (err) {
          reject(err);
          return;
        }
      }

      function requestCallback(err, response) {
        if (err) {
          reject(err);
        } else {
          resolve(spec.transformResponseData ?
            spec.transformResponseData(response) :
            response);
        }
      }

      self.request(requestMethod, requestPath, data, opts.auth, options, requestCallback);
    })), callback);
  };
}

module.exports = stripeMethod;
