const mongoose = require('mongoose');

const statusSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    order: {
      type: Number,
    },
    project: {
      type: mongoose.Types.ObjectId,
      ref: 'Project',
    },
  },
  {
    timestamps: true,
  }
);

const Status = mongoose.model('Status', statusSchema);
module.exports = Status;
