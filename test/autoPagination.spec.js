'use strict';

/* eslint-disable callback-return */

const testUtils = require('../testUtils');
const StripeResource = require('../lib/StripeResource');

const makeAutoPaginationMethods = require('../lib/autoPagination')
  .makeAutoPaginationMethods;

const expect = require('chai').expect;

describe('auto pagination', function() {
  const testCase = (
    mockPaginationFn,
    {pages, limit, expectedIds, expectedParamsLog, initialArgs}
  ) => {
    const {paginator, paramsLog} = mockPaginationFn(pages, initialArgs);

    return expect(
      paginator.autoPagingToArray({limit}).then((result) => {
        return {
          ids: result.map((x) => x.id),
          paramsLog,
        };
      })
    ).to.eventually.deep.equal({
      ids: expectedIds,
      paramsLog: expectedParamsLog,
    });
  };

  describe('pagination logic using a mock paginator', () => {
    const mockPagination = (pages, initialArgs) => {
      let i = 1;
      const paramsLog = [];
      const spec = {
        method: 'GET',
        fullPath: '/v1/items',
      };

      const mockStripe = testUtils.getMockStripe(
        {},
        (_1, _2, path, _4, _5, _6, callback) => {
          paramsLog.push(path.slice(path.indexOf('?')));
          callback(
            null,
            Promise.resolve({
              data: pages[i].map((id) => ({id})),
              has_more: i < pages.length - 1,
            })
          );
          i += 1;
        }
      );
      const resource = new StripeResource(mockStripe);

      const paginator = makeAutoPaginationMethods(
        resource,
        initialArgs || {},
        spec,
        Promise.resolve({
          data: pages[0].map((id) => ({id})),
          has_more: pages.length > 1,
        })
      );
      return {paginator, paramsLog};
    };

    const ID_PAGES = [
      ['cus_1', 'cus_2', 'cus_3'],
      ['cus_4', 'cus_5', 'cus_6'],
      ['cus_7', 'cus_8'],
    ];

    // We can't use .flat() since this isn't supported in Node 10.
    const OBJECT_IDS = [].concat(...ID_PAGES);
    const TOTAL_OBJECTS = OBJECT_IDS.length;
    const LIMIT = TOTAL_OBJECTS - 1;

    if (LIMIT > TOTAL_OBJECTS) {
      throw new Error('LIMIT cannot be larger than TOTAL_OBJECT');
    }

    describe('callbacks', () => {
      it('lets you call `next()` to iterate and `next(false)` to break', () => {
        const {paginator} = mockPagination(ID_PAGES, {});

        return expect(
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

            paginator.autoPagingEach(onCustomer, onDone);
          })
        ).to.eventually.deep.equal(OBJECT_IDS.slice(0, LIMIT));
      });

      it('lets you ignore the second arg and `return false` to break', () => {
        const {paginator} = mockPagination(ID_PAGES, {});

        return expect(
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

            paginator.autoPagingEach(onCustomer, onDone);
          })
        ).to.eventually.deep.equal(OBJECT_IDS.slice(0, LIMIT));
      });

      it('lets you ignore the second arg and return a Promise which returns `false` to break', () => {
        const {paginator} = mockPagination(ID_PAGES, {});

        return expect(
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

            paginator.autoPagingEach(onCustomer, onDone);
          })
        ).to.eventually.deep.equal(OBJECT_IDS.slice(0, LIMIT));
      });

      it('can use a promise instead of a callback for onDone', () => {
        const {paginator} = mockPagination(ID_PAGES, {});

        return expect(
          new Promise((resolve, reject) => {
            const customerIds = [];
            function onCustomer(customer) {
              customerIds.push(customer.id);
            }
            function onDone() {
              resolve(customerIds);
            }

            paginator
              .autoPagingEach(onCustomer)
              .then(onDone)
              .catch(reject);
          })
        ).to.eventually.deep.equal(OBJECT_IDS);
      });

      it('handles the end of a list properly when the last page is full', () => {
        const {paginator} = mockPagination(
          [
            ['cus_1', 'cus_2'],
            ['cus_3', 'cus_4'],
            ['cus_5', 'cus_6'],
            ['cus_7', 'cus_8'],
          ],
          {}
        );

        return expect(
          new Promise((resolve, reject) => {
            const customerIds = [];
            paginator
              .autoPagingEach((customer) => {
                customerIds.push(customer.id);
              })
              .catch(reject)
              .then(() => {
                resolve(customerIds);
              });
          })
        ).to.eventually.deep.equal(OBJECT_IDS);
      });

      it('handles the end of a list properly when the last page is not full', () => {
        const {paginator} = mockPagination(
          [
            ['cus_1', 'cus_2', 'cus_3'],
            ['cus_4', 'cus_5', 'cus_6'],
            ['cus_7', 'cus_8'],
          ],
          {}
        );
        return expect(
          new Promise((resolve, reject) => {
            const customerIds = [];
            return paginator
              .autoPagingEach((customer) => {
                customerIds.push(customer.id);
              })
              .catch(reject)
              .then(() => {
                resolve(customerIds);
              });
          })
        ).to.eventually.deep.equal(OBJECT_IDS);
      });

      it('handles a list which is shorter than the page size properly', () => {
        const {paginator} = mockPagination([OBJECT_IDS], {
          limit: TOTAL_OBJECTS + 2,
        });

        return expect(
          new Promise((resolve, reject) => {
            const customerIds = [];
            return paginator
              .autoPagingEach((customer) => {
                customerIds.push(customer.id);
              })
              .catch(reject)
              .then(() => {
                resolve(customerIds);
              });
          })
        ).to.eventually.deep.equal(OBJECT_IDS);
      });

      it('handles errors after the first page correctly (callback)', () => {
        const {paginator} = mockPagination(ID_PAGES, {});

        return expect(
          new Promise((resolve, reject) => {
            let i = 0;
            function onCustomer() {
              i += 1;
              if (i > 4) {
                throw Error('Simulated error');
              }
            }
            return paginator.autoPagingEach(onCustomer, (err) => {
              if (err) {
                resolve(err.message);
              } else {
                reject(Error('Expected an error, did not get one.'));
              }
            });
          })
        ).to.eventually.deep.equal('Simulated error');
      });

      it('handles errors after the first page correctly (promise)', () => {
        const {paginator} = mockPagination(ID_PAGES, {});

        return expect(
          new Promise((resolve, reject) => {
            let i = 0;
            function onCustomer() {
              i += 1;
              if (i > 4) {
                throw Error('Simulated error');
              }
            }
            return paginator
              .autoPagingEach(onCustomer)
              .then(() => {
                reject(Error('Expected an error, did not get one.'));
              })
              .catch((err) => {
                resolve(err.message);
              });
          })
        ).to.eventually.deep.equal('Simulated error');
      });
    });

    describe('async iterators', () => {
      if (testUtils.envSupportsForAwait()) {
        // `for await` throws a syntax error everywhere but node 10,
        // so we must conditionally require it.
        const forAwaitUntil = require('../testUtils/forAwait.node10')
          .forAwaitUntil;

        it('works with `for await` when that feature exists (user break)', () => {
          const {paginator} = mockPagination(ID_PAGES, {});

          return expect(
            new Promise((resolve, reject) => {
              forAwaitUntil(paginator, LIMIT)
                .then((customers) => {
                  resolve(customers.map((customer) => customer.id));
                })
                .catch(reject);
            })
          ).to.eventually.deep.equal(OBJECT_IDS.slice(0, LIMIT));
        });

        it('works with `for await` when that feature exists (end of list)', () => {
          const {paginator} = mockPagination(ID_PAGES, {});

          return expect(
            new Promise((resolve, reject) => {
              forAwaitUntil(paginator, TOTAL_OBJECTS + 1)
                .then((customers) => {
                  resolve(customers.map((customer) => customer.id));
                })
                .catch(reject);
            })
          ).to.eventually.deep.equal(OBJECT_IDS);
        });
      }

      const awaitUntil = require('../testUtils/await.node7').awaitUntil;
      it('works with `await` and a while loop when await exists', () => {
        const {paginator} = mockPagination(ID_PAGES, {});

        return expect(
          new Promise((resolve, reject) => {
            awaitUntil(paginator, LIMIT)
              .then((customers) => {
                resolve(customers.map((customer) => customer.id));
              })
              .catch(reject);
          })
        ).to.eventually.deep.equal(OBJECT_IDS.slice(0, LIMIT));
      });

      it('returns an empty object from .return() so that `break;` works in for-await', () => {
        const {paginator} = mockPagination(ID_PAGES, {});

        return expect(
          new Promise((resolve, reject) => {
            const customerIds = [];
            function handleIter(result) {
              customerIds.push(result.value.id);
              expect(paginator.return()).to.deep.equal({});
            }

            paginator
              .next()
              .then(handleIter)
              .then(() => {
                resolve(customerIds);
              })
              .catch(reject);
          })
        ).to.eventually.deep.equal(OBJECT_IDS.slice(0, 1));
      });

      it('works when you call it sequentially', () => {
        const {paginator} = mockPagination(ID_PAGES, {});

        return expect(
          new Promise((resolve, reject) => {
            const customerIds = [];
            function handleIter(result) {
              customerIds.push(result.value.id);
              if (customerIds.length < 7) {
                return paginator.next().then(handleIter);
              }
            }
            paginator
              .next()
              .then(handleIter)
              .then(() => {
                resolve(customerIds);
              })
              .catch(reject);
          })
        ).to.eventually.deep.equal(OBJECT_IDS.slice(0, LIMIT));
      });

      it('gives you the same result each time when you call it multiple times in parallel', () => {
        const {paginator} = mockPagination(ID_PAGES, {});

        expect(
          new Promise((resolve, reject) => {
            const customerIds = [];
            function handleIter(result) {
              customerIds.push(result.value.id);
            }

            Promise.all([
              paginator.next().then(handleIter),
              iter
                .next()
                .then(handleIter)
                .then(() =>
                  Promise.all([
                    paginator.next().then(handleIter),
                    paginator.next().then(handleIter),
                  ])
                )
                .then(() =>
                  Promise.all([
                    paginator.next().then(handleIter),
                    paginator.next().then(handleIter),
                  ])
                )
                .then(() =>
                  Promise.all([
                    paginator.next().then(handleIter),
                    paginator.next().then(handleIter),
                  ])
                ),
            ])
              .then(() => {
                resolve(customerIds);
              })
              .catch(reject);
          })
        ).to.eventually.deep.equal(
          OBJECT_IDS.slice(0, 4).reduce((acc, x) => {
            acc.push(x);
            acc.push(x);
            return acc;
          }, [])
        );
      });
    });

    describe('autoPagingToArray', () => {
      it('can go to the end', () => {
        const {paginator} = mockPagination(ID_PAGES, {});

        return expect(
          new Promise((resolve, reject) => {
            paginator
              .autoPagingToArray({limit: TOTAL_OBJECTS + 1})
              .then((customers) => customers.map((customer) => customer.id))
              .then(resolve)
              .catch(reject);
          })
        ).to.eventually.deep.equal(OBJECT_IDS);
      });

      it('returns a promise of an array', () => {
        const {paginator} = mockPagination(ID_PAGES, {});

        return expect(
          new Promise((resolve, reject) => {
            paginator
              .autoPagingToArray({limit: LIMIT})
              .then((customers) => customers.map((customer) => customer.id))
              .then(resolve)
              .catch(reject);
          })
        ).to.eventually.deep.equal(OBJECT_IDS.slice(0, LIMIT));
      });

      it('accepts an onDone callback, passing an array', () => {
        const {paginator} = mockPagination(ID_PAGES, {});

        return expect(
          new Promise((resolve, reject) => {
            function onDone(err, customers) {
              if (err) {
                reject(err);
              } else {
                resolve(customers.map((customer) => customer.id));
              }
            }

            paginator.autoPagingToArray({limit: LIMIT}, onDone);
          })
        ).to.eventually.deep.equal(OBJECT_IDS.slice(0, LIMIT));
      });
    });

    describe('foward pagination', () => {
      it('paginates forwards through a page', () => {
        return testCase(mockPagination, {
          pages: [
            [1, 2],
            [3, 4],
          ],
          limit: 10,
          expectedIds: [1, 2, 3, 4],
          expectedParamsLog: ['?starting_after=2'],
        });
      });

      it('paginates forwards through un-even sized pages', () => {
        return testCase(mockPagination, {
          pages: [[1, 2], [3, 4], [5]],
          limit: 10,
          expectedIds: [1, 2, 3, 4, 5],
          expectedParamsLog: ['?starting_after=2', '?starting_after=4'],
        });
      });

      it('respects limit even when paginating', () => {
        return testCase(mockPagination, {
          pages: [
            [1, 2],
            [3, 4],
            [5, 6],
          ],
          limit: 5,
          expectedIds: [1, 2, 3, 4, 5],
          expectedParamsLog: ['?starting_after=2', '?starting_after=4'],
        });
      });

      it('paginates through multiple full pages', () => {
        return testCase(mockPagination, {
          pages: [
            [1, 2],
            [3, 4],
            [5, 6],
            [7, 8],
            [9, 10],
          ],
          limit: 10,
          expectedIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          expectedParamsLog: [
            '?starting_after=2',
            '?starting_after=4',
            '?starting_after=6',
            '?starting_after=8',
          ],
        });
      });
    });

    describe('backwards pagination', () => {
      it('paginates forwards through a page', () => {
        return testCase(mockPagination, {
          pages: [
            [-2, -1],
            [-4, -3],
          ],
          limit: 5,
          expectedIds: [-1, -2, -3, -4],
          expectedParamsLog: ['?ending_before=-2'],
          initialArgs: [{ending_before: '0'}],
        });
      });

      it('paginates backwards through un-even sized pages ', () => {
        return testCase(mockPagination, {
          pages: [[-2, -1], [-4, -3], [-5]],
          limit: 5,
          expectedIds: [-1, -2, -3, -4, -5],
          expectedParamsLog: ['?ending_before=-2', '?ending_before=-4'],
          initialArgs: [{ending_before: '0'}],
        });
      });

      it('respects limit', () => {
        return testCase(mockPagination, {
          pages: [
            [-2, -1],
            [-4, -3],
            [-6, -5],
          ],
          limit: 5,
          expectedIds: [-1, -2, -3, -4, -5],
          expectedParamsLog: ['?ending_before=-2', '?ending_before=-4'],
          initialArgs: [{ending_before: '0'}],
        });
      });
    });
  });

  describe('pagination logic using a mock search paginator', () => {
    const mockPagination = (pages, initialArgs) => {
      let i = 1;
      const paramsLog = [];
      const spec = {
        method: 'GET',
        methodType: 'search',
      };

      const addNextPage = (props) => {
        const nextPageProperties = {
          next_page: props.has_more
            ? `${props.data[props.data.length - 1].id}-encoded`
            : null,
        };
        return {...props, ...nextPageProperties};
      };

      const mockStripe = testUtils.getMockStripe(
        {},
        (_1, _2, path, _4, _5, _6, callback) => {
          paramsLog.push(path.slice(path.indexOf('?')));

          callback(
            null,
            Promise.resolve(
              addNextPage({
                data: pages[i].map((id) => ({id})),
                has_more: i < pages.length - 1,
              })
            )
          );
          i += 1;
        }
      );
      const resource = new StripeResource(mockStripe);

      const paginator = makeAutoPaginationMethods(
        resource,
        initialArgs || {},
        spec,
        Promise.resolve(
          addNextPage({
            data: pages[0].map((id) => ({id})),
            has_more: pages.length > 1,
          })
        )
      );
      return {paginator, paramsLog};
    };

    it('paginates forwards through a page', () => {
      return testCase(mockPagination, {
        pages: [
          [1, 2],
          [3, 4],
        ],
        limit: 10,
        expectedIds: [1, 2, 3, 4],
        expectedParamsLog: ['?page=2-encoded'],
      });
    });

    it('paginates forwards through uneven-sized pages', () => {
      return testCase(mockPagination, {
        pages: [[1, 2], [3, 4], [5]],
        limit: 10,
        expectedIds: [1, 2, 3, 4, 5],
        expectedParamsLog: ['?page=2-encoded', '?page=4-encoded'],
      });
    });

    it('respects limit even when paginating', () => {
      return testCase(mockPagination, {
        pages: [
          [1, 2],
          [3, 4],
          [5, 6],
        ],
        limit: 5,
        expectedIds: [1, 2, 3, 4, 5],
        expectedParamsLog: ['?page=2-encoded', '?page=4-encoded'],
      });
    });

    it('paginates through multiple full pages', () => {
      return testCase(mockPagination, {
        pages: [
          [1, 2],
          [3, 4],
          [5, 6],
          [7, 8],
          [9, 10],
        ],
        limit: 10,
        expectedIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        expectedParamsLog: [
          '?page=2-encoded',
          '?page=4-encoded',
          '?page=6-encoded',
          '?page=8-encoded',
        ],
      });
    });
  });
});
