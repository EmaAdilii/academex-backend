const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const CategoryController = require('../controllers/CategoryController');
const CourseController = require('../controllers/CourseController');
const Controller = require('../controllers/Controller');
const NewsController = require('../controllers/NewsController');
const BookController = require('../controllers/BookController')
const AboutUsController = require('../controllers/AboutUsController');

const validate = require('../validators/validator');
const { createNewsValidator, updateNewsValidator } = require('../validators/newsValidator');
const { createBookValidator, updateBookValidator } = require('../validators/bookValidator');
const { createAboutUsValidator, updateAboutUsValidator } = require('../validators/aboutUsValidator');

const ContactController = require('../controllers/ContactController');
const UserCourseController = require('../controllers/UserCourseController');
const {createUserValidator, updateUserValidator} = require('../validators/userValidator');
const {createCategoryValidator, updateCategoryValidator} = require('../validators/categoryValidator');
const {createCourseValidator, updateCourseValidator} = require('../validators/courseValidator');


const { checkAuth } = require('../middlewares/checkAuth');
const checkAdmin = require('../middlewares/checkAdmin');

console.log(checkAuth)

// All data route
router.get('/allData', Controller.getAllData);

// User routes
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.post('/users/create', createUserValidator(), validate, UserController.createUser);
router.patch('/users/update/:id', updateUserValidator(), validate, UserController.updateUser);
router.delete('/users/delete/:id', UserController.deleteUser);

// Category routes
router.get('/categories', CategoryController.getAllCategories);
router.get('/categories/:id', CategoryController.getCategoryById);
router.post('/categories/create', createCategoryValidator(), validate, CategoryController.createCategory);
router.patch('/categories/update/:id', updateCategoryValidator(), validate, CategoryController.updateCategory);
router.delete('/categories/delete/:id', CategoryController.deleteCategory);

// Courses routes
router.get('/courses', CourseController.getAllCourses);
router.get('/courses/:id', CourseController.getCourseById);
router.post('/courses/create', createCourseValidator(), validate, CourseController.createCourse);
router.patch('/courses/update/:id', updateCourseValidator(), validate, CourseController.updateCourse);
router.delete('/courses/delete/:id', CourseController.deleteCourse);

// UserCourse routes
router.get('/user-courses/:userId', UserCourseController.getAllUserCourses);
router.get('/user-courses/:id', UserCourseController.getUserCourseById);
router.post('/user-courses/create', UserCourseController.createUserCourse);
router.patch('/user-courses/update/:id', UserCourseController.updateUserCourse);
router.delete('/user-courses/delete/:id', UserCourseController.deleteUserCourse);
// router.post('/:userId/courses/', UserCourseController.enrollUserInCourse);


// News routes
router.get('/news', NewsController.getAllNews);
router.get('/news/:id', NewsController.getNewsById);
router.post('/news/create', createNewsValidator(), validate, NewsController.createNews);
router.patch('/news/update/:id', updateNewsValidator(), validate, NewsController.updateNews);
router.delete('/news/delete/:id', NewsController.deleteNews);

// Login route
router.post('/login', UserController.loginUser);

// Book routes
router.get('/books', BookController.getAllBooks);
router.get('/books/:id', BookController.getBookById);
router.post('/books/create', createBookValidator(), validate, BookController.createBook);
router.patch('/books/update/:id', updateBookValidator(), validate, BookController.updateBook);
router.delete('/books/delete/:id', BookController.deleteBook);


// AboutUs routes
router.get('/aboutUs', AboutUsController.getAllAboutUs);
router.get('/aboutUs/:id', AboutUsController.getAboutUsById);
router.post('/aboutUs/create', createAboutUsValidator(), validate, AboutUsController.createAboutUs);
router.patch('/aboutUs/update', updateAboutUsValidator(), validate, AboutUsController.updateAboutUs);
router.delete('/aboutUs/delete/:id', AboutUsController.deleteAboutUs);

// Contact Route
// router.post('/contact', [contactFormValidator], ContactController.submitContactForm);
router.get('/contact', ContactController.getAllContacts);
router.get('/contact/:id', ContactController.getContactById);
router.post('/contact/create', ContactController.createContact);
router.patch('/contact/update', ContactController.updateContact);
router.delete('/contact/delete/:id', ContactController.deleteContact);

module.exports = router;






