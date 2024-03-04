const express = require('express');
const router = express.Router();
//Controllers
const UserController = require('../controllers/UserController');
const CategoryController = require('../controllers/CategoryController');
const CourseController = require('../controllers/CourseController');
const Controller = require('../controllers/Controller');
const NewsController = require('../controllers/NewsController');
const BookController = require('../controllers/BookController')
const AboutUsController = require('../controllers/AboutUsController');
const ContactController = require('../controllers/ContactController');
const UserCourseController = require('../controllers/UserCourseController');


//Validators
const validate = require('../validators/validator');
const { createNewsValidator, updateNewsValidator } = require('../validators/newsValidator');
const { createBookValidator, updateBookValidator } = require('../validators/bookValidator');
const { createAboutUsValidator, updateAboutUsValidator } = require('../validators/aboutUsValidator');
const {createUserValidator, updateUserValidator} = require('../validators/userValidator');
const {createCategoryValidator, updateCategoryValidator} = require('../validators/categoryValidator');
const {createCourseValidator, updateCourseValidator} = require('../validators/courseValidator');

//Middlewares
const { checkAuth } = require('../middlewares/checkAuth');
const checkAdmin = require('../middlewares/checkAdmin');
console.log(checkAuth)
console.log(checkAdmin)


//All data route
router.get('/allData', Controller.getAllData);

// User routes
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.post('/users/create', createUserValidator(), validate, UserController.createUser);
router.patch('/users/update/:id', [checkAuth, checkAdmin], updateUserValidator(), validate, UserController.updateUser);
router.delete('/users/delete/:id', [checkAuth, checkAdmin], UserController.deleteUser);

// Category routes
router.get('/categories', CategoryController.getAllCategories);
router.get('/categories/:id', CategoryController.getCategoryById);
router.post('/categories/create', [checkAuth, checkAdmin], createCategoryValidator(), validate, CategoryController.createCategory);
router.patch('/categories/update/:id', [checkAuth, checkAdmin], updateCategoryValidator(), validate, CategoryController.updateCategory);
router.delete('/categories/delete/:id', [checkAuth, checkAdmin], CategoryController.deleteCategory);

// Courses routes
router.get('/courses', CourseController.getAllCourses);
router.get('/courses/:id', [checkAuth], CourseController.getCourseById);
router.post('/courses/create', [checkAuth, checkAdmin], createCourseValidator(), validate, CourseController.createCourse);
router.patch('/courses/update/:id', [checkAuth, checkAdmin], updateCourseValidator(), validate, CourseController.updateCourse);
router.delete('/courses/delete/:id', [checkAuth, checkAdmin], CourseController.deleteCourse);

// User - Course routes
router.get('/user-courses', UserCourseController.getAllUserCourses);
router.get('/users/:userId/courses', UserCourseController.getAllUserCoursesByUserId);
router.get('/user-courses/:id', UserCourseController.getUserCourseById);
router.post('/users/:userId/courses/create', UserCourseController.createUserCourse);
router.patch('/user-courses/:id/update', [checkAuth, checkAdmin], UserCourseController.updateUserCourse);
router.delete('/user-courses/:id/delete', [checkAuth, checkAdmin], UserCourseController.deleteUserCourse);

// News routes
router.get('/news', NewsController.getAllNews);
router.get('/news/:id', NewsController.getNewsById);
router.post('/news/create', [checkAuth, checkAdmin], createNewsValidator(), validate, NewsController.createNews);
router.patch('/news/update/:id', [checkAuth, checkAdmin], updateNewsValidator(), validate, NewsController.updateNews);
router.delete('/news/delete/:id', [checkAuth, checkAdmin], NewsController.deleteNews);

// Login route
router.post('/login', UserController.loginUser);

// Book routes
router.get('/books', BookController.getAllBooks);
router.get('/books/:id', BookController.getBookById);
router.post('/books/create', [checkAuth, checkAdmin], createBookValidator(), validate, BookController.createBook);
router.patch('/books/update/:id', [checkAuth, checkAdmin], updateBookValidator(), validate, BookController.updateBook);
router.delete('/books/delete/:id', [checkAuth, checkAdmin], BookController.deleteBook);


// AboutUs routes
router.get('/aboutUs', AboutUsController.getAllAboutUs);
router.get('/aboutUs/:id', AboutUsController.getAboutUsById);
router.post('/aboutUs/create', [checkAuth, checkAdmin], createAboutUsValidator(), validate, AboutUsController.createAboutUs);
router.patch('/aboutUs/update/:id', [checkAuth, checkAdmin], updateAboutUsValidator(), validate, AboutUsController.updateAboutUs);
router.delete('/aboutUs/delete/:id', [checkAuth, checkAdmin], AboutUsController.deleteAboutUs);

// Contact Route
// router.post('/contact', [contactFormValidator], ContactController.submitContactForm);
router.get('/contact', ContactController.getAllContacts);
router.get('/contact/:id', ContactController.getContactById);
router.post('/contact/create', ContactController.createContact);
router.patch('/contact/update/:id', ContactController.updateContact);
router.delete('/contact/delete/:id', [checkAuth, checkAdmin], ContactController.deleteContact);




module.exports = router;

