'use strict';

var operations = require('./api_operations.js');
var RequestCommon = require('./request_common.js');

function Plans(auth) {
  this._auth = auth;
}

Plans.prototype = new RequestCommon('plan');
Plans.prototype.constructor = Plans;

// Select common API Operations.
Plans.prototype.create = operations.create;
Plans.prototype.update = operations.update;
Plans.prototype.retrieve = operations.retrieve;
Plans.prototype.all = operations.list;
Plans.prototype.del = operations.del;

module.exports = Plans;
