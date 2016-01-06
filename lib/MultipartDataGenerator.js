'use strict';

var _ = require('lodash');

// Method for formatting HTTP body for the multipart/form-data specification
// Mostly taken from Fermata.js
// https://github.com/natevw/fermata/blob/5d9732a33d776ce925013a265935facd1626cc88/fermata.js#L315-L343
function multipartDataGenerator(method, data, headers) {
  var segno = (Math.round(Math.random() * 1e16) + Math.round(Math.random() * 1e16)).toString();
  headers['Content-Type'] = ('multipart/form-data; boundary=' + segno);
  var buffer = new Buffer(0);

  function push(l) {
    var prevBuffer = buffer;
    var newBuffer = (l instanceof Buffer) ? l : new Buffer(l);
    buffer = new Buffer(prevBuffer.length + newBuffer.length + 2);
    prevBuffer.copy(buffer);
    newBuffer.copy(buffer, prevBuffer.length);
    buffer.write('\r\n', buffer.length - 2);
  }

  function q(s) {
    return '"' + s.replace(/"|"/g, '%22').replace(/\r\n|\r|\n/g, ' ') + '"';
  }

  _.forEach(data, function(v, k) {
    push('--' + segno);
    if (v.hasOwnProperty('data')) {
      push('Content-Disposition: form-data; name=' + q(k) + '; filename=' + q(v.name || 'blob'));
      push('Content-Type: ' + (v.type || 'application/octet-stream'));
      push('');
      push(v.data);
    } else {
      push('Content-Disposition: form-data; name=' + q(k));
      push('');
      push(v);
    }
  });
  push('--' + segno + '--');

  return buffer;
};

module.exports = multipartDataGenerator;
