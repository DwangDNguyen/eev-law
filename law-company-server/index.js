import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import postRoutes from "./routes/postRoute.js";
import imageRoutes from "./routes/imageRoute.js";
import messageRoutes from "./routes/messageRoute.js";
import userRoutes from "./routes/userRoute.js";

const app = express();
dotenv.config();

const connect = () => {
    mongoose
        .connect(process.env.MONGO)
        .then(() => {
            console.log("Connect to DB");
        })
        .catch((err) => {
            console.log(err);
        });
};

app.use(bodyParser.json());
app.use(express.json());

app.use(
    cors({
        origins: [""],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use("/api/post", postRoutes);
app.use("/api/image", imageRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log("connected");
    connect();
});
