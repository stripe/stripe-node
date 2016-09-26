'use strict';

var qs = require('qs');

var hasOwn = {}.hasOwnProperty;
var toString = {}.toString;

var utils = module.exports = {

  // Note that in ES6 all uses of this can just be replaced with Object.assign.
  // Given a few more years we should drop this function completely.
  assign: function(o1, o2) {
    for (var attr in o2) {
      o1[attr] = o2[attr];
    }
    return o1;
  },

  isAuthKey: function(key) {
    return typeof key == 'string' && /^(?:[a-z]{2}_)?[A-z0-9]{32}$/.test(key);
  },

  isOptionsHash: function(o) {
    return utils.isPlainObject(o) && ['api_key', 'idempotency_key', 'stripe_account'].some(function(key) {
      return o.hasOwnProperty(key);
    });
  },

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * Note that this function is vendored from Lodash with some minor
   * modifications.
   *
   * @static
   * @memberOf utils
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * utils.isPlainObject(new Foo);
   * // => false
   *
   * utils.isPlainObject([1, 2, 3]);
   * // => false
   *
   * utils.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * utils.isPlainObject(Object.create(null));
   * // => true
   */
  isPlainObject: function(value) {
    if (!utils.isObjectLike(value) || value.toString() != '[object Object]') {
      return false;
    }
    var proto = Object.getPrototypeOf(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return (typeof Ctor == 'function' &&
      Ctor instanceof Ctor && Ctor.toString() == Object.toString());
  },

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * Note that this function is vendored from Lodash with some minor
   * modifications.
   *
   * @static
   * @memberOf utils
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * utils.isObjectLike({});
   * // => true
   *
   * utils.isObjectLike([1, 2, 3]);
   * // => true
   *
   * utils.isObjectLike(_.noop);
   * // => false
   *
   * utils.isObjectLike(null);
   * // => false
   */
  isObjectLike: function(value) {
    return value != null && typeof value == 'object';
  },

  /**
   * Stringifies an Object, accommodating nested objects
   * (forming the conventional key 'parent[child]=value')
   */
  stringifyRequestData: function(data) {
    return qs.stringify(data, {arrayFormat: 'brackets'});
  },

  /**
   * Outputs a new function with interpolated object property values.
   * Use like so:
   *   var fn = makeURLInterpolator('some/url/{param1}/{param2}');
   *   fn({ param1: 123, param2: 456 }); // => 'some/url/123/456'
   */
  makeURLInterpolator: (function() {
    var rc = {
      '\n': '\\n', '\"': '\\\"',
      '\u2028': '\\u2028', '\u2029': '\\u2029',
    };
    return function makeURLInterpolator(str) {
      var cleanString = str.replace(/["\n\r\u2028\u2029]/g, function($0) {
        return rc[$0];
      });
      return function(outputs) {
        return cleanString.replace(/\{([\s\S]+?)\}/g, function($0, $1) {
          return encodeURIComponent(outputs[$1] || '');
        });
      };
    };
  }()),

  /**
   * Return the data argument from a list of arguments
   */
  getDataFromArgs: function(args) {
    if (args.length > 0) {
      if (utils.isPlainObject(args[0]) && !utils.isOptionsHash(args[0])) {
        return args.shift();
      }
    }
    return {};
  },

  /**
   * Return the options hash from a list of arguments
   */
  getOptionsFromArgs: function(args) {
    var opts = {
      auth: null,
      headers: {},
    }
    if (args.length > 0) {
      var arg = args[args.length - 1];
      if (utils.isAuthKey(arg)) {
        opts.auth = args.pop();
      } else if (utils.isOptionsHash(arg)) {
        var params = args.pop();
        if (params.api_key) {
          opts.auth = params.api_key;
        }
        if (params.idempotency_key) {
          opts.headers['Idempotency-Key'] = params.idempotency_key;
        }
        if (params.stripe_account) {
          opts.headers['Stripe-Account'] = params.stripe_account;
        }
      }
    }
    return opts;
  },

  /**
   * Provide simple "Class" extension mechanism
   */
  protoExtend: function(sub) {
    var Super = this;
    var Constructor = hasOwn.call(sub, 'constructor') ? sub.constructor : function() {
      Super.apply(this, arguments);
    };
    Constructor.prototype = Object.create(Super.prototype);
    for (var i in sub) {
      if (hasOwn.call(sub, i)) {
        Constructor.prototype[i] = sub[i];
      }
    }
    for (i in Super) {
      if (hasOwn.call(Super, i)) {
        Constructor[i] = Super[i];
      }
    }
    return Constructor;
  },

};
