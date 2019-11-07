'use strict';

const utils = require('./utils');

function getRequestOpts(self, requestArgs, spec, overrideData) {
  // Extract spec values with defaults.
  const commandPath = utils.makeURLInterpolator(spec.path || '');
  const requestMethod = (spec.method || 'GET').toUpperCase();
  const urlParams = spec.urlParams || [];
  const encode = spec.encode || ((data) => data);
  const host = spec.host;
  const path = self.createResourcePathWithSymbols(spec.path);

  // Don't mutate args externally.
  const args = [].slice.call(requestArgs);

  // Generate and validate url params.
  const urlData = urlParams.reduce((urlData, param) => {
    const arg = args.shift();
    if (typeof arg !== 'string') {
      throw new Error(
        `Stripe: Argument "${param}" must be a string, but got: ${arg} (on API request to \`${requestMethod} ${path}\`)`
      );
    }

    urlData[param] = arg;
    return urlData;
  }, {});

  // Pull request data and options (headers, auth) from args.
  const dataFromArgs = utils.getDataFromArgs(args);
  const data = encode(Object.assign({}, dataFromArgs, overrideData));
  const options = utils.getOptionsFromArgs(args);

  // Validate that there are no more args.
  if (args.length) {
    throw new Error(
      `Stripe: Unknown arguments (${args}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${requestMethod} \`${path}\`)`
    );
  }

  const requestPath = self.createFullPath(commandPath, urlData);
  const headers = Object.assign(options.headers, spec.headers);

  if (spec.validator) {
    spec.validator(data, {headers});
  }

  const dataInQuery = spec.method === 'GET' || spec.method === 'DELETE';
  const bodyData = dataInQuery ? {} : data;
  const queryData = dataInQuery ? data : {};

  return {
    requestMethod,
    requestPath,
    bodyData,
    queryData,
    auth: options.auth,
    headers,
    host,
    settings: options.settings,
  };
}

function makeRequest(self, requestArgs, spec, overrideData) {
  return new Promise((resolve, reject) => {
    try {
      var opts = getRequestOpts(self, requestArgs, spec, overrideData);
    } catch (err) {
      reject(err);
      return;
    }

    function requestCallback(err, response) {
      if (err) {
        reject(err);
      } else {
        resolve(
          spec.transformResponseData
            ? spec.transformResponseData(response)
            : response
        );
      }
    }

    const emptyQuery = Object.keys(opts.queryData).length === 0;
    const path = [
      opts.requestPath,
      emptyQuery ? '' : '?',
      utils.stringifyRequestData(opts.queryData),
    ].join('');

    const {headers, settings} = opts;

    self._request(
      opts.requestMethod,
      opts.host,
      path,
      opts.bodyData,
      opts.auth,
      {headers, settings},
      requestCallback
    );
  });
}

module.exports = makeRequest;
