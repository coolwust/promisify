'use strict';

function promisify(callback) {

  return function () {

    var args = [].slice.call(arguments, 0);
    var self = this;

    function executor(resolve, reject) {
      function done(err) {
        if (err) {
          reject(err);
        } else {
          resolve([].slice.call(arguments, 1));
        }
      }
      args.push(done);
      callback.apply(self, args);
    }

    return new Promise(executor);
  }
}

module.exports = promisify;
