const posts = require("../model/posts.model");
const validator = require("validator");

module.exports = {
  createPost: async ({ userInput }, req) => {
    const { title, body, imageUrl } = userInput;
    const errs = [];

    if (validator.default.isLength(title, { max: 200 })) {
      errs.push({
        title: "title field  maximum character allowed 200",
      });
    }
    if (validator.default.isEmpty(title)) {
      errs.push({
        title: "title field  required",
      });
    }
    if (errs.length > 0) {
      const err = new Error("invalid input..");
      err.data = errs;
      err.code = 422;

      return err;
    }
    let createdPost = await posts.create({
      title: title,
      body: body,
      imageUrl: imageUrl,
    });
    return createdPost;
  },
};
