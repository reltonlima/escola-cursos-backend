const express = require('express');
const lessonController = require('../controllers/lessonController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to create a new lesson
router.post('/', authMiddleware.verifyToken, lessonController.createLesson);

// Route to get all lessons
router.get('/', lessonController.getAllLessons);

// Route to get a lesson by ID
router.get('/:id', lessonController.getLessonById);

// Route to update a lesson
router.put('/:id', authMiddleware.verifyToken, lessonController.updateLesson);

// Route to delete a lesson
router.delete('/:id', authMiddleware.verifyToken, lessonController.deleteLesson);

module.exports = router;