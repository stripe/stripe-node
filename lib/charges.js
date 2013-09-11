'use strict';

var operations = require('./api_operations.js');
var RequestCommon = require('./request_common.js');

function Charges(auth) {
  this._auth = auth;
}

Charges.prototype = new RequestCommon('charge');
Charges.prototype.constructor = Charges;

Charges.prototype.capture = function(id, data, cb) {
  if (data.constructor === Function) {
    cb = data;
    data = {};
  }
  if (!this._requireId(id, cb)) {
    return;
  }
  this._post('/v1/charges/' + id + '/capture', data, cb);
}

Charges.prototype.updateDispute = function(id, data, cb) {
  if (data.constructor === Function) {
    cb = data;
    data = {};
  }
  if (!this._requireId(id, cb)) {
    return;
  }

  this._post('/v1/charges/' + id + '/dispute', data, cb);
}

Charges.prototype.refund = function(id, data, cb) {
  if (data.constructor === Function) {
    cb = data;
    data = {};
  }
  if (!this._requireId(id, cb)) {
    return;
  }

  this._post('/v1/charges/' + id + '/refund', data, cb);
}

// Select common API Operations.
Charges.prototype.create = operations.create;
Charges.prototype.update = operations.update;
Charges.prototype.retrieve = operations.retrieve;
Charges.prototype.all = operations.list;

module.exports = Charges;
