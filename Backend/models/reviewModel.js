const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    reviewPostId: {
      type: String,
    },
    review: {
      type: Number,
    },
    userId: {
      type: String,
    },
    userId: {
      type: String,
    },
    comment: {
      type: String,
    },
    helpfulCount: {
      type: Number,
    },
    notHelpfulCount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);
