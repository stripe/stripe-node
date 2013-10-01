'use strict';

module.exports = require('../StripeResource').extend({
  path: 'tokens',
  includeBasic: ['create', 'retrieve']
});
