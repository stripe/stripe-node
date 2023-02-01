/**
 * @private
 * (For internal use in stripe-node.)
 * Wrapper around the Event Web API.
 */
class _StripeEvent extends Event {
  data?: RequestEvent | ResponseEvent;
  constructor(eventName: string, data: any) {
    super(eventName);
    this.data = data;
  }
}

type Listener = (...args: any[]) => any;
type ListenerWrapper = (event: _StripeEvent) => void;

/** Minimal EventEmitter wrapper around EventTarget. */
class StripeEmitter {
  eventTarget: EventTarget;
  listenerMapping: Map<Listener, ListenerWrapper>;

  constructor() {
    this.eventTarget = new EventTarget();
    this.listenerMapping = new Map();
  }

  on(eventName: string, listener: Listener): void {
    const listenerWrapper: ListenerWrapper = (event: _StripeEvent): void => {
      listener(event.data);
    };
    this.listenerMapping.set(listener, listenerWrapper);
    return this.eventTarget.addEventListener(eventName, listenerWrapper);
  }

  removeListener(eventName: string, listener: Listener): void {
    const listenerWrapper = this.listenerMapping.get(listener);
    this.listenerMapping.delete(listener);
    return this.eventTarget.removeEventListener(eventName, listenerWrapper!);
  }

  once(eventName: string, listener: Listener): void {
    const listenerWrapper: ListenerWrapper = (event: _StripeEvent): void => {
      listener(event.data);
    };
    this.listenerMapping.set(listener, listenerWrapper);
    return this.eventTarget.addEventListener(eventName, listenerWrapper, {
      once: true,
    });
  }

  emit(eventName: string, data: RequestEvent | ResponseEvent): boolean {
    return this.eventTarget.dispatchEvent(new _StripeEvent(eventName, data));
  }
}

export = StripeEmitter;
