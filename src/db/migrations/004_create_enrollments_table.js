const { Knex } = require('knex');

exports.up = async function(knex) {
    await knex.schema.createTable('enrollments', (table) => {
        table.increments('id').primary(); // Primary key
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE'); // Foreign key to users
        table.integer('course_id').unsigned().references('id').inTable('courses').onDelete('CASCADE'); // Foreign key to courses
        table.timestamp('enrolled_at').defaultTo(knex.fn.now()); // Enrollment timestamp
        table.boolean('completed').defaultTo(false); // Completion status
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('enrollments'); // Drop the enrollments table if it exists
};