const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello from /users GET endpoint')
})

router.get('/:id', (req, res) => {
    res.status(200).send('hello from /users/:id GET endpoint')
})

router.post('/', (req, res) => {
    res.status(200).send('hello from /users POST endpoint')
})

router.put('/:id', (req, res) => {
    res.status(200).send('hello from /users/:id PUT endpoint')
})

router.delete('/:id', (req, res) => {
    res.status(200).send('hello from /users/:id DELETE endpoint')
})


module.exports = router

