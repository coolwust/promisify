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
          var args = [].slice.call(arguments, 1);
          switch (args.length) {
            case 0:
              resolve();
              break;
            case 1:
              resolve(args[0]);
              break;
            case 2:
              resolve(args);
          }
        }
      }
      args.push(done);
      callback.apply(self, args);
    }

    return new Promise(executor);
  }
}

module.exports = promisify;
