'use strict';

const StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'billing_portal/sessions',

  includeBasic: ['create'],
});
