'use strict';

var assert = require('assert');
var promisify = require('../lib/promisify.js');
var exec = require('child_process').exec;

describe('promisify', function () {
  it('promise should be created', function () {
    var execPro = promisify(exec);
  });
  it('promise should work as expected', function (done) {
    var execPro = promisify(exec);
    execPro('echo hello', null).then(function (value) {
      assert.equal(value[0], 'hello\n');
    }).then(done, done);
  });
});
