'use strict';

var Q = require('q');

/**
 * Returns a promise that is pre-rejected with provided rejection pass-through.
 * @param rejection
 * @returns {Q.promise}
 */
function rejectedPromise(rejection) {
  var deferred = Q.defer();
  deferred.reject(rejection);
  return deferred.promise;
}

module.exports = rejectedPromise;
