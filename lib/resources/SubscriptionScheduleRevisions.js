'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'subscription_schedules/{scheduleId}/revisions',

  includeBasic: ['list', 'retrieve'],
});
