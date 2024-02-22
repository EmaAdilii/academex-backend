const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');
const TeacherController = require('../controllers/TeacherController');
const CategoryController = require('../controllers/CategoryController');
const CourseController = require('../controllers/CourseController');
const Controller = require('../controllers/Controller');
const NewsController = require('../controllers/NewsController');
const BookController = require('../controllers/BookController')
const AboutUsController = require('../controllers/AboutUsController');




const validate = require('../validators/validator');
const studentValidator = require('../validators/studentValidator');
const teacherValidator = require('../validators/teacherValidator');
const categoryValidator = require('../validators/categoryValidator');
const courseValidator = require('../validators/courseValidator');
const { createNewsValidator, updateNewsValidator } = require('../validators/newsValidator');
const { createBookValidator, updateBookValidator } = require('../validators/bookValidator');
const { createAboutUsValidator, updateAboutUsValidator } = require('../validators/aboutUsValidator');






const createStudentValidator = studentValidator.createStudentValidator;
const updateStudentValidator = studentValidator.updateStudentValidator;
const createTeacherValidator = teacherValidator.createTeacherValidator;
const updateTeacherValidator = teacherValidator.updateTeacherValidator;
const createCategoryValidator = categoryValidator.createCategoryValidator;
const updateCategoryValidator = categoryValidator.updateCategoryValidator;
const createCourseValidator = courseValidator.createCourseValidator;
const updateCourseValidator = courseValidator.updateCourseValidator;



// router.get('/', (req, res) => {
//     res.send('Welcome to Academex!');
// });


//All data route
router.get('/allData', Controller.getAllData);


//Student routes
router.get('/students', StudentController.getAllStudents);
router.get('/students/:id', StudentController.getStudentById);
router.post('/students/create', createStudentValidator(), validate, StudentController.createStudent);
router.patch('/students/update', updateStudentValidator(), validate, StudentController.updateStudent);
router.delete('/students/delete/:id', StudentController.deleteStudent);


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






