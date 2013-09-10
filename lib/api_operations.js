'use strict';

var operations = {
  create: function(data, cb) {
    this._post('/v1/' + this._type, data, cb);
  },
  retrieve: function(id, cb) {
    if (!id || id.constructor !== String) {
      if (cb && cb.constructor === Function) {
        cb(new Error(this._type + '_id required.'));
      } else {
        throw new Error("You didn't pass in a callback. See https://stripe.com/docs/api/node for code examples.");
      }
      return;
    }
    this._get('/v1/' + this._endpoint + '/' + id, {}, cb);
  },
  update: function(id, data, cb) {
    if (!id || id.constructor !== String) {
      if (cb && cb.constructor === Function) {
        cb(new Error(this._type + '_id required.'));
      } else {
        throw new Error("You didn't pass in a callback. See https://stripe.com/docs/api/node for code examples.");
      }
      return;
    }
    this._post('/v1/' + this._endpoint + '/' + id, data, cb);
  },
  del: function(id, cb) {
    this._del('/v1/' + this._endpoint + '/' + id, {}, cb);
  },
  list: function(data, cb) {
    this._get('/v1/' + this._endpoint, data, cb);
  }
}

module.exports = operations;
