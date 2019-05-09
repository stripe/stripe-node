'use strict';

const StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'checkout/sessions',

  includeBasic: ['create', 'retrieve'],
});
