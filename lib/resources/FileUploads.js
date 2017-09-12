

const utils = require('../utils');
const StripeResource = require('../StripeResource');

const stripeMethod = StripeResource.method;
const multipartDataGenerator = require('../MultipartDataGenerator');

module.exports = StripeResource.extend({

  overrideHost: 'uploads.stripe.com',

  requestDataProcessor(method, data, headers) {
    data = data || {};

    if (method === 'POST') {
      return multipartDataGenerator(method, data, headers);
    }
    return utils.stringifyRequestData(data);
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
