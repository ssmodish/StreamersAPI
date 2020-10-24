
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {username: 'wonderboy', password: 'password1234'},
        {username: 'nasty_man', password: 'password1234'},
      ]);
    });
};
