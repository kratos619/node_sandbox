const express = require("express");
const { body } = require("express-validator");
const FeedController = require("../controller/feed");
const { auth } = require("../middlewares/token");
const router = express.Router();

router.get("/post", auth, FeedController.getPosts);
router.post(
  "/post/create",
  auth,
  [
    body("title").isLength({
      min: 10,
    }),
  ],
  FeedController.createPost
);
router.get("/post/update/:id", FeedController.updatePost);
module.exports = router;
