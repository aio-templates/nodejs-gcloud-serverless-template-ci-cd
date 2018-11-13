const models = require('../../models');

module.exports = {
  findAll(req, res) {
    models.User.findAll({
      include: [models.Task],
    }).then(function(users) {
      res.status(200).send({
        title: 'Sequelize: All Users Example',
        users: users,
      });
    });
  },

  create(req, res) {
    models.User.create({
      username: req.body.username,
    }).then(user => {
      res.status(200).send({
        message: 'Success creating User.',
        data: user,
      });
    });
  },

  destroy(req, res) {
    models.User.destroy({
      where: {
        id: req.params.user_id,
      },
    }).then(function() {
      res.status(200).send({
        message: 'Succes deleting User.',
      });
    });
  },
};
