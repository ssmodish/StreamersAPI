exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('serviceProvider')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('serviceProvider').insert([
        { serviceProvider: 'Sling' },
        { serviceProvider: 'Hulu' },
      ])
    })
}
