'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'charges',

  includeBasic: [
    'create', 'list', 'retrieve', 'update',
    'setMetadata', 'getMetadata',
  ],

  capture: stripeMethod({
    method: 'POST',
    path: '/{id}/capture',
    urlParams: ['id'],
  }),

  refund: stripeMethod({
    method: 'POST',
    path: '/{id}/refund',
    urlParams: ['id'],
  }),

  updateDispute: stripeMethod({
    method: 'POST',
    path: '/{id}/dispute',
    urlParams: ['id'],
  }),

  closeDispute: stripeMethod({
    method: 'POST',
    path: '/{id}/dispute/close',
    urlParams: ['id'],
  }),

  /**
   * Charge: Refund methods
   * (Deprecated)
   */
  createRefund: stripeMethod({
    method: 'POST',
    path: '/{chargeId}/refunds',
    urlParams: ['chargeId'],
  }),

  listRefunds: stripeMethod({
    method: 'GET',
    path: '/{chargeId}/refunds',
    urlParams: ['chargeId'],
  }),

  retrieveRefund: stripeMethod({
    method: 'GET',
    path: '/{chargeId}/refunds/{refundId}',
    urlParams: ['chargeId', 'refundId'],
  }),

  updateRefund: stripeMethod({
    method: 'POST',
    path: '/{chargeId}/refunds/{refundId}',
    urlParams: ['chargeId', 'refundId'],
  }),

  markAsSafe: function(chargeId) {
    return this.update(chargeId, {'fraud_details': {'user_report': 'safe'}})
  },

  markAsFraudulent: function(chargeId) {
    return this.update(chargeId, {'fraud_details': {'user_report': 'fraudulent'}})
  },
});
