import React from "react";
import styles from "./Recruitment.module.scss";
import classNames from "classnames/bind";
import { Error } from "../../imageEntry";

const cx = classNames.bind(styles);
const Recruitment = () => {
    return (
        <div className={cx("recruitment")}>
            <h1>Tuyển dụng</h1>
            <div className={cx("recruitment-container")}>
                <img
                    srcSet="https://res.cloudinary.com/dknl2t1z1/image/upload/v1723256197/not-found_exyonc.webp 2x"
                    alt="Error"
                    loading="lazy"
                />
                <span>
                    Hiện không có thông tin tuyển dụng. Vui lòng quay lại sau.
                </span>
            </div>
        </div>
    );
};

export default Recruitment;
