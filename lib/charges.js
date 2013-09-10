'use strict';

var operations = require('./api_operations.js');
var RequestCommon = require('./request_common.js');

function Charges(auth) {
  this._auth = auth;
}

Charges.prototype = new RequestCommon('charge');
Charges.prototype.constructor = Charges;

Charges.prototype.capture = function(id, data, cb) {
  this._post('/v1/charges/' + id + '/capture', data, cb);
}

Charges.prototype.refund = function(id, amount, cb) {
  if (!id || id.constructor !== String) {
    cb(new Error('charge_id required.'));
    return;
  }

  var requestParams = {};
  if (amount.constructor === Function) {
    cb = amount;
    amount = null;
  }
  if (amount) {
    requestParams.amount = amount;
  }
  this._post('/v1/charges/' + id + '/refund', requestParams, cb);
}

// Select common API Operations.
Charges.prototype.create = operations.create;
Charges.prototype.update = operations.update;
Charges.prototype.retrieve = operations.retrieve;
Charges.prototype.list = operations.list;

module.exports = Charges;
