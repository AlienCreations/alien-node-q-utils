'use strict';

var Q = require('q');

/**
 * Returns a promise that is pre-resolved with provided resolution pass-through.
 * @param resolution
 * @returns {Q.promise}
 */
function resolvedPromise(resolution) {
  var deferred = Q.defer();
  deferred.resolve(resolution);
  return deferred.promise;
}

module.exports = resolvedPromise;
