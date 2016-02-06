'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'country_specs',

  includeBasic: [
    'list', 'retrieve',
  ],
});
