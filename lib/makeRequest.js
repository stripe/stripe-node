'use strict';

const utils = require('./utils');
const OPTIONAL_REGEX = /^optional!/;

function getRequestOpts(self, requestArgs, spec, overrideData) {
  // Extract spec values with defaults.
  const commandPath =
    typeof spec.path == 'function'
      ? spec.path
      : utils.makeURLInterpolator(spec.path || '');
  const requestMethod = (spec.method || 'GET').toUpperCase();
  const urlParams = spec.urlParams || [];
  const encode = spec.encode || ((data) => data);
  const host = spec.host;

  // Don't mutate args externally.
  const args = [].slice.call(requestArgs);

  // Generate and validate url params.
  const urlData = self.createUrlData();
  for (let i = 0, l = urlParams.length; i < l; ++i) {
    var path;

    // Note that we shift the args array after every iteration so this just
    // grabs the "next" argument for use as a URL parameter.
    const arg = args[0];

    let param = urlParams[i];

    const isOptional = OPTIONAL_REGEX.test(param);
    param = param.replace(OPTIONAL_REGEX, '');

    if (param == 'id' && typeof arg !== 'string') {
      path = self.createResourcePathWithSymbols(spec.path);
      throw new Error(
        'Stripe: "id" must be a string, but got: ' +
          typeof arg +
          ' (on API request to `' +
          requestMethod +
          ' ' +
          path +
          '`)'
      );
    }

    if (!arg) {
      if (isOptional) {
        urlData[param] = '';
        continue;
      }

      path = self.createResourcePathWithSymbols(spec.path);
      throw new Error(
        'Stripe: Argument "' +
          urlParams[i] +
          '" required, but got: ' +
          arg +
          ' (on API request to `' +
          requestMethod +
          ' ' +
          path +
          '`)'
      );
    }

    urlData[param] = args.shift();
  }

  // Pull request data and options (headers, auth) from args.
  const dataFromArgs = utils.getDataFromArgs(args);
  const data = encode(Object.assign({}, dataFromArgs, overrideData));
  const options = utils.getOptionsFromArgs(args);

  // Validate that there are no more args.
  if (args.length) {
    path = self.createResourcePathWithSymbols(spec.path);
    throw new Error(
      'Stripe: Unknown arguments (' +
        args +
        '). Did you mean to pass an options ' +
        'object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.' +
        ' (on API request to ' +
        requestMethod +
        ' `' +
        path +
        '`)'
    );
  }

  const requestPath = self.createFullPath(commandPath, urlData);
  const headers = Object.assign(options.headers, spec.headers);

  if (spec.validator) {
    spec.validator(data, {headers});
  }

  return {
    requestMethod,
    requestPath,
    data,
    auth: options.auth,
    headers,
    host,
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

    self._request(
      opts.requestMethod,
      opts.host,
      opts.requestPath,
      opts.data,
      opts.auth,
      {headers: opts.headers},
      requestCallback
    );
  });
}

module.exports = makeRequest;
