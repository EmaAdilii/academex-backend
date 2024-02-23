const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const TeacherController = require('../controllers/TeacherController');
const CategoryController = require('../controllers/CategoryController');
const CourseController = require('../controllers/CourseController');
const Controller = require('../controllers/Controller');
const NewsController = require('../controllers/NewsController'); 
const UserCourseController = require('../controllers/UserCourseController');

const validate = require('../validators/validator');
const {createUserValidator, updateUserValidator} = require('../validators/userValidator');
const { createTeacherValidator, updateTeacherValidator} = require('../validators/teacherValidator');
const {createCategoryValidator, updateCategoryValidator} = require('../validators/categoryValidator');
const {createCourseValidator, updateCourseValidator} = require('../validators/courseValidator');
const {createNewsValidator, updateNewsValidator} = require('../validators/newsValidator');
const { checkAuth } = require('../middlewares/checkAuth');
const checkAdmin = require('../middlewares/checkAdmin');

console.log(checkAuth)

// All data route
router.get('/allData', Controller.getAllData);

// User routes
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.post('/users/create', createUserValidator(), validate, UserController.createUser);
router.patch('/users/update', updateUserValidator(), validate, UserController.updateUser);
router.delete('/users/delete/:id', UserController.deleteUser);

// Category routes
router.get('/categories', CategoryController.getAllCategories);
router.get('/categories/:id', CategoryController.getCategoryById);
router.post('/categories/create', [checkAuth, checkAdmin], createCategoryValidator(), validate, CategoryController.createCategory);
router.patch('/categories/update', updateCategoryValidator(), validate, CategoryController.updateCategory);
router.delete('/categories/delete/:id', CategoryController.deleteCategory);

// Courses routes
router.get('/courses', CourseController.getAllCourses);
router.get('/courses/:id', [checkAuth], CourseController.getCourseById);
router.post('/courses/create', [checkAdmin], createCourseValidator(), validate, CourseController.createCourse);
router.patch('/courses/update', updateCourseValidator(), validate, CourseController.updateCourse);
router.delete('/courses/delete/:id', CourseController.deleteCourse);

// UserCourse routes
router.get('/user-courses/:userId', UserCourseController.getAllUserCourses);
// router.get('/user-courses/:id', UserCourseController.getUserCourseById);
router.post('/user-courses/create', UserCourseController.createUserCourse);
router.patch('/user-courses/update/:id', UserCourseController.updateUserCourse);
router.delete('/user-courses/delete/:id', UserCourseController.deleteUserCourse);
// router.post('/:userId/courses/', UserCourseController.enrollUserInCourse);


// News routes
router.get('/news', NewsController.getAllNews);
router.get('/news/:id', NewsController.getNewsById);
router.post('/news/create', createNewsValidator(), validate, NewsController.createNews);
router.patch('/news/update', updateNewsValidator(), validate, NewsController.updateNews);
router.delete('/news/delete/:id', NewsController.deleteNews);

// Login route
router.post('/login', UserController.loginUser);

module.exports = router;
