

const StripeResource = require('../StripeResource');

const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'products',

  includeBasic: [
    'list', 'retrieve', 'update', 'del',
  ],

  create: stripeMethod({
    method: 'POST',
    required: ['name'],
  }),

});
