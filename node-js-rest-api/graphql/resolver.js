const { getPosts } = require("../controller/feed");

module.exports = {
  createPost: async ({ userInput }, req) => {
    const { title, body, imageUrl } = userInput;
    let createdPost = await posts.create({
      title: title,
      body: body,
      imageUrl: imageUrl,
    });
    return createdPost;
  },
};
