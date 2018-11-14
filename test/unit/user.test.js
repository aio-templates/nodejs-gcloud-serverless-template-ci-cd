import 'babel-polyfill';
import expect from 'expect.js';
import models from '../../src/models';

describe('models/index', function() {
  it('returns the task model', function() {
    expect(models.Task).to.be.ok();
  });

  it('returns the user model', function() {
    expect(models.User).to.be.ok();
  });
});
