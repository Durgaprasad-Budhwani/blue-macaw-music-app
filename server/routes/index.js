const express = require('express');
const path = require('path');
const v1Routes = require('./v1');

const router = express.Router();

/**
 * GET status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET docs
 */
// TODO change back to docs path when client code is ready
router.use('/', express.static(path.join(__dirname, '../../', 'docs')));

/**
 * GET v1
 */
router.use('/v1', v1Routes);

module.exports = router;
