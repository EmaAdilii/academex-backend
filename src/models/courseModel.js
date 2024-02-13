const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db-connection');
const Category = require('./categoryModel');

class Course extends Model {}

Course.init(
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lecturer: { 
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: { 
      type: DataTypes.STRING,
      allowNull: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    modelName: 'Course',
    tableName: 'courses',
    timestamps: false,
  }
);

Course.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category',
});

module.exports = Course;
