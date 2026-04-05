import {Decimal} from './Decimal.js';
import {V2RuntimeSchema} from './Types.js';
import {RequestSender} from './RequestSender.js';
import {attachRefFetch, RefWireShape} from './resources/V2/Ref.js';

/**
 * Coerces outbound V2 request data by converting bigint (or number)
 * int64_string fields to strings, matching the wire format expected by the API.
 *
 * Walks the schema tree and only touches fields that are marked as
 * int64_string. All other values are left unchanged.
 */
export const coerceV2RequestData = (
  data: unknown,
  schema: V2RuntimeSchema
): unknown => {
  if (data == null) {
    return data;
  }

  switch (schema.kind) {
    case 'int64_string':
      return typeof data === 'bigint' || typeof data === 'number'
        ? String(data)
        : data;

    case 'decimal_string':
      // Duck-type check: Decimal instances have toFixed() and isZero() methods.
      return typeof (data as any).toFixed === 'function' &&
        typeof (data as any).isZero === 'function'
        ? (data as Decimal).toString()
        : data;

    case 'refObject':
      return data;

    case 'object': {
      if (typeof data !== 'object' || Array.isArray(data)) {
        return data;
      }
      const obj = data as Record<string, unknown>;
      const result: Record<string, unknown> = {};
      for (const key of Object.keys(obj)) {
        const fieldSchema = schema.fields[key];
        result[key] = fieldSchema
          ? coerceV2RequestData(obj[key], fieldSchema)
          : obj[key];
      }
      return result;
    }

    case 'array': {
      if (!Array.isArray(data)) {
        return data;
      }
      return data.map((element) =>
        coerceV2RequestData(element, schema.element)
      );
    }

    case 'nullable':
      return coerceV2RequestData(data, schema.inner);
  }
};

/**
 * Coerces inbound V2 response data by converting string int64_string fields
 * to bigints, matching the SDK's public type contract.
 *
 * Walks the schema tree and only touches fields that are marked as
 * int64_string. All other values are left unchanged.
 */
export const coerceV2ResponseData = (
  data: unknown,
  schema: V2RuntimeSchema,
  requestSender?: RequestSender
): unknown => {
  if (data == null) {
    return data;
  }

  switch (schema.kind) {
    case 'int64_string':
      if (typeof data === 'string') {
        try {
          return BigInt(data);
        } catch {
          throw new Error(
            `Failed to coerce int64_string value: expected an integer string, got '${data}'`
          );
        }
      }
      return data;

    case 'decimal_string':
      if (typeof data === 'string') {
        try {
          return Decimal.from(data);
        } catch {
          throw new Error(
            `Failed to coerce decimal_string value: expected a decimal string, got '${data}'`
          );
        }
      }
      return data;

    case 'refObject':
      if (requestSender && typeof data === 'object' && !Array.isArray(data)) {
        return attachRefFetch(data as RefWireShape, requestSender);
      }
      return data;

    case 'object': {
      if (typeof data !== 'object' || Array.isArray(data)) {
        return data;
      }
      const obj = data as Record<string, unknown>;
      for (const key of Object.keys(schema.fields)) {
        if (key in obj) {
          obj[key] = coerceV2ResponseData(
            obj[key],
            schema.fields[key],
            requestSender
          );
        }
      }
      return obj;
    }

    case 'array': {
      if (!Array.isArray(data)) {
        return data;
      }
      for (let i = 0; i < data.length; i++) {
        data[i] = coerceV2ResponseData(data[i], schema.element, requestSender);
      }
      return data;
    }

    case 'nullable':
      return coerceV2ResponseData(data, schema.inner, requestSender);
  }
};
