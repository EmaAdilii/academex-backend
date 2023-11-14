const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');
const TeacherController = require('../controllers/TeacherController');
const CategoryController = require('../controllers/CategoryController');
const CourseController = require('../controllers/CourseController');
const Controller = require('../controllers/Controller');

const validate = require('../validators/validator');
const studentValidator = require('../validators/studentValidator');
const teacherValidator = require('../validators/teacherValidator');
const categoryValidator = require('../validators/categoryValidator');
const courseValidator = require('../validators/courseValidator');

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


module.exports = router;
