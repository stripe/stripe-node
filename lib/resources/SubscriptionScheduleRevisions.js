'use strict';

const StripeResource = require('../StripeResource');

module.exports = StripeResource.extend({
  path: 'subscription_schedules/{schedule}/revisions',

  includeBasic: ['list', 'retrieve'],
});
