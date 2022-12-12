// This file is here to appease TypeScript with functions stubs for utils
const dummy = (...args: any[]): any => {
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

export = commonUtils;
