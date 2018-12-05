const musicService = require('../services/music.service');

/**
 * Get music list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const list = await musicService.list(req.query);
    res.json(list);
  } catch (error) {
    next(error);
  }
};

/**
 * Get music by id
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
exports.get = async (req, res, next) => {
  try {
    const music = await musicService.get(req.params.id);
    res.json(music);
  } catch (error) {
    next(error);
  }
};
