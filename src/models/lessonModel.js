const knex = require('knex');
const dbConfig = require('../db/dbConfig');

// Initialize the database connection
const db = knex(dbConfig);

// Define the Lesson model
class Lesson {
    static async createLesson(data) {
        return await db('lessons').insert(data).returning('*');
    }

    static async getAllLessons() {
        return await db('lessons').select('*');
    }

    static async getLessonById(id) {
        return await db('lessons').where({ id }).first();
    }

    static async updateLesson(id, data) {
        return await db('lessons').where({ id }).update(data).returning('*');
    }

    static async deleteLesson(id) {
        return await db('lessons').where({ id }).del();
    }
}

module.exports = Lesson;