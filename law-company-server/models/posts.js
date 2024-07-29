import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        intro: { type: String, required: true },
        slug: { type: String, required: true },
        image: {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
        content: { type: String, required: true },
        category: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("Post", postSchema);
