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
    path: 'accounts/{account}/reject',
    urlParams: ['account'],
  }),

  retrieve(id) {
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
    path: 'accounts/{account}/external_accounts',
    urlParams: ['account'],
  }),

  listExternalAccounts: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/external_accounts',
    urlParams: ['account'],
    methodType: 'list',
  }),

  retrieveExternalAccount: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/external_accounts/{id}',
    urlParams: ['account', 'id'],
  }),

  updateExternalAccount: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/external_accounts/{id}',
    urlParams: ['account', 'id'],
  }),

  deleteExternalAccount: stripeMethod({
    method: 'DELETE',
    path: 'accounts/{account}/external_accounts/{id}',
    urlParams: ['account', 'id'],
  }),

  /**
   * Accounts: LoginLink methods
   */

  createLoginLink: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/login_links',
    urlParams: ['account'],
  }),

  /**
   * Accounts: Person methods
   */

  createPerson: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/persons',
    urlParams: ['account'],
  }),

  listPersons: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/persons',
    urlParams: ['account'],
    methodType: 'list',
  }),

  retrievePerson: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/persons/{person}',
    urlParams: ['account', 'person'],
  }),

  updatePerson: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/persons/{person}',
    urlParams: ['account', 'person'],
  }),

  deletePerson: stripeMethod({
    method: 'DELETE',
    path: 'accounts/{account}/persons/{person}',
    urlParams: ['account', 'person'],
  }),
});
