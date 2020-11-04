const db = require('../../db-config')

module.exports = {
  getAll,
  getByID,
  createServiceProvider,
  updateServiceProvider,
  deleteServiceProvider,
}

function getAll() {
  return db('serviceProvider')
}

function getByID(id) {
  return db('serviceProvider').where({ id }).first()
}

function createServiceProvider(serviceProviderData) {
  return db('serviceProvider')
    .returning('id')
    .insert(serviceProviderData, 'id')
    .then(([id]) => {
      return getByID(id)
    })
}

function updateServiceProvider(serviceProviderData, id) {
  return db('serviceProvider')
    .returning('id')
    .put(serviceProviderData, 'id')
    .then(([id]) => {
      return getByID(id)
    })
}

function deleteServiceProvider(id) {}
