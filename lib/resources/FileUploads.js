'use strict';

var Buffer = require('safe-buffer').Buffer;
var utils = require('../utils');
var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;
var multipartDataGenerator = require('../MultipartDataGenerator');

module.exports = StripeResource.extend({

  overrideHost: 'uploads.stripe.com',

  requestDataProcessor: function(method, data) {
    data = data || {};

    if (method === 'POST') {
      return determineSource(data);
    } else {
      return utils.stringifyRequestData(data);
    }

    function determineSource(data) {
      var isStream = utils.checkForStream(data);
      if (isStream) {
        return streamProcessor(multipartDataGenerator);
      } else {
        return dataProcessor(multipartDataGenerator);
      }
    }

    function dataProcessor(fn) {
      return function (method, data, headers, callback) {
        fn.apply(null, arguments);
      }
    }

    function streamProcessor (fn) {
      return function (method, data, headers, callback) {
        var bufferArray = [];
        data.file.data.on('data', function(line) {
          bufferArray.push(line);
        }).on('end', function() {
          var bufferData = Object.assign({}, data);
          bufferData.file.data = Buffer.concat(bufferArray);
          var buffer = fn(method, bufferData, headers);
          callback(null, buffer);
        }).on('error', function(err) {
          callback(err, null);
        });
      }
    }
  },

  path: 'files',

  includeBasic: [
    'retrieve',
    'list',
  ],

  create: stripeMethod({
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
});
