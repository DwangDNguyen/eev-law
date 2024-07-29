import express from "express";
import {
    addPost,
    deletePost,
    getAllPost,
    getPost,
    getPosts,
    getRandomNewestPostInLastMonth,
    searchPost,
    updatePost,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/", addPost);
router.get("/getPost/:id", getPost);
router.get("/getPosts/:slug", getPosts);
router.get("/search", searchPost);
router.get("/allPosts", getAllPost);
router.get("/newestPosts", getRandomNewestPostInLastMonth);
router.delete("/delete/:id", deletePost);
router.put("/update/:id", updatePost);

export default router;
