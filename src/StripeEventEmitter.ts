import {RequestEvent, ResponseEvent} from './Types.js';

type Listener = (...args: any[]) => any;
type ListenerRegistration = {
  listener: Listener;
  once: boolean;
};

/**
 * @private
 * (For internal use in stripe-node.)
 * Minimal EventEmitter for runtimes without Event or EventTarget.
 */
export class StripeEventEmitter {
  private _listeners: Map<string, Array<ListenerRegistration>>;

  constructor() {
    this._listeners = new Map();
  }

  on(eventName: string, listener: Listener): void {
    this._getListeners(eventName).push({listener, once: false});
  }

  once(eventName: string, listener: Listener): void {
    this._getListeners(eventName).push({listener, once: true});
  }

  removeListener(eventName: string, listener: Listener): void {
    const listeners = this._listeners.get(eventName);
    if (!listeners) {
      return;
    }

    const index = listeners.findIndex((entry) => entry.listener === listener);
    if (index === -1) {
      return;
    }

    this._removeAt(eventName, index);
  }

  emit(eventName: string, data?: RequestEvent | ResponseEvent): boolean {
    const listeners = this._listeners.get(eventName);
    if (!listeners || listeners.length === 0) {
      return false;
    }

    for (const entry of [...listeners]) {
      if (entry.once) {
        this._removeAt(eventName, listeners.indexOf(entry));
      }
      entry.listener(data);
    }
    return true;
  }

  private _getListeners(eventName: string): Array<ListenerRegistration> {
    let listeners = this._listeners.get(eventName);
    if (!listeners) {
      listeners = [];
      this._listeners.set(eventName, listeners);
    }
    return listeners;
  }

  private _removeAt(eventName: string, index: number): void {
    const listeners = this._listeners.get(eventName);
    if (!listeners || index === -1) {
      return;
    }

    listeners.splice(index, 1);
    if (listeners.length === 0) {
      this._listeners.delete(eventName);
    }
  }
}
