'use strict';

var operations = require('./api_operations.js');
var RequestCommon = require('./request_common.js');

function Transfers(auth) {
  this._auth = auth;
}

Transfers.prototype = new RequestCommon('transfer');
Transfers.prototype.constructor = Transfers;

Transfers.prototype.cancel = function(id, cb) {
  if (!this._requireId(id, cb)) {
    return;
  }
  this._post('/v1/transfers/' + id + '/cancel', {}, cb);
}

// Select common API Operations.
Transfers.prototype.create = operations.create;
Transfers.prototype.retrieve = operations.retrieve;
Transfers.prototype.all = operations.list;

module.exports = Transfers;
