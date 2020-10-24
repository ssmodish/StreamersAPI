const express = require('express')
const Channels = require('./channelModels')

const router = express.Router()

router.get('/', (req, res) => {
    Channels.getAll()
        .then(channels => {
            res.status(200).send(channels)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ message: "Failed to get channels", error: err})
        })


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

