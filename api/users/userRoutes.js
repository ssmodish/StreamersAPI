const express = require('express')
const Users = require('./userModels')

const router = express.Router()

router.get('/', (req, res) => {
  Users.getAll()
    .then((users) => {
      res.status(200).json(users)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Failed to get users', error: err })
    })
})

router.get('/:id', (req, res) => {
  Users.getByID(req.params.id)
    .then((user) => {
      if (user) {
        res.json(user)
      } else {
        res.status(404).json({ message: 'Could not find user with given id.' })
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get user', error: err })
    })
})

router.post('/', (req, res) => {
  // TODO - validate data
  const validatedUser = req.body
  Users.createUser(validatedUser)
    .then((user) => {
      res.status(201).json(user)
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to create new user', error: err })
    })
})

router.put('/:id', (req, res) => {
  // TODO - validate data
  const validatedUser = req.body

  Users.updateUser(validatedUser, req.params.id)
    .then((count) => {
      res.status(200).json(count)
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to update user', error: err })
    })
})

router.delete('/:id', (req, res) => {
  Users.deleteUser(req.params.id)
    .then((count) => {
      res.status(200).json(count)
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to delete user', error: err })
    })
})

module.exports = router
