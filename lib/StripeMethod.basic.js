'use strict';

var stripeMethod = require('./StripeMethod');
var utils = require('./utils');

module.exports = {

  create: stripeMethod({
    method: 'POST'
  }),

  list: stripeMethod({
    method: 'GET'
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id']
  }),

  update: stripeMethod({
    method: 'POST',
    path: '{id}',
    urlParams: ['id']
  }),

  // Avoid 'delete' keyword in JS
  del: stripeMethod({
    method: 'DELETE',
    path: '{id}',
    urlParams: ['id']
  }),

  setMetadata: function(id, key, value, cb) {

    var self = this;
    var isObject = utils.isObject(key);
    var data = key;
    var urlData = this.createUrlData();
    var deferred = this.createDeferred(cb);
    var path = this.createFullPath('/' + id, urlData);

    if (data === null || (isObject && !Object.keys(data).length)) {
      // Reset metadata:
      sendMetadata(null);
    } else if (!isObject) {
      // Set individual metadata property:
      var metadata = {};
      metadata[key] = value;
      sendMetadata(metadata);
    } else {
      // Set entire metadata object after resetting it:
      this._request('POST', path, {
        metadata: null
      }, function(err, response) {
        if (err) return deferred.reject(err);
        sendMetadata(data);
      });
    }

    function sendMetadata(metadata) {
      self._request('POST', path, {
        metadata: metadata
      }, function(err, response) {
        if (err) deferred.reject(err);
        else deferred.resolve(response.metadata);
      });
    }

    return deferred.promise;

  },

  getMetadata: stripeMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],
    transformResponseData: function(data) {
      return data.metadata;
    }
  })

};