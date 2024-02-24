const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db-connection');
const User = require('./userModel');
const Course = require('./courseModel');

class UserCourse extends Model {}

UserCourse.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        userId: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        },
        courseId: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Course,
                key: 'id'
            }
        }
    },
    {
        sequelize,
        modelName: 'UserCourse',
        tableName: 'user_courses',
        timestamps: false
    }
);

UserCourse.belongsTo(User, { foreignKey: 'userId' });
UserCourse.belongsTo(Course, { foreignKey: 'courseId' });

module.exports = UserCourse;
