const Review = require("../models/reviewModel");
const asyncHandler = require("express-async-handler");

const createReview = asyncHandler(async (req, res) => {
  const review = await Review.create(req.body);
  if (review) {
    res.status(200).json(review);
  } else {
    res.status(400).json("Something went wrong!");
  }
});

const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find();
  if (reviews.length) {
    res.status(200).json(reviews);
  } else {
    res.status(400).json("No reviews found!");
  }
});

const getPosttReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ reviewPostId: req.body.Id });
  if (reviews.length) {
    res.status(200).json(reviews);
  } else {
    res.status(400).json("No reviews found!");
  }
});
module.exports = {
  createReview,
  getReviews,
  getPosttReviews,
};
