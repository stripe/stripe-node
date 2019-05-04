'use strict';

const isPlainObject = require('lodash.isplainobject');
const stripeMethod = require('./StripeMethod');
const utils = require('./utils');

module.exports = {
  create: stripeMethod({
    method: 'POST',
  }),

  list: stripeMethod({
    method: 'GET',
    methodType: 'list',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],
  }),

  update: stripeMethod({
    method: 'POST',
    path: '{id}',
    urlParams: ['id'],
  }),

  // Avoid 'delete' keyword in JS
  del: stripeMethod({
    method: 'DELETE',
    path: '{id}',
    urlParams: ['id'],
  }),

  setMetadata(id, key, value, auth, cb) {
    const self = this;
    const data = key;
    const isObject = isPlainObject(key);
    // We assume null for an empty object
    const isNull = data === null || (isObject && !Object.keys(data).length);

    // Allow optional passing of auth & cb:
    if ((isNull || isObject) && typeof value == 'string') {
      auth = value;
    } else if (typeof auth != 'string') {
      if (!cb && typeof auth == 'function') {
        cb = auth;
      }
      auth = null;
    }

    const urlData = this.createUrlData();
    const path = this.createFullPath('/' + id, urlData);

    return utils.callbackifyPromiseWithTimeout(
      new Promise((resolve, reject) => {
        if (isNull) {
          // Reset metadata:
          sendMetadata(null, auth);
        } else if (!isObject) {
          // Set individual metadata property:
          const metadata = {};
          metadata[key] = value;
          sendMetadata(metadata, auth);
        } else {
          // Set entire metadata object after resetting it:
          this._request(
            'POST',
            null,
            path,
            {metadata: null},
            auth,
            {},
            (err, response) => {
              if (err) {
                return reject(err);
              }
              sendMetadata(data, auth);
            }
          );
        }

        function sendMetadata(metadata, auth) {
          self._request(
            'POST',
            null,
            path,
            {metadata},
            auth,
            {},
            (err, response) => {
              if (err) {
                reject(err);
              } else {
                resolve(response.metadata);
              }
            }
          );
        }
      }),
      cb
    );
  },

  getMetadata(id, auth, cb) {
    if (!cb && typeof auth == 'function') {
      cb = auth;
      auth = null;
    }

    const urlData = this.createUrlData();
    const path = this.createFullPath('/' + id, urlData);

    return utils.callbackifyPromiseWithTimeout(
      new Promise((resolve, reject) => {
        this._request('GET', null, path, {}, auth, {}, (err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response.metadata);
          }
        });
      }),
      cb
    );
  },
};
