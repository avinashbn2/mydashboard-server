const { Task } = require('../models');

/**
 * Create a Task
 * @param {object} taskBody
 * @returns {Promise<Task>}
 */
const createTask = async ({ projecId, ...others }, project) => {
  const task = new Task(others);
  // task.project = projectId;
  const data = task.save((err) => {
    if (!err) {
      project.tasks.push(task);
      project.save();
    }
  });
  return data;
};

/**
 *
 * @param {id} number - Task id
 */
const getTaskById = async (id) => {
  const task = await Task.findById(id).exec();
  return task;
};
module.exports = {
  createTask,
  getTaskById,
};
