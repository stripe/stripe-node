'use strict';

var operations = {
  create: function(data, cb) {
    this._post('/v1/' + this._type, data, cb);
  },
  retrieve: function(id, cb) {
    if (!this._validateId(id, cb)) {
      return;
    }
    this._get('/v1/' + this._endpoint + '/' + id, {}, cb);
  },
  update: function(id, data, cb) {
    if (!this._validateId(id, cb)) {
      return;
    }
    this._post('/v1/' + this._endpoint + '/' + id, data, cb);
  },
  del: function(id, cb) {
    if (!this._validateId(id, cb)) {
      return;
    }
    this._del('/v1/' + this._endpoint + '/' + id, {}, cb);
  },
  list: function(data, cb) {
    this._get('/v1/' + this._endpoint, data, cb);
  }
}

module.exports = operations;
