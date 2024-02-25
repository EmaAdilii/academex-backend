const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const CategoryController = require('../controllers/CategoryController');
const CourseController = require('../controllers/CourseController');
const Controller = require('../controllers/Controller');
const NewsController = require('../controllers/NewsController');
const BookController = require('../controllers/BookController')
const AboutUsController = require('../controllers/AboutUsController');
const UserCourseController = require('../controllers/UserCourseController');

const { checkAuth } = require('../middlewares/checkAuth');
const checkAdmin = require('../middlewares/checkAdmin');


const validate = require('../validators/validator');
const {createUserValidator, updateUserValidator} = require('../validators/userValidator');
const {createCategoryValidator, updateCategoryValidator} = require('../validators/categoryValidator');
const {createCourseValidator, updateCourseValidator} = require('../validators/courseValidator');
const {createNewsValidator, updateNewsValidator} = require('../validators/newsValidator');
const { createBookValidator, updateBookValidator } = require('../validators/bookValidator');
const { createAboutUsValidator, updateAboutUsValidator } = require('../validators/aboutUsValidator');


console.log(checkAuth)
console.log(checkAdmin)


//All data route
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

// User - Course routes
router.get('/user-courses', UserCourseController.getAllUserCourses);
router.get('/users/:userId/courses', UserCourseController.getAllUserCoursesByUserId);
router.get('/user-courses/:id', UserCourseController.getUserCourseById);
router.post('/users/:userId/courses/create', UserCourseController.createUserCourse);
router.patch('/user-courses/:id/update', UserCourseController.updateUserCourse);
router.delete('/user-courses/:id/delete', UserCourseController.deleteUserCourse);

// News routes
router.get('/news', NewsController.getAllNews);
router.get('/news/:id', NewsController.getNewsById);
router.post('/news/create', createNewsValidator(), validate, NewsController.createNews);
router.patch('/news/update', updateNewsValidator(), validate, NewsController.updateNews);
router.delete('/news/delete/:id', NewsController.deleteNews);

// Login route
router.post('/login', UserController.loginUser);

// Book routes
router.get('/books', BookController.getAllBooks);
router.get('/books/:id', BookController.getBookById);
router.post('/books/create', createBookValidator(), validate, BookController.createBook);
router.patch('/books/update', updateBookValidator(), validate, BookController.updateBook);
router.delete('/books/delete/:id', BookController.deleteBook);


// AboutUs routes
router.get('/aboutUs', AboutUsController.getAllAboutUs);
router.get('/aboutUs/:id', AboutUsController.getAboutUsById);
router.post('/aboutUs/create', createAboutUsValidator(), validate, AboutUsController.createAboutUs);
router.patch('/aboutUs/update', updateAboutUsValidator(), validate, AboutUsController.updateAboutUs);
router.delete('/aboutUs/delete/:id', AboutUsController.deleteAboutUs);



module.exports = router;






