const dotenv = require('dotenv');
const mysql = require('mysql2');

dotenv.config()

const dbCredentials = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}

const connection = mysql.createConnection(dbCredentials)

connection.on('error', (error) => {
  console.log(`Error connection to database: ` + error.message);
})

module.exports = connection;
