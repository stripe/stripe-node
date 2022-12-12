// This file is here to provide dummy implementations of functions defined in .'/utils'
// used in stripe.common.ts
const dummy = (...args: any[]): any => {
  // not implemented
};

const emptyUtils = {
  validateInteger: dummy,
  safeExec: dummy,
};

export = emptyUtils;
