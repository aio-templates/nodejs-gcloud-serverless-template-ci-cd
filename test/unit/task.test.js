import 'babel-polyfill';
import expect from 'expect.js';
import models from '../../src/models';

describe('models/task', function() {
  before(function() {
    return models.sequelize.sync();
  });

  beforeEach(function() {
    this.User = models.User;
    this.Task = models.Task;
  });

  describe('create', function() {
    it('creates a task', function() {
      return this.User.create({ username: 'johndoe' })
        .bind(this)
        .then(function(user) {
          return this.Task.create({ title: 'a title', UserId: user.id }).then(
            function(task) {
              expect(task.title).to.equal('a title');
            }
          );
        });
    });
  });
});
