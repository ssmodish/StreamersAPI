exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('service_channel')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('service_channel').insert([
        { channel_id: 1, service_id: 1 },
        { channel_id: 2, service_id: 1 },
        { channel_id: 2, service_id: 2 },
        { channel_id: 3, service_id: 2 },
      ])
    })
}
