import {MethodSpec, RequestArgs, StripeResourceObject} from './Types.js';
import {
  callbackifyPromiseWithTimeout,
  getDataFromArgs,
  getAPIMode,
} from './utils.js';

type PromiseCache = {
  currentPromise: Promise<any> | undefined | null;
};
type IterationDoneCallback = () => void;
type IterationItemCallback<T> = (
  item: T,
  next: any
) => void | boolean | Promise<void | boolean>;
type AutoPagingEach<T> = (
  onItem: IterationItemCallback<T>,
  onDone?: IterationDoneCallback
) => Promise<void>;

type AutoPagingToArrayOptions = {
  limit?: number;
};
type AutoPagingToArray<T> = (
  opts: AutoPagingToArrayOptions,
  onDone: IterationDoneCallback
) => Promise<Array<T>>;

type AutoPaginationMethods<T> = {
  autoPagingEach: AutoPagingEach<T>;
  autoPagingToArray: AutoPagingToArray<T>;
  next: () => Promise<IteratorResult<T>>;
  return: () => void;
};
type PageResult<T> = {
  data: Array<T>;
  has_more: boolean;
  next_page?: string | null;
  next_page_url?: string | null;
};
class V1Iterator<T> implements AsyncIterator<T> {
  private index: number;
  private pagePromise: Promise<PageResult<T>>;
  private promiseCache: PromiseCache;
  protected requestArgs: RequestArgs;
  protected spec: MethodSpec;
  protected stripeResource: StripeResourceObject;
  constructor(
    firstPagePromise: Promise<PageResult<T>>,
    requestArgs: RequestArgs,
    spec: MethodSpec,
    stripeResource: StripeResourceObject
  ) {
    this.index = 0;
    this.pagePromise = firstPagePromise;
    this.promiseCache = {currentPromise: null};
    this.requestArgs = requestArgs;
    this.spec = spec;
    this.stripeResource = stripeResource;
  }

  async iterate(pageResult: PageResult<T>): Promise<IteratorResult<T>> {
    if (
      !(
        pageResult &&
        pageResult.data &&
        typeof pageResult.data.length === 'number'
      )
    ) {
      throw Error(
        'Unexpected: Stripe API response does not have a well-formed `data` array.'
      );
    }

    const reverseIteration = isReverseIteration(this.requestArgs);
    if (this.index < pageResult.data.length) {
      const idx = reverseIteration
        ? pageResult.data.length - 1 - this.index
        : this.index;
      const value = pageResult.data[idx];
      this.index += 1;

      return {value, done: false};
    } else if (pageResult.has_more) {
      // Reset counter, request next page, and recurse.
      this.index = 0;
      this.pagePromise = this.getNextPage(pageResult);
      const nextPageResult = await this.pagePromise;
      return this.iterate(nextPageResult);
    }
    return {done: true, value: undefined};
  }

  /** @abstract */
  getNextPage(_pageResult: PageResult<T>): Promise<PageResult<T>> {
    throw new Error('Unimplemented');
  }

  private async _next(): Promise<IteratorResult<T>> {
    return this.iterate(await this.pagePromise);
  }

  next(): Promise<IteratorResult<T>> {
    /**
     * If a user calls `.next()` multiple times in parallel,
     * return the same result until something has resolved
     * to prevent page-turning race conditions.
     */
    if (this.promiseCache.currentPromise) {
      return this.promiseCache.currentPromise;
    }

    const nextPromise = (async (): Promise<IteratorResult<T>> => {
      const ret = await this._next();
      this.promiseCache.currentPromise = null;
      return ret;
    })();

    this.promiseCache.currentPromise = nextPromise;

    return nextPromise;
  }
}

class V1ListIterator<T extends {id: string}> extends V1Iterator<T> {
  getNextPage(pageResult: PageResult<T>): Promise<PageResult<T>> {
    const reverseIteration = isReverseIteration(this.requestArgs);
    const lastId = getLastId(pageResult, reverseIteration);
    return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
      [reverseIteration ? 'ending_before' : 'starting_after']: lastId,
    });
  }
}

class V1SearchIterator<T> extends V1Iterator<T> {
  getNextPage(pageResult: PageResult<T>): Promise<PageResult<T>> {
    if (!pageResult.next_page) {
      throw Error(
        'Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true.'
      );
    }
    return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
      page: pageResult.next_page,
    });
  }
}

