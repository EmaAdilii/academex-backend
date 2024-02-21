const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db-connection');

class AboutUs extends Model {}

AboutUs.init(
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'AboutUs',
    tableName: 'aboutUs', // Adjust the table name as needed
    timestamps: false,
  }
);

module.exports = AboutUs;
