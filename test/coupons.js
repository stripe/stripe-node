var vows = require('vows'),
    assert = require('assert'),
    sys = require('sys');

var api_key = process.env.STRIPE_API;

if (!api_key) {
    sys.puts('To run vows, you must have a STRIPE_API environment variable with a test api key');
    process.exit(2)
}

var stripe = require('./../lib/main.js')(api_key);

var coupon;
var id = parseInt(Math.random()*88888).toString(); 

vows.describe("Coupon API").addBatch({
        'Create a coupon': {
            topic: function() {
                stripe.coupons.create({id: id, 
                                       duration: "forever", 
                                       percent_off:50}, this.callback);
            },
            'created coupon': function(err, response) {
                assert.isNull(err);

                assert.isDefined(response);
                assert.equal(response.id, id);
                assert.equal(response.duration, "forever"); 
            },
            'Retrieve a coupon': {
                topic: function(cou, coupon) {
                    stripe.coupons.retrieve(coupon.id, this.callback); 
                },
                'got a coupon': function(err, response) {
                    assert.isNull(err);
                    
                    assert.isDefined(response);
                    assert.equal(response.id, id);

                    coupon = response; 
                }
            }, 
            'List coupons': {
                topic: function(cou, coupon) {
                    stripe.coupons.list(0, 10, this.callback); 
                }, 
                'Got coupons': function(err, response) {
                    assert.isNull(err); 
                    assert.isNumber(response.count); 
                    console.log(response.data)
                }
            }
        }
}).addBatch({
    'Retrieve a coupon': {
        topic: function() {
            stripe.coupons.retrieve(id, this.callback); 
        },
        'got a coupon': function(err, response) {
            assert.isNull(err);
                  
            assert.isDefined(response);
            assert.equal(response.id, id);

            coupon = response; 
        }, 
        'Delete coupon': {
            topic: function() {
                stripe.coupons.del(coupon.id, this.callback); 
            }, 
            'Coupon deleted': function(err, response) {
                assert.isNull(err); 
                assert.isTrue(response.deleted)
            }
        }
    } 
}).export(module, {error: false});
