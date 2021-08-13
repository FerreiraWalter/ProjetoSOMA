
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: "root",
      password: "",
      database: "projeto_soma",
    },
    migrations: {
      tableName: "migrations",
      directory: `${__dirname}/src/database/migrations`
    }
  },
};
