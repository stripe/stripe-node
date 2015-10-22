'use strict';

var StripeResource = require('../StripeResource');

/**
 * ApplicationFeeRefunds is a unique resource in that, upon instantiation,
 * requires an application fee id , and therefore each of its methods only
 * require the refundId argument.
 *
 * This streamlines the API specifically for the case of accessing refunds
 * on a returned application fee object.
 *
 * E.g. applicationFeeObject.refunds.retrieve(refundId)
 * (As opposed to the also-supported stripe.applicationFees.retrieveRefund(chargeId,
 * refundId))
 */
module.exports = StripeResource.extend({
  path: 'application_fees/{feeId}/refunds',
  includeBasic: ['create', 'list', 'retrieve', 'update'],
});
