const express = require("express");
const router = express.Router();

const {
  createBlogCategory,
  getBlogCategory,
  deleteBlogCategory,
} = require("../controllers/blogCategoryController");

router
  .route("/")
  .post(createBlogCategory)
  .get(getBlogCategory)
  .delete(deleteBlogCategory);

module.exports = router;
