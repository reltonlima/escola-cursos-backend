const { Lesson } = require('../models'); // Importa o modelo Lesson

exports.createLesson = async (req, res) => {
  const { title, content, courseId } = req.body;

  try {
    const lesson = await Lesson.create({ title, content, courseId });
    res.status(201).json(lesson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create lesson' });
  }
};