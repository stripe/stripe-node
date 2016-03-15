'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;
var utils = require('../utils');

module.exports = StripeResource.extend({
  // Since path can either be `account` or `accounts`, support both through stripeMethod path

  create: stripeMethod({
    method: 'POST',
    path: 'accounts',
  }),

  list: stripeMethod({
    method: 'GET',
    path: 'accounts',
  }),

  update: stripeMethod({
    method: 'POST',
    path: 'accounts/{id}',
    urlParams: ['id'],
  }),

  // Avoid 'delete' keyword in JS
  del: stripeMethod({
    method: 'DELETE',
    path: 'accounts/{id}',
    urlParams: ['id'],
  }),

  reject: stripeMethod({
    method: 'POST',
    path: 'accounts/{id}/reject',
    urlParams: ['id'],
  }),

  retrieve: function(id) {
    // No longer allow an api key to be passed as the first string to this function due to ambiguity between
    // old account ids and api keys. To request the account for an api key, send null as the id
    if (typeof id === 'string') {
      return stripeMethod({
        method: 'GET',
        path: 'accounts/{id}',
        urlParams: ['id'],
      }).apply(this, arguments);
    } else {
      if (id === null || id === undefined) {
        // Remove id as stripeMethod would complain of unexpected argument
        [].shift.apply(arguments);
      }
      return stripeMethod({
        method: 'GET',
        path: 'account',
      }).apply(this, arguments);
    }
  },

  /**
   * Accounts: External account methods
   */

  createExternalAccount: stripeMethod({
    method: 'POST',
    path: 'accounts/{accountId}/external_accounts',
    urlParams: ['accountId'],
  }),

  listExternalAccounts: stripeMethod({
    method: 'GET',
    path: 'accounts/{accountId}/external_accounts',
    urlParams: ['accountId'],
  }),

  retrieveExternalAccount: stripeMethod({
    method: 'GET',
    path: 'accounts/{accountId}/external_accounts/{externalAccountId}',
    urlParams: ['accountId', 'externalAccountId'],
  }),

  updateExternalAccount: stripeMethod({
    method: 'POST',
    path: 'accounts/{accountId}/external_accounts/{externalAccountId}',
    urlParams: ['accountId', 'externalAccountId'],
  }),

  deleteExternalAccount: stripeMethod({
    method: 'DELETE',
    path: 'accounts/{accountId}/external_accounts/{externalAccountId}',
    urlParams: ['accountId', 'externalAccountId'],
  }),

});
