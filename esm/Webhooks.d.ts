import { CryptoProvider } from './crypto/CryptoProvider.js';
import { PlatformFunctions } from './platform/PlatformFunctions.js';
type WebhookHeader = string | Uint8Array;
type WebhookTestHeaderOptions = {
    timestamp: number;
    payload: string;
    secret: string;
    scheme: string;
    signature: string;
    cryptoProvider: CryptoProvider;
};
export type WebhookEvent = Record<string, unknown>;
type WebhookPayload = string | Uint8Array;
type WebhookSignatureObject = {
    verifyHeader: (encodedPayload: WebhookPayload, encodedHeader: WebhookHeader, secret: string, tolerance: number, cryptoProvider: CryptoProvider, receivedAt: number) => boolean;
    verifyHeaderAsync: (encodedPayload: WebhookPayload, encodedHeader: WebhookHeader, secret: string, tolerance: number, cryptoProvider: CryptoProvider, receivedAt: number) => Promise<boolean>;
};
export type WebhookObject = {
    DEFAULT_TOLERANCE: number;
    signature: WebhookSignatureObject | null;
    constructEvent: (payload: WebhookPayload, header: WebhookHeader, secret: string, tolerance: null, cryptoProvider: CryptoProvider, receivedAt: number) => WebhookEvent;
    constructEventAsync: (payload: WebhookPayload, header: WebhookHeader, secret: string, tolerance: number, cryptoProvider: CryptoProvider, receivedAt: number) => Promise<WebhookEvent>;
    generateTestHeaderString: (opts: WebhookTestHeaderOptions) => string;
    generateTestHeaderStringAsync: (opts: WebhookTestHeaderOptions) => Promise<string>;
};
export declare function createWebhooks(platformFunctions: PlatformFunctions): WebhookObject;
export {};
