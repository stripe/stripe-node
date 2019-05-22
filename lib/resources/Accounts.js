'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

// Since path can either be `account` or `accounts`, support both through stripeMethod path;
module.exports = StripeResource.extend({
  path: '',

  reject: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/reject',
  }),

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

  createLoginLink: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/login_links',
  }),

  listCapabilities: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/capabilities',
    methodType: 'list',
  }),

  retrieveCapability: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/capabilities/{capability}',
  }),

  updateCapability: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/capabilities/{capability}',
  }),

  createExternalAccount: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/external_accounts',
  }),

  deleteExternalAccount: stripeMethod({
    method: 'DELETE',
    path: 'accounts/{account}/external_accounts/{id}',
  }),

  listExternalAccounts: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/external_accounts',
    methodType: 'list',
  }),

  retrieveExternalAccount: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/external_accounts/{id}',
  }),

  updateExternalAccount: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/external_accounts/{id}',
  }),

  createPerson: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/persons',
  }),

  deletePerson: stripeMethod({
    method: 'DELETE',
    path: 'accounts/{account}/persons/{person}',
  }),

  listPersons: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/persons',
    methodType: 'list',
  }),

  retrievePerson: stripeMethod({
    method: 'GET',
    path: 'accounts/{account}/persons/{person}',
  }),

  updatePerson: stripeMethod({
    method: 'POST',
    path: 'accounts/{account}/persons/{person}',
  }),
});
