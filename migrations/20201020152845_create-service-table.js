exports.up = function (knex) {
  return knex.schema.createTable('service', (tbl) => {
    tbl.increments()
    tbl.string('service').unique().notNullable()
    tbl.decimal('price', 2)
    tbl
    .integer('serviceProvider_id')
    .references('id')
    .inTable('service-provider')
  })
}

exports.down = function (knex) {
  return knex.dropTableIfExists('service')
}
