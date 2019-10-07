const Blog = require("../models/blogs");

// Defining methods blog controller
module.exports = {
  // Create new blog
  create: async (req, res, next) => {
    try {
      const blog = await Blog.create(req.body);
      return res.json({ success: true, blog });
    } catch (err) {
      next(err);
    }
  },

  // Read all blogs
  all: async (req, res, next) => {
    try {
      const blogs = await Blog.find({});
      return res.json({ success: true, blogs });
    } catch (err) {
      next(err);
    }
  },

  // Update an existing article
  update: async (req, res, next) => {
    const { url, title, description } = req.body;
    try {
      const blog = await Blog.findByIdAndUpdate(
        req.params.id,
        { url, title, description },
        { new: true }
      );
      return res.json({ success: true, blog });
    } catch (err) {
      next(err);
    }
  },

  // Delete an existing article
  delete: async (req, res, next) => {
    try {
      const blog = await Blog.findByIdAndDelete(req.params.id);
      return res.json({ success: true, blog });
    } catch (err) {
      next(err);
    }
  }
};
