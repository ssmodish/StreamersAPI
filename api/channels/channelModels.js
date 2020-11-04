const db = require('../../db-config')

module.exports = {
  getAll,
  getByID,
  createChannel,
  updateChannel,
  deleteChannel,
}

function getAll() {
  return db('channel')
}

function getByID(id) {
  return db('channel').where({ id }).first()
}

function createChannel(channelData) {
  return db('channel')
    .returning('id')
    .insert(userData, 'id')
    .then(([id]) => {
      return getByID(id)
    })
}

function updateChannel(channelData, id) {
  return db('channel')
    .returning('id')
    .put(channelData, 'id')
    .then(([id]) => {
      return getByID(id)
    })
}

function deleteChannel(id) {}
