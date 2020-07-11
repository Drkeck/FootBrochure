const thoughtRoutes = require('./thought-routes');
const UserRoutes = require('./user-routes');

const router = require('express').Router(); 

router.use('/users', UserRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;