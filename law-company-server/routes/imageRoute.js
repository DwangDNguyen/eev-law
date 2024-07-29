import express from "express";
import { deleteImage } from "../controllers/imageController.js";

const router = express.Router();

router.post("/delete/:id", deleteImage);

export default router;
