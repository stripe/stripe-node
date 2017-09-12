

const StripeResource = require('../StripeResource');

const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'orders',

  includeBasic: [
    'list', 'retrieve', 'update',
  ],

  create: stripeMethod({
    method: 'POST',
    required: ['currency'],
  }),

  pay: stripeMethod({
    method: 'POST',
    path: '/{orderId}/pay',
    urlParams: ['orderId'],
  }),

  returnOrder: stripeMethod({
    method: 'POST',
    path: '/{orderId}/returns',
    urlParams: ['orderId'],
  }),

});
