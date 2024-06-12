const mongoose = require("mongoose");

const blogCategory = mongoose.Schema(
  {
    BlogCategoryName: {
      type: String,
    },
    BlogCategoryDescription: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("BlogCategory", blogCategory);
