var vows = require('vows'),
    assert = require('assert'),
    sys = require('sys');

var api_key = process.env.STRIPE_API;

if (!api_key) {
    sys.puts('To run vows, you must have a STRIPE_API environment variable with a test api key');
    process.exit(2)
}

var stripe = require('./../lib/main.js')(api_key);

var plans = [], // hold the plans we create during the test
    getFirstPlan = function(shift) {
        var plan = shift ? plans.shift() : plans[0];

        if (!plan) {
            console.log('No plan was created!');
            process.exit(2);
        }

        return plan;
    };

vows.describe("Subscription Plans API").addBatch({
    'Create subscription plan': {
        topic: function() {
            stripe.plans.create({
                id: 'foobarbaz_plan',
                amount: 2000,
                currency: 'usd',
                interval: 'year',
                name: 'The super duper FooBarBaz subscription!'
            }, this.callback);
        },
        'returns a plan': function(err, response) {
            assert.isNull(err);
            assert.isDefined(response);
            assert.equal(response.object, 'plan');
            assert.equal(response.id, 'foobarbaz_plan');
            assert.equal(response.interval, 'year');
            assert.equal(response.amount, 2000);
            
            plans.push(response);
        },
        'Retrieve plan': {
            topic: function(create_err, plan) {
                stripe.plans.retrieve(plan.id, this.callback);
            },
            'returns the previously created plan': function(err, response) {
                var p = getFirstPlan();

                assert.isNull(err);
                assert.isDefined(response);
                assert.equal(response.id, p.id);
            }
        },
        'Create another plan': {
            topic: function() {
                stripe.plans.create({
                    id: 'bazbarfoo_plan',
                    amount: 4000,
                    currency: 'usd',
                    interval: 'month',
                    name: 'The super duper BazBarFoo subscription!'
                }, this.callback);
            },
            'returns a plan': function(err, response) {
                assert.isNull(err);
                assert.isDefined(response);
                assert.equal(response.object, 'plan');
                assert.equal(response.id, 'bazbarfoo_plan');
                assert.equal(response.interval, 'month');
                assert.equal(response.amount, 4000);
                
                plans.push(response);
            },
            'List plans': {
                topic: function() {
                    stripe.plans.list(null, null, this.callback);
                },
                'returns a list of plans': function(err, response) {
                    assert.isNull(err);

                    assert.isDefined(response);
                    assert.isNumber(response.count);
                    assert.strictEqual(response.count >= 2, true);
                },
                'Delete plans': {
                    topic: function() {
                        var p = getFirstPlan();

                        stripe.plans.del(p.id, this.callback);
                    },
                    'deleted the first plan': function(err, response) {
                        assert.isNull(err);

                        var p = getFirstPlan(true);

                        assert.isDefined(response);
                        assert.isTrue(response.deleted);
                        assert.equal(response.id, p.id);
                    },
                    'delete the next plan': {
                        topic: function() {
                            var p = getFirstPlan();

                            stripe.plans.del(p.id, this.callback);
                        },
                        'deleted the next plan': function(err, response) {
                            assert.isNull(err);

                            var p = getFirstPlan(true);

                            assert.isDefined(response);
                            assert.isTrue(response.deleted);
                            assert.equal(response.id, p.id);
                        }
                    }
                }
            }
        }
    }
}).export(module, {error: false});
