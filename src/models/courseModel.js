const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db-connection');

const Teacher = require('./teacherModel');
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
      teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
  },
  {
    sequelize,
    modelName: 'Course',
    tableName: 'courses',
    timestamps: false,
  }
);

// Define associations with custom foreign keys
Course.belongsTo(Teacher, {
    foreignKey: 'teacher_id',
    as: 'teacher', 
  });
  
  Course.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category',
  });

module.exports = Course;



