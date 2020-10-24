const express = require('express')
const Users = require('./userModels')

const router = express.Router()

router.get('/', (req, res) => {
    Users.getAll()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ message: "Failed to get users", error: err})
        })
})

router.get('/:id', (req, res) => {
    Users.getByID(req.params.id)
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                res.status(404).json({ message: "Could not find user with given id." })
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get user"})
        })
})

router.post('/', (req, res) => {
    // validate data
    const validatedUser = req.body
    Users.createUser(validatedUser)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to create new user" })
        })
})

router.put('/:id', (req, res) => {
    // validate data
    const validatedUser = req.body
    Users.updateUser(validatedUser, req.params.id)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to create new user" })
        })
})

router.delete('/:id', (req, res) => {
    res.status(200).send('hello from /users/:id DELETE endpoint')
})


module.exports = router

