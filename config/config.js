module.exports = {
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
  },
  development: {
    username: 'moxiedbuser',
    password: 'MOxiePassword',
    database: 'moxie_laradock_rds_db',
    host: 'moxie-laradock-rds-db.csttsylfymrk.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
  },
  production: {
    username: 'moxiedbuser',
    password: 'MOxiePassword',
    database: 'moxie_laradock_rds_db',
    host: 'moxie-laradock-rds-db.csttsylfymrk.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
  },
};
