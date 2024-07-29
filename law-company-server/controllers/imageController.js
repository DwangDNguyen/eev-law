import cloudinary from "../utils/cloudinaryUtils.js";
export const deleteImage = async (req, res, next) => {
    try {
        const img = req.params.id;
        console.log(img);
        const response = await cloudinary.v2.uploader.destroy(img);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        next(e);
    }
};
