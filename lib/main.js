'use strict';

var Charges = require('./charges.js');

function stripe(api_key) {
  var auth = 'Basic ' + new Buffer(api_key + ':').toString('base64');

  return {
    charges: new Charges(auth)
  };
}


/*
// TODO(michelle): some args make no sense and also multiple cards!
Stripe.prototype.customers = {
  update_subscription: function(customer_id, data, cb) {
    post('/v1/customers/' + customer_id + '/subscription', data, cb, this._stripe);
  },
  cancel_subscription: function(customer_id, at_period_end, cb) {
    remove('/v1/customers/' + customer_id + '/subscription', {at_period_end: at_period_end}, cb, this._stripe);
  }
}

Stripe.prototype.plans = {
}

    invoices: {
      upcoming: function(customer_id, cb) {
        get('/v1/invoices/upcoming', { customer: customer_id }, cb);
      },
      pay: function(invoice_id, cb) {
        post('/v1/invoices/'+invoice_id+'/pay', {}, cb);
      }
    },

    invoice_items: {
    },

    coupons: {
    },

    token: {
      create: function (data, cb) {
        post('/v1/tokens', data, cb)
      },
      retrieve: function (token_id, cb) {
        get('/v1/tokens/' + token_id, {}, cb)
      }
    },

    account: {
      retrieve: function (cb) {
        get('/v1/account', {}, cb)
      }
    },

    events: {
      retrieve: function (token_id, cb) {
        get('/v1/events/' + token_id, {}, cb)
      },
      list: function (cb) {
        get('/v1/events/', {}, cb)
      }
    },

    recipients: {
    },

}

Stripe.prototype,transfers = {
  create: function(data, cb) {
    this._stripe._post('/v1/transfers', data, cb);
  },
  retrieve: function(transfer_id, cb) {
    this._stripe._get('/v1/transfers/' + transfer_id, {}, cb);
  },
  cancel: function(transfer_id, cb) {
    this._stripe._post('/v1/transfers/' + transfer_id + '/cancel', {}, cb);
  },
  list: function(count, offset, cb) {
    var nArgs = normalizeArguments(arguments);
    this._stripe._get('/v1/transfers', { count: nArgs.count, offset: nArgs.offset }, nArgs.cb);
  }
}

Stripe.prototype.balance = {
  retrieve: function(cb) {
    get('/v1/balance', {}, cb);
  },
  list: function(count, offset, cb) {
    var nArgs = normalizeArguments(arguments);
    get('/v1/balance/history', { count: nArgs.count, offset: nArgs.offset }, nArgs.cb);
  }
}
*/

module.exports = stripe;
