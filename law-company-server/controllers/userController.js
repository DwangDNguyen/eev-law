import User from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function login(req, res, next) {
    const { username } = req.body;

    if (req.body.username == "" || req.body.password == "")
        res.status(400).json("Vui lòng nhập đầy đủ thông tin");
    try {
        let user = await User.findOne({
            username: username,
        });
        // console.log(user);
        if (!user) {
            return res.status(400).json("Không tồn tại người dùng!");
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (validPassword === false) {
            return res
                .status(400)
                .json("Mật khẩu không chính xác! Vui lòng thử lại");
        }
        const token = jwt.sign(
            { username: user.username, id: user._id },
            process.env.JWT_SECRET,
            {
                expiresIn: "86400s",
            }
        );

        return res
            .cookie("access_token", token, {
                httpOnly: true,
                sameSite: "none",
                secure: true,
            })
            .status(200)
            .json(user);
    } catch (error) {
        next(error);
    }
}

export async function register(req, res) {
    try {
        const { username, password } = req.body;
        console.log(password);

        Promise.resolve()
            .then(() => {
                if (password) {
                    bcrypt
                        .hash(password, 10)
                        .then((hashedPassword) => {
                            const newUser = new User({
                                username,
                                password: hashedPassword,
                            });
                            newUser
                                .save()
                                .then((result) => res.status(201).json(result))
                                .catch((err) => res.status(500).json(err));
                        })
                        .catch((err) => {
                            return res.status(500).json(err);
                        });
                }
            })
            .catch((err) => {
                return res.status(500).json(err);
            });
    } catch (err) {
        return res.status(500).json(err);
    }
}
