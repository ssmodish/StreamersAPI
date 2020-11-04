exports.up = function (knex) {
  return knex.schema.createTable('serviceProvider_service', (tbl) => {
    tbl.increments()
    tbl
      .integer('serviceProvider_id')
      .references('id')
      .inTable('service-provider')
    tbl.integer('service_id').references('id').inTable('service')
    tbl.text('logoLink', 256)
  })
}

exports.down = function (knex) {
  return knex.dropTableIfExists('serviceProvider_service')
}
