// src/models/courseModel.js
const knex = require('../db/dbConfig');

// Define the Course model
class Course {
    // Create a new course
    static async create(courseData) {
        const [course] = await knex('courses').insert(courseData).returning('*');
        return course;
    }

    // Get all courses
    static async getAll() {
        return await knex('courses').select('*');
    }

    // Get a course by ID
    static async getById(courseId) {
        return await knex('courses').where({ id: courseId }).first();
    }

    // Update a course
    static async update(courseId, courseData) {
        const [course] = await knex('courses').where({ id: courseId }).update(courseData).returning('*');
        return course;
    }

    // Delete a course
    static async delete(courseId) {
        return await knex('courses').where({ id: courseId }).del();
    }
}

module.exports = Course;