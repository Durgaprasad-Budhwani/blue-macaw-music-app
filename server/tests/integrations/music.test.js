const request = require('supertest');
const httpStatus = require('http-status');
const mongoose = require('mongoose');
const app = require('../../index');
const { expect } = require('chai');

describe('GET /v1/music', async () => {
  before((done) => {
    mongoose.connection.on('open', done);
  });
  it('should throw error is id is incorrect', () => request(app)
    .get('/v1/music/5c06a7aef93edbd69e82e6ab22')
    .expect(httpStatus.BAD_REQUEST)
    .then(async (res) => {
      // eslint-disable-next-line
      expect(res.body).to.not.be.empty;
    }));

  it('should return list of all music', () => request(app)
    .get('/v1/music')
    .expect(httpStatus.OK)
    .then(async (res) => {
      // eslint-disable-next-line
      expect(res.body).to.not.be.empty;
    }));

  it('should return specific music', () => request(app)
    .get('/v1/music/5c06a7aef93edbd69e82e6ab')
    .expect(httpStatus.OK)
    .then(async (res) => {
      // eslint-disable-next-line
      expect(res.body).to.not.be.empty;
    }));
});
