let io = require('socket.io');
const socketRoutes = require('../sockets');
const logger = require('./logger');

const connectSocket = (app) => {
  logger.info('connectSocket');
  io = io.listen(app);
  io.on('connection', (socket) => {
    logger.info('socket is connected');
    const routes = socketRoutes(io, socket);
    Object.keys(routes).forEach((key) => {
      socket.on(key, routes[key]);
    });
  });
  return io;
};

module.exports = connectSocket;
