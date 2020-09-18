const { validationResult } = require("express-validator");
const posts = require("../model/posts.model");

class FeedController {
  static async getPosts(req, res) {
    try {
      const response = await posts.findAll();
      return res.status(200).json({
        result: response,
      });
    } catch (error) {
      return res.status(200).json({
        result: error,
      });
    }
  }

  static async updatePost(req, res) {
    // return res.status(200).json({
    //   result: req.param("id"),
    // });
    // const response = await posts.findOne({ id: req.param("id") });
    // response.on("success", () => {
    //   posts.update({
    //     title: req,
    //   });
    // });
    const body = req.body;

    return res.status(200).json({
      result: escape(body.imageUrl),
    });
  }

  static createPost = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, body, imageUrl } = req.body;
    posts
      .create({
        title: title,
        body: body,
        imageUrl: imageUrl,
      })
      .then((result) => {
        return res.json({
          result: result,
        });
      })
      .catch((err) => {
        return res.json({
          err: err,
        });
      });
  };
}

module.exports = FeedController;
