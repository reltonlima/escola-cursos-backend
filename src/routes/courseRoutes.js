const express = require('express');
const courseController = require('../controllers/courseController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to create a new course
router.post('/', authMiddleware.verifyToken, courseController.createCourse);

// Route to get all courses
router.get('/', courseController.getAllCourses);

// Route to get a specific course by ID
router.get('/:id', courseController.getCourseById);

// Route to update a course by ID
router.put('/:id', authMiddleware.verifyToken, courseController.updateCourse);

// Route to delete a course by ID
router.delete('/:id', authMiddleware.verifyToken, courseController.deleteCourse);

module.exports = router;