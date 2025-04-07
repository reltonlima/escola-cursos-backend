const { Knex } = require('knex');

exports.up = async function(knex) {
  await knex.schema.createTable('lessons', (table) => {
    table.increments('id').primary(); // Primary key
    table.string('title').notNullable(); // Title of the lesson
    table.text('description'); // Description of the lesson
    table.integer('course_id').unsigned().references('id').inTable('courses').onDelete('CASCADE'); // Foreign key to courses
    table.integer('duration'); // Duration of the lesson in minutes
    table.timestamps(true, true); // Created at and updated at timestamps
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('lessons'); // Drop the lessons table if it exists
};