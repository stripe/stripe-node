'use strict';

var operations = require('./api_operations.js');
var RequestCommon = require('./request_common.js');

function Recipients(auth) {
  this._auth = auth;
}

Recipients.prototype = new RequestCommon('recipient');
Recipients.prototype.constructor = Recipients;

Recipients.prototype.cancel = function(id, cb) {
  if (!this._requireId(id, cb)) {
    return;
  }
  this._post('/v1/transfers/' + id + '/cancel', {}, cb);
}

// Select common API Operations.
Recipients.prototype.create = operations.create;
Recipients.prototype.retrieve = operations.retrieve;
Recipients.prototype.update = operations.update;
Recipients.prototype.all = operations.list;
Recipients.prototype.del = operations.del;

module.exports = Recipients;
