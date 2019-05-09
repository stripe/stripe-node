'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'tokens',

  includeBasic: ['create', 'retrieve'],
});
