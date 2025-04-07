const { Knex } = require('knex');

exports.up = async function(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary(); // Primary key
    table.string('name').notNullable(); // User's name
    table.string('email').unique().notNullable(); // User's email
    table.string('password').notNullable(); // User's password
    table.timestamps(true, true); // Created at and updated at timestamps
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users'); // Drop users table if it exists
};