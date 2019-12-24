'use strict';

/* eslint-disable callback-return */

const testUtils = require('../testUtils');
const stripe = require('../lib/stripe')(testUtils.getUserStripeKey(), 'latest');

const expect = require('chai').expect;

const LIMIT = 7;
const TOTAL_OBJECTS = 8;

describe('auto pagination', function() {
  this.timeout(20000);

  const email = `test.${Date.now()}@example.com`;
  let realCustomerIds;
  before(
    () =>
      new Promise((resolve) => {
        const createReqs = [];
        for (let i = 0; i < TOTAL_OBJECTS; i++) {
          createReqs.push(stripe.customers.create({email}));
        }
        return Promise.all(createReqs)
          .then(() =>
            // re-fetch to ensure correct order
            stripe.customers.list({email}).then((customers) => {
              realCustomerIds = customers.data.map((customer) => customer.id);
            })
          )
          .then(resolve);
      })
  );

  after(
    () =>
      new Promise((resolve) => {
        Promise.all(
          realCustomerIds.map((customerId) => stripe.customers.del(customerId))
        ).then(resolve);
      })
  );

  describe('callbacks', () => {
    it('lets you call `next()` to iterate and `next(false)` to break', () =>
      expect(
        new Promise((resolve, reject) => {
          const customerIds = [];
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

          stripe.customers
            .list({limit: 3, email})
            .autoPagingEach(onCustomer, onDone);
        })
      ).to.eventually.deep.equal(realCustomerIds.slice(0, LIMIT)));

    it('lets you ignore the second arg and `return false` to break', () =>
      expect(
        new Promise((resolve, reject) => {
          const customerIds = [];
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

          stripe.customers
            .list({limit: 3, email})
            .autoPagingEach(onCustomer, onDone);
        })
      ).to.eventually.deep.equal(realCustomerIds.slice(0, LIMIT)));

    it('lets you ignore the second arg and return a Promise which returns `false` to break', () =>
      expect(
        new Promise((resolve, reject) => {
          const customerIds = [];
          function onCustomer(customer) {
            customerIds.push(customer.id);
            if (customerIds.length === LIMIT) {
              return Promise.resolve(false);
            } else {
              expect(customerIds.length).to.be.lessThan(LIMIT);
              return Promise.resolve();
            }
          }
          function onDone(err) {
            if (err) {
              reject(err);
            } else {
              resolve(customerIds);
            }
          }

          stripe.customers
            .list({limit: 3, email})
            .autoPagingEach(onCustomer, onDone);
        })
      ).to.eventually.deep.equal(realCustomerIds.slice(0, LIMIT)));

    it('can use a promise instead of a callback for onDone', () =>
      expect(
        new Promise((resolve, reject) => {
          const customerIds = [];
          function onCustomer(customer) {
            customerIds.push(customer.id);
          }
          function onDone() {
            resolve(customerIds);
          }

          stripe.customers
            .list({limit: 3, email})
            .autoPagingEach(onCustomer)
            .then(onDone)
            .catch(reject);
        })
      ).to.eventually.deep.equal(realCustomerIds));

    it('handles the end of a list properly when the last page is full', () =>
      expect(
        new Promise((resolve, reject) => {
          const customerIds = [];
          return stripe.customers
            .list({email, limit: TOTAL_OBJECTS / 2})
            .autoPagingEach((customer) => {
              customerIds.push(customer.id);
            })
            .catch(reject)
            .then(() => {
              resolve(customerIds);
            });
        })
      ).to.eventually.deep.equal(realCustomerIds));

    it('handles the end of a list properly when the last page is not full', () =>
      expect(
        new Promise((resolve, reject) => {
          const customerIds = [];
          return stripe.customers
            .list({email, limit: TOTAL_OBJECTS - 2})
            .autoPagingEach((customer) => {
              customerIds.push(customer.id);
            })
            .catch(reject)
            .then(() => {
              resolve(customerIds);
            });
        })
      ).to.eventually.deep.equal(realCustomerIds));

    it('handles a list which is shorter than the page size properly', () =>
      expect(
        new Promise((resolve, reject) => {
          const customerIds = [];
          return stripe.customers
            .list({email, limit: TOTAL_OBJECTS + 2})
            .autoPagingEach((customer) => {
              customerIds.push(customer.id);
            })
            .catch(reject)
            .then(() => {
              resolve(customerIds);
            });
        })
      ).to.eventually.deep.equal(realCustomerIds));

    it('handles errors after the first page correctly (callback)', () =>
      expect(
        new Promise((resolve, reject) => {
          let i = 0;
          function onCustomer() {
            i += 1;
            if (i > 4) {
              throw Error('Simulated error');
            }
          }
          return stripe.customers
            .list({email, limit: 3})
            .autoPagingEach(onCustomer, (err) => {
              if (err) {
                resolve(err.message);
              } else {
                reject(Error('Expected an error, did not get one.'));
              }
            });
        })
      ).to.eventually.deep.equal('Simulated error'));

    it('handles errors after the first page correctly (promise)', () =>
      expect(
        new Promise((resolve, reject) => {
          let i = 0;
          function onCustomer() {
            i += 1;
            if (i > 4) {
              throw Error('Simulated error');
            }
          }
          return stripe.customers
            .list({email, limit: 3})
            .autoPagingEach(onCustomer)
            .then(() => {
              reject(Error('Expected an error, did not get one.'));
            })
            .catch((err) => {
              resolve(err.message);
            });
        })
      ).to.eventually.deep.equal('Simulated error'));
  });

  describe('async iterators', () => {
    if (testUtils.envSupportsForAwait()) {
      // `for await` throws a syntax error everywhere but node 10,
      // so we must conditionally require it.
      const forAwaitUntil = require('../testUtils/forAwait.node10')
        .forAwaitUntil;

      it('works with `for await` when that feature exists (user break)', () =>
        expect(
          new Promise((resolve, reject) => {
            forAwaitUntil(stripe.customers.list({limit: 3, email}), LIMIT)
              .then((customers) => {
                resolve(customers.map((customer) => customer.id));
              })
              .catch(reject);
          })
        ).to.eventually.deep.equal(realCustomerIds.slice(0, LIMIT)));

      it('works with `for await` when that feature exists (end of list)', () =>
        expect(
          new Promise((resolve, reject) => {
            forAwaitUntil(
              stripe.customers.list({limit: 3, email}),
              TOTAL_OBJECTS + 1
            )
              .then((customers) => {
                resolve(customers.map((customer) => customer.id));
              })
              .catch(reject);
          })
        ).to.eventually.deep.equal(realCustomerIds));
    }

    if (testUtils.envSupportsAwait()) {
      // Similarly, `await` throws a syntax error below Node 7.6.
      const awaitUntil = require('../testUtils/await.node7').awaitUntil;

      it('works with `await` and a while loop when await exists', () =>
        expect(
          new Promise((resolve, reject) => {
            awaitUntil(stripe.customers.list({limit: 3, email}), LIMIT)
              .then((customers) => {
                resolve(customers.map((customer) => customer.id));
              })
              .catch(reject);
          })
        ).to.eventually.deep.equal(realCustomerIds.slice(0, LIMIT)));
    }

    it('returns an empty object from .return() so that `break;` works in for-await', () =>
      expect(
        new Promise((resolve, reject) => {
          const iter = stripe.customers.list({limit: 3, email});

          const customerIds = [];
          function handleIter(result) {
            customerIds.push(result.value.id);
            expect(iter.return()).to.deep.equal({});
          }

          iter
            .next()
            .then(handleIter)
            .then(() => {
              resolve(customerIds);
            })
            .catch(reject);
        })
      ).to.eventually.deep.equal(realCustomerIds.slice(0, 1)));

    it('works when you call it sequentially', () =>
      expect(
        new Promise((resolve, reject) => {
          const iter = stripe.customers.list({limit: 3, email});

          const customerIds = [];
          function handleIter(result) {
            customerIds.push(result.value.id);
            if (customerIds.length < 7) {
              return iter.next().then(handleIter);
            }
          }
          iter
            .next()
            .then(handleIter)
            .then(() => {
              resolve(customerIds);
            })
            .catch(reject);
        })
      ).to.eventually.deep.equal(realCustomerIds.slice(0, LIMIT)));

    it('gives you the same result each time when you call it multiple times in parallel', () =>
      expect(
        new Promise((resolve, reject) => {
          const iter = stripe.customers.list({limit: 3, email});

          const customerIds = [];
          function handleIter(result) {
            customerIds.push(result.value.id);
          }

          Promise.all([
            iter.next().then(handleIter),
            iter
              .next()
              .then(handleIter)
              .then(() =>
                Promise.all([
                  iter.next().then(handleIter),
                  iter.next().then(handleIter),
                ])
              )
              .then(() =>
                Promise.all([
                  iter.next().then(handleIter),
                  iter.next().then(handleIter),
                ])
              )
              .then(() =>
                Promise.all([
                  iter.next().then(handleIter),
                  iter.next().then(handleIter),
                ])
              ),
          ])
            .then(() => {
              resolve(customerIds);
            })
            .catch(reject);
        })
      ).to.eventually.deep.equal(
        realCustomerIds.slice(0, 4).reduce((acc, x) => {
          acc.push(x);
          acc.push(x);
          return acc;
        }, [])
      ));
  });

  describe('autoPagingToArray', () => {
    it('can go to the end', () =>
      expect(
        new Promise((resolve, reject) => {
          stripe.customers
            .list({limit: 3, email})
            .autoPagingToArray({limit: TOTAL_OBJECTS + 1})
            .then((customers) => customers.map((customer) => customer.id))
            .then(resolve)
            .catch(reject);
        })
      ).to.eventually.deep.equal(realCustomerIds));

    it('returns a promise of an array', () =>
      expect(
        new Promise((resolve, reject) => {
          stripe.customers
            .list({limit: 3, email})
            .autoPagingToArray({limit: LIMIT})
            .then((customers) => customers.map((customer) => customer.id))
            .then(resolve)
            .catch(reject);
        })
      ).to.eventually.deep.equal(realCustomerIds.slice(0, LIMIT)));

    it('accepts an onDone callback, passing an array', () =>
      expect(
        new Promise((resolve, reject) => {
          function onDone(err, customers) {
            if (err) {
              reject(err);
            } else {
              resolve(customers.map((customer) => customer.id));
            }
          }

          stripe.customers
            .list({limit: 3, email})
            .autoPagingToArray({limit: LIMIT}, onDone);
        })
      ).to.eventually.deep.equal(realCustomerIds.slice(0, LIMIT)));

    it('enforces a `limit` arg', () =>
      expect(
        new Promise((resolve, reject) => {
          try {
            stripe.customers.list({limit: 3, email}).autoPagingToArray();
            reject(Error('Should have thrown.'));
          } catch (err) {
            resolve(err.message);
          }
        })
      ).to.eventually.equal(
        'You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.'
      ));

    it('caps the `limit` arg to a reasonable ceiling', () =>
      expect(
        new Promise((resolve, reject) => {
          try {
            stripe.customers
              .list({limit: 3, email})
              .autoPagingToArray({limit: 1000000});
            reject(Error('Should have thrown.'));
          } catch (err) {
            resolve(err.message);
          }
        })
      ).to.eventually.equal(
        'You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.'
      ));
  });

  describe('api compat edge cases', () => {
    it('lets you listen to the first request as its own promise, and separately each item, but only sends one request for the first page.', () =>
      expect(
        new Promise((resolve, reject) => {
          // Count requests: we want one for the first page (not two), and then one for the second page.
          let reqCount = 0;
          function onRequest() {
            reqCount += 1;
          }
          stripe.on('request', onRequest);

          const customerIds = [];
          const p = stripe.customers.list({email, limit: 4});
          Promise.all([
            p,
            p.autoPagingEach((customer) => {
              customerIds.push(customer.id);
            }),
          ])
            .then((results) => {
              stripe.off('request', onRequest);
              expect(reqCount).to.equal(2); // not 3.

              resolve({
                firstReq: results[0].data.map((customer) => customer.id),
                paginated: customerIds,
              });
            })
            .catch(reject);
        })
      ).to.eventually.deep.equal({
        firstReq: realCustomerIds.slice(0, 4),
        paginated: realCustomerIds,
      }));
  });
});
