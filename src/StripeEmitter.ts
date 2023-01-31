/** Minimal EventEmitter wrapper around EventTarget. */
class StripeEmitter {
  eventTarget: EventTarget;

  constructor(eventTarget: EventTarget) {
    this.eventTarget = eventTarget;
  }

  on(eventName: string, listener: (...args: any[]) => void): void {
    return this.eventTarget.addEventListener(eventName, listener);
  }

  removeListener(eventName: string, listener: (...args: any[]) => void): void {
    return this.eventTarget.removeEventListener(eventName, listener);
  }

  once(eventName: string, listener: (...args: any[]) => void): void {
    return this.eventTarget.addEventListener(eventName, listener, {
      once: true,
    });
  }

  emit(eventName: string, data: any): boolean {
    return this.eventTarget.dispatchEvent(new Event(eventName, data));
  }
}

export = StripeEmitter;
