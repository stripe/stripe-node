'use strict';

var operations = require('./api_operations.js');
var RequestCommon = require('./request_common.js');

function Coupons(auth) {
  this._auth = auth;
}

Coupons.prototype = new RequestCommon('coupon');
Coupons.prototype.constructor = Coupons;

// Select common API Operations.
Coupons.prototype.create = operations.create;
Coupons.prototype.retrieve = operations.retrieve;
Coupons.prototype.all = operations.list;
Coupons.prototype.del = operations.del;

module.exports = Coupons;
