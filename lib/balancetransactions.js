'use strict';

var operations = require('./api_operations.js');
var RequestCommon = require('./request_common.js');

function BalanceTransactions(auth) {
  this._auth = auth;
}

BalanceTransactions.prototype = new RequestCommon('balance_transaction', 'balance/history');
BalanceTransactions.prototype.constructor = BalanceTransactions;

// Select common API Operations.
BalanceTransactions.prototype.retrieve = operations.retrieve;
BalanceTransactions.prototype.all = operations.list;

module.exports = BalanceTransactions;
