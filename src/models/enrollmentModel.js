const knex = require('knex');
const dbConfig = require('../db/dbConfig');

// Initialize the database connection
const db = knex(dbConfig);

// Enrollment model
class EnrollmentModel {
    // Create a new enrollment
    static async createEnrollment(userId, courseId) {
        return await db('enrollments').insert({ user_id: userId, course_id: courseId });
    }

    // Get all enrollments for a user
    static async getEnrollmentsByUser(userId) {
        return await db('enrollments').where({ user_id: userId }).select('*');
    }

    // Get all users enrolled in a course
    static async getUsersByCourse(courseId) {
        return await db('enrollments').where({ course_id: courseId }).select('*');
    }

    // Delete an enrollment
    static async deleteEnrollment(userId, courseId) {
        return await db('enrollments').where({ user_id: userId, course_id: courseId }).del();
    }
}

module.exports = EnrollmentModel;