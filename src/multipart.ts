import {
  MultipartRequestData,
  RequestData,
  RequestHeaders,
  StripeResourceObject,
} from './Types.js';
import {flattenAndStringify, queryStringifyRequestData} from './utils.js';

type MultipartCallbackReturn = any;
type MultipartCallback = (
  error: Error | null,
  data: Uint8Array | string | null
) => MultipartCallbackReturn;
// Method for formatting HTTP body for the multipart/form-data specification
// Mostly taken from Fermata.js
// https://github.com/natevw/fermata/blob/5d9732a33d776ce925013a265935facd1626cc88/fermata.js#L315-L343
const multipartDataGenerator = (
  data: MultipartRequestData,
  headers: RequestHeaders,
  segmentBoundary: string
): Uint8Array => {
  headers['Content-Type'] = `multipart/form-data; boundary=${segmentBoundary}`;
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

  // CR/LF would end the header line, letting a caller-supplied value introduce
  // additional part headers.
  function stripCrLf(s: string): string {
    return s.replace(/\r\n|\r|\n/g, ' ');
  }

  function quote(s: string): string {
    return `"${stripCrLf(s.replace(/"/g, '%22'))}"`;
  }

  const flattenedData = flattenAndStringify(data);

  for (const k in flattenedData) {
    if (!Object.prototype.hasOwnProperty.call(flattenedData, k)) {
      continue;
    }

    const v = flattenedData[k];
    push(`--${segmentBoundary}`);
    if (Object.prototype.hasOwnProperty.call(v, 'data')) {
      const typedEntry: {
        name: string;
        data: string | Uint8Array;
        type: string;
      } = v as any;
      push(
        `Content-Disposition: form-data; name=${quote(k)}; filename=${quote(
          typedEntry.name || 'blob'
        )}`
      );
      push(
        `Content-Type: ${stripCrLf(
          typedEntry.type || 'application/octet-stream'
        )}`
      );
      push('');
      push(typedEntry.data);
    } else {
      push(`Content-Disposition: form-data; name=${quote(k)}`);
      push('');
      push(v);
    }
  }
  push(`--${segmentBoundary}--`);

  return buffer;
};

export function multipartRequestDataProcessor(
  this: StripeResourceObject,
  method: string,
  data: RequestData,
  headers: RequestHeaders,
  callback: MultipartCallback
): MultipartCallbackReturn {
  data = data || {};

  if (method !== 'POST') {
    return callback(null, queryStringifyRequestData(data));
  }

  this._stripe._platformFunctions
    .tryBufferData(data)
    .then((bufferedData: MultipartRequestData) => {
      const buffer = multipartDataGenerator(
        bufferedData,
        headers,
        // segment boundaries must be generated from a cryptographically secure method
        // see: https://go/j/RUN_DEVSDK-2807
        this._stripe._platformFunctions.uuid4()
      );
      return callback(null, buffer);
    })
    .catch((err: Error) => callback(err, null));
}
