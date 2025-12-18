import { RequestEvent, ResponseEvent } from './Types.js';
/**
 * @private
 * (For internal use in stripe-node.)
 * Wrapper around the Event Web API.
 */
declare class _StripeEvent extends Event {
    data?: RequestEvent | ResponseEvent;
    constructor(eventName: string, data: any);
}
type Listener = (...args: any[]) => any;
type ListenerWrapper = (event: _StripeEvent) => void;
/** Minimal EventEmitter wrapper around EventTarget. */
export declare class StripeEmitter {
    eventTarget: EventTarget;
    listenerMapping: Map<Listener, ListenerWrapper>;
    constructor();
    on(eventName: string, listener: Listener): void;
    removeListener(eventName: string, listener: Listener): void;
    once(eventName: string, listener: Listener): void;
    emit(eventName: string, data: RequestEvent | ResponseEvent): boolean;
}
export {};
