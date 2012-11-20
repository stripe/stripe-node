/* Copyright 2011 Ask Bjørn Hansen, see LICENSE */
"use strict";

var https = require('https');
var querystring = require('querystring');

function setup_response_handler(req, callback) {
    if (typeof callback !== "function") {
        //console.log("missing callback");
        return;
    }
    req.on('response',
        function(res) {
            var response = '';
            res.setEncoding('utf8');
            res.on('data',
                function(chunk) {
                    response += chunk;
            });
            res.on('end',
                function() {
                    var err = (200 == res.statusCode) ? null : res.statusCode;
                    try {
                        response = JSON.parse(response);
                    }
                    catch(e) {
                        err = 1;
                        response = { error : { message : "Invalid JSON from stripe.com" } };
                    }
                    err && (err = { statusCode: err, response: response });
                    callback(err, response);
            });
        });
}

module.exports = function (api_key, options) {
    var defaults = options || {};

    var default_auth = new Buffer(api_key + ":").toString('base64');

    function _request(method, path, data, options, callback) {
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        options = options || {};

        var auth = options.api_key ?
            new Buffer(options.api_key + ":").toString('base64') : default_auth;

        //console.log("data", typeof data, data);

        // convert first level of deep data structures to foo[bar]=baz syntax
        Object.keys(data).forEach(function(key) {
            if (typeof data[key] === 'object' && data[key] !== null) {
                var o = data[key];
                delete data[key];
                Object.keys(o).forEach(function(k) {
                    var new_key = key + "[" + k + "]";
                    data[new_key] = o[k];
                });
            }
        });

        var request_data = querystring.stringify(data);

        //console.log(method, "request for", path);
        //console.log("http request", request_data);

        var request_options = {
              host: 'api.stripe.com',
              port: '443',
              path: path,
              method: method,
              headers: {
                  'Authorization': 'Basic ' + auth,
                  'Accept': 'application/json',
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Content-Length': request_data.length
              }
          };

        var req = https.request(request_options);
        setup_response_handler(req, callback);
        req.write(request_data);
        req.end();
    }

    function post(path, data, options, callback) {
        _request('POST', path, data, options, callback);
    }

    function get(path, data, options, callback) {
        _request('GET', path, data, options, callback);
    }

    function del(path, data, options, callback) {
        _request('DELETE', path, data, options, callback);
    }

    return {
        charges: {
            create: function (data, options, cb) {
                post("/v1/charges", data, options, cb);
            },
            retrieve: function(charge_id, options, cb) {
                if (typeof options === 'function') {
                    cb = options;
                    options = {};
                }
                if (!(charge_id && typeof charge_id === 'string')) {
                    cb("charge_id required");
                }
                get("/v1/charges/" + charge_id, {}, options, cb);
            },
            refund: function(charge_id, amount, options, cb) {
                if (typeof amount === 'function') {
                    cb = amount;
                    amount = null;
                }
                if (typeof options === 'function') {
                    cb = options;
                    options = {};
                }
                if(!(charge_id && typeof charge_id === 'string')) {
                    cb("charge_id required");
                }
                var requestParams = {};
                if (amount) {
                    requestParams.amount = amount;
                }
                post("/v1/charges/" + charge_id + "/refund", requestParams, options, cb);
            },
            list: function(data, options, cb) {
                get("/v1/charges", data, options, cb);
            }
        },
        customers: {
            create: function (data, options, cb) {
                post("/v1/customers", data, options, cb);
            },
            retrieve: function(customer_id, options, cb) {
                if (typeof options === 'function') {
                    cb = options;
                    options = {};
                }
                if (!(customer_id && typeof customer_id === 'string')) {
                    return cb("customer_id required");
                }
                get("/v1/customers/" + customer_id, {}, options, cb);
            },
            update: function(customer_id, data, options, cb) {
                post("/v1/customers/" + customer_id, data, options, cb);
            },
            del: function(customer_id, options, cb) {
                del("/v1/customers/" + customer_id, {}, options, cb);
            },
            list: function(count, offset, options, cb) {
                get("/v1/customers", { count: count, offset: offset}, options, cb );
            },
            update_subscription: function(customer_id, data, options, cb) {
                post("/v1/customers/" + customer_id + '/subscription', data, options, cb);
            },
            cancel_subscription: function(customer_id, at_period_end, options, cb) {
                del("/v1/customers/" + customer_id + '/subscription',
                    { at_period_end: at_period_end }, options, cb);
            }
        },
        plans: {
            create: function (data, options, cb) {
                post("/v1/plans", data, options, cb);
            },
            retrieve: function(plan_id, options, cb) {
                if (typeof options === 'function') {
                    cb = options;
                    options = {};
                }
                if (!(plan_id && typeof plan_id === 'string')) {
                    return cb("plan_id required");
                }
                get("/v1/plans/" + plan_id, {}, options, cb);
            },
            del: function(plan_id, options, cb) {
                del("/v1/plans/" + plan_id, {}, options, cb);
            },
            list: function(count, offset, options, cb) {
                get("/v1/plans", { count: count, offset: offset}, options, cb);
            },
            update: function (plan_id, data, options, cb) {
                post("/v1/plans/" + plan_id, data, options, cb);
            }
        },
        invoices: {
            retrieve: function(invoice_id, options, cb) {
                get("/v1/invoices/" + invoice_id, {}, options, cb);
            },
            list: function(data, options, cb) {
                get("/v1/invoices", data, options, cb);
            },
            upcoming: function(customer_id, options, cb) {
                get("/v1/invoices/upcoming", { customer: customer_id }, options, cb);
            }
        },
        invoice_items: {
            create: function(data, options, cb) {
                post("/v1/invoiceitems", data, options, cb);
            },
            retrieve: function(invoice_item_id, options, cb) {
                if (typeof options === 'function') {
                    cb = options;
                    options = {};
                }
                if (!(invoice_item_id && typeof invoice_item_id === 'string')) {
                    return cb("invoice_item_id required");
                }
                get("/v1/invoiceitems/" + invoice_item_id, {}, options, cb);
            },
            update: function(invoice_item_id, data, options, cb) {
                post("/v1/invoiceitems/" + invoice_item_id, data, options, cb);
            },
            del: function(invoice_item_id, options, cb) {
                del("/v1/invoiceitems/" + invoice_item_id, {}, cb);
            },
            list: function(customer_id, count, offset, options, cb) {
                get("/v1/invoiceitems", { customer: customer_id, count: count, offset: offset},
                    options, cb);
            }
        },
        coupons: {
            create: function (data, options, cb) {
                post("/v1/coupons", data, options, cb);
            },
            retrieve: function(coupon_id, options, cb) {
                if (typeof options === 'function') {
                    cb = options;
                    options = {};
                }
                if (!(coupon_id && typeof coupon_id === 'string')) {
                    cb("coupon_id required");
                }
                get("/v1/coupons/" + coupon_id, {}, options, cb);
            },
            del: function(coupon_id, options, cb) {
                del("/v1/coupons/" + coupon_id, {}, options, cb);
            },
            list: function(count, offset, options, cb) {
                get("/v1/coupons", { count: count, offset: offset}, options, cb);
            }
        },
        token: {
            create: function (data, options, cb) {
                post("/v1/tokens", data, options, cb);
            },
            retrieve: function (token_id, options, cb) {
                get("/v1/tokens/" + token_id, {}, options, cb);
            }
        },
        events: {
            retrieve: function (token_id, options, cb) {
                get("/v1/events/" + token_id, {}, options, cb);
            },
            list: function (options, cb) {
                get("/v1/events/", {}, options, cb);
            }
        }
    };
};
