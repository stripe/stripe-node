

const { Buffer } = require('safe-buffer');
const qs = require('qs');
const crypto = require('crypto');

const hasOwn = {}.hasOwnProperty;
const isPlainObject = require('lodash.isplainobject');

const utils = {

  isAuthKey(key) {
    return typeof key === 'string' && /^(?:[a-z]{2}_)?[A-z0-9]{32}$/.test(key);
  },

  isOptionsHash(o) {
    return isPlainObject(o) && ['api_key', 'idempotency_key', 'stripe_account', 'stripe_version'].some(key => hasOwn.call(o, key));
  },

  /**
   * Stringifies an Object, accommodating nested objects
   * (forming the conventional key 'parent[child]=value')
   */
  stringifyRequestData(data) {
    return qs.stringify(data, { arrayFormat: 'brackets' });
  },

  /**
   * Outputs a new function with interpolated object property values.
   * Use like so:
   *   var fn = makeURLInterpolator('some/url/{param1}/{param2}');
   *   fn({ param1: 123, param2: 456 }); // => 'some/url/123/456'
   */
  makeURLInterpolator: (function makeURLInterpolator() {
    const rc = {
      '\n': '\\n',
      '"': '\\"',
      '\u2028': '\\u2028',
      '\u2029': '\\u2029',
    };
    return (str) => {
      const cleanString = str.replace(/["\n\r\u2028\u2029]/g, $0 => rc[$0]);
      return outputs => cleanString.replace(/\{([\s\S]+?)\}/g, ($0, $1) => encodeURIComponent(outputs[$1] || ''));
    };
  }()),

  /**
   * Return the data argument from a list of arguments
   */
  getDataFromArgs(args) {
    if (args.length > 0) {
      if (isPlainObject(args[0]) && !utils.isOptionsHash(args[0])) {
        return args.shift();
      }
    }
    return {};
  },

  /**
   * Return the options hash from a list of arguments
   */
  getOptionsFromArgs(args) {
    const opts = {
      auth: null,
      headers: {},
    };
    if (args.length > 0) {
      const arg = args[args.length - 1];
      if (utils.isAuthKey(arg)) {
        opts.auth = args.pop();
      } else if (utils.isOptionsHash(arg)) {
        const params = args.pop();
        if (params.api_key) {
          opts.auth = params.api_key;
        }
        if (params.idempotency_key) {
          opts.headers['Idempotency-Key'] = params.idempotency_key;
        }
        if (params.stripe_account) {
          opts.headers['Stripe-Account'] = params.stripe_account;
        }
        if (params.stripe_version) {
          opts.headers['Stripe-Version'] = params.stripe_version;
        }
      }
    }
    return opts;
  },

  /**
   * Provide simple "Class" extension mechanism
   */
  protoExtend(sub) {
    const Super = this;
    const Constructor = hasOwn.call(sub, 'constructor') ? sub.constructor : function Constructor() {
      Super.apply(this, arguments);
    };

    // This initialization logic is somewhat sensitive to be compatible with
    // divergent JS implementations like the one found in Qt. See here for more
    // context:
    //
    // https://github.com/stripe/stripe-node/pull/334
    Object.assign(Constructor, Super);
    Constructor.prototype = Object.create(Super.prototype);
    Object.assign(Constructor.prototype, sub);

    return Constructor;
  },

  /**
   * Convert an array into an object with integer string attributes
   */
  arrayToObject(arr) {
    if (Array.isArray(arr)) {
      const obj = {};
      arr.map((item, i) => {
        obj[i.toString()] = item;
      });
      return obj;
    }
    return arr;
  },

  /**
  * Secure compare, from https://github.com/freewil/scmp
  */
  secureCompare(a, b) {
    a = Buffer.from(a);
    b = Buffer.from(b);

    // return early here if buffer lengths are not equal since timingSafeEqual
    // will throw if buffer lengths are not equal
    if (a.length !== b.length) {
      return false;
    }

    // use crypto.timingSafeEqual if available (since Node.js v6.6.0),
    // otherwise use our own scmp-internal function.
    if (crypto.timingSafeEqual) {
      return crypto.timingSafeEqual(a, b);
    }

    const len = a.length;
    let result = 0;

    for (let i = 0; i < len; i += 1) {
      result |= a[i] ^ b[i]; // eslint-disable-line no-bitwise
    }
    return result === 0;
  },

  /**
  * Remove empty values from an object
  */
  removeEmpty(obj) {
    if (typeof obj !== 'object') {
      throw new Error('Argument must be an object');
    }

    Object.keys(obj).forEach((key) => {
      if (obj[key] === null || obj[key] === undefined) {
        delete obj[key];
      }
    });

    return obj;
  },
};

module.exports = utils;
