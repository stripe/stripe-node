'use strict';

var StripeResource = require('../StripeResource');

/**
 * Persons is a unique resource in that, upon instantiation,
 * requires an accountId, and therefore each of its methods only
 * require the personId argument.
 *
 * This streamlines the API specifically for the case of accessing person
 * on a returned transfer object.
 *
 * E.g. accountObject.person.retrieve(personId)
 * (As opposed to the also-supported stripe.accounts.retrievePerson(accountId,
 * personId))
 */
module.exports = StripeResource.extend({
  path: 'accounts/{accountId}/persons',
  includeBasic: ['create', 'del', 'list', 'retrieve', 'update'],
});

