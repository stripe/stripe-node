'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'country_specs',

  includeBasic: ['list', 'retrieve'],
});
