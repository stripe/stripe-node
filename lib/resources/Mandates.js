'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'mandates',

  includeBasic: ['retrieve'],
});
