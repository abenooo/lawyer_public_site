const asyncHandler = require("express-async-handler");
const BlogCategory = require("../models/blogCategoryModel");

const createBlogCategory = asyncHandler(async (req, res) => {
  const blogCategory = await BlogCategory.create({
    BlogCategoryName: req.body.BlogCategoryName,
    BlogCategoryDescription: req.body.BlogCategoryDescription,
  });
  if (blogCategory) {
    res.status(200).json(blogCategory);
  } else [res.status(400).json("Something went wrong")];
});

const getBlogCategory = asyncHandler(async (req, res) => {
  const blogCategories = await BlogCategory.find();
  if (blogCategories) {
    res.status(200).json(blogCategories);
  } else {
    res.status(400).json("Something went wrong");
  }
});
const deleteBlogCategory = asyncHandler(async (req, res) => {
  try {
    await BlogCategory.deleteOne({ _id: req.body._id });
    res.status(200).json("Blog category deleted");
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = {
  createBlogCategory,
  getBlogCategory,
  deleteBlogCategory,
};
