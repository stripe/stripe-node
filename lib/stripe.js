'use strict';

var resources = global.resources = {

  Account: require('./resources/Account'),
  Balance: require('./resources/Balance'),
  Card: require('./resources/Card'),
  Charge: require('./resources/Charge'),
  Coupon: require('./resources/Coupon'),
  Customer: require('./resources/Customer'),
  Event: require('./resources/Event'),
  Invoice: require('./resources/Invoice'),
  InvoiceItem: require('./resources/InvoiceItem'),
  Plan: require('./resources/Plan'),
  Recipient: require('./resources/Recipient'),
  Token: require('./resources/Token'),
  Transfer: require('./resources/Transfer'),

  // The following rely on pre-filled customer IDs:
  CustomerCard: require('./resources/CustomerCard')

};

Stripe.StripeResource = require('./StripeResource');

function Stripe(key) {

  if (!(this instanceof Stripe)) {
    return new Stripe(key);
  }

  this._auth = 'Basic ' + new Buffer(key + ':').toString('base64');

  // Expose Resources:
  for (var name in resources) {
    this[name.toLowerCase()] = new resources[name](this._auth);
  }
}

Stripe.prototype = {};

module.exports = Stripe;
