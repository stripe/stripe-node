import utils = require('./utils');
import _Error = require('./Error');
const {StripeError} = _Error;

class StreamProcessingError extends StripeError {}
type MultipartCallbackReturn = any;
type MultipartCallback = (
  error: Error | null,
  data: Uint8Array | string | null
) => MultipartCallbackReturn;
// Method for formatting HTTP body for the multipart/form-data specification
// Mostly taken from Fermata.js
// https://github.com/natevw/fermata/blob/5d9732a33d776ce925013a265935facd1626cc88/fermata.js#L315-L343
const multipartDataGenerator = (
  method: string,
  data: MultipartRequestData,
  headers: RequestHeaders
): Uint8Array => {
  const segno = (
    Math.round(Math.random() * 1e16) + Math.round(Math.random() * 1e16)
  ).toString();
  headers['Content-Type'] = `multipart/form-data; boundary=${segno}`;
  const textEncoder = new TextEncoder();

  let buffer = new Uint8Array(0);
  const endBuffer = textEncoder.encode('\r\n');

  function push(l: string | Uint8Array): void {
    const prevBuffer = buffer;
    const newBuffer =
      l instanceof Uint8Array ? l : new Uint8Array(textEncoder.encode(l));
    buffer = new Uint8Array(prevBuffer.length + newBuffer.length + 2);

    buffer.set(prevBuffer);
    buffer.set(newBuffer, prevBuffer.length);
    buffer.set(endBuffer, buffer.length - 2);
  }

  function q(s: string): string {
    return `"${s.replace(/"|"/g, '%22').replace(/\r\n|\r|\n/g, ' ')}"`;
  }

  const flattenedData = utils.flattenAndStringify(data);

  for (const k in flattenedData) {
    const v = flattenedData[k];
    push(`--${segno}`);
    if (Object.prototype.hasOwnProperty.call(v, 'data')) {
      const typedEntry: {
        name: string;
        data: string | Uint8Array;
        type: string;
      } = v as any;
      push(
        `Content-Disposition: form-data; name=${q(k)}; filename=${q(
          typedEntry.name || 'blob'
        )}`
      );
      push(`Content-Type: ${typedEntry.type || 'application/octet-stream'}`);
      push('');
      push(typedEntry.data);
    } else {
      push(`Content-Disposition: form-data; name=${q(k)}`);
      push('');
      push(v);
    }
  }
  push(`--${segno}--`);

  return buffer;
};

const streamProcessor = (
  method: string,
  data: StreamingFile,
  headers: RequestHeaders,
  callback: MultipartCallback
): void => {
  const bufferArray: Array<Uint8Array> = [];
  data.file.data
    .on('data', (line: Uint8Array) => {
      bufferArray.push(line);
    })
    .once('end', () => {
      // @ts-ignore
      const bufferData: BufferedFile = Object.assign({}, data);
      bufferData.file.data = utils.concat(bufferArray);
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

const multipartRequestDataProcessor = (
  method: string,
  data: MultipartRequestData,
  headers: RequestHeaders,
  callback: MultipartCallback
): MultipartCallbackReturn => {
  data = data || {};

  if (method !== 'POST') {
    return callback(null, utils.stringifyRequestData(data));
  }

  const isStream = utils.checkForStream(data);
  if (isStream) {
    return streamProcessor(method, data as StreamingFile, headers, callback);
  }

  const buffer = multipartDataGenerator(method, data, headers);
  return callback(null, buffer);
};

export = {
  multipartRequestDataProcessor: multipartRequestDataProcessor,
};
