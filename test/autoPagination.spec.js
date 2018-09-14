'use strict';

/* eslint-disable callback-return */

var testUtils = require('../testUtils');
var stripe = require('../lib/stripe')(
  testUtils.getUserStripeKey(),
  'latest'
);

var expect = require('chai').expect;

var LIMIT = 7;
var TOTAL_OBJECTS = 8;

describe('auto pagination', function() {
  this.timeout(20000);

  var email = 'test.' + Date.now() + '@example.com';
  var realCustomerIds;
  before(function() {
    return new Promise(function(resolve) {
      var createReqs = [];
      for (var i = 0; i < TOTAL_OBJECTS; i++) {
        createReqs.push(stripe.customers.create({email: email}));
      }
      return Promise.all(createReqs).then(function() {
        // re-fetch to ensure correct order
        return stripe.customers.list({email: email}).then(function(customers) {
          realCustomerIds = customers.data.map(function(customer) {return customer.id});
        })
      }).then(resolve);
    });
  });

  after(function() {
    return new Promise(function(resolve) {
      Promise.all(realCustomerIds.map(function(customerId) {
        return stripe.customers.del(customerId);
      })).then(resolve);
    });
  });

  describe('callbacks', function() {
    it('lets you call `next()` to iterate and `next(false)` to break', function() {
      return expect(new Promise(function(resolve, reject) {
        var customerIds = [];
        function onCustomer(customer, next) {
          customerIds.push(customer.id);
          if (customerIds.length === LIMIT) {
            next(false);
          } else {
            expect(customerIds.length).to.be.lessThan(LIMIT);
            next();
          }
        }
        function onDone(err) {
          if (err) {
            reject(err);
          } else {
            resolve(customerIds);
          }
        }

        stripe.customers.list({limit: 3, email: email})
          .autoPagingEach(onCustomer, onDone);
      })).to.eventually.deep.equal(realCustomerIds.slice(0, LIMIT));
    });

    it('lets you ignore the second arg and `return false` to break', function() {
      return expect(new Promise(function(resolve, reject) {
        var customerIds = [];
        function onCustomer(customer) {
          customerIds.push(customer.id);
          if (customerIds.length === LIMIT) {
            return false;
          } else {
            expect(customerIds.length).to.be.lessThan(LIMIT);
          }
        }
        function onDone(err) {
          if (err) {
            reject(err);
          } else {
            resolve(customerIds);
          }
        }

        stripe.customers.list({limit: 3, email: email})
          .autoPagingEach(onCustomer, onDone);
      })).to.eventually.deep.equal(realCustomerIds.slice(0, LIMIT));
    });

    it('can use a promise instead of a callback for onDone', function() {
      return expect(new Promise(function(resolve, reject) {
        var customerIds = [];
        function onCustomer(customer) {
          customerIds.push(customer.id);
        }
        function onDone() {
          resolve(customerIds);
        }

        stripe.customers.list({limit: 3, email: email})
          .autoPagingEach(onCustomer)
          .then(onDone)
          .catch(reject);
      })).to.eventually.deep.equal(realCustomerIds);
    });

    it('handles the end of a list properly when the last page is full', function() {
      return expect(new Promise(function(resolve, reject) {
        var customerIds = [];
        return stripe.customers.list({email: email, limit: TOTAL_OBJECTS / 2})
          .autoPagingEach(function(customer) { customerIds.push(customer.id); })
          .catch(reject)
          .then(function() {
            resolve(customerIds);
          });
      })).to.eventually.deep.equal(realCustomerIds);
    });

    it('handles the end of a list properly when the last page is not full', function() {
      return expect(new Promise(function(resolve, reject) {
        var customerIds = [];
        return stripe.customers.list({email: email, limit: TOTAL_OBJECTS - 2})
          .autoPagingEach(function(customer) { customerIds.push(customer.id); })
          .catch(reject)
          .then(function() {
            resolve(customerIds);
          });
      })).to.eventually.deep.equal(realCustomerIds);
    });

    it('handles a list which is shorter than the page size properly', function() {
      return expect(new Promise(function(resolve, reject) {
        var customerIds = [];
        return stripe.customers.list({email: email, limit: TOTAL_OBJECTS + 2})
          .autoPagingEach(function(customer) { customerIds.push(customer.id); })
          .catch(reject)
          .then(function() {
            resolve(customerIds);
          });
      })).to.eventually.deep.equal(realCustomerIds);
    });

    it('handles errors after the first page correctly (callback)', function() {
      return expect(new Promise(function(resolve, reject) {
        var i = 0;
        function onCustomer() {
          i += 1;
          if (i > 4) {
            throw Error('Simulated error');
          }
        }
        return stripe.customers.list({email: email, limit: 3})
          .autoPagingEach(onCustomer, function(err) {
            if (err) {
              resolve(err.message);
            } else {
              reject(Error('Expected an error, did not get one.'));
            }
          });
      })).to.eventually.deep.equal('Simulated error');
    });

    it('handles errors after the first page correctly (promise)', function() {
      return expect(new Promise(function(resolve, reject) {
        var i = 0;
        function onCustomer() {
          i += 1;
          if (i > 4) {
            throw Error('Simulated error');
          }
        }
        return stripe.customers.list({email: email, limit: 3})
          .autoPagingEach(onCustomer)
          .then(function() {
            reject(Error('Expected an error, did not get one.'));
          })
          .catch(function(err) {
            resolve(err.message);
          });
      })).to.eventually.deep.equal('Simulated error');
    });
  });

  describe('async iterators', function() {

    if (testUtils.envSupportsForAwait()) {
      // `for await` throws a syntax error everywhere but node 10,
      // so we must conditionally require it.
      var forAwaitUntil = require('../testUtils/forAwait.node10').forAwaitUntil;

      it('works with `for await` when that feature exists (user break)', function() {
        return expect(new Promise(function(resolve, reject) {
          forAwaitUntil(stripe.customers.list({limit: 3, email: email}).autoPagingEach(), LIMIT)
            .then(function(customers) {
              resolve(customers.map(function(customer) { return customer.id; }));
            })
            .catch(reject)
        })).to.eventually.deep.equal(realCustomerIds.slice(0, LIMIT));
      });

      it('works with `for await` when that feature exists (end of list)', function() {
        return expect(new Promise(function(resolve, reject) {
          forAwaitUntil(stripe.customers.list({limit: 3, email: email}).autoPagingEach(), TOTAL_OBJECTS + 1)
            .then(function(customers) {
              resolve(customers.map(function(customer) { return customer.id; }));
            })
            .catch(reject);
        })).to.eventually.deep.equal(realCustomerIds);
      });
    }

    if (testUtils.envSupportsAwait()) {
      // Similarly, `await` throws a syntax error below Node 7.6.
      var awaitUntil = require('../testUtils/await.node7').awaitUntil;

      it('works with `await` and a while loop when await exists', function() {
        return expect(new Promise(function(resolve, reject) {
          awaitUntil(stripe.customers.list({limit: 3, email: email}).autoPagingEach(), LIMIT)
            .then(function(customers) {
              resolve(customers.map(function(customer) { return customer.id; }));
            })
            .catch(reject);
        })).to.eventually.deep.equal(realCustomerIds.slice(0, LIMIT));
      });
    }

    it('returns an empty object from .return() so that `break;` works in for-await', function() {
      return expect(new Promise(function(resolve, reject) {
        var iter = stripe.customers.list({limit: 3, email: email})
          .autoPagingEach();

        var customerIds = [];
        function handleIter(result) {
          customerIds.push(result.value.id);
          expect(iter.return()).to.deep.equal({});
        }

        iter.next().then(handleIter).then(function() {
          resolve(customerIds);
        }).catch(reject);
      })).to.eventually.deep.equal(realCustomerIds.slice(0, 1));
    });

    it('works when you call it sequentially', function() {
      return expect(new Promise(function(resolve, reject) {
        var iter = stripe.customers.list({limit: 3, email: email})
          .autoPagingEach();

        var customerIds = [];
        function handleIter(result) {
          customerIds.push(result.value.id);
          if (customerIds.length < 7) {
            return iter.next().then(handleIter);
          }
        }
        iter.next().then(handleIter).then(function() {
          resolve(customerIds);
        }).catch(reject);
      })).to.eventually.deep.equal(realCustomerIds.slice(0, LIMIT));
    });

    it('gives you the same result each time when you call it multiple times in parallel', function() {
      return expect(new Promise(function(resolve, reject) {
        var iter = stripe.customers.list({limit: 3, email: email})
          .autoPagingEach();

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
        }).catch(reject);
      })).to.eventually.deep.equal(realCustomerIds.slice(0, 4).reduce(function(acc, x) {
        acc.push(x);
        acc.push(x);
        return acc;
      }, []));
    });
  });

  describe('autoPagingToArray', function() {
    it('can go to the end', function() {
      return expect(new Promise(function(resolve, reject) {
        stripe.customers.list({limit: 3, email: email})
          .autoPagingToArray({limit: TOTAL_OBJECTS + 1})
          .then(function(customers) {
            return customers.map(function(customer) { return customer.id; });
          })
          .then(resolve)
          .catch(reject);
      })).to.eventually.deep.equal(realCustomerIds);
    });

    it('returns a promise of an array', function() {
      return expect(new Promise(function(resolve, reject) {
        stripe.customers.list({limit: 3, email: email})
          .autoPagingToArray({limit: LIMIT})
          .then(function(customers) {
            return customers.map(function(customer) { return customer.id; });
          })
          .then(resolve)
          .catch(reject);
      })).to.eventually.deep.equal(realCustomerIds.slice(0, LIMIT));
    });

    it('accepts an onDone callback, passing an array', function() {
      return expect(new Promise(function(resolve, reject) {
        function onDone(err, customers) {
          if (err) {
            reject(err);
          } else {
            resolve(customers.map(function(customer) { return customer.id; }));
          }
        }

        stripe.customers.list({limit: 3, email: email})
          .autoPagingToArray({limit: LIMIT}, onDone);
      })).to.eventually.deep.equal(realCustomerIds.slice(0, LIMIT));
    });

    it('enforces a `limit` arg', function() {
      return expect(new Promise(function(resolve, reject) {
        try {
          stripe.customers.list({limit: 3, email: email})
            .autoPagingToArray();
          reject(Error('Should have thrown.'));
        } catch (err) {
          resolve(err.message);
        }
      })).to.eventually.equal('You must pass a `limit` option to autoPagingToArray, eg; `autoPagingToArray({limit: 1000});`.');
    });

    it('caps the `limit` arg to a reasonable ceiling', function() {
      return expect(new Promise(function(resolve, reject) {
        try {
          stripe.customers.list({limit: 3, email: email})
            .autoPagingToArray({limit: 1000000});
          reject(Error('Should have thrown.'));
        } catch (err) {
          resolve(err.message);
        }
      })).to.eventually.equal('You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.');
    });
  });

  describe('api compat edge cases', function() {
    it('lets you listen to the first request as its own promise, and separately each item, but only sends one request for the first page.', function() {
      return expect(new Promise(function(resolve, reject) {
        // Count requests: we want one for the first page (not two), and then one for the second page.
        var reqCount = 0;
        function onRequest() {
          reqCount += 1;
        }
        stripe.on('request', onRequest);

        var customerIds = [];
        var p = stripe.customers.list({email: email, limit: 4})
        Promise.all([
          p,
          p.autoPagingEach(function(customer) { customerIds.push(customer.id); }),
        ]).then(function(results) {
          stripe.off('request', onRequest);
          expect(reqCount).to.equal(2); // not 3.

          resolve({
            firstReq: results[0].data.map(function(customer) { return customer.id; }),
            paginated: customerIds,
          });
        }).catch(reject);
      })).to.eventually.deep.equal({
        firstReq: realCustomerIds.slice(0, 4),
        paginated: realCustomerIds,
      });
    });

    it('gives a helpful error message when you call .then without passing an `onItem` callback', function() {
      return expect(new Promise(function(resolve, reject) {
        try {
          stripe.customers.list({limit: 3, email: email})
            .autoPagingEach()
            .then(function() {});
          reject(Error('Should have thrown.'));
        } catch (err) {
          resolve(err.message);
        }
      })).to.eventually.equal('`autoPagingEach` does not return a promise unless you pass it an `onItem` callback; did you want `autoPagingToArray`?');
    });

    it('gives a helpful error message when you try to use an `onItem` callback _and_ an iterator', function() {
      return expect(new Promise(function(resolve, reject) {
        try {
          stripe.customers.list({limit: 3, email: email})
            .autoPagingEach(function() {})
            .next();
          reject(Error('Should have thrown.'));
        } catch (err) {
          resolve(err.message);
        }
      })).to.eventually.equal('`autoPagingEach` does not return an iterator when you pass it an `onItem` callback; you must choose one or the other.');
    });

    if (testUtils.envSupportsForAwait()) {
      it('gives a helpful error message when you try to use an `onItem` callback _and_ an iterator (with async iterators)', function() {
        return expect(new Promise(function(resolve, reject) {
          try {
            stripe.customers.list({limit: 3, email: email})
              .autoPagingEach(function() {})[Symbol.asyncIterator]()
              .next();
            reject(Error('Should have thrown.'));
          } catch (err) {
            resolve(err.message);
          }
        })).to.eventually.equal('`autoPagingEach` does not return an iterator when you pass it an `onItem` callback; you must choose one or the other.');
      });
    }
  });
});
