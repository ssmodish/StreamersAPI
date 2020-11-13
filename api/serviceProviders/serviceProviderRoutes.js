const express = require('express')
const serviceProviderModels = require('./serviceProviderModels')
const ServiceProviders = require('./serviceProviderModels')

const router = express.Router()

router.get('/', (req, res) => {
  ServiceProviders.getAll()
    .then((serviceProviders) => {
      res.status(200).json(serviceProviders)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Failed to get service providers', error: err })
    })
})

router.get('/:id', (req, res) => {
  ServiceProviders.getByID(req.params.id)
    .then((serviceProvider) => {
      if (serviceProvider) {
        res.json(serviceProvider)
      } else {
        res.status(404).json({ message: 'Could not find provided service provider'})
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get service provider', error: err })
    })
})

router.post('/', (req, res) => {
  // TODO - validate data
  const validatedServiceProvider = req.body
  ServiceProviders.createServiceProvider(validatedServiceProvider)
    .then((serviceProvider) => {
      res.status(201).json(user)
    })
    .catch((err => {
      res.status(500).json({ message: 'Failed to create new service provider', error: err })
    }))
})

router.put('/:id', (req, res) => {
  // TODO - validate data
  const validatedServiceProvider = req.body

  ServiceProviders.updateServiceProvider(validatedServiceProvider, req.params.id)
    .then((count) => {
      res.status(200).json(count)
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to update service provider', error: err })
    })
})

router.delete('/:id', (req, res) => {
  ServiceProviders.deleteServiceProvider(req.params.id)
    .then((count) => {
      res.status(200).json(count)
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to delete service provider', error: err })
    })
})

module.exports = router
