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
    status: Joi.string().required(),
    timeSpent: Joi.number().integer(),
    order: Joi.number().integer(),
  }),
};

const updateTask = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),

  body: Joi.object().keys({
    name: Joi.string(),
    description: Joi.string(),
    status: Joi.string(),
    timeSpent: Joi.number().integer(),
    order: Joi.number().integer(),
  }),
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
};
