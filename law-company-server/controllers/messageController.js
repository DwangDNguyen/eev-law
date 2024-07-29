import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import moment from "moment";
import * as dotenv from "dotenv";

dotenv.config();
export const postMessage = async (req, res, next) => {
    try {
        const userEmail = req.body.email;
        console.log(req.body);
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",

            auth: {
                user: process.env.EMAIL_AUTH,
                pass: process.env.PASSWORD_AUTH,
            },
        });
        let MailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: `eev.vn`,
                link: "https://eev.vn",
            },
        });
        let response = {
            body: {
                greeting: "Kính gửi",
                name: "Công ty luật EEV, email của tôi là: " + userEmail,
                signature: "Sincerely",
                intro: req.body.message,
            },
        };
        let mail = MailGenerator.generate(response);
        let message = {
            from: req.body.email,
            to: process.env.EMAIL_ADMIN,
            subject: "Vấn đề của khách hàng",
            html: mail,
        };

        transporter
            .sendMail(message)
            .then(() => {
                res.status(200).json({
                    success: true,
                });
            })
            .catch((err) => {
                // return res.status(500).json({ err });
                console.log(err);
                res.status(500).json({ success: false });
            });

        return;
    } catch (e) {
        next(e);
    }
};
