import React from "react";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { Form, Input, Space, Button, message } from "antd";
import { userApi } from "../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../app/user/userSlice";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { LogoEEV } from "../../imageEntry";

const cx = classNames.bind(styles);

// const layout = {
//     labelCol: {
//         span: 16,
//     },
//     wrapperCol: {
//         span: 30,
//     },
// };
// const tailLayout = {
//     wrapperCol: {
//         offset: 4,
//         span: 16,
//     },
// };

const Login = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const validateMessages = {
        required: "'${name}' là bắt buộc",
        // ...
    };

    const onFinish = async (values) => {
        try {
            const res = await userApi.post("/login", {
                username: values.Username,
                password: values.Password,
            });

            console.log(res);

            if (res.data) {
                dispatch(loginSuccess(res.data));
                message.success("Đăng nhập thành công");
                navigate("/dashboard");
            }
        } catch (error) {
            if (error.response) {
                // Lỗi từ phản hồi API
                message.error(error.response.data);
            } else if (error.request) {
                // Không nhận được phản hồi
                message.error(
                    "Không thể kết nối tới máy chủ. Vui lòng thử lại sau."
                );
            } else {
                // Lỗi khác
                message.error("Đã xảy ra lỗi. Vui lòng thử lại.");
            }
        }
    };
    return (
        <HelmetProvider>
            <div className={cx("login")}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Đăng nhập</title>
                    <meta name="description" content="Login EEV LAW FIRM" />
                    <link rel="canonical" href="https://eev.vn" />
                </Helmet>
                <div className={cx("login-container")}>
                    <div className={cx("image")}>
                        <img srcSet={`${LogoEEV} 2x`} alt="logo-eev" />
                    </div>
                    <div className={cx("login-form")}>
                        <h1>Đăng nhập</h1>
                        <span className={cx("login-form-title")}>
                            Chỉ quản trị viên mới có thể đăng nhập
                        </span>
                        <Form
                            // {...layout}
                            form={form}
                            layout={"vertical"}
                            name="control-hooks"
                            onFinish={onFinish}
                            validateMessages={validateMessages}
                            // style={{
                            //     maxWidth: 600,
                            // }}
                        >
                            <Form.Item
                                name="Username"
                                label="Username"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="Password"
                                label="Password"
                                rules={[
                                    {
                                        type: "password",
                                        message: "password không hợp lệ",
                                    },
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item

                            // style={{ marginTop: "50px" }}
                            >
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className={cx("form-button")}
                                >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Login;
