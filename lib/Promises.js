'use strict';

module.exports = {
  rejectOnErrorOrResolve : require('./methods/rejectOnErrorOrResolve'),
  rejectedPromise        : require('./methods/rejectedPromise'),
  resolvedPromise        : require('./methods/resolvedPromise'),
  mapP                   : require('./methods/mapP'),
  mapObjP                : require('./methods/mapObjP'),
  mapPairs               : require('./methods/mapPairs')
};
