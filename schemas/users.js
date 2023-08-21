const { db } = require("../configDB");

function createUsersTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS users(
      user_id INT AUTO_INCREMENT,
      username VARCHAR(100),
      email VARCHAR(200),
      password VARCHAR(255),
      PRIMARY KEY(user_id)
    )`;

  return new Promise((resolve, reject) => {
    db.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = createUsersTable;
