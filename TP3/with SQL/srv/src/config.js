const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "root.mysql.db",
    user: "root",
    password: "restblog",
    database: "restblog",
    connectTimeout: 60000,
    multipleStatements: true
  },
  listPerPage: 10
};
module.exports = config;
