var vows = require('vows'),
    assert = require('assert'),
    sys = require('sys');

var api_key = process.env.STRIPE_API;

if (!api_key) {
    sys.puts('To run vows, you must have a STRIPE_API environment variable with a test api key');
    process.exit(2)
}

var stripe = require('./../lib/main.js')(api_key);

vows.describe("Coupons API").addBatch({
   'Create coupon' : {
        topic: function() {
            stripe.coupons.create( {
                percent_off: 25,
                duration: 'repeating',
                duration_in_months: 3,
                id: '25OFF'
            }, this.callback);
        },
        'returns a coupon': function(err, response) {
            assert.isNull(err);
            assert.isDefined(response);
            assert.equal(response.id, '25OFF');
            assert.equal(response.duration_in_months, 3);
            assert.equal(response.percent_off, 25);
            assert.equal(response.duration, 'repeating');
        },
        'Retrieve coupon' : {
            topic: function(create_err, coupon) {
                stripe.coupons.retrieve('25OFF', this.callback);
            },
            'Got coupon' : function(err, response) {
                assert.isNull(err);
                assert.equal( response.id, '25OFF' );
                assert.equal( response.percent_off, 25);
            },
            'Delete coupon' : {
                topic: function(create_err, coupon) {
                    stripe.coupons.del('25OFF', this.callback);
                },
                'Coupon was deleted': function(err,response) {
                    assert.isNull(err);
                    assert.isTrue(response.deleted);
                }
            },
        },
   },
   'Coupons list' : {
       topic: function() {
           stripe.coupons.list(5, 0, this.callback);
       },
       'Got count': function(err, response) {
           assert.isNumber(response.count);
       },
   }
}).export(module, {error: false});
