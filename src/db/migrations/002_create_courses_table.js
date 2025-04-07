const { Knex } = require('knex');

exports.up = async function(knex) {
  await knex.schema.createTable('courses', (table) => {
    table.increments('id').primary(); // Primary key
    table.string('title').notNullable(); // Course title
    table.text('description'); // Course description
    table.integer('duration'); // Duration in hours
    table.timestamps(true, true); // Created at and updated at timestamps
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('courses'); // Rollback function to drop the table
};