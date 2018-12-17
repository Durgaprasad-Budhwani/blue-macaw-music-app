/* eslint-disable no-unused-vars */
const db = require('../api/services/db');
const { SONG_RECOMMENDED, NEW_SONGS_PLAYED } = require('../helpers/constants');

// io can be used to broadcast to sender as well
// noinspection JSUnusedLocalSymbols
const socketRoutes = (io, socket) => ({
  [NEW_SONGS_PLAYED]: async (payload) => {
    const music = await db.Music.findById(payload._id);
    socket.broadcast.emit('action', { type: SONG_RECOMMENDED, song: music });
  },
});

module.exports = socketRoutes;
