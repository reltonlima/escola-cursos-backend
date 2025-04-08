const { Enrollment, Lesson } = require('../models');

exports.getProgress = async (req, res) => {
  try {
    const progress = await Enrollment.findAll({
      include: [
        {
          model: Lesson,
          as: 'lesson', // Especifique o alias definido no modelo Enrollment
          attributes: ['id', 'title', 'courseId'],
        },
      ],
    });

    res.json(progress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch progress' });
  }
};

exports.updateProgress = async (req, res) => {
  const { lessonId } = req.body;
  const userId = 1; // Use um valor fixo para facilitar o desenvolvimento

  try {
    const enrollment = await Enrollment.findOne({
      where: { userId, lessonId },
    });

    if (!enrollment) {
      return res.status(404).json({ error: 'Enrollment not found' });
    }

    enrollment.completed = true;
    await enrollment.save();

    res.json({ message: 'Progress updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update progress' });
  }
};

exports.addEnrollment = async (req, res) => {
  const { userId, lessonId, completed } = req.body;

  try {
    const enrollment = await Enrollment.create({
      userId,
      lessonId,
      completed: completed || false,
    });

    res.status(201).json(enrollment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add enrollment' });
  }
};