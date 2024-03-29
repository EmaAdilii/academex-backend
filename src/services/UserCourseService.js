const UserCourse = require('../models/userCourseModel');
const Course = require('../models/courseModel');
const User = require('../models/userModel');


class UserCourseService {
    async getAllUserCourses() {
        try {
            const userCourses = await UserCourse.findAll();
            return userCourses;
        } catch (error) {
            throw error;
        }
    }

    async getAllUserCoursesByUserId(userId) {
        try {
            const userCourses = await UserCourse.findAll({ 
                where: { userId: userId },
                include: [
                    { model: Course, as: 'course' }, 
                    { model: User, as: 'user' }
                ]
            });
            // Extract and return the courses and users from the userCourses array
            const courses = userCourses.map(userCourse => userCourse.course);
            const users = userCourses.map(userCourses => userCourses.user)
            return { courses, users };
        } catch (error) {
            throw error;
        }
    }

    async getUserCourseById(id) {
        try {
            const userCourse = await UserCourse.findByPk(id, {
                include: [
                    { model: Course, as: 'course' }, 
                    { model: User, as: 'user' }
                ]
            });
            return userCourse;
        } catch (error) {
            throw error;
        }
    }
    

    async createUserCourse(data) {
        try {
            const userCourse = await UserCourse.create(data);
            return userCourse;
        } catch (error) {
            // Check if the error is related to database constraints
            if (error.name === 'SequelizeForeignKeyConstraintError') {
                throw new Error('User or course not found. Unable to create user course.');
            } else {
                throw error; // Throw any other errors
            }
        }
    }
    

    async updateUserCourse(id, data) {
        try {
            const userCourse = await UserCourse.findByPk(id);
            if (userCourse) {
                await userCourse.update(data);
                return userCourse;
            } else {
                throw new Error('User course not found - service');
            }
        } catch (error) {
            throw error;
        }
    }
    

    async deleteUserCourse(id) {
        try {
            const userCourse = await UserCourse.findByPk(id);
            if (userCourse) {
                await userCourse.destroy();
                return true;
            }
            return false;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserCourseService();
