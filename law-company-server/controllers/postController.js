import Post from "../models/posts.js";
import cloudinary from "../utils/cloudinaryUtils.js";

export const addPost = async (req, res, next) => {
    if (
        !req.body.title ||
        !req.body.content ||
        !req.body.category ||
        !req.body.intro ||
        !req.body.slug ||
        !req.body.image
    ) {
        return res.status(400).json({ err: "Vui lòng nhập đầy đủ thông tin" });
    }

    const post = new Post({
        ...req.body,
        image: { public_id: req.body.image.public_id, url: req.body.image.url },
    });
    try {
        const savedPost = await post.save();
        res.status(200).json(savedPost);
    } catch (err) {
        next(err);
    }
};

export const getPost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        return res.status(200).json(post);
    } catch (err) {
        next(err);
    }
};

export const getPosts = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page);
        const pageSize = parseInt(req.query.pageSize);

        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;
        // const limit = parseInt(req.query.limit) || 9;
        const sortDirection = req.query.order === "asc" ? 1 : -1;
        const totalPosts = await Post.find({
            slug: req.params.slug,
        });
        const posts = await Post.find({
            slug: req.params.slug,
        })
            .sort({ updatedAt: sortDirection })
            .skip(startIndex)
            .limit(pageSize);

        const totalPages = Math.ceil(totalPosts / pageSize);
        const postPerPage = posts.slice(startIndex, endIndex);
        res.status(200).json({
            postPerPage,
            posts,
            totalPosts,
            totalPages,
        });
    } catch (error) {
        next(error);
    }
};

export const searchPost = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page);
        const pageSize = parseInt(req.query.pageSize);

        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;
        // const limit = parseInt(req.query.limit) || 9;
        const sortDirection = req.query.order === "asc" ? 1 : -1;
        const totalPosts = await Post.find({
            title: { $regex: req.query.q, $options: "i" },
        });
        const posts = await Post.find({
            title: { $regex: req.query.q, $options: "i" },
        })
            .sort({ updatedAt: sortDirection })
            .skip(startIndex)
            .limit(pageSize);

        const totalPages = Math.ceil(totalPosts / pageSize);
        const postPerPage = posts.slice(startIndex, endIndex);

        res.status(200).json({
            postPerPage,
            posts,
            totalPosts,
            totalPages,
        });
    } catch (err) {
        next(err);
    }
};

export const getAllPost = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        next(err);
    }
};

export const getRandomNewestPostInLastMonth = async (req, res, next) => {
    try {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        const posts = await Post.find({ createdAt: { $gte: oneMonthAgo } });
        if (posts.length === 0) {
            return res.status(200).json([]);
        }

        const random5Post = posts.sort(() => Math.random() - 0.5).slice(0, 5);

        res.status(200).json(random5Post);
    } catch (e) {
        next(e);
    }
};

export const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        //retrieve current image ID
        const imgId = post.image.public_id;
        if (imgId) {
            await cloudinary.v2.uploader.destroy(imgId);
        }

        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedPost);
    } catch (e) {
        next(e);
    }
};

export const updatePost = async (req, res, next) => {
    try {
        const currentPost = await Post.findById(req.params.id);
        if (req.body.image !== "") {
            const imgId = currentPost.image.public_id;
            if (imgId) {
                await cloudinary.uploader.destroy(imgId);
            }
        }
        console.log(req.body);
        const post = await Post.findByIdAndUpdate(
            String(req.params.id),
            req.body
        );
        res.status(200).json(post);
    } catch (e) {
        next(e);
    }
};
