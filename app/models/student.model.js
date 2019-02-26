const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Student', {
  name: Joi.string().required(),
  surname: Joi.string().required(),
  major: Joi.string().required(),
});
