'use strict';

var resources = global.resources = {

  Account: require('./resources/Account'),
  Balance: require('./resources/Balance'),
  Cards: require('./resources/Cards'),
  Charges: require('./resources/Charges'),
  Coupons: require('./resources/Coupons'),
  Customers: require('./resources/Customers'),
  Events: require('./resources/Events'),
  Invoices: require('./resources/Invoices'),
  InvoiceItems: require('./resources/InvoiceItems'),
  Plans: require('./resources/Plans'),
  Recipients: require('./resources/Recipients'),
  Tokens: require('./resources/Tokens'),
  Transfers: require('./resources/Transfers'),

  // The following rely on pre-filled customer IDs:
  CustomerCards: require('./resources/CustomerCards')

};

Stripe.StripeResource = require('./StripeResource');
Stripe.resources = resources;

function Stripe(key) {

  if (!(this instanceof Stripe)) {
    return new Stripe(key);
  }

  this._auth = 'Basic ' + new Buffer(key + ':').toString('base64');

  // Expose Resources:
  for (var name in resources) {
    this[
      name[0].toLowerCase() + name.substring(1)
    ] = new resources[name](this._auth);
  }
}

Stripe.prototype = {};

module.exports = Stripe;
