const userCourseService = require('../services/UserCourseService');
const UserCourse = require('../models/userCourseModel');




class UserCourseController {

    async getAllUserCourses(req, res) {
        try {
            const userCourse = await userCourseService.getAllUserCourses();
            res.status(200).json(userCourse);
        } catch (error) {
            console.error('Error fetching courses:', error);
            res.status(500).send('Error fetching courses - controller');
        }
    }
    
    async getAllUserCoursesByUserId(req, res) {
        const userId = req.params.userId;
        try {
            const userCoursesData = await userCourseService.getAllUserCoursesByUserId(userId);
            res.status(200).json(userCoursesData); 
            
        } catch (error) {
            console.error('Error fetching user courses:', error);
            res.status(500).send('Error fetching user courses');
        }
    }

    
    async getUserCourseById(req, res) {
        const id = req.params.id;
        try {
            const userCourse = await userCourseService.getUserCourseById(id);
            if (userCourse) {
                res.status(200).json(userCourse);
            } else {
                res.status(404).send('User course not found');
            }
        } catch (error) {
            console.error('Error fetching user course:', error);
            res.status(500).send('Error fetching user course');
        }
    }

    async createUserCourse(req, res) {
        const data = req.body;
        try {
            const newUserCourse = await userCourseService.createUserCourse(data);
            res.status(201).json(newUserCourse);
        } catch (error) {
            if (error.message.includes('User or course not found')) {
                res.status(404).send('User or course not found. Unable to create user course.');
            } else {
                console.error('Error creating user course:', error);
                res.status(500).send('Error creating user course');
            }
        }
    }
    

    async updateUserCourse(req, res) {
        const id = req.params.id;
        const data = req.body;
        try {
            const updatedUserCourse = await userCourseService.updateUserCourse(id, data);
            res.status(200).json(updatedUserCourse);
        } catch (error) {
            if (error.message === 'User course not found') {
                res.status(404).send('User course not found - controller');
            } else {
                console.error('Error updating user course:', error);
                res.status(500).send('Error updating user course - controller');
            }
        }
    }
    

    async deleteUserCourse(req, res) {
        const id = req.params.id;
        try {
            const deleted = await userCourseService.deleteUserCourse(id);
            if (deleted) {
                res.status(204).send("User Course deleted successfully!");
            } else {
                res.status(404).send('User course not found');
            }
        } catch (error) {
            console.error('Error deleting user course:', error);
            res.status(500).send('Error deleting user course');
        }
    }

    async enrollUserInCourse(req, res) {
        try {
            const { userId, courseId } = req.params;

            const existingEnrollment = await UserCourse.findOne({
                where: {
                    userId: userId,
                    courseId: courseId
                }
            });

            if (existingEnrollment) {
                return res.status(400).json({ message: 'User is already enrolled in the course' });
            }

            const newEnrollment = await UserCourse.create({
                userId: userId,
                courseId: courseId
            });

            return res.status(201).json(newEnrollment);
        } catch (error) {
            console.error('Error enrolling user in course:', error);
            return res.status(500).json({ message: 'Error enrolling user in course' });
        }
    }
}

module.exports = new UserCourseController();
