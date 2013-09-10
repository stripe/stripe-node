'use strict';

var https = require('https');
var querystring = require('querystring');

var stripeOptions = {
  host: 'api.stripe.com',
  port: '443'
};

function Stripe(api_key) {
  this.auth = 'Basic ' + new Buffer(api_key + ':').toString('base64');

  this.charges._stripe = this;
  this.customers._stripe = this;
}

Stripe.prototype.charges = {
  capture: function (charge_id, data, cb) {
    if (data.constructor === Function) {
      cb = data;
      data = {};
    }
    post('/v1/charges/' + charge_id + '/capture', data, cb, this._stripe);
  },
  create: function (data, cb) {
    post('/v1/charges', data, cb, this._stripe);
  },
  retrieve: function(charge_id, cb) {
    if (!charge_id || charge_id.constructor !== String)) {
      cb('charge_id required.');
    }
    get('/v1/charges/' + charge_id, {}, cb, this._stripe);
  },
  refund: function(charge_id, amount, cb) {
    var requestParams = {};
    if(!(charge_id && typeof charge_id === 'string')) {
      cb('charge_id required');
    }
    if (typeof amount === 'function') {
      cb = amount;
      amount = null;
    }
    if (amount) {
      requestParams.amount = amount;
    }
    post('/v1/charges/' + charge_id + '/refund', requestParams, cb, this._stripe);
  },
  list: function(data, cb) {
    get('/v1/charges', data, cb, this._stripe);
  }
}

// TODO(michelle): some args make no sense and also multiple cards!
Stripe.prototype.customers = {
  create: function (data, cb) {
    post('/v1/customers', data, cb, this._stripe);
  },
  retrieve: function(customer_id, cb) {
    if (!customer_id || customer_id.constructor !== String) {
      return cb('customer_id required.');
    }
    get('/v1/customers/' + customer_id, {}, cb, this._stripe);
  },
  update: function(customer_id, data, cb) {
    post('/v1/customers/' + customer_id, data, cb, this._stripe);
  },
  remove: function(customer_id, cb) {
    remove('/v1/customers/' + customer_id, {}, cb, this._stripe);
  },
  list: function(count, offset, cb) {
    var nArgs = normalizeArguments(arguments);
    get('/v1/customers', {count: nArgs.count, offset: nArgs.offset}, nArgs.cb, this._stripe);
  },
  update_subscription: function(customer_id, data, cb) {
    post('/v1/customers/' + customer_id + '/subscription', data, cb, this._stripe);
  },
  cancel_subscription: function(customer_id, at_period_end, cb) {
    remove('/v1/customers/' + customer_id + '/subscription', {at_period_end: at_period_end}, cb, this._stripe);
  }
}

