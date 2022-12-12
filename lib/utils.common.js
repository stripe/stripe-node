'use strict';
// This file is here to appease TypeScript with functions stubs for utils
const dummy = (...args) => {
  // not implemented
};
// const utils = require('./utils');
// const {determineProcessUserAgentProperties, emitWarning} = utils;
// Stripe.utils = {
//   determineProcessUserAgentProperties: throwUnimplemented,
//   validateInteger: throwUnimplemented,
//   safeExec: throwUnimplemented,
// };
const commonUtils = {
  validateInteger: dummy,
  safeExec: dummy,
};
module.exports = commonUtils;
