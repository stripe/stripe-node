'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'account',

  retrieve: stripeMethod({
    method: 'GET'
  })

});
