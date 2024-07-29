import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "./HandlePost.module.scss";
import classNames from "classnames/bind";
import { Input, Select, message, Upload, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { api } from "../../utils/axios";
// import cloudinary from "../../utils/cloudinaryUtils.js";

const { Dragger } = Upload;
const cx = classNames.bind(styles);

const HandlePost = ({ isUpdate, dataUpdate }) => {
    const [formData, setFormData] = useState({
        title: dataUpdate?.title || "",
        content: dataUpdate?.content || "",
        category: dataUpdate?.category || "",
        image: dataUpdate?.image || {
            public_id: "",
            url: "",
        },
        intro: dataUpdate?.intro || "",
        slug: dataUpdate?.slug || "",
    });

    const props = {
        name: "file",
        multiple: false,
        customRequest: async ({ file, onSuccess, onError }) => {
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "eev_law");
            data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_NAME);

            try {
                const res = await axios.post(
                    `https://api.cloudinary.com/v1_1/${
                        import.meta.env.VITE_CLOUDINARY_NAME
                    }/image/upload`,
                    data
                );
                onSuccess(res.data, file);
                console.log(res.data);
                setFormData({
                    ...formData,
                    image: {
                        public_id: res.data.public_id,
                        url: res.data.secure_url,
                    },
                });
            } catch (err) {
                onError(err);
            }
        },
        onChange(info) {
            const { status } = info.file;
            if (status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (status === "done") {
                message.success(`Tải ảnh lên thành công.`);
            } else if (status === "error") {
                message.error(`Tải ảnh lên thất bại.`);
            }
        },
        onDrop(e) {
            console.log("Dropped files", e.dataTransfer.files);
        },
        onRemove: async (file) => {
            console.log(file);
            try {
                const response = await axios.post(
                    "http://localhost:5000/api/image/delete/" +
                        file.response.public_id
                );
                console.log(response);
                setFormData({ ...formData, image: { public_id: "", url: "" } });
                // const data = await response.json();
                message.success(`Xóa file thành công`);
                // Update file list
                return true;
            } catch (err) {
                message.error(`${file.name} file deletion failed.`);
            }
        },
    };

    const handleChange = (value) => {
        setFormData({ ...formData, category: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isUpdate) {
                const res = await api.put(`/update/${dataUpdate._id}`, {
                    ...formData,
                });

                if (res.status === 200) {
                    message.success("Cập nhật bài viết thành công");
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            } else {
                const res = await axios.post(
                    "http://localhost:5000/api/post/",
                    {
                        ...formData,
                    }
                );
                console.log(res.data);
                if (res.status === 200) {
                    message.success("Tạo bài viết thành công");
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }

                if (res.status === 400) {
                    message.error(res.response.data.err);
                }
            }
        } catch (error) {
            // setPublishError("Something went wrong");
            message.error(error.response.data.err);
        }
    };

    return (
        <div className={cx("add-post")}>
            {isUpdate ? "" : <h1>Thêm bài viết</h1>}
            <form onSubmit={handleSubmit}>
                <div className={cx("input-wrapper")}>
                    <Input
                        placeholder="Tiêu đề bài viết"
                        value={formData.title}
                        onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                        }
                    />
                    <Select
                        placeholder="Thể loại bài viết"
                        style={{
                            width: 250,
                        }}
                        value={formData.category}
                        onChange={handleChange}
                        options={[
                            {
                                value: "Tư vấn luật doanh nghiệp",
                                label: "Tư vấn luật doanh nghiệp",
                            },
                            {
                                value: "Tư vấn luật lao động",
                                label: "Tư vấn luật lao động",
                            },
                            {
                                value: "Tư vấn luật sở hữu trí tuệ",
                                label: "Tư vấn luật sở hữu trí tuệ",
                            },
                            {
                                value: "Tư vấn luật dân sự",
                                label: "Tư vấn luật dân sự",
                            },
                            {
                                value: "Tư vấn luật đất đai",
                                label: "Tư vấn luật đất đai",
                            },
                            {
                                value: "Tư vấn luật bảo hiểm xã hội",
                                label: "Tư vấn luật bảo hiểm xã hội",
                            },
                            {
                                value: "Tư vấn luật hành chính",
                                label: "Tư vấn luật hành chính",
                            },
                            {
                                value: "Tư vấn luật nghĩa vụ quân sự",
                                label: "Tư vấn luật nghĩa vụ quân sự",
                            },
                            {
                                value: "Tư vấn luật cạnh tranh",
                                label: "Tư vấn luật cạnh tranh",
                            },
                        ]}
                    />
                </div>
                <Input
                    placeholder="Slug"
                    value={formData.slug}
                    onChange={(e) =>
                        setFormData({ ...formData, slug: e.target.value })
                    }
                    style={{ marginBottom: "20px" }}
                />
                <Input
                    placeholder="Lời giới thiệu"
                    value={formData.intro}
                    onChange={(e) =>
                        setFormData({ ...formData, intro: e.target.value })
                    }
                    style={{ marginBottom: "20px" }}
                />

                <div className={cx("input-image-wrapper")}>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                            Nhấp hoặc kéo tệp vào khu vực này để tải lên
                        </p>
                        {/* <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly
                            prohibited from uploading company data or other
                            banned files.
                        </p> */}
                    </Dragger>
                </div>
                <ReactQuill
                    theme="snow"
                    placeholder="Nội dung bài viết"
                    onChange={(value) => {
                        setFormData({ ...formData, content: value });
                    }}
                    value={formData.content}
                    required
                    style={
                        isUpdate === false
                            ? { marginBottom: "60px" }
                            : {
                                  marginBottom: "60px",
                                  height: "200px",
                                  //   overflowY: "scroll",
                              }
                    }
                />
                {isUpdate ? (
                    <Button type="primary" htmlType="submit">
                        Cập nhật bài viết
                    </Button>
                ) : (
                    <Button type="primary" htmlType="submit">
                        Tạo bài viết
                    </Button>
                )}
            </form>
        </div>
    );
};

export default HandlePost;
