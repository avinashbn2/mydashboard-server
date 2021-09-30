const mongoose = require('mongoose');
const Tag = require('./tag.model');
const { paginate } = require('./plugins');

const projectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    deadline: {
      type: Date,
    },
    tags: [Tag.schema],
    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
      },
    ],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    statuses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Status', default: [] }],
  },

  {
    timestamps: true,
  }
);

projectSchema.plugin(paginate);
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
