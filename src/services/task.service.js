const { Task, Status } = require('../models');

/**
 * Create a Task
 * @param {object} taskBody
 * @returns {Promise<Task>}
 */
const createTask = async ({ projecId, ...others }, project) => {
  const task = new Task(others);
  const [lastTask = {}] = await Task.find({ projectId: projecId }).sort({ _id: -1 }).limit(1);

  if (lastTask && lastTask.order) {
    task.order = lastTask.order + 1000;
  } else {
    task.order = 1000;
  }

  const data = task.save((err) => {
    if (!err) {
      const statuses = project.statuses.filter((s) => s.name === others.status);
      if (statuses.length === 0) {
        const st = new Status({ name: others.status, projectId: project._id });
        project.statuses.push(st);
      }
      project.tasks.push(task);

      project.save();
    }
  });
  return data;
};

/**
 *
 * Update a task
 * @param {*} id
 * @returns
 */

const updateTask = async (taskId, body) => {
  const query = { _id: taskId };

  const newTask = await Task.findOneAndUpdate(query, body, { new: true });

  return newTask;
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
  updateTask,
};
