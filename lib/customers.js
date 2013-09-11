'use strict';

var operations = require('./api_operations.js');
var RequestCommon = require('./request_common.js');

function Customers(auth) {
  this._auth = auth;
}

Customers.prototype = new RequestCommon('customer');
Customers.prototype.constructor = Customers;

/**
 * Subscription management for customers.
 */
Customers.prototype.updateSubscription = function(id, data, cb) {
  if (data.constructor === Function) {
    cb = data;
    data = {};
  }
  if (!this._requireId(id, cb)) {
    return;
  }
  this._post('/v1/customers/' + id + '/subscription', data, cb);
}

Customers.prototype.cancelSubscription = function(id, data, cb) {
  if (data.constructor === Function) {
    cb = data;
    data = {};
  }
  if (!this._requireId(id, cb)) {
    return;
  }
  this._del('/v1/customers/' + id + '/subscription', data, cb);
}

/**
 * Discounts for customers.
 */
Customers.prototype.deleteDiscount = function(id, cb) {
  if (!this._requireId(id, cb)) {
    return;
  }
  this._del('/v1/customers/' + id + '/discount', data, cb);
}

/**
 * Card management for customers.
 * TODO(michelle): should we maybe instead wrap the response in Customer/Charge?
 *    I don't really like that pattern for node, though.
 */
Customers.prototype.createCard = function(id, data, cb) {
  if (data.constructor === Function) {
    cb = data;
    data = {};
  }
  if (!this._requireId(id, cb)) {
    return;
  }
  this._post('/v1/customers/' + id + '/cards', data, cb);
}

Customers.prototype.updateCard = function(id, card, data, cb) {
  if (data.constructor === Function) {
    cb = data;
    data = {};
  }
  if (!this._requireId(id, cb)) {
    return;
  }
  if (!this._require('card', card, cb)) {
    return;
  }
  this._post('/v1/customers/' + id + '/cards/' + card, data, cb);
}

Customers.prototype.retrieveCard = function(id, card, cb) {
  if (data.constructor === Function) {
    cb = data;
    data = {};
  }
  if (!this._requireId(id, cb)) {
    return;
  }
  if (!this._require('card', card, cb)) {
    return;
  }
  this._get('/v1/customers/' + id + '/cards/' + card, {}, cb);
}

Customers.prototype.allCards = function(id, data, cb) {
  if (data.constructor === Function) {
    cb = data;
    data = {};
  }
  if (!this._requireId(id, cb)) {
    return;
  }
  this._get('/v1/customers/' + id + '/cards', data, cb);
}

Customers.prototype.deleteCard = function(id, card, cb) {
  if (!this._requireId(id, cb)) {
    return;
  }
  if (!this._require('card', card, cb)) {
    return;
  }
  this._del('/v1/customers/' + id + '/cards/' + card, {}, cb);
}

// Select common API Operations.
Customers.prototype.create = operations.create;
Customers.prototype.update = operations.update;
Customers.prototype.retrieve = operations.retrieve;
Customers.prototype.all = operations.list;
Customers.prototype.del = operations.del;

module.exports = Customers;
