exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('channel')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('channel').insert([
        { channel: 'ESPN' },
        { channel: 'AMC' },
        { channel: 'MSNBC' },
      ])
    })
}
