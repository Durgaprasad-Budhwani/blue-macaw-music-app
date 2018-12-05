// import .env variables

const result = require('dotenv').config();

console.log(process.env.NODE_ENV);

if (result.error) {
  throw result.error;
}

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongo: {
    uri: process.env.MONGO_URI,
  },
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};
