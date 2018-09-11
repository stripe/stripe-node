'use strict';

/* eslint-disable callback-return */

var testUtils = require('../testUtils');
var stripe = require('../lib/stripe')(
  testUtils.getUserStripeKey(),
  'latest'
);

var expect = require('chai').expect;

var LIMIT = 7;

describe('auto pagination', function() {
  this.timeout(20000);

  var realCustomerIds;
  beforeEach(function() {
    return new Promise(function(resolve) {
      stripe.customers.list({limit: LIMIT}).then(function(customers) {
        realCustomerIds = customers.data.map(function(item) {
          return item.id;
        });
        resolve();
      });
    });
  });

  describe('callbacks', function() {
    it('lets you call `next()` to iterate and `next(false)` to break', function() {
      return expect(new Promise(function(resolve, reject) {
        var customerIds = [];
        function onCustomer(customer, next) {
          customerIds.push(customer.id);
          if (customerIds.length >= LIMIT) {
            next(false);
          } else {
            next();
          }
        }
        function onDone(err) {
          resolve(customerIds);
        }

        stripe.customers.list({limit: 3}).autoPagingEach(onCustomer, onDone);
      })).to.eventually.deep.equal(realCustomerIds);
    });

    it('lets you ignore the second arg and `return false` to break', function() {
      return expect(new Promise(function(resolve, reject) {
        var customerIds = [];
        function onCustomer(customer) {
          customerIds.push(customer.id);
          if (customerIds.length >= LIMIT) {
            return false;
          }
        }
        function onDone(err) {
          resolve(customerIds);
        }

        stripe.customers.list({limit: 3}).autoPagingEach(onCustomer, onDone);
      })).to.eventually.deep.equal(realCustomerIds);
    });
  });

  describe('async iterators', function() {

    if (testUtils.envSupportsForAwait()) {
      // `for await` throws a syntax error everywhere but node 10,
      // so we must conditionally require it.
      var forAwaitUntil = require('../testUtils/forAwait.node10').forAwaitUntil;

      it('works with `for await` when that feature exists', function() {
        return expect(new Promise(function(resolve, reject) {
          forAwaitUntil(stripe.customers.list({limit: 3}).autoPagingEach(), LIMIT).then(function(customers) {
            expect(stripe.REQUESTS.length).to.equal(3);
            resolve(customers.map(function(customer) { return customer.id; }));
          });
        })).to.eventually.deep.equal(realCustomerIds);
      });
    }

    if (testUtils.envSupportsAwait()) {
      // Similarly, `await` throws a syntax error below Node 7.6.
      var awaitUntil = require('../testUtils/await.node7').awaitUntil;

      it('works with `await` and a while loop when await exists', function() {
        return expect(new Promise(function(resolve, reject) {
          awaitUntil(stripe.customers.list({limit: 3}).autoPagingEach(), LIMIT).then(function(customers) {
            resolve(customers.map(function(customer) { return customer.id; }));
          });
        })).to.eventually.deep.equal(realCustomerIds);
      });
    }

    it('works when you call it sequentially', function() {
      return expect(new Promise(function(resolve, reject) {
        var iter = stripe.customers.list({limit: 3}).autoPagingEach();

        var customerIds = [];
        function handleIter(result) {
          customerIds.push(result.value.id);
          if (customerIds.length < 7) {
            return iter.next().then(handleIter);
          }
        }
        iter.next().then(handleIter).then(function() {
          resolve(customerIds);
        });
      })).to.eventually.deep.equal(realCustomerIds);
    });

    it('gives you the same result each time when you call it multiple times in parallel', function() {
      return expect(new Promise(function(resolve, reject) {
        var iter = stripe.customers.list({limit: 3}).autoPagingEach();

        var customerIds = []
        function handleIter(result) {
          customerIds.push(result.value.id);
        }

        Promise.all([
          iter.next().then(handleIter),
          iter.next().then(handleIter).then(function() {
            return Promise.all([
              iter.next().then(handleIter),
              iter.next().then(handleIter),
            ])
          }).then(function() {
            return Promise.all([
              iter.next().then(handleIter),
              iter.next().then(handleIter),
            ])
          }).then(function() {
            return Promise.all([
              iter.next().then(handleIter),
              iter.next().then(handleIter),
            ])
          })
        ]).then(function() {
          resolve(customerIds);
        });
      })).to.eventually.deep.equal(realCustomerIds.slice(0, 4).reduce(function(acc, x) {
        acc.push(x);
        acc.push(x);
        return acc;
      }, []));
    });
  });

  describe('autoPagingToArray', function() {
    it('returns a promise of an array', function() {
      return expect(new Promise(function(resolve, reject) {
        stripe.customers.list({limit: 3}).autoPagingToArray({max: LIMIT})
          .then(function (customers) {
            return customers.map(function(customer) { return customer.id; });
          })
          .then(resolve)
          .catch(reject);
      })).to.eventually.deep.equal(realCustomerIds);
    });

    it('accepts an onDone callback, passing an array', function() {
      return expect(new Promise(function(resolve, reject) {
        stripe.customers.list({limit: 3}).autoPagingToArray({max: LIMIT}, function (err, customers) {
          if (err) {
            reject(err);
          } else {
            resolve(customers.map(function(customer) { return customer.id; }));
          }
        });
      })).to.eventually.deep.equal(realCustomerIds);
    });

    it('enforces a `max` arg', function() {
      return expect(new Promise(function(resolve, reject) {
        try {
          stripe.customers.list({limit: 3}).autoPagingToArray();
          reject(Error('Should have thrown.'));
        } catch (err) {
          resolve(err.message);
        }
      })).to.eventually.equal('You must pass a `max` option to autoPagingToArray, eg; `autoPagingToArray({max: 1000});`.');
    });

    it('caps the `max` arg to a reasonable ceiling', function() {
      return expect(new Promise(function(resolve, reject) {
        try {
          stripe.customers.list({limit: 3}).autoPagingToArray({max: 1000000});
          reject(Error('Should have thrown.'));
        } catch (err) {
          resolve(err.message);
        }
      })).to.eventually.equal('You cannot specify a max of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.');
    });
  });
});
