'use strict';

var StripeResource = require('../../StripeResource');

module.exports = StripeResource.extend({
  path: 'sigma/scheduled_query_runs',

  includeBasic: ['list', 'retrieve'],
});
