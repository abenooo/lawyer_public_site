const asyncHandler = require("express-async-handler");
const NewsCategory = require("../models/newsCategoryModel");

const createNewsCategory = asyncHandler(async (req, res) => {
  const newsCategory = await NewsCategory.create({
    NewsCategoryName: req.body.NewsCategoryName,
    NewsCategoryDescription: req.body.NewsCategoryDescription,
  });
  if (newsCategory) {
    res.status(200).json(newsCategory);
  } else [res.status(400).json("Something went wrong")];
});

const getNewsCategory = asyncHandler(async (req, res) => {
  const newsCategories = await NewsCategory.find();
  if (newsCategories) {
    res.status(200).json(newsCategories);
  } else {
    res.status(400).json("Something went wrong");
  }
});
const deleteNewsCategory = asyncHandler(async (req, res) => {
  try {
    await NewsCategory.deleteOne({ _id: req.body._id });
    res.status(200).json("News category deleted");
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = {
  createNewsCategory,
  getNewsCategory,
  deleteNewsCategory,
};
