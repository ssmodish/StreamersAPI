
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('service').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('service').insert([
        {service: 'Orange'},
        {service: 'Blue'}
      ]);
    });
};
