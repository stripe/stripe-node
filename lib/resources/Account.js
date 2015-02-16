'use strict';

/**
 * Accounts used to be a singleton named Account. Preserve backwards compat
 * but supporting both. Accounts is the preferred file to use
 */
module.exports = require('./Accounts');
