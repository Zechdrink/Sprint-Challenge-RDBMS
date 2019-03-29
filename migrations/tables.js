
exports.up = function(knex, Promise) {
  return knex.schema

  .createTable('project', (tbl) => {
    tbl.increments()

    tbl
    .string('name', 128).notNullable();

    tbl
    .text('description').notNullable();

    tbl
    .boolean('completed').default(false);
  })

  .createTable('action', (tbl) => {
    tbl.increments()

    tbl
    .integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('project')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    tbl
    .string('description', 128).notNullable();

    tbl
    .text('notes').notNullable();

    tbl
    .boolean('completed').defaultTo(false);

  })    
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('project')
  .dropTableIfExists('action')
};
