const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { taskService, projectService } = require('../services');

const createTask = catchAsync(async (req, res) => {
  const project = await projectService.getProjectById(req.body.projectId);
  const task = await taskService.createTask(req.body, project);
  res.status(httpStatus.CREATED).send(task);
});

const getTask = catchAsync(async (req, res) => {
  const task = await taskService.getTaskById(req.params.id);
  res.status(httpStatus.OK).send(task);
});

module.exports = {
  getTask,
  createTask,
};
