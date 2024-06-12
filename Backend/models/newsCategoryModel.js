const mongoose = require("mongoose");

const newsCategory = mongoose.Schema(
  {
    NewsCategoryName: {
      type: String,
    },
    NewsCategoryDescription: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("NewsCategory", newsCategory);
