const express = require('express');
const musicRoutes = require('./music.route');

const router = express.Router();

/**
 * GET v1/music
 */
router.use('/music', musicRoutes);

module.exports = router;
