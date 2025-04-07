const express = require('express');
const progressController = require('../controllers/progressController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to get progress of a specific user
router.get('/:userId/progress', authMiddleware.verifyToken, progressController.getProgress);

// Route to update progress for a specific lesson
router.post('/:userId/progress', authMiddleware.verifyToken, progressController.updateProgress);

// Route to get all completed lessons for a specific user
router.get('/:userId/completed-lessons', authMiddleware.verifyToken, progressController.getCompletedLessons);

module.exports = router;