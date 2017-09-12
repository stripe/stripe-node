

const StripeResource = require('../StripeResource');

const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'sources',

  includeBasic: [
    'create', 'retrieve', 'update', 'setMetadata', 'getMetadata',
  ],

  verify: stripeMethod({
    method: 'POST',
    path: '/{id}/verify',
    urlParams: ['id'],
  }),

});
