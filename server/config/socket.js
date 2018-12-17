let io = require('socket.io');
const socketRoutes = require('../sockets');
const logger = require('./logger');

const connectSocket = (app) => {
  io = io.listen(app);
  io.on('connection', (socket) => {
    logger.info('socket is connected');
    const routes = socketRoutes(io, socket);
    socket.on('action', (action) => {
      const fn = routes[action.type];
      if (fn) {
        fn(action.data);
      }
    });
  });
  return io;
};

module.exports = connectSocket;
