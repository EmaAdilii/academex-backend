const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('academex', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;






























// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('academex', 'root', '', {
//   host: 'localhost',
//   dialect: 'mariadb',
//   define: {
//     // Your define options here
//     timestamps: true, // Adds createdAt and updatedAt timestamps to the model
//     underscored: true, // Converts camelCase to snake_case for column names
//     freezeTableName: true, // Prevents Sequelize from pluralizing table names
//   },
// });

// async function testDatabaseConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log('HOORAY. Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   } finally {
//     sequelize.close();
//   }
// }

// module.exports = { sequelize, testDatabaseConnection };



// const { Sequelize } = require('sequelize');cls
// const sequelize = new Sequelize('academex', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// async function testDatabaseConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log('HOORAY. Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   } finally {
//     sequelize.close();
//   }
// }

// testDatabaseConnection();










// const { createConnection } = require('typeorm');
// const Course = require('../entities/courseEntity'); 

// const entitiesList = [
//   Course
// ];


// async function connectToDatabase() {
//   try {
//     const connection = await createConnection({
//       type: 'mysql2',
//       host: process.env.DB_HOST,
//       port: process.env.DB_PORT, 
//       username: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       entities: entitiesList,
//       synchronize: true
//     });
//     console.log('Connected to the database');
//     return connection; 
//   } catch (error) {
//     console.error('Error connecting to the database:', error);
//     throw error; 
//   }
// }

// module.exports = connectToDatabase;






// const dotenv = require('dotenv');
// const mysql = require('mysql2');

// dotenv.config()

// const dbCredentials = {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// }

// const connection = mysql.createConnection(dbCredentials)

// connection.on('error', (error) => {
//   console.log(`Error connection to database: ` + error.message);
// })

// module.exports = connection;
