const Joi = require('joi');

const { objectId } = require('./custom.validation');

const getStatuses = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getStatus = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

const createStatus = {
  body: Joi.object().keys({
    projectId: Joi.string().required().custom(objectId),
    name: Joi.string().required(),
    order: Joi.number().integer(),
  }),
};

module.exports = {
  getStatus,
  getStatuses,
  createStatus,
};
