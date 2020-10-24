
exports.up = function(knex) {
    return knex.schema.createTable('serviceProvider', tbl => {
      tbl.increments()
      tbl.string('serviceProvider')
        .unique()
        .notNullable()
      tbl.string('website')
      tbl.string('logoLink')
    })
  };
  
  exports.down = function(knex) {
    return knex.dropTableIfExists('serviceProvider')
  };
  