const Joi = require('joi');

const { objectId } = require('./custom.validation');

const getProjects = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getProject = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

const createProject = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

module.exports = {
  getProjects,
  getProject,
  createProject,
};
