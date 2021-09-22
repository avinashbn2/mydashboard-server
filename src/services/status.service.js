const { Status } = require('../models');

/**
 * Create a Status
 * @param {object} statusBody
 * @returns {Promise<Status>}
 */
const createStatus = async ({ projecId, ...others }, project) => {
  const status = new Status(others);
  // status.project = projectId;
  const data = status.save((err) => {
    if (!err) {
      project.statuses.push(status);
      project.save();
    }
  });
  return data;
};

/**
 *
 * @param {id} number - Status id
 */
const getStatusById = async (id) => {
  const status = await Status.findById(id).exec();
  return status;
};
module.exports = {
  createStatus,
  getStatusById,
};
