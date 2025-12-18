import { protoExtend } from './utils.js';
import { stripeMethod } from './StripeMethod.js';
import { StripeResourceObject, RequestArgs, MethodSpec, RequestData, RequestOpts, UrlInterpolator } from './Types.js';
import { Stripe } from './stripe.core.js';
/**
 * Encapsulates request logic for a Stripe Resource
 */
declare class StripeResource implements StripeResourceObject {
    static extend: typeof protoExtend;
    static method: typeof stripeMethod;
    static MAX_BUFFERED_REQUEST_METRICS: number;
    _stripe: Stripe;
    path: UrlInterpolator;
    resourcePath: string;
    basePath: UrlInterpolator;
    requestDataProcessor: any;
    validateRequest: any;
    constructor(stripe: Stripe, deprecatedUrlData?: never);
    initialize(_stripe?: Stripe, _deprecatedUrlData?: never): void;
    createFullPath(commandPath: string | ((urlData: Record<string, unknown>) => string), urlData: Record<string, unknown>): string;
    createResourcePathWithSymbols(pathWithSymbols: string | null | undefined): string;
    _joinUrlParts(parts: Array<string>): string;
    _getRequestOpts(requestArgs: RequestArgs, spec: MethodSpec, overrideData: RequestData): RequestOpts;
    _makeRequest(requestArgs: RequestArgs, spec: MethodSpec, overrideData: RequestData): Promise<any>;
}
export { StripeResource };
