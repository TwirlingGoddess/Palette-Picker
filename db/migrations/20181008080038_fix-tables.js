
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('villages', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('palettes', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('color1');
      table.string('color2');
      table.string('color3');
      table.string('color4');
      table.string('color5');
      table.string('color6');
      table.string('color7');
      // table.integer('village_id').unsigned()
      // table.foreign('village_id')
      //   .references('vilages.id');
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('villages'),
    knex.schema.dropTable('palettes')
  ]);
};