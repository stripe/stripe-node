// This file is registered in .mocharc, and is run before any tests are run.
// We need to globally register chai-as-promised here because this "extends" chai and
// otherwise the promise functionality will not be available in chai.
require('chai').use(require('chai-as-promised'));
