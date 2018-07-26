'use strict';

var StripeResource = require('../../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'issuing/authorizations',

  includeBasic: ['list', 'retrieve', 'update', 'setMetadata', 'getMetadata'],

  approve: stripeMethod({
    method: 'POST',
    path: '/{id}/approve',
    urlParams: ['id'],
  }),

  decline: stripeMethod({
    method: 'POST',
    path: '/{id}/decline',
    urlParams: ['id'],
  }),
});
