const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "eduwork-cruds-v2",
  host: "localhost",
  username: "root",
  password: "sinabeLAH12345",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("connection has been established succesfully");
  } catch (error) {
    console.log("enable to connect to database:", error);
  }
})();

module.exports = sequelize;
