const { Project } = require('../models');

/**
 * Create a Project
 * @param {object} projectBody
 * @returns {Promise<Project>}
 */
const createProject = async (projectBody, user) => {
  const project = new Project(projectBody);
  project.author = user._id;
  const data = project.save();
  return data;
};

/**
 *
 * @param {object} filter - Mongoose filter
 * @param {object} options -  Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page
 * @param {number} [options.page] - Current page (default = 1)
 * @returns
 */

const queryProjects = async (filter, options) => {
  return Project.paginate(filter, { ...options, populate: 'tasks' });
};

/**
 *
 * @param {id} number - Project id
 */
const getProjectById = async (id) => {
  const project = await Project.findById(id).populate('author').populate('tasks').exec();
  return project;
};
module.exports = {
  createProject,
  queryProjects,
  getProjectById,
};
