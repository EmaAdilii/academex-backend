const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const StudentController = require('../controllers/StudentController');
const TeacherController = require('../controllers/TeacherController');
const CategoryController = require('../controllers/CategoryController');
const CourseController = require('../controllers/CourseController');
const userValidator = require('../validators/userValidator');
const validate = require('../validators/validator');
const createUserValidator = userValidator.createUserValidator;


router.get('/', (req, res) => {
    res.send('Welcome to Academex!');
});

router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.post('/users/create', createUserValidator(), validate, UserController.createUser);
router.patch('/users/update', UserController.updateUser);
router.delete('/users/delete/:id', UserController.deleteUser);


router.get('/students', StudentController.getAllStudents);
router.get('/students/:id', StudentController.getStudentById);
router.post('/students/create', StudentController.createStudent);
router.patch('/students/update', StudentController.updateStudent);
router.delete('/students/delete/:id', StudentController.deleteStudent);


router.get('/teachers', TeacherController.getAllTeachers);
router.get('/teachers/:id', TeacherController.getTeacherById);
router.post('/teachers/create', TeacherController.createTeacher);
router.patch('/teachers/update', TeacherController.updateTeacher);
router.delete('/teachers/delete/:id', TeacherController.deleteTeacher);


router.get('/categories', CategoryController.getAllCategories);
router.get('/categories/:id', CategoryController.getCategoryById);
router.post('/categories/create', CategoryController.createCategory);
router.patch('/categories/update', CategoryController.updateCategory);
router.delete('/categories/delete/:id', CategoryController.deleteCategory);

router.get('/courses', CourseController.getAllCourses);
router.get('/courses/:id', CourseController.getCourseById);
router.post('/courses/create', CourseController.createCourse);
router.patch('/courses/update', CourseController.updateCourse);
router.delete('/courses/delete/:id', CourseController.deleteCourse);



module.exports = router;
