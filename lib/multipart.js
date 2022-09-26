'use strict';
const utils = require('./utils');
const {StripeError} = require('./Error');
class StreamProcessingError extends StripeError {}
// Method for formatting HTTP body for the multipart/form-data specification
// Mostly taken from Fermata.js
// https://github.com/natevw/fermata/blob/5d9732a33d776ce925013a265935facd1626cc88/fermata.js#L315-L343
const multipartDataGenerator = (method, data, headers) => {
  const segno = (
    Math.round(Math.random() * 1e16) + Math.round(Math.random() * 1e16)
  ).toString();
  headers['Content-Type'] = `multipart/form-data; boundary=${segno}`;
  let buffer = Buffer.alloc(0);
  function push(l) {
    const prevBuffer = buffer;
    const newBuffer = l instanceof Buffer ? l : Buffer.from(l);
    buffer = Buffer.alloc(prevBuffer.length + newBuffer.length + 2);
    prevBuffer.copy(buffer);
    newBuffer.copy(buffer, prevBuffer.length);
    buffer.write('\r\n', buffer.length - 2);
  }
  function q(s) {
    return `"${s.replace(/"|"/g, '%22').replace(/\r\n|\r|\n/g, ' ')}"`;
  }
  const flattenedData = utils.flattenAndStringify(data);
  for (const k in flattenedData) {
    const v = flattenedData[k];
    push(`--${segno}`);
    if (v.hasOwnProperty('data')) {
      push(
        `Content-Disposition: form-data; name=${q(k)}; filename=${q(
          v.name || 'blob'
        )}`
      );
      push(`Content-Type: ${v.type || 'application/octet-stream'}`);
      push('');
      push(v.data);
    } else {
      push(`Content-Disposition: form-data; name=${q(k)}`);
      push('');
      push(v);
    }
  }
  push(`--${segno}--`);
  return buffer;
};
const streamProcessor = (method, data, headers, callback) => {
  const bufferArray = [];
  data.file.data
    .on('data', (line) => {
      bufferArray.push(line);
    })
    .once('end', () => {
      const bufferData = Object.assign({}, data);
      bufferData.file.data = Buffer.concat(bufferArray);
      const buffer = multipartDataGenerator(method, bufferData, headers);
      callback(null, buffer);
    })
    .on('error', (err) => {
      callback(
        new StreamProcessingError({
          message:
            'An error occurred while attempting to process the file for upload.',
          detail: err,
        }),
        null
      );
    });
};
const multipartRequestDataProcessor = (method, data, headers, callback) => {
  data = data || {};
  if (method !== 'POST') {
    return callback(null, utils.stringifyRequestData(data));
  }
  const isStream = utils.checkForStream(data);
  if (isStream) {
    return streamProcessor(method, data, headers, callback);
  }
  const buffer = multipartDataGenerator(method, data, headers);
  return callback(null, buffer);
};
module.exports.multipartRequestDataProcessor = multipartRequestDataProcessor;
