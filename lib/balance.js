'use strict';

var operations = require('./api_operations.js');
var RequestCommon = require('./request_common.js');

function Balance(auth) {
  this._auth = auth;
}

Balance.prototype = new RequestCommon('balance', 'balance');
Balance.prototype.constructor = Balance;

Balance.prototype.retrieve = function(cb) {
  this._get('/v1/balance', {}, cb);
}

module.exports = Balance;
