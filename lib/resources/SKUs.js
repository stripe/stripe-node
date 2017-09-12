

const StripeResource = require('../StripeResource');

const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'skus',

  includeBasic: [
    'list', 'retrieve', 'update', 'del',
  ],

  create: stripeMethod({
    method: 'POST',
    required: ['currency', 'inventory', 'price', 'product'],
  }),

});
