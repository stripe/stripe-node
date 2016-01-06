'use strict';

module.exports = require('../StripeResource').extend({
  path: 'events',
  includeBasic: ['list', 'retrieve'],
});

