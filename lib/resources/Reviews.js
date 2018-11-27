'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'reviews',

  includeBasic: ['list', 'retrieve'],

  approve: stripeMethod({
    method: 'POST',
    path: '/{id}/approve',
    urlParams: ['id'],
  }),
});

