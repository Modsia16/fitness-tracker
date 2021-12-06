//adding an index to direct routes for server
const router = require('express').Router();
const apiRoutes = require('./apiroutes');
const htmlRoutes = require('./htmlroutes')
router.use('/api', apiRoutes)
router.use('/', htmlRoutes)
module.exports = router