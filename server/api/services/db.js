/* eslint-disable global-require,import/no-dynamic-require */
const models = {};
const mongoose = require('mongoose');
const glob = require('glob');
const path = require('path');

const { mongo, env } = require('./../../config/vars');
const logger = require('./../../config/logger');

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on('error', (err) => {
  logger.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

// print mongoose logs in dev env
if (env === 'development') {
  mongoose.set('debug', true);
}

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
mongoose.connect(mongo.uri, {
  keepAlive: 1,
  useNewUrlParser: true,
});

mongoose.set('debug', env === 'development');

const db = mongoose.connection;


const upperCase = str => str.charAt(0).toUpperCase() + str.slice(1);

const createMongooseModel = (schemaDescription, modelName) => {
  const schema = new mongoose.Schema(schemaDescription.attributes);
  if (schemaDescription.methods) {
    schema.methods = schemaDescription.methods;
  }
  if (schemaDescription.statics) {
    schema.statics = schemaDescription.statics;
  }
  if (schemaDescription.beforeSave) {
    schema.pre('save', (next) => {
      schemaDescription.beforeSave(this, next);
    });
  }
  return mongoose.model(modelName, schema);
};

const convertSchemaToModels = () => {
  glob('server/api/schemas/*.js', {}, (err, files) => {
    const cwd = process.cwd();
    // eslint-disable-next-line no-restricted-syntax,prefer-const
    for (let file of files) {
      const basename = path.basename(file, '.js');
      const tmpSchema = require(`${cwd}/${file}`);
      const name = basename.split('.')[0];
      models[upperCase(name)] = createMongooseModel(tmpSchema, name);
    }
  });
};

db.on('error', console.error.bind(console, 'Mongoose connection error:'));
db.once('open', () => {
  logger.info('Connected to MongoDB !');
  // get all model in /api/schemas
  convertSchemaToModels();
});

// Expose Mixed type and ObjectId type for Models
models.Mixed = mongoose.Schema.Types.Mixed;
models.ObjectId = mongoose.Schema.Types.ObjectId;
// Expose all models loaded
module.exports = models;

