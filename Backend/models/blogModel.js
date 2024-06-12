const mongoose = require("mongoose");
const blogSchema = mongoose.Schema(
  
  {
    BlogTitle: {
      type: String,
    },
    BlogCategory: {
      type: String,
    },
    BlogDescription: {
      type: String,
    },
    BlogImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
