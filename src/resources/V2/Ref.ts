import {RequestSender} from '../../RequestSender.js';

/**
 * A typed reference to a V2 Stripe object. Contains the identifying fields
 * (`type`, `id`, `url`) from the wire representation plus a `fetch()` method
 * that resolves to the full object.
 */
export interface Ref<T> {
  /** String representing the type of the referenced object. */
  type: string;

  /** Unique identifier for the referenced object. */
  id: string;

  /** URL that can be used to retrieve the full object. */
  url: string;

  /** Fetches the full object this ref points to. */
  fetch(): Promise<T>;
}

/**
 * The raw wire shape of a Ref before `fetch()` is attached.
 */
export interface RefWireShape {
  type: string;
  id: string;
  url: string;
}

/**
 * Attaches a `fetch()` method to a raw ref wire object, returning a `Ref<T>`.
 *
 * The `fetch()` method issues a GET to `ref.url` using the provided
 * `requestSender`.
 */
export const attachRefFetch = <T>(
  ref: RefWireShape,
  requestSender: RequestSender
): Ref<T> => {
  return {
    ...ref,
    fetch(): Promise<T> {
      return requestSender._rawRequest('GET', ref.url, undefined, {}, [
        'ref_fetch',
      ]);
    },
  };
};
