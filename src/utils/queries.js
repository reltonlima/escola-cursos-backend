const getAllUsersQuery = 'SELECT * FROM users;';
const getUserByIdQuery = 'SELECT * FROM users WHERE id = $1;';
const createUserQuery = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;';
const updateUserQuery = 'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *;';
const deleteUserQuery = 'DELETE FROM users WHERE id = $1 RETURNING *;';

const getAllCoursesQuery = 'SELECT * FROM courses;';
const getCourseByIdQuery = 'SELECT * FROM courses WHERE id = $1;';
const createCourseQuery = 'INSERT INTO courses (title, description) VALUES ($1, $2) RETURNING *;';
const updateCourseQuery = 'UPDATE courses SET title = $1, description = $2 WHERE id = $3 RETURNING *;';
const deleteCourseQuery = 'DELETE FROM courses WHERE id = $1 RETURNING *;';

const getAllLessonsQuery = 'SELECT * FROM lessons;';
const getLessonByIdQuery = 'SELECT * FROM lessons WHERE id = $1;';
const createLessonQuery = 'INSERT INTO lessons (title, content, course_id) VALUES ($1, $2, $3) RETURNING *;';
const updateLessonQuery = 'UPDATE lessons SET title = $1, content = $2 WHERE id = $3 RETURNING *;';
const deleteLessonQuery = 'DELETE FROM lessons WHERE id = $1 RETURNING *;';

const getEnrollmentsByUserIdQuery = 'SELECT * FROM enrollments WHERE user_id = $1;';
const createEnrollmentQuery = 'INSERT INTO enrollments (user_id, course_id) VALUES ($1, $2) RETURNING *;';
const deleteEnrollmentQuery = 'DELETE FROM enrollments WHERE user_id = $1 AND course_id = $2 RETURNING *;';

module.exports = {
  getAllUsersQuery,
  getUserByIdQuery,
  createUserQuery,
  updateUserQuery,
  deleteUserQuery,
  getAllCoursesQuery,
  getCourseByIdQuery,
  createCourseQuery,
  updateCourseQuery,
  deleteCourseQuery,
  getAllLessonsQuery,
  getLessonByIdQuery,
  createLessonQuery,
  updateLessonQuery,
  deleteLessonQuery,
  getEnrollmentsByUserIdQuery,
  createEnrollmentQuery,
  deleteEnrollmentQuery,
};