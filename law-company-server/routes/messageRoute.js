import express from "express";
import { postMessage } from "../controllers/messageController.js";

const router = express.Router();

router.post("/", postMessage);

export default router;
