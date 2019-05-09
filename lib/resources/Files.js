'use strict';

const Buffer = require('safe-buffer').Buffer;
const utils = require('../utils');
const multipartDataGenerator = require('../MultipartDataGenerator');
const Error = require('../Error');
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'files',

  includeBasic: ['list', 'retrieve'],

  requestDataProcessor(method, data, headers, callback) {
    data = data || {};

    if (method === 'POST') {
      return getProcessorForSourceType(data);
    } else {
      return callback(null, utils.stringifyRequestData(data));
    }

    function getProcessorForSourceType(data) {
      const isStream = utils.checkForStream(data);
      if (isStream) {
        return streamProcessor(multipartDataGenerator);
      } else {
        const buffer = multipartDataGenerator(method, data, headers);
        return callback(null, buffer);
      }
    }

    function streamProcessor(fn) {
      const bufferArray = [];
      data.file.data
        .on('data', (line) => {
          bufferArray.push(line);
        })
        .on('end', () => {
          const bufferData = Object.assign({}, data);
          bufferData.file.data = Buffer.concat(bufferArray);
          const buffer = fn(method, bufferData, headers);
          callback(null, buffer);
        })
        .on('error', (err) => {
          const errorHandler = streamError(callback);
          errorHandler(err);
        });
    }

    function streamError(callback) {
      const StreamProcessingError = Error.extend({
        type: 'StreamProcessingError',
        populate(raw) {
          this.type = this.type;
          this.message = raw.message;
          this.detail = raw.detail;
        },
      });
      return (error) => {
        callback(
          new StreamProcessingError({
            message:
              'An error occurred while attempting to process the file for upload.',
            detail: error,
          }),
          null
        );
      };
    }
  },

  create: stripeMethod({
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    host: 'files.stripe.com',
  }),
});
