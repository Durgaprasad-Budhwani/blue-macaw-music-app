const { Schema } = require('mongoose');

module.exports = {
  attributes: {
    _id: Schema.Types.ObjectId,
    name: Schema.Types.String,
    duration: Schema.Types.Number,
    description: Schema.Types.String,
    size: Schema.Types.Number,
    path: Schema.Types.String,
    composer: [Schema.Types.String],
    tags: [Schema.Types.String],
    category: Schema.Types.String,
  },
};
