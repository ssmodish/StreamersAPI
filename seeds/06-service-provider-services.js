exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('serviceProvider_service')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('serviceProvider_service').insert([
        { service_id: 1, serviceProvider_id: 1 },
        { service_id: 2, serviceProvider_id: 1 },
      ])
    })
}
