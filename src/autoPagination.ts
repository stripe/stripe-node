const utils = require('./utils');

type PromiseCache = {
  currentPromise: Promise<any> | undefined | null;
};
type IterationResult = {
  done: boolean;
  value?: any;
};
type IterationDoneCallback = () => void;
type IterationItemCallback = (
  item: any,
  next: any
) => void | boolean | Promise<void | boolean>;
type ListResult = {
  data: Array<any>;
  // eslint-disable-next-line camelcase
  has_more: boolean;
};
type AutoPagingEach = (
  onItem: IterationItemCallback,
  onDone?: IterationDoneCallback
) => Promise<void>;

type AutoPagingToArrayOptions = {
  limit?: number;
};
type AutoPagingToArray = (
  opts: AutoPagingToArrayOptions,
  onDone: IterationDoneCallback
) => Promise<Array<any>>;

type AutoPaginationMethods = {
  autoPagingEach: AutoPagingEach;
  autoPagingToArray: AutoPagingToArray;
  next: () => Promise<void>;
  return: () => void;
};

function makeAutoPaginationMethods(
  self: StripeResourceObject,
  requestArgs: RequestArgs,
  spec: MethodSpec,
  firstPagePromise: Promise<any>
): AutoPaginationMethods {
  const promiseCache: PromiseCache = {currentPromise: null};
  const reverseIteration = isReverseIteration(requestArgs);
  let pagePromise = firstPagePromise;
  let i = 0;

  // Search and List methods iterate differently.
  // Search relies on a `next_page` token and can only iterate in one direction.
  // List relies on either an `ending_before` or `starting_after` field with
  // an item ID to paginate and is bi-directional.
  //
  // Please note: spec.methodType === 'search' is beta functionality and is
  // subject to change/removal at any time.
  let getNextPagePromise: (pageResult: any) => Promise<any>;
  if (spec.methodType === 'search') {
    getNextPagePromise = (pageResult): Promise<any> => {
      if (!pageResult.next_page) {
        throw Error(
          'Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true.'
        );
      }
      return self._makeRequest(requestArgs, spec, {
        page: pageResult.next_page,
      });
    };
  } else {
    getNextPagePromise = (pageResult): Promise<any> => {
      const lastId = getLastId(pageResult, reverseIteration);
      return self._makeRequest(requestArgs, spec, {
        [reverseIteration ? 'ending_before' : 'starting_after']: lastId,
      });
    };
  }

  function iterate(
    pageResult: ListResult
  ): IterationResult | Promise<IterationResult> {
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

    if (i < pageResult.data.length) {
      const idx = reverseIteration ? pageResult.data.length - 1 - i : i;
      const value = pageResult.data[idx];
      i += 1;

      return {value, done: false};
    } else if (pageResult.has_more) {
      // Reset counter, request next page, and recurse.
      i = 0;
      pagePromise = getNextPagePromise(pageResult);
      return pagePromise.then(iterate);
    }
    return {value: undefined, done: true};
  }

  function asyncIteratorNext(): Promise<any> {
    return memoizedPromise(promiseCache, (resolve, reject) => {
      return pagePromise
        .then(iterate)
        .then(resolve)
        .catch(reject);
    });
  }

  const autoPagingEach = makeAutoPagingEach(asyncIteratorNext);
  const autoPagingToArray = makeAutoPagingToArray(autoPagingEach);

  const autoPaginationMethods: AutoPaginationMethods = {
    autoPagingEach,
    autoPagingToArray,

    // Async iterator functions:
    next: asyncIteratorNext,
    return: (): any => {
      // This is required for `break`.
      return {};
    },
    [getAsyncIteratorSymbol()]: () => {
      return autoPaginationMethods;
    },
  };
  return autoPaginationMethods;
}

export = {
  makeAutoPaginationMethods: makeAutoPaginationMethods,
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

function getDoneCallback(args: Array<any>): IterationDoneCallback | undefined {
  if (args.length < 2) {
    return undefined;
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
function getItemCallback(args: Array<any>): IterationItemCallback | undefined {
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

function getLastId(listResult: ListResult, reverseIteration: boolean): string {
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

/**
 * If a user calls `.next()` multiple times in parallel,
 * return the same result until something has resolved
 * to prevent page-turning race conditions.
 */
function memoizedPromise<T>(
  promiseCache: PromiseCache,
  cb: (resolve: (value: T) => void, reject: (reason?: any) => void) => void
): Promise<T> {
  if (promiseCache.currentPromise) {
    return promiseCache.currentPromise;
  }
  promiseCache.currentPromise = new Promise(cb).then((ret) => {
    promiseCache.currentPromise = undefined;
    return ret;
  });
  return promiseCache.currentPromise;
}

function makeAutoPagingEach(
  asyncIteratorNext: () => Promise<IterationResult>
): AutoPagingEach {
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
    return utils.callbackifyPromiseWithTimeout(autoPagePromise, onDone);
  } as AutoPagingEach;
}

function makeAutoPagingToArray(
  autoPagingEach: AutoPagingEach
): AutoPagingToArray {
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
    const promise = new Promise((resolve, reject) => {
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
    return utils.callbackifyPromiseWithTimeout(promise, onDone);
  };
}

function wrapAsyncIteratorWithCallback(
  asyncIteratorNext: () => Promise<IterationResult>,
  onItem: IterationItemCallback
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    function handleIteration(iterResult: IterationResult): Promise<any> | void {
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
          return handleIteration({done: true});
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
  const dataFromArgs = utils.getDataFromArgs(args);

  return !!dataFromArgs.ending_before;
}
