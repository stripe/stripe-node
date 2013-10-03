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
  
    var args = [].slice.call(arguments);
    var auth = this._auth;

    var callback = typeof args[args.length - 1] == 'function' && args.pop();
    var data = utils.isObject(args[args.length - 1]) && args.pop() || {};
    var urlData = { apiVersion: this.apiVersion };

    var deferred = when.defer();

    if (callback) {
      // Callback signature is a simply translated to Promise'esque:
      deferred.promise.then(function(res) {
        callback(null, res);
      }, function(err) {
        callback(err);
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
      if (urlParams[i] && !arg && !(urlParams[i] in data)) {
        throw new Error('I require argument "' + urlParams[i] + '", but I got: ' + arg);
      }
      urlData[urlParams[i]] = arg;
    }

    var requestPath = path.join(
      this.basePath(urlData),
      this.path(urlData),
      commandPath(urlData)
    );

    this._request(requestMethod, requestPath, data, function(err, response) {
      if (err) {
        deferred.reject(err);
      } else {

        // There is an opportunity to provide a thin API on the returned data
        // objects, useful for pre-populated resources (e.g. CustomerCard).

        switch (response.object) {
          // Currently only customer objects are augmented with an API Layer:
          case 'customer':
            response.cards = new resources.CustomerCards(auth, {
              customerId: response.id
            });
        }
        
        deferred.resolve(response);
      }
    });

    return deferred.promise;

  };
};