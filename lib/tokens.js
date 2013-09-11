'use strict';

var operations = require('./api_operations.js');
var RequestCommon = require('./request_common.js');

function Tokens(auth) {
  this._auth = auth;
}

Tokens.prototype = new RequestCommon('token');
Tokens.prototype.constructor = Tokens;

// Select common API Operations.
Tokens.prototype.create = operations.create;
Tokens.prototype.retrieve = operations.retrieve;

module.exports = Tokens;
