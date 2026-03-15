import {V2RuntimeSchema} from './Types.js';

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
  schema: V2RuntimeSchema
): unknown => {
  if (data == null) {
    return data;
  }

  switch (schema.kind) {
    case 'int64_string':
      return typeof data === 'string' ? BigInt(data) : data;

    case 'object': {
      if (typeof data !== 'object' || Array.isArray(data)) {
        return data;
      }
      const obj = data as Record<string, unknown>;
      for (const key of Object.keys(schema.fields)) {
        if (key in obj) {
          obj[key] = coerceV2ResponseData(obj[key], schema.fields[key]);
        }
      }
      return obj;
    }

    case 'array': {
      if (!Array.isArray(data)) {
        return data;
      }
      for (let i = 0; i < data.length; i++) {
        data[i] = coerceV2ResponseData(data[i], schema.element);
      }
      return data;
    }

    case 'nullable':
      return coerceV2ResponseData(data, schema.inner);
  }
};
