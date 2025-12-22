import { StripeClient } from './stripe.core.js';
import { StripeResourceObject } from './Types.js';
export type StripeResourceNamespaceObject = {
    [key: string]: StripeResourceObject | StripeResourceNamespaceObject;
};
export declare function resourceNamespace(namespace: string, resources: Record<string, new (...args: any[]) => StripeResourceObject | StripeResourceNamespaceObject>): new (stripe: StripeClient) => StripeResourceNamespaceObject;
