import React from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
import { Button, Dropdown, Space } from "antd";
import { Logo, LogoNav } from "../../imageEntry";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../app/user/userSlice";
import Sidebar from "../Sidebar/Sidebar";
const cx = classNames.bind(styles);

const Navbar = () => {
    const currentUser = useSelector((state) => state.user.user);
    const items = [
        {
            key: "1",
            label: (
                <Link to="/advise/advise-law-company">
                    Tư vấn luật doanh nghiệp
                </Link>
            ),
        },
        {
            key: "2",
            label: (
                <Link to="/advise/labor-law-consulting">
                    Tư vấn luật lao động
                </Link>
            ),
        },
        {
            key: "3",
            label: (
                <Link to="/advise/intellectual-property-law-consulting">
                    Tư vấn luật sở hữu trí tuệ
                </Link>
            ),
        },
        {
            key: "4",
            label: (
                <Link to="/advise/civil-law-consulting">
                    Tư vấn luật dân sự
                </Link>
            ),
        },
        {
            key: "5",
            label: (
                <Link to="/advise/land-law-consultancy">
                    Tư vấn luật đất đai
                </Link>
            ),
        },
        {
            key: "6",
            label: (
                <Link to="/advise/social-insurance-law-consultancy">
                    Tư vấn luật bảo hiểm xã hội
                </Link>
            ),
        },
        {
            key: "7",
            label: (
                <Link to="/advise/administrative-law-consultancy">
                    Tư vấn luật hành chính
                </Link>
            ),
        },
        {
            key: "8",
            label: (
                <Link to="/advise/military-service-law-consultancy">
                    Tư vấn luật nghĩa vụ quân sự
                </Link>
            ),
        },
        {
            key: "9",
            label: (
                <Link to="/advise/competition-law-consultancy">
                    Tư vấn luật cạnh tranh
                </Link>
            ),
        },
    ];
    const subMenuStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        padding: "20px",
    };

    const dispatch = useDispatch();

    return (
        <>
            <Sidebar />
            <div className={cx("navbar-content")}>
                <div className={cx("logo")}>
                    <img
                        srcSet="https://res.cloudinary.com/dknl2t1z1/image/upload/v1723256196/logo-nav_sdy4jp.png 2x"
                        alt="logo"
                    />
                </div>
                <div className={cx("menu")}>
                    <Space direction="vertical">
                        <Space wrap className={cx("menu-container")}>
                            <Link to={"/"} className={cx("menu-item")}>
                                Trang chủ
                            </Link>

                            <Dropdown
                                menu={{
                                    items,
                                }}
                                placement="bottom"
                                dropdownRender={(menu) => (
                                    <div>
                                        {React.cloneElement(menu, {
                                            style: subMenuStyle,
                                        })}
                                    </div>
                                )}
                            >
                                <div className={cx("menu-item")}>
                                    Tư vấn Pháp Luật
                                </div>
                            </Dropdown>

                            {/* <div className={cx("menu-item")}>Thành viên</div> */}
                            <Link
                                to={"/recruitment"}
                                className={cx("menu-item")}
                            >
                                Tuyển dụng
                            </Link>
                            {/* {!currentUser && (
                                <Link to="/login" className={cx("menu-item")}>
                                    Đăng nhập
                                </Link>
                            )} */}
                            {currentUser && (
                                <Link
                                    to="/login"
                                    onClick={() => dispatch(logout())}
                                    className={cx("menu-item")}
                                >
                                    Đăng xuất
                                </Link>
                            )}
                        </Space>
                    </Space>
                </div>
                <div className={cx("search-navbar")}>
                    <SearchInput size="medium" />
                </div>
            </div>
        </>
    );
};

export default Navbar;
