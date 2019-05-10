'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  // Since path can either be `account` or `accounts`, support both through stripeMethod path

  create: stripeMethod({
    method: 'POST',
    path: 'accounts',
  }),

  list: stripeMethod({
    method: 'GET',
    path: 'accounts',
    methodType: 'list',
  }),

  update: stripeMethod({
    method: 'POST',
    path: 'accounts/{id}',
  }),

  // Avoid 'delete' keyword in JS
  del: stripeMethod({
    method: 'DELETE',
    path: 'accounts/{id}',
  }),

  reject: stripeMethod({
    method: 'POST',
    path: 'accounts/{id}/reject',
  }),

  retrieve(id) {
    // No longer allow an api key to be passed as the first string to this function due to ambiguity between
    // old account ids and api keys. To request the account for an api key, send null as the id
    if (typeof id === 'string') {
      return stripeMethod({
        method: 'GET',
        path: 'accounts/{id}',
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
   * Accounts: Capability methods
   */

  listCapabilities: stripeMethod({
    method: 'GET',
    path: 'accounts/{accountId}/capabilities',
    methodType: 'list',
  }),

  retrieveCapability: stripeMethod({
    method: 'GET',
    path: 'accounts/{accountId}/capabilities/{capabilityId}',
  }),

  updateCapability: stripeMethod({
    method: 'POST',
    path: 'accounts/{accountId}/capabilities/{capabilityId}',
  }),

  /**
   * Accounts: External account methods
   */

  createExternalAccount: stripeMethod({
    method: 'POST',
    path: 'accounts/{accountId}/external_accounts',
  }),

  listExternalAccounts: stripeMethod({
    method: 'GET',
    path: 'accounts/{accountId}/external_accounts',
    methodType: 'list',
  }),

  retrieveExternalAccount: stripeMethod({
    method: 'GET',
    path: 'accounts/{accountId}/external_accounts/{externalAccountId}',
  }),

  updateExternalAccount: stripeMethod({
    method: 'POST',
    path: 'accounts/{accountId}/external_accounts/{externalAccountId}',
  }),

  deleteExternalAccount: stripeMethod({
    method: 'DELETE',
    path: 'accounts/{accountId}/external_accounts/{externalAccountId}',
  }),

  /**
   * Accounts: LoginLink methods
   */

  createLoginLink: stripeMethod({
    method: 'POST',
    path: 'accounts/{accountId}/login_links',
  }),

  /**
   * Accounts: Person methods
   */

  createPerson: stripeMethod({
    method: 'POST',
    path: 'accounts/{accountId}/persons',
  }),

  listPersons: stripeMethod({
    method: 'GET',
    path: 'accounts/{accountId}/persons',
    methodType: 'list',
  }),

  retrievePerson: stripeMethod({
    method: 'GET',
    path: 'accounts/{accountId}/persons/{personId}',
  }),

  updatePerson: stripeMethod({
    method: 'POST',
    path: 'accounts/{accountId}/persons/{personId}',
  }),

  deletePerson: stripeMethod({
    method: 'DELETE',
    path: 'accounts/{accountId}/persons/{personId}',
  }),
});
