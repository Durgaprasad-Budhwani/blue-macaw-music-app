const express = require('express');
const validate = require('express-validation');
const Joi = require('joi');
const controller = require('../../api/controllers/music.controller');

const listMusic = {
  query: {
    page: Joi.number().min(0),
    perPage: Joi.number().min(1).max(100),
  },
};

const getMusic = {
  params: {
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
  },
};

const router = express.Router();

router
  .route('/')
  /**
   * @api {get} v1/music List Music
   * @apiDescription Get a list of music
   * @apiVersion 1.0.0
   * @apiName ListMusic
   * @apiGroup Music
   *
   * @apiParam  {Number{0-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [perPage=1]  Music per page
   *
   * @apiSuccess {Object[]} Music List of music.
   *
   */
  .get(validate(listMusic), controller.list);

router
  .route('/:id')
  /**
   * @api {get} v1/music/:id Get Music
   * @apiDescription Get Music information
   * @apiVersion 1.0.0
   * @apiName GetMusic
   * @apiGroup Music
   * @apiPermission Music
   *
   * @apiSuccess {Object} Music Music Metadata.
   *
   */
  .get(validate(getMusic), controller.get);


module.exports = router;

