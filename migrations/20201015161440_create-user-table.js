
exports.up = function(knex) {
  return knex.schema.createTable('user', tbl => {
    tbl.increments()
    tbl.string('username')
      .unique()
      .notNullable()
    tbl.string('password')
  })
};

exports.down = function(knex) {
  return knex.dropTableIfExists('user')
};
