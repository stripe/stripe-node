'use strict';

var StripeResource = require('../StripeResource');

/**
 * TaxIds is a unique resource in that, upon instantiation,
 * requires a customerId, and therefore each of its methods only
 * require the taxId argument.
 *
 * This streamlines the API specifically for the case of accessing a tax id
 * on a returned customer object.
 *
 * E.g. customerObject.tax_ids.retrieve(taxIdId)
 * (As opposed to the also-supported stripe.customers.retrieveTaxId(customerId, taxIdId))
 */
module.exports = StripeResource.extend({
  path: 'customers/{customerId}/tax_ids',
  includeBasic: ['create', 'del', 'list', 'retrieve'],
});
