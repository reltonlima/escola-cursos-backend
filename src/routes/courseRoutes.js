const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Rotas de cursos
router.get('/', courseController.getAllCourses);
router.post('/', courseController.createCourse);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);
router.get('/:id/lessons', courseController.getCourseWithLessons);

module.exports = router;