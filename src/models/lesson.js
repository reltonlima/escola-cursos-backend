// filepath: /src/models/lesson.js
module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define('Lesson', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Lesson.associate = (models) => {
    Lesson.belongsTo(models.Course, { foreignKey: 'courseId', as: 'course' });
    Lesson.hasMany(models.Enrollment, { foreignKey: 'lessonId', as: 'enrollments' }); // Associação com 'enrollments'
  };

  return Lesson;
};