'use strict';

var StripeResource = require('../../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'issuing/cards',

  includeBasic: ['create', 'list', 'retrieve', 'update', 'setMetadata', 'getMetadata'],

  retrieveDetails: stripeMethod({
    method: 'GET',
    path: '/{id}/details',
    urlParams: ['id'],
  }),
});
