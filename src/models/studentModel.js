const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db-connection'); 

class Student extends Model {
    
}
Student.init(
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Make sure email is unique
        validate: {
            isEmail: true, // Enforce email format validation
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8, 255], // Enforce a minimum password length
        },
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'Student',
    tableName: 'students',
    timestamps: false,
});

module.exports = Student;
