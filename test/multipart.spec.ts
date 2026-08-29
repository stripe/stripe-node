// @ts-nocheck

import {NodePlatformFunctions} from '../src/platform/NodePlatformFunctions.js';
import {PlatformFunctions} from '../src/platform/PlatformFunctions.js';
import {multipartRequestDataProcessor} from '../src/multipart.js';

import {expect} from 'chai';

// Lines of the body that begin a header, so an injected CRLF that opens a new
// header line is visible even though the escaped text still contains the name.
function headerLines(body: string, prefix: string): Array<string> {
  return body.split('\r\n').filter((line) => line.startsWith(prefix));
}

const file = {
  data: 'file contents',
  name: 'minimal.pdf',
  type: 'application/pdf',
};

// The `worker`/`workerd`/`browser`/`bun`/`deno` exports all resolve to
// WebPlatformFunctions, which has no `uuid4` override — it uses the base
// implementation. Run the whole suite against both so the boundary is covered
// on the web path too, not just the Node one the bug was reported against.
if (process.versions.node < '15') {
  console.log(
    `Skipping WebPlatformFunctions multipart tests. Cannot load WebPlatformFunctions because 'Event' is not available in the global scope for ${process.version}.`
  );
} else {
  import(
    '../src/platform/WebPlatformFunctions.js'
  ).then(({WebPlatformFunctions}) => testMultipart(new WebPlatformFunctions()));
}

testMultipart(new NodePlatformFunctions());

function testMultipart(platformFunctions: PlatformFunctions): void {
  // Drives `multipartRequestDataProcessor` through a minimal stand-in for a
  // StripeResourceObject so the `headers` object it mutates is observable.
  function generate(data: any): Promise<{body: string; boundary: string}> {
    const headers: Record<string, string> = {};
    const resource = {_stripe: {_platformFunctions: platformFunctions}};

    return new Promise((resolve, reject) => {
      multipartRequestDataProcessor.call(
        resource,
        'POST',
        data,
        headers,
        (error: Error | null, buffer: Uint8Array | string | null) => {
          if (error) {
            reject(error);
            return;
          }
          const match = /boundary=(.+)$/.exec(headers['Content-Type']);
          resolve({
            body: new TextDecoder('utf8').decode(buffer as Uint8Array),
            boundary: match ? match[1] : '',
          });
        }
      );
    });
  }

  describe(`multipart (${platformFunctions.constructor.name})`, () => {
    describe('boundary', () => {
      it('is not derived from Math.random', async () => {
        // Pinning Math.random must not pin the boundary. A boundary an attacker
        // can predict lets a caller-influenced value (including the file bytes)
        // inject additional parts.
        const random$ = Math.random;
        Math.random = (): number => 0.5;
        try {
          const first = await generate({purpose: 'dispute_evidence', file});
          const second = await generate({purpose: 'dispute_evidence', file});

          // A v4 UUID. Hyphens are legal boundary characters (RFC 2046 §5.1.1).
          const v4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
          expect(first.boundary).to.match(v4);
          expect(second.boundary).to.match(v4);
          expect(first.boundary).to.not.equal(second.boundary);
        } finally {
          Math.random = random$;
        }
      });

      it('matches the delimiter used in the body', async () => {
        const {body, boundary} = await generate({
          purpose: 'dispute_evidence',
          file,
        });

        expect(body.startsWith(`--${boundary}\r\n`)).to.equal(true);
        expect(body.endsWith(`--${boundary}--\r\n`)).to.equal(true);
        // Two parts: two opening delimiters plus the closing one.
        expect(body.split(`--${boundary}`).length - 1).to.equal(3);
      });
    });

    describe('part header escaping', () => {
      it('strips CR/LF from a param name', async () => {
        const {body, boundary} = await generate({
          'a\r\nContent-Disposition: form-data; name="purpose': 'value',
          file,
        });

        expect(headerLines(body, 'Content-Disposition:')).to.have.lengthOf(2);
        expect(body.split(`--${boundary}`).length - 1).to.equal(3);
      });

      it('escapes quotes in a param name', async () => {
        const {body} = await generate({'a"b': 'value', file});

        expect(headerLines(body, 'Content-Disposition:')).to.deep.equal([
          'Content-Disposition: form-data; name="a%22b"',
          'Content-Disposition: form-data; name="file"; filename="minimal.pdf"',
        ]);
      });

      it('strips CR/LF from a filename', async () => {
        const {body} = await generate({
          file: {...file, name: 'a\r\nX-Injected: yes"b.pdf'},
        });

        expect(headerLines(body, 'X-Injected:')).to.deep.equal([]);
        expect(headerLines(body, 'Content-Disposition:')).to.deep.equal([
          'Content-Disposition: form-data; name="file"; ' +
            'filename="a X-Injected: yes%22b.pdf"',
        ]);
      });

      it('strips CR/LF from a file content type', async () => {
        const {body} = await generate({
          file: {...file, type: 'text/plain\r\nX-Injected: yes'},
        });

        expect(headerLines(body, 'X-Injected:')).to.deep.equal([]);
        expect(headerLines(body, 'Content-Type:')).to.deep.equal([
          'Content-Type: text/plain X-Injected: yes',
        ]);
      });
    });

    it('leaves a value carrying a guessed delimiter inert', async () => {
      // The value below is a complete forged part terminated by an epilogue
      // marker. Values cannot be sanitized — the file bytes *are* the document —
      // so the defense is that the real boundary is unguessable: the forgery
      // stays literal text inside a part body rather than reframing the request.
      const guessed = '00000000-0000-4000-8000-000000000000';
      const {body, boundary} = await generate({
        purpose: `--${guessed}\r\nContent-Disposition: form-data; name="file"; filename="evil.pdf"\r\n\r\nevil\r\n--${guessed}--`,
        file,
      });

      expect(boundary).to.not.equal(guessed);
      // Still two parts, and the real closing delimiter is still last: the
      // forged epilogue marker discarded nothing.
      expect(body.split(`--${boundary}`).length - 1).to.equal(3);
      expect(body.endsWith(`--${boundary}--\r\n`)).to.equal(true);
      expect(body).to.contain('file contents');
    });
  });
}
