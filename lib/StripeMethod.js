'use strict';

var objectAssign = require('object-assign');
var path = require('path');
var Promise = require('bluebird');
var utils = require('./utils');
var OPTIONAL_REGEX = /^optional!/;

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
  var commandPath = typeof spec.path == 'function' ? spec.path
                  : utils.makeURLInterpolator(spec.path || '');
  var requestMethod = (spec.method || 'GET').toUpperCase();
  var urlParams = spec.urlParams || [];
  var encode = spec.encode || function(data) {return data;};

  return function() {
    var self = this;
    var args = [].slice.call(arguments);

    var callback = typeof args[args.length - 1] == 'function' && args.pop();
    var urlData = this.createUrlData();

    return this.wrapTimeout(new Promise((function(resolve, reject) {
      for (var i = 0, l = urlParams.length; i < l; ++i) {
        // Note that we shift the args array after every iteration so this just
        // grabs the "next" argument for use as a URL parameter.
        var arg = args[0];

        var param = urlParams[i];

        var isOptional = OPTIONAL_REGEX.test(param);
        param = param.replace(OPTIONAL_REGEX, '');

        if (param == 'id' && typeof arg !== 'string') {
          var path = this.createResourcePathWithSymbols(spec.path);
          var err = new Error(
            'Stripe: "id" must be a string, but got: ' + typeof arg +
            ' (on API request to `' + requestMethod + ' ' + path + '`)'
          );
          reject(err);
          return;
        }

        if (!arg) {
          if (isOptional) {
            urlData[param] = '';
            continue;
          }

          var path = this.createResourcePathWithSymbols(spec.path);
          var err = new Error(
            'Stripe: Argument "' + urlParams[i] + '" required, but got: ' + arg +
            ' (on API request to `' + requestMethod + ' ' + path + '`)'
          );
          reject(err);
          return;
        }

        urlData[param] = args.shift();
      }

      var data = encode(utils.getDataFromArgs(args));
      var opts = utils.getOptionsFromArgs(args);

      if (args.length) {
        var path = this.createResourcePathWithSymbols(spec.path);
        var err = new Error(
          'Stripe: Unknown arguments (' + args + '). Did you mean to pass an options ' +
          'object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.' +
          ' (on API request to ' + requestMethod + ' `' + path + '`)'
        );
        reject(err);
        return;
      }

      var requestPath = this.createFullPath(commandPath, urlData);
      var options = {headers: objectAssign(opts.headers, spec.headers)};

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
          resolve(
            spec.transformResponseData ?
              spec.transformResponseData(response) :
              response
          );
        }
      };

      self._request(requestMethod, requestPath, data, opts.auth, options, requestCallback);
    }).bind(this)), callback);
  };
};

module.exports = stripeMethod;
