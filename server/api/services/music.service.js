const db = require('./db');

/**
 * Get list of music
 * @param query
 * @returns {Promise<*>}
 */
exports.list = (query = {}) => {
  const { page = 0, perPage = 10 } = query;
  return db.Music
    .find({})
    .select({
      composer: true, tags: true, name: true, description: true, category: true, image: true,
    })
    .limit(perPage)
    .skip(perPage * page);
};

/**
 * Get music by id
 * @param id
 * @returns {Promise<Query>}
 */
exports.get = id => db.Music.findById(id);