class V2ListIterator<T> implements AsyncIterator<T> {
  private currentPageIterator: Promise<Iterator<T>>;
  private nextPageUrl: Promise<string | null>;
  private requestArgs: RequestArgs;
  private spec: MethodSpec;
  private stripeResource: StripeResourceObject;
  constructor(
    firstPagePromise: Promise<PageResult<T>>,
    requestArgs: RequestArgs,
    spec: MethodSpec,
    stripeResource: StripeResourceObject
  ) {
    this.currentPageIterator = (async (): Promise<Iterator<T>> => {
      const page = await firstPagePromise;
      return page.data[Symbol.iterator]();
    })();

    this.nextPageUrl = (async (): Promise<string | null> => {
      const page = await firstPagePromise;
      return page.next_page_url || null;
    })();

    this.requestArgs = requestArgs;
    this.spec = spec;
    this.stripeResource = stripeResource;
  }
  private async turnPage(): Promise<Iterator<T> | null> {
    const nextPageUrl = await this.nextPageUrl;
    if (!nextPageUrl) return null;
    this.spec.fullPath = nextPageUrl;
    const page = await this.stripeResource._makeRequest([], this.spec, {});
    this.nextPageUrl = Promise.resolve(page.next_page_url);
    this.currentPageIterator = Promise.resolve(page.data[Symbol.iterator]());
    return this.currentPageIterator;
  }
  async next(): Promise<IteratorResult<T>> {
    {
      const result = (await this.currentPageIterator).next();
      if (!result.done) return {done: false, value: result.value};
    }
    const nextPageIterator = await this.turnPage();
    if (!nextPageIterator) {
      return {done: true, value: undefined};
    }
    const result = nextPageIterator.next();
    if (!result.done) return {done: false, value: result.value};
    return {done: true, value: undefined};
  }
}

export const makeAutoPaginationMethods = <
  TMethodSpec extends MethodSpec,
  TItem extends {id: string}
>(
  stripeResource: StripeResourceObject,
  requestArgs: RequestArgs,
  spec: TMethodSpec,
  firstPagePromise: Promise<PageResult<TItem>>
): AutoPaginationMethods<TItem> | null => {
  const apiMode = getAPIMode(spec.fullPath || spec.path);
  if (apiMode !== 'v2' && spec.methodType === 'search') {
    return makeAutoPaginationMethodsFromIterator(
      new V1SearchIterator(firstPagePromise, requestArgs, spec, stripeResource)
    );
  }
  if (apiMode !== 'v2' && spec.methodType === 'list') {
    return makeAutoPaginationMethodsFromIterator(
      new V1ListIterator(firstPagePromise, requestArgs, spec, stripeResource)
    );
  }
  if (apiMode === 'v2' && spec.methodType === 'list') {
    return makeAutoPaginationMethodsFromIterator(
      new V2ListIterator(firstPagePromise, requestArgs, spec, stripeResource)
    );
  }
  return null;
};

const makeAutoPaginationMethodsFromIterator = <T>(
  iterator: AsyncIterator<T>
): AutoPaginationMethods<T> => {
  const autoPagingEach = makeAutoPagingEach<T>((...args) =>
    iterator.next(...args)
  );
  const autoPagingToArray = makeAutoPagingToArray(autoPagingEach);

  const autoPaginationMethods: AutoPaginationMethods<T> = {
    autoPagingEach,
    autoPagingToArray,

    // Async iterator functions:
    next: () => iterator.next(),
    return: (): any => {
      // This is required for `break`.
      return {};
    },
    [getAsyncIteratorSymbol()]: () => {
      return autoPaginationMethods;
    },
  };
  return autoPaginationMethods;
};

/**
 * ----------------
 * Private Helpers:
 * ----------------
 */

function getAsyncIteratorSymbol(): symbol | string {
  if (typeof Symbol !== 'undefined' && Symbol.asyncIterator) {
    return Symbol.asyncIterator;
  }
  // Follow the convention from libraries like iterall: https://github.com/leebyron/iterall#asynciterator-1
  return '@@asyncIterator';
}

function getDoneCallback(args: Array<any>): IterationDoneCallback | null {
  if (args.length < 2) {
    return null;
  }
  const onDone = args[1];
  if (typeof onDone !== 'function') {
    throw Error(
      `The second argument to autoPagingEach, if present, must be a callback function; received ${typeof onDone}`
    );
  }
  return onDone;
}

