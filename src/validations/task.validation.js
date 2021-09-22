const Joi = require('joi');

const { objectId } = require('./custom.validation');

const getTasks = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getTask = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

const createTask = {
  body: Joi.object().keys({
    projectId: Joi.string().required().custom(objectId),
    name: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

module.exports = {
  getTasks,
  getTask,
  createTask,
};
