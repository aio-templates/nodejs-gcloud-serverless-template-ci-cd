import models from '../../models';

export default {
  create(req, res) {
    models.Task.create({
      title: req.body.title,
      UserId: req.params.user_id,
    }).then(task => {
      res.status(200).send({
        message: 'Success creating Task.',
        data: task,
      });
    });
  },

  destroy(req, res) {
    models.Task.destroy({
      where: {
        id: req.params.task_id,
      },
    }).then(() => {
      res.status(200).send({
        message: 'Succes deleting Task.',
      });
    });
  },
};
