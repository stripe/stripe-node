'use strict';

var StripeResource = require('../StripeResource');

/**
 * CustomerBankAccounts is a unique resource in that, upon instantiation,
 * requires a customerId, and therefore each of its methods only
 * require the bankAccountId argument.
 *
 * This streamlines the API specifically for the case of accessing bank accounts
 * on a returned customer object.
 *
 * E.g. customerObject.cards.retrieve(cardId)
 * (As opposed to the also-supported stripe.Customer.retrieveCard(custId, cardId))
 */
module.exports = StripeResource.extend({
	path: 'customers/{customerId}/bank_accounts',
	includeBasic: ['create', 'list', 'retrieve', 'update', 'del']
});