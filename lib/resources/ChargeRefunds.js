'use strict';

var StripeResource = require('../StripeResource');

/**
 * ChargeRefunds is a unique resource in that, upon instantiation,
 * requires a chargeId, and therefore each of its methods only
 * require the refundId argument.
 *
 * This streamlines the API specifically for the case of accessing refunds
 * on a returned charge object.
 *
 * E.g. chargeObject.refunds.retrieve(refundId)
 * (As opposed to the also-supported stripe.charges.retrieveRefund(chargeId,
 * refundId))
 */
module.exports = StripeResource.extend({
  path: 'charges/{chargeId}/refunds',
  includeBasic: ['create', 'list', 'retrieve', 'update']
});
