import { RequestData, RequestHeaders, StripeResourceObject } from './Types.js';
type MultipartCallbackReturn = any;
type MultipartCallback = (error: Error | null, data: Uint8Array | string | null) => MultipartCallbackReturn;
export declare function multipartRequestDataProcessor(this: StripeResourceObject, method: string, data: RequestData, headers: RequestHeaders, callback: MultipartCallback): MultipartCallbackReturn;
export {};
