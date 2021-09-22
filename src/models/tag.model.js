const mongoose = require('mongoose');

const tagsSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

const Tag = mongoose.model('Tag', tagsSchema);
module.exports = Tag;
