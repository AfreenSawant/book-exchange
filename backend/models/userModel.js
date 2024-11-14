const connection = require('../config/db');

// User schema/model for MySQL
const createUserTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100) UNIQUE,
      password VARCHAR(255)
    )
  `;
  connection.query(query, (err, result) => {
    if (err) {
      console.log('Error creating table: ', err);
    } else {
      console.log('User table created');
    }
  });
};

createUserTable();
