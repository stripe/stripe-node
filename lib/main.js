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
                    }
                    catch(e) {
                        err = new Error("Invalid JSON from stripe.com");
                        response = null;
                    }
                    callback(err, response);
            });
        });
    req.on('error', function(error){
        callback(error);
    });
}

module.exports = function (api_key, options) {
    var defaults = options || {};

    var auth = 'Basic ' + new Buffer(api_key + ":").toString('base64');

    function _request(method, path, data, callback) {

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
                  'Authorization': auth,
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

    function post(path, data, callback) {
        _request('POST', path, data, callback);
    }

    function get(path, data, callback) {
        _request('GET', path, data, callback);
    }

    function del(path, data, callback) {
        _request('DELETE', path, data, callback);
    }

    function normalizeArguments() {
        var args = arguments[0],
            params = {};
        if(typeof args[0] == 'object' && typeof args[1] == 'function' && !args[2]) {
            if (args[0].count) params.count = args[0].count;
            if (args[0].offset) params.offset = args[0].offset;

            return { params: params, cb: args[1] };
        } else {
            if (args[0]) params.count = args[0];
            if (args[1]) params.offset = args[1];

            return { params: params, cb: args[2] };
        }
    }

    return {
        charges: {
            capture: function (charge_id, data, cb) {
                if (typeof data === 'function') {
                    cb = data;
                    data = {};
                }
                post("/v1/charges/" + charge_id + "/capture", data, cb);
            },
            create: function (data, cb) {
                post("/v1/charges", data, cb);
            },
            retrieve: function(charge_id, cb) {
                if(!(charge_id && typeof charge_id === 'string')) {
                    cb("charge_id required");
                }
                get("/v1/charges/" + charge_id, {}, cb);
            },
            refund: function(charge_id, amount, cb) {
                var requestParams = {};
                if(!(charge_id && typeof charge_id === 'string')) {
                    cb("charge_id required");
                }
                if (typeof amount === 'function') {
                    cb = amount;
                    amount = null;
                }
                if (amount) {
                    requestParams.amount = amount;
                }
                post("/v1/charges/" + charge_id + "/refund", requestParams, cb);
            },
            list: function(data, cb) {
                get("/v1/charges", data, cb);
            },
        },
        customers: {
            create: function (data, cb) {
                post("/v1/customers", data, cb);
            },
            retrieve: function(customer_id, cb) {
                if (!(customer_id && typeof customer_id === 'string')) {
                    return cb("customer_id required");
                }
                get("/v1/customers/" + customer_id, {}, cb);
            },
            update: function(customer_id, data, cb) {
                post("/v1/customers/" + customer_id, data, cb);
            },
            del: function(customer_id, cb) {
                del("/v1/customers/" + customer_id, {}, cb);
            },
            list: function(count, offset, cb) {
                var nArgs = normalizeArguments(arguments);
                get("/v1/customers", nArgs.params, nArgs.cb);
            },
            update_subscription: function(customer_id, data, cb) {
                post("/v1/customers/" + customer_id + '/subscription', data, cb);
            },
            cancel_subscription: function(customer_id, at_period_end, cb) {
                del("/v1/customers/" + customer_id + '/subscription', { at_period_end: at_period_end }, cb);
            },
            cards: {
                create: function (customer_id, data, cb) {
                    post("/v1/customers/" + customer_id + '/cards', data, cb);
                },
                retrieve: function(customer_id, card_id, cb) {
                    if (!(customer_id && typeof customer_id === 'string')) {
                        return cb("customer_id required");
                    }
                    if (!(card_id && typeof card_id === 'string')) {
                        return cb("card_id required");
                    }
                    get("/v1/customers/" + customer_id + '/cards/' + card_id, {}, cb);
                },
                update: function(customer_id, card_id, data, cb) {
                    post("/v1/customers/" + customer_id + '/cards/' + card_id, data, cb);
                },
                del: function(customer_id, card_id, cb) {
                    del("/v1/customers/" + customer_id + '/cards/' + card_id, {}, cb);
                },
                list: function(customer_id, count, offset, cb) {
                    var nArgs = normalizeArguments([{count: count, offset: offset }, cb]);
                    get("/v1/customers/" + customer_id + '/cards', nArgs.params, nArgs.cb);
                },
            }
        },
        plans: {
            create: function (data, cb) {
                post("/v1/plans", data, cb);
            },
            retrieve: function(plan_id, cb) {
                if (!(plan_id && typeof plan_id === 'string')) {
                    return cb("plan_id required");
                }
                get("/v1/plans/" + plan_id, {}, cb);
            },
            del: function(plan_id, cb) {
                del("/v1/plans/" + plan_id, {}, cb);
            },
            list: function(count, offset, cb) {
                var nArgs = normalizeArguments(arguments);
                get("/v1/plans", nArgs.params, nArgs.cb);
            },
            update: function (plan_id, data, cb) {
                post("/v1/plans/" + plan_id, data, cb);
            }
        },
        invoices: {
            retrieve: function(invoice_id, cb) {
                get("/v1/invoices/" + invoice_id, {}, cb);
            },
            list: function(data, cb) {
                get("/v1/invoices", data, cb);
            },
            upcoming: function(customer_id, cb) {
                get("/v1/invoices/upcoming", { customer: customer_id }, cb);
            },
            create: function(customer_id, cb) {
                post("/v1/invoices", { customer: customer_id }, cb);
            },
            pay: function(invoice_id, cb) {
                post("/v1/invoices/"+invoice_id+"/pay", {}, cb);
            }
        },
        invoice_items: {
            create: function(data, cb) {
                post("/v1/invoiceitems", data, cb);
            },
            retrieve: function(invoice_item_id, cb) {
                if (!(invoice_item_id && typeof invoice_item_id === 'string')) {
                    return cb("invoice_item_id required");
                }
                get("/v1/invoiceitems/" + invoice_item_id, {}, cb);
            },
            update: function(invoice_item_id, data, cb) {
                post("/v1/invoiceitems/" + invoice_item_id, data, cb);
            },
            del: function(invoice_item_id, cb) {
                del("/v1/invoiceitems/" + invoice_item_id, {}, cb);
            },
            list: function(customer_id, count, offset, cb) {
                var nArgs = normalizeArguments({ count: count, offset: offset }, cb);
                get("/v1/invoiceitems", { customer: customer_id, count: count, offset: offset}, cb );
            }
        },
        coupons: {
            create: function (data, cb) {
                post("/v1/coupons", data, cb);
            },
            retrieve: function(coupon_id, cb) {
                if (!(coupon_id && typeof coupon_id === 'string')) {
                    cb("coupon_id required");
                }
                get("/v1/coupons/" + coupon_id, {}, cb);
            },
            del: function(coupon_id, cb) {
                del("/v1/coupons/" + coupon_id, {}, cb);
            },
            list: function(count, offset, cb) {
                var nArgs = normalizeArguments(arguments);
                get("/v1/coupons", { count: nArgs.count, offset: nArgs.offset}, nArgs.cb );
            }
        },
        token: {
            create: function (data, cb) {
                post("/v1/tokens", data, cb)
            },
            retrieve: function (token_id, cb) {
                get("/v1/tokens/" + token_id, {}, cb)
            }
        },
        account: {
            retrieve: function (cb) {
                get("/v1/account", {}, cb)
            }
        },
        events: {
            retrieve: function (token_id, cb) {
                get("/v1/events/" + token_id, {}, cb)
            },
            list: function (cb) {
                get("/v1/events/", {}, cb)
            }
        },
        recipients: {
            create: function(data, cb) {
                post("/v1/recipients", data, cb);
            },
            retrieve: function(recipient_id, cb) {
                get("/v1/recipients/" + recipient_id, {}, cb);
            },
            update: function(recipient_id, data, cb) {
                post("/v1/recipients/" + recipient_id, data, cb);
            },
            del: function(recipient_id, cb) {
                del("/v1/recipients/" + recipient_id, {}, cb);
            },
            list: function(count, offset, cb) {
                var nArgs = normalizeArguments(arguments);
                get("/v1/recipients", nArgs.params, nArgs.cb);
            }
        },
        transfers: {
            create: function(data, cb) {
                post("/v1/transfers", data, cb);
            },
            retrieve: function(transfer_id, cb) {
                get("/v1/transfers/" + transfer_id, {}, cb);
            },
            cancel: function(transfer_id, cb) {
                post("/v1/transfers/" + transfer_id + "/cancel", {}, cb);
            },
            list: function(count, offset, cb) {
                var nArgs = normalizeArguments(arguments);
                get("/v1/transfers", nArgs.params, nArgs.cb);
            }
        },
        balance: {
            retrieve: function(cb) {
                get("/v1/balance", {}, cb);
            },
            list: function(count, offset, cb) {
                var nArgs = normalizeArguments(arguments);
                get("/v1/balance/history", nArgs.params, nArgs.cb);
            }
        }
    };
}
