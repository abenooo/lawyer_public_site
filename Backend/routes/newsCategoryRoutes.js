const express = require("express");
const router = express.Router();

const {
  createNewsCategory,
  getNewsCategory,
  deleteNewsCategory,
} = require("../controllers/newsCategoryController");

router
  .route("/")
  .post(createNewsCategory)
  .get(getNewsCategory)
  .delete(deleteNewsCategory);

module.exports = router;
