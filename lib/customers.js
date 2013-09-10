'use strict';

var operations = require('./api_operations.js');
var RequestCommon = require('./request_common.js');

function Customers(auth) {
  this._auth = auth;
}

Customers.prototype = new RequestCommon('customer');
Customers.prototype.constructor = Customers;

Customers.prototype.updateSubscription = function(id, data, cb) {
  if (!this._validateId(id, cb)) {
    return;
  }
  this._post('/v1/customers/' + id + '/subscription', data, cb);
}

Customers.prototype.cancelSubscription = function(id, data, cb) {
  if (!this._validateId(id, cb)) {
    return;
  }
  this._del('/v1/customers/' + id + '/subscription', data, cb);
}

// Select common API Operations.
Customers.prototype.create = operations.create;
Customers.prototype.update = operations.update;
Customers.prototype.retrieve = operations.retrieve;
Customers.prototype.list = operations.list;
Customers.prototype.del = operations.del;

module.exports = Customers;
