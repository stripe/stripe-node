'use strict';

var querystring = require('querystring');

var hasOwn = {}.hasOwnProperty;
var toString = {}.toString;

var ARRAY_

var utils = module.exports = {

  isAuthKey: function (key) {
    return typeof key == 'string' && /^(?:[a-z]{2}_)?[A-z0-9]{32}$/.test(key);
  },

  isObject: function(o) {
    return toString.call(o) === '[object Object]';
  },

  /**
   * Stringifies an Object, accommodating a single-level of nested objects
   * (forming the conventional key "parent[child]=value")
   */
  stringifyRequestData: function(data) {

    var output = [];

    for (var i in data) {
      if (hasOwn.call(data, i)) {
        if (utils.isObject(data[i])) {
          var hasProps = false;
          for (var ii in data[i]) {
            if (hasOwn.call(data[i], ii)) {
              hasProps = true;
              output.push(encode(i + '[' + ii + ']') + '=' + encode(data[i][ii]));
            }
          }
          if (!hasProps) {
            output.push(encode(i) + '=' + encode(''));
          }
        } else if (Array.isArray(data[i])) {
          for (var a = 0, l = data[i].length; a < l; ++a) {
            output.push(encode(i + '[]') + '=' + encode(data[i][a]));
          }
        } else {
          output.push(encode(i) + '=' + encode(data[i]));
        }
      }
    }

    return output.join('&');

    function encode(v) {
      return v == null ? '' : encodeURIComponent(v);
    }
  },

  /**
   * https://gist.github.com/padolsey/6008842
   * Outputs a new function with interpolated object property values.
   * Use like so:
   *   var fn = makeURLInterpolator('some/url/{param1}/{param2}');
   *   fn({ param1: 123, param2: 456 }); // => 'some/url/123/456'
   */
  makeURLInterpolator: (function() {
    var rc = {
      '\n': '\\n', '\"': '\\\"',
      '\u2028': '\\u2028', '\u2029': '\\u2029'
    };
    return function makeURLInterpolator(str) {
      return new Function(
        'o',
        'return "' + (
          str
          .replace(/["\n\r\u2028\u2029]/g, function($0) {
            return rc[$0];
          })
          .replace(/\{([\s\S]+?)\}/g, '" + encodeURIComponent(o["$1"]) + "')
        ) + '";'
      );
    };
  }()),

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
  }

};
