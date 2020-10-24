
exports.up = function(knex) {
    return knex.schema.createTable('service_channel', tbl => {
      tbl.increments()
      tbl.integer('channel_id').references('id').inTable('channel')
      tbl.integer('service_id').references('id').inTable('service')
      tbl.text('logoLink', 256)
    })
  };
  
  exports.down = function(knex) {
    return knex.dropTableIfExists('service_channel')
  };
  