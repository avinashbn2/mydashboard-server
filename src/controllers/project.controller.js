const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { projectService } = require('../services');
const pick = require('../utils/pick');

const createProject = catchAsync(async (req, res) => {
  const project = await projectService.createProject(req.body, req.user);
  res.status(httpStatus.CREATED).send(project);
});

const getProjects = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const projects = await projectService.queryProjects(filter, options);
  res.status(httpStatus.OK).send(projects);
});

const getProject = catchAsync(async (req, res) => {
  const project = await projectService.getProjectById(req.params.id, req.user);
  res.status(httpStatus.OK).send(project);
});

module.exports = {
  getProject,
  createProject,
  getProjects,
};
