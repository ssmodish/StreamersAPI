const express = require('express')
const Channels = require('./channelModels')

const router = express.Router()

router.get('/', (req, res) => {
  Channels.getAll()
    .then((channels) => {
      res.status(200).json(channels)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Failed to get channels', error: err })
    })
})

router.get('/:id', (req, res) => {
  Channels.getByID(req.params.id)
    .then((channel) => {
      if (channel) {
        res.json(channel)
      } else {
        res.status(404).json({ message: 'Could not find channel with given id' })
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get channel', error: err })
    })
})

router.post('/', (req, res) => {
    // TODO - validate data
    const validatedChannel = req.body
    Channels.createChannel(validatedChannel)
      .then((channel) => {
        res.status(201).json(channel)
      })
      .catch((err) => {
        res.status(500).json({ message: 'Failed to create new channel', error: err })
      })  
})

router.put('/:id', (req, res) => {
    // TODO - validate data
    const validatedChannel = req.body

    Channels.updateChannel(validatedChannel, req.params.id)
      .then((count) => {
        res.status(200).json(count)
      })
      .catch((err) => {
        res.status(500).json({ message: 'Failed to update channel', error: err })
      })
})

router.delete('/:id', (req, res) => {
  Channels.deleteChannel(req.params.id)
    .then((counr => {
      res.status(200).json(count)
    }))
    .catch((err) => {
      res.status(500).json({ message: 'Failed to delete channel', error: err })
 s   })
})

module.exports = router
