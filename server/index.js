/* eslint-disable no-global-assign */
// make bluebird default Promise
Promise = require('bluebird');
const { port, env } = require('./config/vars');
const logger = require('./config/logger');
const app = require('./config/express');

// listen to requests
const server = app.listen(port, () => logger.info(`Server Listening on ${port} (${env})`));

// return of below function io and it can be used in any http middleware if required
require('./config/socket')(server);


/**
 * Exports express
 * @public
 */
module.exports = app;
