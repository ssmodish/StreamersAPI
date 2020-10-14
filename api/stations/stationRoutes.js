const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello from /stations GET endpoint')
})

router.get('/:id', (req, res) => {
    res.status(200).send('hello from /stations/:id GET endpoint')
})

router.post('/', (req, res) => {
    res.status(200).send('hello from /stations POST endpoint')
})

router.put('/:id', (req, res) => {
    res.status(200).send('hello from /stations/:id PUT endpoint')
})

router.delete('/:id', (req, res) => {
    res.status(200).send('hello from /stations/:id DELETE endpoint')
})


module.exports = router

