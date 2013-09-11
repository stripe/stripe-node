'use strict';

var operations = require('./api_operations.js');
var RequestCommon = require('./request_common.js');

function Events(auth) {
  this._auth = auth;
}

Events.prototype = new RequestCommon('event');
Events.prototype.constructor = Events;

// Select common API Operations.
Events.prototype.retrieve = operations.retrieve;
Events.prototype.all = operations.list;

module.exports = Events;
