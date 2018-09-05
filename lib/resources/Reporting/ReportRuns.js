'use strict';

var StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'reporting/report_runs',
  includeBasic: ['create', 'list', 'retrieve'],
});
