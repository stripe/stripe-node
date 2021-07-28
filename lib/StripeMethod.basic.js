'use strict';

const stripeMethod = require('./StripeMethod');

// DEPRECATED: These were kept for backwards compatibility in case users were
// using this, but basic methods are now explicitly defined on a resource.
module.exports = {
  create: stripeMethod({
    method: 'POST',
  }),

  list: stripeMethod({
    method: 'GET',
    methodType: 'list',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{id}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '{id}',
  }),

  // Avoid 'delete' keyword in JS
  del: stripeMethod({
    method: 'DELETE',
    path: '{id}',
  }),
};
