const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db-connection');

class Category extends Model {}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }}, 
    {
        sequelize,
        modelName: 'Category',
        tableName: 'categories',
        timestamps: false,
    });

module.exports = Category;