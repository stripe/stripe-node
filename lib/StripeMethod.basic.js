'use strict';

const stripeMethod = require('./StripeMethod');

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
