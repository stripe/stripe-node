'use strict';

var path = require('path');
var when = require('when');
var utils = require('./utils');

var hasOwn = {}.hasOwnProperty;

/**
 * Create an API method from the declared spec.
 *
 * @param [spec.method='GET'] Request Method (POST, GET, DELETE, PUT)
 * @param [spec.path=''] Path to be appended to the API BASE_PATH, joined with 
 *  the instance's path (e.g. "charges" or "customers")
 * @param [spec.required=[]] Array of required arguments in the order that they
 *  must be passed by the consumer of the API. Subsequent optional arguments are
 *  optionally passed through a hash (Object) as the penultimate argument
 *  (preceeding the also-optional callback argument
 */
module.exports = function(spec) {

  var commandPath = utils.makeInterpolator( spec.path || '' );
  var requestMethod = (spec.method || 'GET').toUpperCase();
  var urlParams = spec.urlParams || [];

  return function() {
  
    var self = this;
    var args = [].slice.call(arguments);

    var callback = typeof args[args.length - 1] == 'function' && args.pop();
    var data = utils.isObject(args[args.length - 1]) ? args.pop() : {};
    var urlData = {};

    var deferred = when.defer();

    if (callback) {
      // Callback signature is a simply translated to Promise'esque:
      // (Ensure callback is called outside of promise stack)
      deferred.promise.then(function(res) {
        setTimeout(function(){ callback(null, res) }, 0);
      }, function(err) {
        setTimeout(function(){ callback(err, null); }, 0);
      });
    }

    // Merge in baseData
    for (var i in this._urlData) {
      if (hasOwn.call(this._urlData, i)) {
        urlData[i] = this._urlData[i];
      }
    }

    for (var i = 0, l = urlParams.length; i < l; ++i) {
      var arg = args[i];
      if (urlParams[i] && !arg) {
        throw new Error('Stripe: I require argument "' + urlParams[i] + '", but I got: ' + arg);
      }
      urlData[urlParams[i]] = arg;
    }

    // Spec opportunity to transform data before sending:
    if (spec.transformRequestData) {
      data = spec.transformRequestData(data);
    }

    var requestPath = path.join(
      this.basePath(urlData),
      this.path(urlData),
      commandPath(urlData)
    ).replace(/\\/g, '/'); // ugly workaround for Windows

    if (spec.makeRequest) {
      // Allow the spec to intercept and do its biddings before
      // continuining with the original request:
      return spec.makeRequest.call(this, urlData, data, makeRequest);
    } else {
      return makeRequest();
    }

    function makeRequest() {

      self._request(requestMethod, requestPath, data, function(err, response) {
        if (err) {
          deferred.reject(err);
        } else {
          deferred.resolve(
            spec.transformResponseData ? 
              spec.transformResponseData(response) :
              response
          );
        }
      });

      return deferred.promise

    }

  };
};