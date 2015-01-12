'use strict';

var utils = require('../utils');
var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;
var _ = require('lodash');
var multipartDataGenerator = require('../MultipartDataGenerator');

module.exports = StripeResource.extend({

  overrideHost: 'uploads.stripe.com',

  requestDataProcessor: function(method, data, headers) {
    data = data || {};

    if (method === 'POST') {
      return multipartDataGenerator(method, data, headers);
    } else {
      return utils.stringifyRequestData(data);
    }
  },

  path: 'files',

  includeBasic: [
    'retrieve',
    'list'
  ],

  create: stripeMethod({
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })
});
