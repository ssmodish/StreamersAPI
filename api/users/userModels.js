const db = require('../../db-config')

module.exports = {
    getAll,
    getByID,
    createUser,
    updateUser,
    deleteUser
}

function getAll() {
    return db('user')
}

function getByID(id) {
    return db('user').where({ id }).first()
}

function createUser(userData) {
    return db('user')
        .returning('id')
        .insert(userData, 'id')
        .then(([id]) => {
            return getByID(id)
        })
}

function updateUser(userData, id) {
    return db('user').where({ id: id }).update(userData)
}

function deleteUser(id) {
    return db('user').where({ id: id }).delete()
}