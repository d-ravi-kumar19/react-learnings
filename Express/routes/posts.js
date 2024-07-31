import express from "express";
import {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
const router = express.Router();



// Get all Posts
router.get("/", getPosts);

// Get single post
router.get("/:id", getPost);

// create a new post
router.post("/", createPost);

// put post
router.put("/:id", updatePost);

// delete
router.delete("/:id", deletePost);

export default router;
