import {expect} from 'chai';
import {HttpClientResponse} from '../../src/net/HttpClient.js';

type JsonParseError = SyntaxError & {
  rawBody?: string;
};

class TestHttpClientResponse extends HttpClientResponse {
  parseResponseBody(body: string): any {
    return this._parseResponseBody(body);
  }
}

describe('HttpClientResponse', () => {
  const response = new TestHttpClientResponse(200, {});

  it('parses JSON response bodies', () => {
    expect(response.parseResponseBody('{"ok":true}')).to.deep.equal({ok: true});
  });

  it('attaches the raw body to JSON parsing errors', () => {
    let error: JsonParseError | undefined;

    try {
      response.parseResponseBody('{"ok"');
    } catch (e) {
      error = e as JsonParseError;
    }

    expect(error).to.be.an.instanceOf(SyntaxError);
    expect(error?.rawBody).to.equal('{"ok"');
  });
});
