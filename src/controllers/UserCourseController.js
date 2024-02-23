const userCourseService = require('../services/UserCourseService');

class UserCourseController {
    async getAllUserCourses(req, res) {
        try {
            // Extract the userId from the request parameters
            const userId = req.params.userId;
            const userCourses = await userCourseService.getAllUserCoursesByUserId(userId);
            res.status(200).json(userCourses);
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
            console.error('Error creating user course:', error);
            res.status(500).send('Error creating user course');
        }
    }

    async updateUserCourse(req, res) {
        const id = req.params.id;
        const data = req.body;
        try {
            const updatedUserCourse = await userCourseService.updateUserCourse(id, data);
            if (updatedUserCourse) {
                res.status(200).json(updatedUserCourse);
            } else {
                res.status(404).send('User course not found');
            }
        } catch (error) {
            console.error('Error updating user course:', error);
            res.status(500).send('Error updating user course');
        }
    }

    async deleteUserCourse(req, res) {
        const id = req.params.id;
        try {
            const deleted = await userCourseService.deleteUserCourse(id);
            if (deleted) {
                res.status(204).send();
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

            // Check if the user is already enrolled in the course
            const existingEnrollment = await UserCourse.findOne({
                where: {
                    userId: userId,
                    courseId: courseId
                }
            });

            if (existingEnrollment) {
                return res.status(400).json({ message: 'User is already enrolled in the course' });
            }

            // Create a new enrollment
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
