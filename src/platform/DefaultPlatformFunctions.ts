/**
 * Interface encapsulating various utility functions whose
 * implementations depend on the platform / JS runtime.
 */
class DefaultPlatformFunctions {
  _UNAME_CACHE: Promise<string> | null;

  constructor() {
    this._UNAME_CACHE = null as Promise<string> | null;
  }

  /**
   * Calls Node's built-in `exec` function.
   * If the `child_process` module is not available, return an error.
   */
  safeExec(
    cmd: string,
    cb: (error: unknown, stdout: string | null) => void
  ): void {
    cb(new Error('exec not available'), null);
  }

  getUname(cb: (uname: string) => void): void {
    if (!this._UNAME_CACHE) {
      this._UNAME_CACHE = new Promise<string>((resolve) => {
        this.safeExec('uname -a', (err: unknown, uname: string | null) => {
          resolve(uname!);
        });
      });
    }
    this._UNAME_CACHE.then((uname: string) => cb(uname));
  }

  /**
   * Generates a v4 UUID. See https://stackoverflow.com/a/2117523
   */
  uuid4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  /**
   * Compares strings in constant time.
   */
  secureCompare(a: string, b: string): boolean {
    // return early here if buffer lengths are not equal
    if (a.length !== b.length) {
      return false;
    }

    const len = a.length;
    let result = 0;

    for (let i = 0; i < len; ++i) {
      result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return result === 0;
  }
}

export = DefaultPlatformFunctions;
