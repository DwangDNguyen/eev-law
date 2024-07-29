import React, { useEffect, useState } from "react";
import styles from "./ListPost.module.scss";
import classNames from "classnames/bind";
import { message, Space, Table, Modal } from "antd";
import { api } from "../../utils/axios";
import HandlePost from "../HandlePost/HandlePost";

const cx = classNames.bind(styles);
const ListPost = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdate, setIsUpdate] = useState(false);
    const columns = [
        {
            title: "Tiêu đề",
            dataIndex: "title",
            key: "title",
            render: (text) => <p>{text}</p>,
        },
        {
            title: "Thể loại",
            dataIndex: "category",
            key: "category",
        },

        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <div
                        style={{ cursor: "pointer", color: "blue" }}
                        onClick={() => showLoading(record)}
                    >
                        Cập nhật
                    </div>
                    <div
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => handleDelete(record._id)}
                    >
                        Xóa
                    </div>
                </Space>
            ),
        },
    ];

    const handleDelete = async (id) => {
        try {
            const res = await api.delete("/delete/" + id);
            setData(data.filter((item) => item._id !== id));
            message.success("Xóa bài viết thành công");
        } catch (e) {
            console.log(e);
        }
    };
    const showLoading = (record) => {
        setIsModalOpen(true);
        setIsLoading(true);
        setIsUpdate(true);

        // Simple loading mock. You should add cleanup logic in real world.
        setTimeout(() => {
            setDataUpdate(record);
            setIsLoading(false);
        }, 1000);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        setIsUpdate(false);
    };
    useEffect(() => {
        const fetchData = async () => {
            const res = await api.get("/allPosts");
            setData(res.data);
        };
        fetchData();
    }, []);

    return (
        <div className={cx("table")}>
            <Table columns={columns} dataSource={data} />
            <Modal
                title="Cập nhật bài viết"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                loading={isLoading}
                footer={null}
            >
                <HandlePost isUpdate={isUpdate} dataUpdate={dataUpdate} />
            </Modal>
        </div>
    );
};

export default ListPost;