Stripe.prototype.plans = {
  create: function (data, cb) {
    post('/v1/plans', data, cb, this._stripe);
  },
  retrieve: function(plan_id, cb) {
    if (!(plan_id && typeof plan_id === 'string')) {
      return cb('plan_id required');
    }
    get('/v1/plans/' + plan_id, {}, cb);
  },
  remove: function(plan_id, cb) {
    remove('/v1/plans/' + plan_id, {}, cb);
  },
  list: function(count, offset, cb) {
    var nArgs = normalizeArguments(arguments);
    get('/v1/plans', { count: nArgs.count, offset: nArgs.offset }, nArgs.cb);
  },
  update: function(plan_id, data, cb) {
    post('/v1/plans/' + plan_id, data, cb);
  }
}

    invoices: {
      retrieve: function(invoice_id, cb) {
        get('/v1/invoices/' + invoice_id, {}, cb);
      },
      list: function(data, cb) {
        get('/v1/invoices', data, cb);
      },
      upcoming: function(customer_id, cb) {
        get('/v1/invoices/upcoming', { customer: customer_id }, cb);
      },
      create: function(customer_id, cb) {
        post('/v1/invoices', { customer: customer_id }, cb);
      },
      pay: function(invoice_id, cb) {
        post('/v1/invoices/'+invoice_id+'/pay', {}, cb);
      }
    },

    invoice_items: {
      create: function(data, cb) {
        post('/v1/invoiceitems', data, cb);
      },
      retrieve: function(invoice_item_id, cb) {
        if (!(invoice_item_id && typeof invoice_item_id === 'string')) {
          return cb('invoice_item_id required');
        }
        get('/v1/invoiceitems/' + invoice_item_id, {}, cb);
      },
      update: function(invoice_item_id, data, cb) {
        post('/v1/invoiceitems/' + invoice_item_id, data, cb);
      },
      remove: function(invoice_item_id, cb) {
        remove('/v1/invoiceitems/' + invoice_item_id, {}, cb);
      },
      list: function(customer_id, count, offset, cb) {
        var nArgs = normalizeArguments({count: count, offset: offset }, cb);
        get('/v1/invoiceitems', { customer: customer_id, count: count, offset: offset}, cb );
      }
    },

    coupons: {
      create: function (data, cb) {
        post('/v1/coupons', data, cb);
      },
      retrieve: function(coupon_id, cb) {
        if (!(coupon_id && typeof coupon_id === 'string')) {
          cb('coupon_id required');
        }
        get('/v1/coupons/' + coupon_id, {}, cb);
      },
      remove: function(coupon_id, cb) {
        remove('/v1/coupons/' + coupon_id, {}, cb);
      },
      list: function(count, offset, cb) {
        var nArgs = normalizeArguments(arguments);
        get('/v1/coupons', { count: nArgs.count, offset: nArgs.offset}, nArgs.cb );
      }
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
      create: function(data, cb) {
        post('/v1/recipients', data, cb);
      },
      retrieve: function(recipient_id, cb) {
        get('/v1/recipients/' + recipient_id, {}, cb);
      },
      update: function(recipient_id, data, cb) {
        post('/v1/recipients/' + recipient_id, data, cb);
      },
      remove: function(recipient_id, cb) {
        remove('/v1/recipients/' + recipient_id, {}, cb);
      },
      list: function(count, offset, cb) {
        var nArgs = normalizeArguments(arguments);
        get('/v1/recipients', { count: nArgs.count, offset: nArgs.offset }, nArgs.cb);
      }
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

Stripe.prototype._request = function(method, path, data, callback) {
  // Convert first level of nexted data structures to `foo[bar]=baz` syntax.
  var keys = Object.keys(data);
  for (var i = 0, ii = keys.length; i < ii; i += 1) {
    var key = keys[i];
    if (data[key] !== null && data[key].constructor === Object) {
      var nested = data[key];
      var nestedKeys = Object.keys(nested);
      delete data[key];

      for (var j = nestedKeys, jj = nestedKeys.length; j < jj; j += 1) {
        var nestedKey = nestedKeys[j];
        data[key + '[' + k + ']'] = nested[nestedKey];
      }
    }
  }

  var requestData = querystring.stringify(data);
  var requestOptions = {
    host: stripeOptions.host,
    port: stripeOptions.port,
    path: path,
    method: method,
    headers: {
      'Authorization': this.auth,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': requestData.length
    }
  };

  var req = https.request(requestOptions);
  setupResponseHandler(req, callback);
  req.write(requestData);
  req.end();
}

Stripe.prototype._post = function(path, data, callback) {
  this._request('POST', path, data, callback);
}

Stripe.prototype._get = function(path, data, callback) {
  this._request('GET', path, data, callback);
}

Stripe.prototype._remove = function(path, data, callback) {
  this._request('DELETE', path, data, callback);
}

/** Set up HTTPS response and error handlers. */
function setupResponseHandler(req, callback) {
  if (typeof callback !== 'function') {
    throw new Error("You didn't pass in a callback. See https://stripe.com/docs/api/node for code examples.");
    return;
  }
  req.on('response', function(res) {
    var response = '';

    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      response += chunk;
    });
    res.on('end', function() {
      var err = null;
      try {
        response = JSON.parse(response);
        if(200 != res.statusCode) {
          err = new Error(response.error.message);
          err.name = response.error.type;
          err.code = response.error.code;
          err.param = response.error.param;
          response = null;
        }
      } catch(e) {
        err = new Error('Invalid JSON from stripe.com');
        response = null;
      }
      callback(err, response);
    });
  });

  req.on('error', function(error) {
    callback(error);
  });
}

// TODO(michelle): this still needed?
function normalizeArguments() {
  var args = arguments[0];
  if (typeof args[0] == 'object' && typeof args[1] == 'function' && !args[2]) {
    return {count: args[0].count, offset: args[0].offset, cb: args[1]};
  } else {
    return {count: args[0], offset: args[1], cb: args[2]};
  }
}

module.exports = Stripe;
