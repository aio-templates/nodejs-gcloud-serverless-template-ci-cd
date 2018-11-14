import { default as models } from '../../models';
const sequelize = models.sequelize;

export default {
  async create(req, res) {
    try {
      let result = await sequelize.transaction(async t => {
        return await models.Task.create(
          {
            title: req.body.title,
            UserId: req.body.user_id,
          },
          { transaction: t }
        );
      });
      res.status(200).send({
        message: 'Success creating Task.',
        data: result,
      });
    } catch (err) {
      res.status(401).sene({
        message: 'Unexpected error.',
        data: err,
      });
    }
  },

  async destroy(req, res) {
    try {
      const result = await sequelize.transaction(async t => {
        return await models.Task.destroy(
          {
            where: {
              id: req.params.task_id,
            },
          },
          { transaction: t }
        );
      });
      res.status(200).send({
        message: 'Success deleting Task.',
        data: result,
      });
    } catch (err) {
      res.status(401).send({
        message: 'Unexpected error.',
        data: err,
      });
    }
  },
};
