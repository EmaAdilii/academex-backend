const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db-connection');

class AboutSection extends Model {}

AboutSection.init(
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
      type: DataTypes.TEXT, // Changed to TEXT to allow for longer descriptions
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING, // Can be a path to the image or a class name for a font icon
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'AboutUs',
    tableName: 'aboutUs', 
    timestamps: false,
  }
);

module.exports = AboutSection;
