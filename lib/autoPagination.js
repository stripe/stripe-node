'use strict';

var makeRequest = require('./makeRequest');
var utils = require('./utils');

// Method factories:

function autoPagingEach(self, requestArgs, spec, firstPagePromise) {
  return function autoPagingEach(/* onItem?, onDone? */) {
    var args = [].slice.call(arguments);
    var onItem = getItemCallback(args);
    var onDone = getDoneCallback(args);
    if (args.length > 2) {
      throw Error('autoPagingEach takes up to two arguments; received:', args);
    }

    function requestNextPage(listResult) {
      var lastIdx = listResult.data.length - 1;
      var lastItem = listResult.data[lastIdx];
      var lastId = lastItem && lastItem.id;
      if (!lastId) {
        throw Error('Unexpected: No `id` found on the last item while auto-paging a list.');
      }
      return makeRequest(self, requestArgs, spec, {starting_after: lastId});
    }

    // If a user calls `.next()` multiple times in parallel,
    // return the same result until something has resolved
    // to prevent page-turning race conditions.
    var currentPromise;
    function memoizedPromise(cb) {
      if (currentPromise) {
        return currentPromise;
      }
      currentPromise = new Promise(cb).then(function(ret) {
        currentPromise = undefined;
        return ret;
      });
      return currentPromise;
    }

    // Iterator state.
    var listPromise = firstPagePromise;
    var i = 0;

    function iterate(listResult) {
      if (!(listResult && listResult.data && typeof listResult.data.length === 'number')) {
        throw Error('Unexpected: Stripe API response does not have a well-formed `data` array.');
      }

      if (i < listResult.data.length) {
        var value = listResult.data[i];
        i += 1;
        return {value: value, done: false};
      } else if (listResult.has_more) {
        // Reset counter, request next page, and recurse.
        i = 0;
        listPromise = requestNextPage(listResult);
        return listPromise.then(iterate);
      }
      return {value: undefined, done: true};
    }

    function asyncIteratorNext() {
      return memoizedPromise(function(resolve, reject) {
        return listPromise
          .then(iterate)
          .then(resolve)
          .catch(reject);
      });
    }

    // Bifurcate API for those using callbacks vs. those using async iterators.
    var ret;
    if (onItem) {
      var autoPagePromise = wrapAsyncIteratorWithCallback(asyncIteratorNext, onItem);
      ret = utils.callbackifyPromise(autoPagePromise, onDone);
      ret.next = function() {
        throw Error('`autoPagingEach` does not return an iterator when you pass it an `onItem` callback; you must choose one or the other.');
      }
    } else {
      ret = {
        next: asyncIteratorNext,
        return: function() {
          // This is required for `break`.
          return {};
        },
        then: function() {
          throw Error('`autoPagingEach` does not return a promise unless you pass it an `onItem` callback; did you want `autoPagingToArray`?');
        }
      }
    }
    if (typeof Symbol !== 'undefined' && Symbol.asyncIterator) {
      ret[Symbol.asyncIterator] = function() {
        return ret;
      };
    }
    return ret;
  };
}

function autoPagingToArray(asyncIterator) {
  return function autoPagingToArray(opts, onDone) {
    var limit = opts && opts.limit;
    if (!limit) {
      throw Error('You must pass a `limit` option to autoPagingToArray, eg; `autoPagingToArray({limit: 1000});`.');
    }
    if (limit > 10000) {
      throw Error('You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.');
    }
    var promise = new Promise(function(resolve, reject) {
      var items = [];
      asyncIterator(function(item) {
        items.push(item);
        if (items.length >= limit) {
          return false;
        }
      }).then(function() {
        resolve(items);
      }).catch(reject);
    });
    return utils.callbackifyPromise(promise, onDone);
  }
}

// Private helpers:

function getDoneCallback(args) {
  if (args.length < 2) {
    return undefined;
  }
  var onDone = args[1];
  if (typeof onDone !== 'function') {
    throw Error('The second argument to autoPagingEach, if present, must be a callback function; receieved ' + typeof onDone);
  }
  return onDone;
}

/**
 * We allow two forms of the `onItem` callback,
 *
 *   1. `.autoPagingEach((item) => { doSomething(item); return false; });`
 *   2. `.autoPagingEach((item, next) => { doSomething(item); next(false); });`
 *
 * In addition to standard validation, this helper
 * coalesces the former form (which is provided for convenience for simple cases)
 * into the latter form.
 */
function getItemCallback(args) {
  if (args.length === 0) {
    return undefined;
  }
  var onItem = args[0];
  if (typeof onItem !== 'function') {
    throw Error('The first argument to autoPagingEach, if present, must be a callback function; receieved ' + typeof onItem);
  }

  // `.autoPagingEach((item, next) => { doSomething(item); next(); });`
  if (onItem.length === 2) {
    return onItem;
  }

  if (onItem.length > 2) {
    throw Error('The `onItem` callback function passed to autoPagingEach must accept at most two arguments; got ' + onItem);
  }

  return function onItem(item, next) {
    var shouldContinue = onItem(item);
    next(shouldContinue);
  };
}

function wrapAsyncIteratorWithCallback(asyncIteratorNext, onItem) {
  return new Promise(function(resolve, reject) {
    function handleIteration(iterResult) {
      if (iterResult.done) {
        resolve();
        return;
      }

      var item = iterResult.value;
      return new Promise(function(next) {
        // Bit confusing, perhaps; we pass a `resolve` fn
        // to the user, so they can decide when and if to continue.
        onItem(item, next);
      }).then(function(shouldContinue) {
        if (shouldContinue === false) {
          return handleIteration({done: true});
        } else {
          return asyncIteratorNext().then(handleIteration);
        }
      });
    }

    asyncIteratorNext().then(handleIteration).catch(reject);
  });
}

module.exports.autoPagingEach = autoPagingEach;
module.exports.autoPagingToArray = autoPagingToArray;
