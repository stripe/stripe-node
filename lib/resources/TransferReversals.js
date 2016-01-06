'use strict';

var StripeResource = require('../StripeResource');

/**
 * TransferReversals is a unique resource in that, upon instantiation,
 * requires a transferId, and therefore each of its methods only
 * require the reversalId argument.
 *
 * This streamlines the API specifically for the case of accessing reversals
 * on a returned transfer object.
 *
 * E.g. transferObject.reversals.retrieve(reversalId)
 * (As opposed to the also-supported stripe.transfers.retrieveReversal(transferId,
 * reversalId))
 */
module.exports = StripeResource.extend({
  path: 'transfers/{transferId}/reversals',
  includeBasic: ['create', 'list', 'retrieve', 'update'],
});

