const express = require("express");
const router = express.Router();

const {
  createReview,
  getReviews,
  getPosttReviews,
} = require("../controllers/reviewController");

router.post("/", createReview);
router.get("/", getPosttReviews);
router.get("/all", getReviews);

module.exports = router;
