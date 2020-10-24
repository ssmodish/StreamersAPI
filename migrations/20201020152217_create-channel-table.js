
exports.up = function(knex) {
    return knex.schema.createTable('channel', tbl => {
      tbl.increments()
      tbl.string('channel')
        .unique()
        .notNullable()
      tbl.string('website')
      tbl.string('logoLink')
    })
  };
  
  exports.down = function(knex) {
    return knex.dropTableIfExists('channel')
  };
  