'use strict';

var resources = global.resources = {

  Account: require('./resources/Account'),
  Balance: require('./resources/Balance'),
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

function Stripe(key, version) {

  if (!(this instanceof Stripe)) {
    return new Stripe(key);
  }

  if (key) {
    this._version = version;
    this.setApiKey(key);
  }

}

Stripe.prototype = {
  
  setApiVersion: function(version) {
    this._version = version;
    this._prepResources();
  },

  setApiKey: function(key) {
    this._auth = 'Basic ' + new Buffer(key + ':').toString('base64');
    this._prepResources();
  },

  _prepResources: function() {

    if (!this._auth) {
      // Don't expose resources until we have a key
      return;
    }

    for (var name in resources) {
      this[
        name[0].toLowerCase() + name.substring(1)
      ] = new resources[name](this._auth, this._version);
    }

  }

};

module.exports = Stripe;
