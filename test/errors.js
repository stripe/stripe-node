var vows = require('vows'),
    assert = require('assert'),
    sys = require('sys');

var api_key = process.env.STRIPE_API;

if (!api_key) {
    sys.puts('To run vows, you must have a STRIPE_API environment variable with a test api key');
    process.exit(2)
}

var stripe = require('./../lib/main.js')(api_key);

vows.describe("Error handling").addBatch({
    'Retrieve non-existing plan' : {
        topic: function() {
            stripe.plans.retrieve("unknown_plan_" + Date.now(), this.callback);
        },
        'returns an error' : function(err, response) {
            assert.isNull(response);
            assert.instanceOf(err, Error);
            assert.equal(err.name, 'invalid_request_error');
            assert.isNotNull(err.message);
        },
    },
}).export(module, {error: false});