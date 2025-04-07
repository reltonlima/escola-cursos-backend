// filepath: /src/models/course.js
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
  });
  return Course;
};