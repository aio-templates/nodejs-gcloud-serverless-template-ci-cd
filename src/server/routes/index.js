const usersController = require('../controllers').users;
const tasksController = require('../controllers').tasks;

module.exports = app => {
  // Users
  app.get('/', usersController.findAll);
  app.post('/create', usersController.create);
  app.get('/:user_id/destroy', usersController.destroy);

  // Tasks
  app.post('/:user_id/tasks/create', tasksController.create);
  app.get('/:user_id/tasks/:task_id/destroy', tasksController.destroy);
};
