'use strict';

var R = require('ramda'),
    Q = require('q');

var rejectOnErrorOrResolve = require('../lib/methods/rejectOnErrorOrResolve');

var mockPromiseNoError = function(resolveWith) {
  var deferred = Q.defer();
  rejectOnErrorOrResolve(deferred, undefined, resolveWith);
  return deferred.promise;
};

var mockPromiseWithError = function(err) {
  var deferred = Q.defer();
  rejectOnErrorOrResolve(deferred, err, undefined);
  return deferred.promise;
};

var FAKE_RESOLVE_WITH = 'Success!',
    FAKE_ERR          = { code : 6000, message : 'Failed!' };

describe('rejectOnErrorOrResolve', function() {

  it('should resolve a promise where no error is provided', function(done) {
    mockPromiseNoError(FAKE_RESOLVE_WITH).then(function(result) {
      expect(result).toBe(FAKE_RESOLVE_WITH);
      done();
    });
  });

  it('should reject a promise where an error is provided', function(done) {
    mockPromiseWithError(FAKE_ERR).catch(function(err) {
      expect(err).toBe(FAKE_ERR);
      done();
    })
  });

});

