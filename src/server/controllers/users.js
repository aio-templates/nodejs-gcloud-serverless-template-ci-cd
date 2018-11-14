import { default as models } from '../../models';
const sequelize = models.sequelize;

export default {
  async create(req, res) {
    try {
      const result = await sequelize.transaction(async t => {
        return await models.User.create(
          {
            username: req.body.username,
          },
          { transaction: t }
        );
      });
      res.status(200).send({
        message: 'Success creating User.',
        data: result,
      });
    } catch (err) {
      res.status(401).send({
        message: 'Unexpected error.',
        data: err,
      });
    }
  },

  async findAll(req, res) {
    try {
      const result = await models.User.findAll({
        include: [models.Task],
      });
      res.status(200).send({
        message: 'Success fetching all Users.',
        data: result,
      });
    } catch (err) {
      res.status(401).send({
        message: 'Unexpected error.',
        data: err,
      });
    }
  },

  async destroy(req, res) {
    try {
      const result = await sequelize.transaction(async t => {
        return await models.User.destroy(
          {
            where: {
              id: req.params.user_id,
            },
          },
          { transaction: t }
        );
      });
      res.status(200).send({
        message: 'Success deleting User.',
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
