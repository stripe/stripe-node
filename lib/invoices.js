'use strict';

var operations = require('./api_operations.js');
var RequestCommon = require('./request_common.js');

function Invoices(auth) {
  this._auth = auth;
}

Invoices.prototype = new RequestCommon('invoice');
Invoices.prototype.constructor = Invoices;

Invoices.prototype.getLines = function(id, data, cb) {
  if (data.constructor === Function) {
    cb = data;
    data = {};
  }
  if (!this._requireId(id, cb)) {
    return;
  }
  this._get('/v1/invoices/' + id + '/lines', data, cb);
}

Invoices.prototype.pay = function(id, cb) {
  if (!this._requireId(id, cb)) {
    return;
  }
  this._post('/v1/invoices/' + id + '/pay', {}, cb);
}

// Select common API Operations.
Invoices.prototype.create = operations.create;
Invoices.prototype.retrieve = operations.retrieve;
Invoices.prototype.update = operations.update;
Invoices.prototype.all = operations.list;

module.exports = Invoices;
