const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    timeSpent: {
      type: Number,
      default: 0,
    },
    project: {
      type: mongoose.Types.ObjectId,
      ref: 'Project',
    },
    status: {
      type: String,
    },
    order: {
      type: Number,
    },
  },

  {
    timestamps: true,
  }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
