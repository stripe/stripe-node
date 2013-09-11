'use strict';

var operations = require('./api_operations.js');
var RequestCommon = require('./request_common.js');

function Account(auth) {
  this._auth = auth;
}

Account.prototype = new RequestCommon('account', 'account');
Account.prototype.constructor = Account;

Account.prototype.retrieve = function(cb) {
  this._get('/v1/account', {}, cb);
}

module.exports = Account;
