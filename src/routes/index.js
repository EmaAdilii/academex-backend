const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const TeacherController = require('../controllers/TeacherController');
const CategoryController = require('../controllers/CategoryController');
const CourseController = require('../controllers/CourseController');
const Controller = require('../controllers/Controller');
const NewsController = require('../controllers/NewsController'); 

const validate = require('../validators/validator');
const {createUserValidator, updateUserValidator} = require('../validators/userValidator');
const { createTeacherValidator, updateTeacherValidator} = require('../validators/teacherValidator');
const {createCategoryValidator, updateCategoryValidator} = require('../validators/categoryValidator');
const {createCourseValidator, updateCourseValidator} = require('../validators/courseValidator');
const {createNewsValidator, updateNewsValidator} = require('../validators/newsValidator');

//All data route
router.get('/allData', Controller.getAllData);

//User routes
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.post('/users/create', createUserValidator(), validate, UserController.createUser);
router.patch('/users/update', updateUserValidator(), validate, UserController.updateUser);
router.delete('/users/delete/:id', UserController.deleteUser);

//Teacher routes
router.get('/teachers', TeacherController.getAllTeachers);
router.get('/teachers/:id', TeacherController.getTeacherById);
router.post('/teachers/create', createTeacherValidator(), validate, TeacherController.createTeacher);
router.patch('/teachers/update', updateTeacherValidator(), validate, TeacherController.updateTeacher);
router.delete('/teachers/delete/:id', TeacherController.deleteTeacher);

//Category routes
router.get('/categories', CategoryController.getAllCategories);
router.get('/categories/:id', CategoryController.getCategoryById);
router.post('/categories/create', createCategoryValidator(), validate, CategoryController.createCategory);
router.patch('/categories/update', updateCategoryValidator(), validate, CategoryController.updateCategory);
router.delete('/categories/delete/:id', CategoryController.deleteCategory);

//Courses routes
router.get('/courses', CourseController.getAllCourses);
router.get('/courses/:id', CourseController.getCourseById);
router.post('/courses/create', createCourseValidator(), validate, CourseController.createCourse);
router.patch('/courses/update', updateCourseValidator(), validate, CourseController.updateCourse);
router.delete('/courses/delete/:id', CourseController.deleteCourse);

// News routes
router.get('/news', NewsController.getAllNews);
router.get('/news/:id', NewsController.getNewsById);
router.post('/news/create', createNewsValidator(), validate, NewsController.createNews);
router.patch('/news/update', updateNewsValidator(), validate, NewsController.updateNews);
router.delete('/news/delete/:id', NewsController.deleteNews);

module.exports = router;
