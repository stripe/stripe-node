declare namespace Stripe {
  export interface StripeConfig {
    apiVersion?: string;
    maxNetworkRetries?: number;
    httpAgent?: Object; // TODO: improve types?
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

  // TODO
  export interface BankAccount {}
  export interface Card {}
}
