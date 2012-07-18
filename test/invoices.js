var vows = require('vows'),
    assert = require('assert'),
    sys = require('sys');

var api_key = process.env.STRIPE_API;

if (!api_key) {
    sys.puts('To run vows, you must have a STRIPE_API environment variable with a test api key');
    process.exit(2)
}

var stripe = require('./../lib/main.js')(api_key);

var customer, plan, charge;

vows.describe("Invoice API").addBatch({
    'Create a subscription plan': {
        topic: function() {
            stripe.plans.create({
                id: 'foobarbaz_plan',
                amount: 2000,
                currency: 'usd',
                interval: 'month',
                name: 'The super duper FooBarBaz subscription!'
            }, this.callback);
        },
        'returns a plan': function(err, response) {
            assert.isNull(err);

            assert.isDefined(response);
            assert.equal(response.object, 'plan');
            assert.equal(response.id, 'foobarbaz_plan');

            plan = response;
        },
        'Create a customer': {
            topic: function(plan_err, plan) {
                var d = new Date();
                stripe.customers.create({
                    email: "foo@example.com",
                    plan: plan.id,
                    card: { number: "4242424242424242",
                            exp_month: d.getMonth() + 1,
                            exp_year:  d.getFullYear() + 1,
                            name: "T. Ester"
                    }
                }, this.callback);
            },
            'returns a customer': function(err, response) {
                assert.isNull(err);

                assert.isDefined(response);
                assert.equal(response.object, 'customer');
                assert.equal(response.email, "foo@example.com");

                customer = response;
            },
            'Create a charge to create the first invoice': {
                topic: function(cust_err, customer) {
                    stripe.charges.create({
                        amount: 500,
                        currency: 'usd',
                        customer: customer.id
                    }, this.callback);
                },
                'created a charge': function(err, response) {
                    assert.isNull(err);
                    
                    assert.isDefined(response);
                    assert.equal(response.object, 'charge');
                    assert.equal(response.paid, true);
                },
                'List invoices': {
                    topic: function() {
                        stripe.invoices.list({ customer: customer.id }, this.callback);
                    },
                    'receives a list of invoices': function(err, response) {
                        assert.isNull(err);

                        assert.isDefined(response);
                        assert.isArray(response.data);
                        assert.strictEqual(response.data.length > 0, true);

                        var invoice = response.data[0];
                        assert.isObject(invoice);
                        assert.equal(invoice.object, 'invoice');
                    },
                    'Retrieve an existing invoice': {
                        topic: function(list_err, list) {
                            var invoice = list.data[0];
                            stripe.invoices.retrieve(invoice.id, this.callback);
                        },
                        'received invoice': function(err, response) {
                            assert.isNull(err);

                            assert.isDefined(response);
                            assert.equal(response.object, 'invoice');
                            assert.strictEqual(response.total > 0, true);
                        },
                        'Retrieve an upcoming invoice': {
                            topic: function() {
                                stripe.invoices.upcoming(customer.id, this.callback);
                            },
                            'received upcoming invoice': function(err, response) {
                                assert.isNull(err);

                                assert.isDefined(response);
                                assert.equal(response.object, 'invoice');
                                assert.strictEqual(response.total > 0, true);
                            },
                            'Delete the customer': {
                                topic: function() {
                                    stripe.customers.del(customer.id, this.callback);
                                },
                                'customer deleted': function(err, response) {
                                    assert.isNull(err);

                                    assert.isDefined(response);
                                    assert.isTrue(response.deleted);
                                },
                                'Delete the subscription plan': {
                                    topic: function() {
                                        stripe.plans.del(plan.id, this.callback);
                                    },
                                    'deleted the subscription plan': function(err, response) {
                                        assert.isNull(err);

                                        assert.isDefined(response);
                                        assert.isTrue(response.deleted);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}).export(module, {error: false});
