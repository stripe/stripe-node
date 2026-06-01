// @ts-nocheck
/**
 * Tests for three bugs fixed in this PR:
 *
 *  Bug 1 – V2ListIterator: no concurrency guard; parallel .next() calls
 *           could issue duplicate page-fetch requests.
 *           Closes #2730
 *
 *  Bug 2 – V2ListIterator: silent truncation when an intermediate page
 *           has an empty data array.
 *           Closes #2731
 *
 *  Bug 3 – parseHttpHeaderAsNumber: returned NaN for absent or
 *           non-numeric headers instead of null.
 *           Closes #2732
 */

import {expect} from 'chai';
import {makeAutoPaginationMethods} from '../src/autoPagination.js';
import {StripeResource} from '../src/StripeResource.js';
import {parseHttpHeaderAsNumber} from '../src/utils.js';
import {getMockStripe} from './testUtils.js';

// ---------------------------------------------------------------------------
// Bug 3 — parseHttpHeaderAsNumber returns null for absent/invalid headers
// ---------------------------------------------------------------------------
describe('Bug fix #2732 – parseHttpHeaderAsNumber handles missing/invalid headers', () => {
  it('returns null for undefined header', () => {
    expect(parseHttpHeaderAsNumber(undefined)).to.equal(null);
  });

  it('returns null for null header', () => {
    expect(parseHttpHeaderAsNumber(null)).to.equal(null);
  });

  it('returns null for a non-numeric string', () => {
    expect(parseHttpHeaderAsNumber('not-a-number')).to.equal(null);
  });

  it('returns null for an empty string', () => {
    expect(parseHttpHeaderAsNumber('')).to.equal(null);
  });

  it('parses a valid numeric string', () => {
    expect(parseHttpHeaderAsNumber('30')).to.equal(30);
  });

  it('parses a numeric value inside an array (multi-value header)', () => {
    expect(parseHttpHeaderAsNumber(['45'])).to.equal(45);
  });

  it('returns null for an array containing a non-numeric string', () => {
    expect(parseHttpHeaderAsNumber(['bad'])).to.equal(null);
  });
});

// ---------------------------------------------------------------------------
// Helper shared by Bug 1 and Bug 2 tests
// ---------------------------------------------------------------------------
function makeMockV2Paginator(
  pages: Array<{data: number[]; next_page_url?: string | null}>
) {
  let callIndex = 1;

  const mockStripe = getMockStripe(
    {},
    (_1, _2, _path, _4, _5, _6, _7, callback) => {
      const page = pages[callIndex++];
      callback(
        null,
        Promise.resolve({
          data: page.data.map((id) => ({id})),
          next_page_url: page.next_page_url ?? null,
        })
      );
    }
  );

  const resource = new StripeResource(mockStripe);

  const paginator = makeAutoPaginationMethods(
    resource,
    {},
    undefined,
    'GET',
    '/v2/items',
    {methodType: 'list'},
    Promise.resolve({
      data: pages[0].data.map((id) => ({id})),
      next_page_url: pages[0].next_page_url ?? null,
    })
  );

  return paginator;
}

// ---------------------------------------------------------------------------
// Bug 1 — V2ListIterator concurrency guard (#2730)
// ---------------------------------------------------------------------------
describe('Bug fix #2730 – V2ListIterator has a concurrency guard', () => {
  it('returns the same promise for parallel .next() calls', async () => {
    const paginator = makeMockV2Paginator([
      {data: [1, 2], next_page_url: '/v2/items?page=p2'},
      {data: [3, 4]},
    ]);

    const p1 = paginator.next();
    const p2 = paginator.next();

    // Both must be the SAME promise object while the first is in-flight
    expect(p1).to.equal(p2);

    const result = await p1;
    expect(result.done).to.equal(false);
    expect(result.value.id).to.equal(1);
  });

  it('yields every item exactly once with no duplicates', async () => {
    const paginator = makeMockV2Paginator([
      {data: [10, 20, 30], next_page_url: '/v2/items?page=p2'},
      {data: [40, 50]},
    ]);

    const items = await paginator.autoPagingToArray({limit: 100});
    const ids = items.map((i) => i.id);

    expect(ids).to.deep.equal([10, 20, 30, 40, 50]);
    expect(ids.length).to.equal(new Set(ids).size);
  });
});

// ---------------------------------------------------------------------------
// Bug 2 — V2ListIterator empty intermediate page (#2731)
// ---------------------------------------------------------------------------
describe('Bug fix #2731 – V2ListIterator continues past empty intermediate pages', () => {
  it('skips a single empty intermediate page', async () => {
    const paginator = makeMockV2Paginator([
      {data: [1, 2], next_page_url: '/v2/items?page=p2'},
      {data: [], next_page_url: '/v2/items?page=p3'},
      {data: [3, 4]},
    ]);

    const items = await paginator.autoPagingToArray({limit: 100});
    expect(items.map((i) => i.id)).to.deep.equal([1, 2, 3, 4]);
  });

  it('skips multiple consecutive empty intermediate pages', async () => {
    const paginator = makeMockV2Paginator([
      {data: [1], next_page_url: '/v2/items?page=p2'},
      {data: [], next_page_url: '/v2/items?page=p3'},
      {data: [], next_page_url: '/v2/items?page=p4'},
      {data: [2, 3]},
    ]);

    const items = await paginator.autoPagingToArray({limit: 100});
    expect(items.map((i) => i.id)).to.deep.equal([1, 2, 3]);
  });

  it('handles an empty final page with no next_page_url', async () => {
    const paginator = makeMockV2Paginator([
      {data: [1, 2], next_page_url: '/v2/items?page=p2'},
      {data: []},
    ]);

    const items = await paginator.autoPagingToArray({limit: 100});
    expect(items.map((i) => i.id)).to.deep.equal([1, 2]);
  });

  it('returns an empty list when the first page is empty', async () => {
    const paginator = makeMockV2Paginator([{data: []}]);
    const items = await paginator.autoPagingToArray({limit: 100});
    expect(items).to.deep.equal([]);
  });
});
