'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'sources',

  includeBasic: [
    'create', 'retrieve', 'setMetadata', 'getMetadata',
  ],

  verify: stripeMethod({
    method: 'POST',
    path: '/{id}/verify',
    urlParams: ['id'],
  }),

});
