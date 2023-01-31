/** @private
 * (For internal use in stripe-node.)
 * Wrapper around the Event Web API. */
class _StripeEvent extends Event {
  data: any;
  constructor(eventName: string, data: any) {
    super(eventName);
    this.data = data;
  }
}

/** Minimal EventEmitter wrapper around EventTarget. */
class StripeEmitter {
  eventTarget: EventTarget;
  listenerMapping: Record<string, (...args: any[]) => any>;

  constructor(eventTarget: EventTarget) {
    this.eventTarget = eventTarget;
    this.listenerMapping = {};
  }

  on(eventName: string, listener: (...args: any[]) => void): void {
    const listenerWrapper = (event: any): void => {
      listener(event.data);
    };
    this.listenerMapping[listener.toString()] = listenerWrapper;
    return this.eventTarget.addEventListener(eventName, listenerWrapper);
  }

  removeListener(eventName: string, listener: (...args: any[]) => void): void {
    const listenerWrapper = this.listenerMapping[listener.toString()];
    delete this.listenerMapping[listener.toString()];
    return this.eventTarget.removeEventListener(eventName, listenerWrapper);
  }

  once(eventName: string, listener: (...args: any[]) => void): void {
    const listenerWrapper = (event: any): void => {
      listener(event.data);
    };
    this.listenerMapping[listener.toString()] = listenerWrapper;
    return this.eventTarget.addEventListener(eventName, listenerWrapper, {
      once: true,
    });
  }

  emit(eventName: string, data: any): boolean {
    return this.eventTarget.dispatchEvent(new _StripeEvent(eventName, data));
  }
}

export = StripeEmitter;
