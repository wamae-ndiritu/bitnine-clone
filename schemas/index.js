const createUsersTable = require("./users");

const initDB = async () => {
  try {
    await createUsersTable();
  } catch (err) {
    console.log(err);
  }
};

module.exports = initDB;