/**
 * We allow four forms of the `onItem` callback (the middle two being equivalent),
 *
 *   1. `.autoPagingEach((item) => { doSomething(item); return false; });`
 *   2. `.autoPagingEach(async (item) => { await doSomething(item); return false; });`
 *   3. `.autoPagingEach((item) => doSomething(item).then(() => false));`
 *   4. `.autoPagingEach((item, next) => { doSomething(item); next(false); });`
 *
 * In addition to standard validation, this helper
 * coalesces the former forms into the latter form.
 */
function getItemCallback<T>(
  args: Array<any>
): IterationItemCallback<T> | undefined {
  if (args.length === 0) {
    return undefined;
  }
  const onItem = args[0];
  if (typeof onItem !== 'function') {
    throw Error(
      `The first argument to autoPagingEach, if present, must be a callback function; received ${typeof onItem}`
    );
  }

  // 4. `.autoPagingEach((item, next) => { doSomething(item); next(false); });`
  if (onItem.length === 2) {
    return onItem;
  }

  if (onItem.length > 2) {
    throw Error(
      `The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${onItem}`
    );
  }

  // This magically handles all three of these usecases (the latter two being functionally identical):
  // 1. `.autoPagingEach((item) => { doSomething(item); return false; });`
  // 2. `.autoPagingEach(async (item) => { await doSomething(item); return false; });`
  // 3. `.autoPagingEach((item) => doSomething(item).then(() => false));`
  return function _onItem(item, next): void {
    const shouldContinue = onItem(item);
    next(shouldContinue);
  };
}

function getLastId<T extends {id: string}>(
  listResult: PageResult<T>,
  reverseIteration: boolean
): string {
  const lastIdx = reverseIteration ? 0 : listResult.data.length - 1;
  const lastItem = listResult.data[lastIdx];
  const lastId = lastItem && lastItem.id;
  if (!lastId) {
    throw Error(
      'Unexpected: No `id` found on the last item while auto-paging a list.'
    );
  }
  return lastId;
}

function makeAutoPagingEach<T>(
  asyncIteratorNext: () => Promise<IteratorResult<T>>
): AutoPagingEach<T> {
  return function autoPagingEach(/* onItem?, onDone? */): Promise<void> {
    const args = [].slice.call(arguments);
    const onItem = getItemCallback(args);
    const onDone = getDoneCallback(args);
    if (args.length > 2) {
      throw Error(`autoPagingEach takes up to two arguments; received ${args}`);
    }

    const autoPagePromise = wrapAsyncIteratorWithCallback(
      asyncIteratorNext,
      // @ts-ignore we might need a null check
      onItem
    );
    return callbackifyPromiseWithTimeout(autoPagePromise, onDone);
  } as AutoPagingEach<T>;
}

function makeAutoPagingToArray<T>(
  autoPagingEach: AutoPagingEach<T>
): AutoPagingToArray<T> {
  return function autoPagingToArray(
    opts,
    onDone: IterationDoneCallback
  ): Promise<Array<any>> {
    const limit = opts && opts.limit;
    if (!limit) {
      throw Error(
        'You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.'
      );
    }
    if (limit > 10000) {
      throw Error(
        'You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.'
      );
    }
    const promise = new Promise<Array<any>>((resolve, reject) => {
      const items: Array<any> = [];
      autoPagingEach((item) => {
        items.push(item);
        if (items.length >= limit) {
          return false;
        }
      })
        .then(() => {
          resolve(items);
        })
        .catch(reject);
    });
    // @ts-ignore
    return callbackifyPromiseWithTimeout(promise, onDone);
  };
}

function wrapAsyncIteratorWithCallback<T>(
  asyncIteratorNext: () => Promise<IteratorResult<T>>,
  onItem: IterationItemCallback<T>
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    function handleIteration(
      iterResult: IteratorResult<T>
    ): Promise<any> | void {
      if (iterResult.done) {
        resolve();
        return;
      }

      const item = iterResult.value;
      return new Promise((next) => {
        // Bit confusing, perhaps; we pass a `resolve` fn
        // to the user, so they can decide when and if to continue.
        // They can return false, or a promise which resolves to false, to break.
        onItem(item, next);
      }).then((shouldContinue) => {
        if (shouldContinue === false) {
          return handleIteration({done: true, value: undefined});
        } else {
          return asyncIteratorNext().then(handleIteration);
        }
      });
    }

    asyncIteratorNext()
      .then(handleIteration)
      .catch(reject);
  });
}

function isReverseIteration(requestArgs: RequestArgs): boolean {
  const args = [].slice.call(requestArgs);
  const dataFromArgs = getDataFromArgs(args);

  return !!dataFromArgs.ending_before;
}
