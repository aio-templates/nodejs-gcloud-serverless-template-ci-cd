import { users, tasks } from '../controllers';

export default app => {
  // Users
  app.get('/users', users.findAll);
  app.post('/users', users.create);
  app.delete('/users/:user_id', users.destroy);

  // Tasks
  app.post('/tasks', tasks.create);
  app.delete('/tasks/:user_id/:task_id', tasks.destroy);
};
