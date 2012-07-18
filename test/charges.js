var vows = require('vows'),
    assert = require('assert'),
    sys = require('sys');

var api_key = process.env.STRIPE_API;

if (!api_key) {
    sys.puts('To run vows, you must have a STRIPE_API environment variable with a test api key');
    process.exit(2)
}

var stripe = require('./../lib/main.js')(api_key);

vows.describe("Charges API").addBatch({
    'Create charge' : {
        topic: function() {
            stripe.charges.create({
                amount: "50",
                currency: "usd",
                card: { number: "4242424242424242",
                    exp_month: 12,
                    exp_year:  2020,
                    name: "T. Ester",
                }
            }, this.callback);
        },
        'returns a charge' : function(err, response) {
            assert.isNull(err);
            assert.isDefined(response);
            assert.equal(response.object, 'charge');
            assert.isDefined(response.id);
        },
        'Retrieve a charge' : {
            topic: function(create_err, charge) {
                stripe.charges.retrieve(charge.id, this.callback);
            },
            'Got a charge' : function(err, response) {
                assert.isNull(err);
                assert.isDefined(response);
                assert.equal(response.object, 'charge');
                assert.isDefined(response.id);
            },
        },
        'Refund a charge' : {
            topic: function(create_err, charge) {
                stripe.charges.refund(charge.id, 50, this.callback);
            },
            'Got a refund' : function(err, response) {
                assert.isNull(err);
                assert.isDefined(response);
                assert.isTrue(response.refunded);
            },
        },
    },
    'Charge list' : {
        topic: function() {
            stripe.charges.list({}, this.callback);
        },
        'Got count': function(err, response) {
            assert.isNumber(response.count);
        },
    }
}).export(module, {error: false});