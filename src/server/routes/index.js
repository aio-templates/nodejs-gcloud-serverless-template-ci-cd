import { users, tasks } from '../controllers';

export default app => {
  // Users
  app.get('/', users.findAll);
  app.post('/create', users.create);
  app.get('/:user_id/destroy', users.destroy);

  // Tasks
  app.post('/:user_id/tasks/create', tasks.create);
  app.get('/:user_id/tasks/:task_id/destroy', tasks.destroy);
};
