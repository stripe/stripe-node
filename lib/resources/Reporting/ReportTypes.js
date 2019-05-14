'use strict';

const StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'reporting/report_types',

  includeBasic: ['list', 'retrieve'],
});
