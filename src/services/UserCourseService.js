const UserCourse = require('../models/userCourseModel');

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
            const userCourses = await UserCourse.findAll({ where: { userId: userId } });
            return userCourses;
        } catch (error) {
            throw error;
        }
    }

    async getUserCourseById(id) {
        try {
            const userCourse = await UserCourse.findByPk(id);
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
            throw error;
        }
    }

    async updateUserCourse(id, data) {
        try {
            const userCourse = await UserCourse.findByPk(id);
            if (userCourse) {
                await userCourse.update(data);
                return userCourse;
            }
            return null;
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
