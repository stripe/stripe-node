'use strict';

const StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'terminal/connection_tokens',

  includeBasic: ['create'],
});
