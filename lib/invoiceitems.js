'use strict';

var operations = require('./api_operations.js');
var RequestCommon = require('./request_common.js');

function InvoiceItems(auth) {
  this._auth = auth;
}

InvoiceItems.prototype = new RequestCommon('invoiceitem');
InvoiceItems.prototype.constructor = InvoiceItems;

// Select common API Operations.
InvoiceItems.prototype.create = operations.create;
InvoiceItems.prototype.retrieve = operations.retrieve;
InvoiceItems.prototype.update = operations.update;
InvoiceItems.prototype.all = operations.list;
InvoiceItems.prototype.del = operations.del;

module.exports = InvoiceItems;
