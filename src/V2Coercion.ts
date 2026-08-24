import {Decimal} from './Decimal.js';
import {V2RuntimeSchema} from './Types.js';

const coerceV2RequestDiscriminatedUnion = (
  data: unknown,
  schema: V2RuntimeSchema & {kind: 'discriminatedUnion'}
): unknown => {
  if (typeof data !== 'object' || Array.isArray(data)) {
    return data;
  }
  const obj = data as Record<string, unknown>;
  const discriminatorValue = obj[schema.discriminator];

  // A discriminator that is absent, or present but not a string, is equally
  // unusable: either way there is no way to pick a variant schema. Skipping
  // coercion silently sends int64_string fields as raw JSON numbers and loses
  // precision above Number.MAX_SAFE_INTEGER, so fail instead.
  if (typeof discriminatorValue !== 'string') {
    throw new Error(
      `Missing or invalid discriminator \`${schema.discriminator}\` for a polymorphic ` +
        `parameter. Stripe uses this field to determine the shape of the value, so we ` +
        `cannot encode the request without it. Provide \`${schema.discriminator}\` with ` +
        `one of: ${Object.keys(schema.variants).join(', ')}.`
    );
  }

  // An unrecognized discriminator passes through untouched: we support sending
  // undocumented params when the caller uses the right shape.
  const variant = schema.variants[discriminatorValue];
  return variant ? coerceV2RequestData(data, variant) : data;
};

const coerceV2RequestObject = (
  data: unknown,
  schema: V2RuntimeSchema & {kind: 'object'}
): unknown => {
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
};

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

    case 'object': {
      return coerceV2RequestObject(data, schema);
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

    case 'discriminatedUnion': {
      return coerceV2RequestDiscriminatedUnion(data, schema);
    }
  }
};

// NOTE: these are separate from the request flavors above
// because the caller to coerceV2ResponseData expects data
// to be modified in place

const coerceV2ResponseDiscriminatedUnion = (
  data: unknown,
  schema: V2RuntimeSchema & {kind: 'discriminatedUnion'}
): unknown => {
  if (typeof data !== 'object' || Array.isArray(data)) {
    return data;
  }
  const obj = data as Record<string, unknown>;
  const discriminatorValue = obj[schema.discriminator];
  if (
    typeof discriminatorValue === 'string' &&
    discriminatorValue in schema.variants
  ) {
    return coerceV2ResponseData(data, schema.variants[discriminatorValue]);
  }
  return data;
};

const coerceV2ResponseObject = (
  data: unknown,
  schema: V2RuntimeSchema & {kind: 'object'}
): unknown => {
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

    case 'object': {
      return coerceV2ResponseObject(data, schema);
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

    case 'discriminatedUnion': {
      return coerceV2ResponseDiscriminatedUnion(data, schema);
    }
  }
};
