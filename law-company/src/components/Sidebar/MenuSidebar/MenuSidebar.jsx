import { motion } from "framer-motion";
import styles from "../Sidebar.module.scss";
import classNames from "classnames/bind";
import { useLocation, useNavigate } from "react-router-dom";
import { advise } from "../../../lib/dummyData";
import { ConfigProvider, Menu } from "antd";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};
const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const MenuSidebar = ({ setOpen }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState([]);
    const pathToKeyMap = {
        "/": "menu1",
        "/advise": "menu2",
        "/recruitment": "menu3",
        "/members": "menu4",
    };

    const submenuPathToKeyMap = advise.reduce((acc, item) => {
        acc[`/advise/${item.slug}`] = item.key;
        return acc;
    }, {});
    useEffect(() => {
        let mainKey = Object.keys(pathToKeyMap).find((path) =>
            location.pathname.startsWith(path)
        );
        let subKey = Object.keys(submenuPathToKeyMap).find((path) =>
            location.pathname.startsWith(path)
        );

        if (subKey) {
            setSelectedKeys([submenuPathToKeyMap[subKey]]);
        } else if (mainKey) {
            setSelectedKeys([pathToKeyMap[mainKey]]);
        }
    }, [location]);

    const items = [
        {
            key: "menu1",
            label: "Trang chủ",
            onClick: () => {
                navigate("/");
                setOpen((prev) => !prev);
            },
        },
        {
            key: "menu2",
            label: "Tư vấn pháp luật",
            children: advise.map((item) => ({
                key: item.key,
                label: item.name,
                onClick: () => {
                    navigate(`/advise/${item.slug}`);
                    setOpen((prev) => !prev);
                },
            })),
        },
        {
            key: "menu3",
            label: "Tuyển dụng",
            onClick: () => {
                navigate("/recruitment");
                setOpen((prev) => !prev);
            },
        },
        // {
        //     key: "menu4",
        //     label: "Thành viên",
        // },
    ];

    return (
        <motion.div className={cx("links")} variants={variants}>
            <ConfigProvider
                theme={{
                    components: {
                        Menu: {
                            itemSelectedColor: "#1a284d",
                            itemSelectedBg: "#b8cbff91",
                        },
                    },
                    token: {
                        colorPrimaryBorder: "#1a284d",
                    },
                }}
            >
                <Menu
                    onClick={items?.onClick}
                    className={cx("menu")}
                    selectedKeys={selectedKeys}
                    defaultSelectedKeys={["menu1"]}
                    // defaultOpenKeys={["menu2"]}
                    mode="inline"
                    items={items}
                />
            </ConfigProvider>
        </motion.div>
    );
};

export default MenuSidebar;
