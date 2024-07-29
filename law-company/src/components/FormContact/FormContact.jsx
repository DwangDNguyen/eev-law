import React from "react";
import styles from "./FormContact.module.scss";
import classNames from "classnames/bind";
import { Form, Input, Select, Space, Button, message } from "antd";
import { contactApi } from "../../utils/axios";

const cx = classNames.bind(styles);

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 20,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 0,
        span: 24,
    },
};

const FormContact = () => {
    const [form] = Form.useForm();
    const validateMessages = {
        required: "'${name}' là bắt buộc",
        // ...
    };

    const onFinish = async (values) => {
        const res = await contactApi.post("/", {
            username: values.Username,
            email: values.Email,
            message: values.Message,
        });

        console.log(res);

        if (res.data.success) {
            form.resetFields();
            message.success("Gửi tin nhắn thành công");
        }
    };

    return (
        <div className={cx("form-container")}>
            <div className={cx("form-top")}>
                <h2>Liên hệ với chúng tôi</h2>
                <span>
                    Liên lạc với chúng tôi qua số điện thoại 0924982929 hoặc
                    điền form dưới đây để chúng tôi tư vấn cho bạn
                </span>
            </div>
            <div className={cx("form-bottom")}>
                <Form
                    // {...layout}
                    form={form}
                    layout="vertical"
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
                        name="Email"
                        label="Email"
                        rules={[
                            {
                                type: "email",
                                message: "Định dạng email không chính xác",
                            },
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="Message"
                        label="Message"
                        rules={[{ required: true }]}
                    >
                        <Input.TextArea rows={4} />
                    </Form.Item>

                    <Form.Item {...tailLayout} style={{ marginTop: "50px" }}>
                        {/* <Space> */}
                        <Button
                            type="primary"
                            htmlType="submit"
                            className={cx("form-button")}
                        >
                            Submit
                        </Button>
                        {/* </Space> */}
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default FormContact;
