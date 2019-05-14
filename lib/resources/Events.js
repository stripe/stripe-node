'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'events',

  includeBasic: ['list', 'retrieve'],
});
