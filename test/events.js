var vows = require('vows'),
    assert = require('assert'),
    sys = require('sys');

var api_key = process.env.STRIPE_API;

if (!api_key) {
    sys.puts('To run vows, you must have a STRIPE_API environment variable with a test api key');
    process.exit(2)
}

var stripe = require('./../lib/main.js')(api_key);

vows.describe("Events API").addBatch({
   'Events list' : {
       topic: function() {
           stripe.events.list(5, 0, this.callback);
       },
       'Got count': function(err, response) {
           assert.isNumber(response.count);
       },
   }
}).export(module, {error: false});
