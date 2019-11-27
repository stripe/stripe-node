declare namespace Stripe {
  export interface StripeConfig {
    apiVersion?: string;
    maxNetworkRetries?: number;
    httpAgent?: HttpAgent;
    timeout?: number;
    host?: string;
    port?: string | number; // TODO: double-check
    telemetry?: boolean;
  }

  export interface HeaderOptions {}

  export interface ApiList<T> {
    has_more: boolean;
    data: Array<T>;
  }

  export interface RequestEvent {
    api_version: string;
    account?: string;
    idempotency_key?: string;
    method: string;
    path: string;
    request_start_time: number;
  }

  export interface ResponseEvent {
    api_version: string;
    account?: string;
    idempotency_key?: string;
    method: string;
    path: string;
    status: number;
    request_id: string;
    elapsed: number;
    request_start_time: number;
    request_end_time: number;
  }

  /**
   * Should be https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/http.d.ts#L326
   */
  export class HttpAgent {
    maxFreeSockets: number;
    maxSockets: number;
    readonly sockets: {
      readonly [key: string]: Object[];
    };
    readonly requests: {
      readonly [key: string]: Object[];
    };
    constructor(options: Object);
    destroy(): void;
  }
}
