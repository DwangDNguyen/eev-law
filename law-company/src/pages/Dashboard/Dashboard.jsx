import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.scss";
import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import ListPost from "../../components/ListPost/ListPost";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Menu } from "antd";
import HandlePost from "../../components/HandlePost/HandlePost";

const cx = classNames.bind(styles);

const items = [
    {
        key: "menu1",
        label: "Danh sách bài viết",
    },
    {
        key: "menu2",
        label: "Thêm bài viết",
    },
];

const Dashboard = () => {
    const [tab, setTab] = useState("");

    useEffect(() => {
        setTab(tab);
    }, [tab]);
    return (
        <HelmetProvider>
            <div className={cx("dashboard")}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Dashboard</title>
                    <meta
                        name="description"
                        content="Dashboard of EEV LAW FIRM"
                    />
                    <link rel="canonical" href="https://eev.vn" />
                </Helmet>
                <div className={cx("dashboard-sidebar")}>
                    <Menu
                        onClick={({ key }) => setTab(key)}
                        style={{
                            width: 256,
                            height: "100%",
                        }}
                        defaultSelectedKeys={["menu1"]}
                        defaultOpenKeys={["menu1"]}
                        mode="inline"
                        items={items}
                    />
                </div>
                <div className={cx("dashboard-content")}>
                    {tab === "menu2" ? <HandlePost /> : <ListPost />}
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Dashboard;
