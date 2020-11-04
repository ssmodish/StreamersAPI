const express = require('express')

// if the other routers are not nested inside /api then the paths would change
const userRoutes = require('./users/userRoutes')
const serviceProviderRoutes = require('./serviceProviders/serviceProviderRoutes')
const channelRoutes = require('./channels/channelRoutes')

const router = express.Router() // notice the Uppercase R

// this file will only be used when the route begins with "/api"
// so we can remove that from the URLs, so "/api/users" becomes simply "/users"
router.use('/users', userRoutes)
router.use('/serviceProviders', serviceProviderRoutes)
router.use('/channels', channelRoutes)

// .. and any other endpoint related to the user's resource

// after the route has been fully configured, then we export it so it can be required where needed
module.exports = router // standard convention dictates that this is the last line on the file
