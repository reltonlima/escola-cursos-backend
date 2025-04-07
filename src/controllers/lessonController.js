const Lesson = require('../models/lessonModel');

// Create a new lesson
exports.createLesson = async (req, res) => {
    try {
        const { title, content, courseId } = req.body;
        const newLesson = await Lesson.create({ title, content, courseId });
        res.status(201).json(newLesson);
    } catch (error) {
        res.status(500).json({ message: 'Error creating lesson', error });
    }
};

// Get all lessons
exports.getLessons = async (req, res) => {
    try {
        const lessons = await Lesson.findAll();
        res.status(200).json(lessons);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching lessons', error });
    }
};

// Get a lesson by ID
exports.getLessonById = async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id);
        if (!lesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(200).json(lesson);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching lesson', error });
    }
};

// Update a lesson
exports.updateLesson = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedLesson = await Lesson.update(req.params.id, { title, content });
        if (!updatedLesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(200).json(updatedLesson);
    } catch (error) {
        res.status(500).json({ message: 'Error updating lesson', error });
    }
};

// Delete a lesson
exports.deleteLesson = async (req, res) => {
    try {
        const deletedLesson = await Lesson.delete(req.params.id);
        if (!deletedLesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting lesson', error });
    }
};