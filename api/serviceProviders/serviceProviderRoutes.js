const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello from /serviceProviders GET endpoint')
})

router.get('/:id', (req, res) => {
    res.status(200).send('hello from /serviceProviders/:id GET endpoint')
})

router.post('/', (req, res) => {
    res.status(200).send('hello from /serviceProviders POST endpoint')
})

router.put('/:id', (req, res) => {
    res.status(200).send('hello from /serviceProviders/:id PUT endpoint')
})

router.delete('/:id', (req, res) => {
    res.status(200).send('hello from /serviceProviders/:id DELETE endpoint')
})


module.exports = router

