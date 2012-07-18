var vows = require('vows'),
    assert = require('assert'),
    sys = require('sys');

var api_key = process.env.STRIPE_API;

if (!api_key) {
    sys.puts('To run vows, you must have a STRIPE_API environment variable with a test api key');
    process.exit(2)
}

var stripe = require('./../lib/main.js')(api_key);

// There's probably a better way to do this...
var global = {};

vows.describe("Tokens API").addBatch({
   'Create token' : {
        topic: function() {
            stripe.token.create({
                card: { number: "4242424242424242",
                   exp_month: 1,
                   exp_year: 2021,
                   name: "J. Ester"
                }
            }, this.callback);
        },
        'Got card token': function(err, token) {
            assert.isNull(err);
            assert.isDefined(token.id);
        },
        'Retrieve card by token' : {
            topic: function(err, token) {
                global.token = token;
                stripe.token.retrieve(token.id, this.callback);
            },
            'Got card data' : function(err, card) {
                assert.isNull(err);
                assert.isDefined(card);
                assert.equal(card.object, 'token');
                assert.equal(card.id, global.token.id);
            }
        }
    }
}).export(module, {error: false});