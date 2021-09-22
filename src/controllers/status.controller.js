const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { statusService, projectService } = require('../services');

const createStatus = catchAsync(async (req, res) => {
  const project = await projectService.getProjectById(req.body.projectId);
  const status = await statusService.createStatus(req.body, project);
  res.status(httpStatus.CREATED).send(status);
});

const getStatus = catchAsync(async (req, res) => {
  const status = await statusService.getStatusById(req.params.id);
  res.status(httpStatus.OK).send(status);
});

module.exports = {
  getStatus,
  createStatus,
};
