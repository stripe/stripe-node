'use strict';

var StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'checkout/sessions',
  includeBasic: ['create'],
})
