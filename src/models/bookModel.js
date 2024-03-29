const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db-connection');

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING, 
      allowNull: true, 
    },
  },
  {
    sequelize,
    modelName: 'Book',
    tableName: 'books',
    timestamps: false,
  }
);

module.exports = Book;
