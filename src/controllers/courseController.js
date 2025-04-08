const { Course, Lesson, Enrollment } = require('../models');

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
};

exports.createCourse = async (req, res) => {
  const { title, description } = req.body;

  try {
    const course = await Course.create({ title, description });
    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create course' });
  }
};

exports.updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    course.title = title || course.title;
    course.description = description || course.description;

    await course.save();
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update course' });
  }
};

exports.deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    await course.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete course' });
  }
};

exports.getCourseWithLessons = async (req, res) => {
  const { id } = req.params; // ID do curso
  const userId = req.query.userId; // ID do aluno (passado como query string)

  // Validação: Verifica se o userId foi fornecido
  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    const course = await Course.findByPk(id, {
      include: [
        {
          model: Lesson,
          as: 'lessons',
          include: [
            {
              model: Enrollment,
              as: 'enrollments',
              where: { userId }, // Filtra pelo progresso do aluno
              required: false, // Inclui lições mesmo que o aluno não tenha progresso
            },
          ],
        },
      ],
    });

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch course with lessons' });
  }
};