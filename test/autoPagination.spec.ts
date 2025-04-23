// @ts-nocheck
/* eslint-disable callback-return */

import {expect} from 'chai';
import {makeAutoPaginationMethods} from '../src/autoPagination.js';
import {StripeResource} from '../src/StripeResource.js';
import {getMockStripe} from './testUtils.js';
import {MethodSpec} from '../src/Types.js';

describe('auto pagination', () => {
  const testCase = (mockPaginationFn) => ({
    pages,
    limit,
    expectedIds,
    expectedParamsLog,
    initialArgs,
  }) => {
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
  describe('V1 list response pagination', () => {
    const mockPaginationV1List = (pages, initialArgs) => {
      let i = 1;
      const paramsLog = [];
      const spec = {
        method: 'GET',
        fullPath: '/v1/items',
        methodType: 'list',
      };

      const mockStripe = getMockStripe(
        {},
        (_1, _2, path, _4, _5, _6, _7, callback) => {
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
    const testCaseV1List = testCase(mockPaginationV1List);

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
        const {paginator} = mockPaginationV1List(ID_PAGES, {});

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
      it('next() returns appropriately-shaped iterator results', async () => {
        const {paginator} = mockPaginationV1List([['a', 'b'], ['c']], {});
        expect(await paginator.next()).to.deep.equal({
          value: {id: 'a'},
          done: false,
        });
        expect(await paginator.next()).to.deep.equal({
          value: {id: 'b'},
          done: false,
        });
        expect(await paginator.next()).to.deep.equal({
          value: {id: 'c'},
          done: false,
        });
        expect(await paginator.next()).to.deep.equal({
          done: true,
          value: undefined,
        });
      });

      it('lets you ignore the second arg and `return false` to break', () => {
        const {paginator} = mockPaginationV1List(ID_PAGES, {});

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
        const {paginator} = mockPaginationV1List(ID_PAGES, {});

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
        const {paginator} = mockPaginationV1List(ID_PAGES, {});

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
        const {paginator} = mockPaginationV1List(
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
        const {paginator} = mockPaginationV1List(
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
        const {paginator} = mockPaginationV1List([OBJECT_IDS], {
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
        const {paginator} = mockPaginationV1List(ID_PAGES, {});

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
        const {paginator} = mockPaginationV1List(ID_PAGES, {});

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
      async function awaitUntil(iterator, limit) {
        const items = [];
        // eslint-disable-next-line no-constant-condition
        while (true) {
          // eslint-disable-next-line no-await-in-loop
          const {value, done} = await iterator.next();
          if (done) {
            break;
          }
          items.push(value);
          if (items.length === limit) {
            break;
          }
          if (items.length > limit) {
            throw Error('Kept iterating after break.');
          }
        }
        return items;
      }

      async function forAwaitUntil(iterator, limit) {
        const items = [];
        for await (const item of iterator) {
          items.push(item);
          if (items.length === limit) {
            break;
          }
          if (items.length > limit) {
            throw Error('Kept iterating after break.');
          }
        }
        return items;
      }

      it('works with `for await` when that feature exists (user break)', () => {
        const {paginator} = mockPaginationV1List(ID_PAGES, {});

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
        const {paginator} = mockPaginationV1List(ID_PAGES, {});

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

      it('works with `await` and a while loop when await exists', () => {
        const {paginator} = mockPaginationV1List(ID_PAGES, {});

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
        const {paginator} = mockPaginationV1List(ID_PAGES, {});

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
        const {paginator} = mockPaginationV1List(ID_PAGES, {});

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
        const {paginator} = mockPaginationV1List(ID_PAGES, {});

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
        const {paginator} = mockPaginationV1List(ID_PAGES, {});

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
        const {paginator} = mockPaginationV1List(ID_PAGES, {});

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
        const {paginator} = mockPaginationV1List(ID_PAGES, {});

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

    describe('forward pagination', () => {
      it('paginates forwards through a page', () => {
        return testCaseV1List({
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
        return testCaseV1List({
          pages: [[1, 2], [3, 4], [5]],
          limit: 10,
          expectedIds: [1, 2, 3, 4, 5],
          expectedParamsLog: ['?starting_after=2', '?starting_after=4'],
        });
      });

      it('respects limit even when paginating', () => {
        return testCaseV1List({
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
        return testCaseV1List({
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
        return testCaseV1List({
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
        return testCaseV1List({
          pages: [[-2, -1], [-4, -3], [-5]],
          limit: 5,
          expectedIds: [-1, -2, -3, -4, -5],
          expectedParamsLog: ['?ending_before=-2', '?ending_before=-4'],
          initialArgs: [{ending_before: '0'}],
        });
      });

      it('respects limit', () => {
        return testCaseV1List({
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

  describe('V1 search result pagination', () => {
    const mockPaginationV1Search = (pages, initialArgs) => {
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

      const mockStripe = getMockStripe(
        {},
        (_1, _2, path, _4, _5, _6, _7, callback) => {
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
    const testCaseV1Search = testCase(mockPaginationV1Search);
    it('paginates forwards through a page', () => {
      return testCaseV1Search({
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
      return testCaseV1Search({
        pages: [[1, 2], [3, 4], [5]],
        limit: 10,
        expectedIds: [1, 2, 3, 4, 5],
        expectedParamsLog: ['?page=2-encoded', '?page=4-encoded'],
      });
    });

    it('respects limit even when paginating', () => {
      return testCaseV1Search({
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
      return testCaseV1Search({
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
  describe('V2 list pagination', () => {
    const mockPaginationV2List = (pages, initialArgs) => {
      let i = 1;
      const paramsLog = [];
      const spec = {
        method: 'GET',
        fullPath: '/v2/items',
        methodType: 'list',
      };

      const mockStripe = getMockStripe(
        {},
        (_1, _2, path, _4, _5, _6, _7, callback) => {
          paramsLog.push(path.slice(path.indexOf('?')));
          callback(
            null,
            Promise.resolve({
              data: pages[i].ids.map((id) => ({id})),
              next_page_url: pages[i].next_page_url,
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
          data: pages[0].ids.map((id) => ({id})),
          next_page_url: pages[0].next_page_url,
        })
      );
      return {paginator, paramsLog};
    };

    const testCaseV2List = testCase(mockPaginationV2List);
    it('paginates forwards through a page', () => {
      return testCaseV2List({
        pages: [
          {ids: [1, 2], next_page_url: '/v2/items?page=foo'},
          {ids: [3, 4]},
        ],
        limit: 10,
        expectedIds: [1, 2, 3, 4],
        expectedParamsLog: ['?page=foo'],
      });
    });

    it('paginates forwards through uneven-sized pages', () => {
      return testCaseV2List({
        pages: [
          {ids: [1, 2], next_page_url: '/v2/items?page=foo'},
          {ids: [3, 4], next_page_url: '/v2/items?page=bar'},
          {ids: [5]},
        ],
        limit: 10,
        expectedIds: [1, 2, 3, 4, 5],
        expectedParamsLog: ['?page=foo', '?page=bar'],
      });
    });

    it('respects limit even when paginating', () => {
      return testCaseV2List({
        pages: [
          {ids: [1, 2], next_page_url: '/v2/items?limit=5&page=a'},
          {ids: [3, 4], next_page_url: '/v2/items?limit=5&page=b'},
          {ids: [5, 6]},
        ],
        limit: 5,
        expectedIds: [1, 2, 3, 4, 5],
        expectedParamsLog: ['?limit=5&page=a', '?limit=5&page=b'],
      });
    });

    it('paginates through multiple full pages', () => {
      return testCaseV2List({
        pages: [
          {ids: [1, 2], next_page_url: '/v2/items?limit=10&page=wibble'},
          {ids: [3, 4], next_page_url: '/v2/items?limit=10&page=wobble'},
          {ids: [5, 6], next_page_url: '/v2/items?limit=10&page=weeble'},
          {ids: [7, 8], next_page_url: '/v2/items?limit=10&page=blubble'},
          {ids: [9, 10]},
        ],
        limit: 10,
        expectedIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        expectedParamsLog: [
          '?limit=10&page=wibble',
          '?limit=10&page=wobble',
          '?limit=10&page=weeble',
          '?limit=10&page=blubble',
        ],
      });
    });
  });
});

export {};
