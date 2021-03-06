const Article = require("../models/articles");

// Defining methods for articles controller
module.exports = {
  // Read all articles
  all: async (req, res, next) => {
    try {
      const articles = await Article.find({});
      return res.json({ success: true, articles });
    } catch (err) {
      next(err);
    }
  },

  // Create new article.
  create: async (req, res, next) => {
    try {
      if(req.isMentor) {
        req.body.author = req.userId;
        const article = await Article.create(req.body);
        return res.json({ success: true, article });
      } else {
        return res.json({ msg: 'Not Authorized' });
      }
    } catch (err) {
      next(err);
    }
  },

  // Delete an existing article.
  delete: async (req, res, next) => {
    try {
      if(req.isMentor) {
        const {author} = await Article.findOne({_id: req.params.id});
        if(author == req.userId) {
          const article = await Article.findByIdAndDelete(req.params.id);
          return res.json({ success: true, article });
        } else {
          return res.json({ msg: 'Unauthorized User' });
        }
      } else {
        return res.json({ msg: 'Not Authorized' });
      }
    } catch (err) {
      next(err);
    }
  }
};
