import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { logoFull } from "../../imageEntry.js";
// import { useTranslation } from "react-i18next";
const cx = classNames.bind(styles);
const Footer = () => {
    // const { t } = useTranslation();
    return (
        <footer className={cx("footer")}>
            <div className={cx("wrapper")}>
                <div className={cx("footer-left")}>
                    <img src={logoFull} alt="logo" loading="lazy" />
                </div>
                <div className={cx("footer-right")}>
                    <div className={cx("footer-info")}>
                        <div className={cx("footer-info-item")}>
                            {/* <FaLocationDot className={cx("footer-info-icon")} /> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={cx("footer-info-icon")}
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M8 1C6.54182 1.00165 5.14383 1.58165 4.11274 2.61274C3.08165 3.64383 2.50165 5.04182 2.5 6.5C2.5 11.2063 7.5 14.7606 7.71313 14.9094C7.7972 14.9683 7.89735 14.9999 8 14.9999C8.10265 14.9999 8.2028 14.9683 8.28687 14.9094C8.5 14.7606 13.5 11.2063 13.5 6.5C13.4983 5.04182 12.9184 3.64383 11.8873 2.61274C10.8562 1.58165 9.45818 1.00165 8 1ZM8 4.5C8.39556 4.5 8.78224 4.6173 9.11114 4.83706C9.44004 5.05682 9.69638 5.36918 9.84776 5.73463C9.99913 6.10009 10.0387 6.50222 9.96157 6.89018C9.8844 7.27814 9.69392 7.63451 9.41421 7.91421C9.13451 8.19392 8.77814 8.3844 8.39018 8.46157C8.00222 8.53874 7.60009 8.49913 7.23463 8.34776C6.86918 8.19638 6.55682 7.94004 6.33706 7.61114C6.1173 7.28224 6 6.89556 6 6.5C6 5.96957 6.21071 5.46086 6.58579 5.08579C6.96086 4.71071 7.46957 4.5 8 4.5Z"
                                    fill="white"
                                />
                            </svg>
                            <div className={cx("info-text")}>
                                <span>Địa chỉ:</span> Emmanuel Building, Số 28,
                                Phố Hàng Vôi, Phường Lý Thái Tổ, Quận Hoàn Kiếm,
                                Thành phố Hà Nội, Việt Nam
                            </div>
                        </div>
                        <div className={cx("footer-info-item")}>
                            {/* <FaPhone className={cx("footer-info-icon")} /> */}
                            <svg
                                className={cx("footer-info-icon")}
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M14.4925 10.9424C14.3811 11.7893 13.9651 12.5666 13.3224 13.1293C12.6797 13.6919 11.8542 14.0014 11 13.9999C6.03751 13.9999 2.00001 9.96237 2.00001 4.99987C1.99847 4.14568 2.30794 3.32014 2.87059 2.67743C3.43324 2.03473 4.21061 1.61882 5.05751 1.50737C5.27166 1.48122 5.48854 1.52504 5.67575 1.63227C5.86296 1.73951 6.01047 1.90441 6.09626 2.10237L7.41626 5.04925V5.05675C7.48194 5.20828 7.50906 5.37372 7.49521 5.5383C7.48136 5.70287 7.42696 5.86145 7.33688 5.99987C7.32563 6.01675 7.31376 6.03237 7.30126 6.048L6.00001 7.5905C6.46813 8.54175 7.46313 9.528 8.42688 9.99737L9.94813 8.703C9.96307 8.69044 9.97872 8.67875 9.99501 8.668C10.1333 8.57575 10.2924 8.51944 10.458 8.50416C10.6235 8.48888 10.7903 8.51512 10.9431 8.5805L10.9513 8.58425L13.8956 9.90362C14.0939 9.98911 14.2592 10.1365 14.3668 10.3237C14.4744 10.511 14.5185 10.728 14.4925 10.9424Z"
                                    fill="white"
                                />
                            </svg>
                            <div className={cx("info-text")}>
                                <span>Số điện thoại:</span> 0924982929
                            </div>
                        </div>
                        <div className={cx("footer-info-item")}>
                            {/* <MdEmail className={cx("footer-info-icon")} /> */}
                            <svg
                                className={cx("footer-info-icon")}
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M14 3H2C1.86739 3 1.74021 3.05268 1.64645 3.14645C1.55268 3.24021 1.5 3.36739 1.5 3.5V12C1.5 12.2652 1.60536 12.5196 1.79289 12.7071C1.98043 12.8946 2.23478 13 2.5 13H13.5C13.7652 13 14.0196 12.8946 14.2071 12.7071C14.3946 12.5196 14.5 12.2652 14.5 12V3.5C14.5 3.36739 14.4473 3.24021 14.3536 3.14645C14.2598 3.05268 14.1326 3 14 3ZM13.5 12H2.5V4.63688L7.66187 9.36875C7.75412 9.45343 7.87478 9.50041 8 9.50041C8.12522 9.50041 8.24588 9.45343 8.33813 9.36875L13.5 4.63688V12Z"
                                    fill="white"
                                />
                            </svg>
                            <div className={cx("info-text")}>
                                <span>Email:</span> eev_law@eev.vn
                            </div>
                        </div>
                        <div className={cx("footer-info-item")}>
                            {/* <FaBarcode className={cx("footer-info-icon")} /> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={cx("footer-info-icon")}
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M14 2.5V5C14 5.13261 13.9473 5.25979 13.8536 5.35355C13.7598 5.44732 13.6326 5.5 13.5 5.5C13.3674 5.5 13.2402 5.44732 13.1464 5.35355C13.0527 5.25979 13 5.13261 13 5V3H11C10.8674 3 10.7402 2.94732 10.6464 2.85355C10.5527 2.75979 10.5 2.63261 10.5 2.5C10.5 2.36739 10.5527 2.24021 10.6464 2.14645C10.7402 2.05268 10.8674 2 11 2H13.5C13.6326 2 13.7598 2.05268 13.8536 2.14645C13.9473 2.24021 14 2.36739 14 2.5ZM5 13H3V11C3 10.8674 2.94732 10.7402 2.85355 10.6464C2.75979 10.5527 2.63261 10.5 2.5 10.5C2.36739 10.5 2.24021 10.5527 2.14645 10.6464C2.05268 10.7402 2 10.8674 2 11V13.5C2 13.6326 2.05268 13.7598 2.14645 13.8536C2.24021 13.9473 2.36739 14 2.5 14H5C5.13261 14 5.25979 13.9473 5.35355 13.8536C5.44732 13.7598 5.5 13.6326 5.5 13.5C5.5 13.3674 5.44732 13.2402 5.35355 13.1464C5.25979 13.0527 5.13261 13 5 13ZM13.5 10.5C13.3674 10.5 13.2402 10.5527 13.1464 10.6464C13.0527 10.7402 13 10.8674 13 11V13H11C10.8674 13 10.7402 13.0527 10.6464 13.1464C10.5527 13.2402 10.5 13.3674 10.5 13.5C10.5 13.6326 10.5527 13.7598 10.6464 13.8536C10.7402 13.9473 10.8674 14 11 14H13.5C13.6326 14 13.7598 13.9473 13.8536 13.8536C13.9473 13.7598 14 13.6326 14 13.5V11C14 10.8674 13.9473 10.7402 13.8536 10.6464C13.7598 10.5527 13.6326 10.5 13.5 10.5ZM2.5 5.5C2.63261 5.5 2.75979 5.44732 2.85355 5.35355C2.94732 5.25979 3 5.13261 3 5V3H5C5.13261 3 5.25979 2.94732 5.35355 2.85355C5.44732 2.75979 5.5 2.63261 5.5 2.5C5.5 2.36739 5.44732 2.24021 5.35355 2.14645C5.25979 2.05268 5.13261 2 5 2H2.5C2.36739 2 2.24021 2.05268 2.14645 2.14645C2.05268 2.24021 2 2.36739 2 2.5V5C2 5.13261 2.05268 5.25979 2.14645 5.35355C2.24021 5.44732 2.36739 5.5 2.5 5.5ZM11.5 10.5V5.5C11.5 5.23478 11.3946 4.98043 11.2071 4.79289C11.0196 4.60536 10.7652 4.5 10.5 4.5H5.5C5.23478 4.5 4.98043 4.60536 4.79289 4.79289C4.60536 4.98043 4.5 5.23478 4.5 5.5V10.5C4.5 10.7652 4.60536 11.0196 4.79289 11.2071C4.98043 11.3946 5.23478 11.5 5.5 11.5H10.5C10.7652 11.5 11.0196 11.3946 11.2071 11.2071C11.3946 11.0196 11.5 10.7652 11.5 10.5Z"
                                    fill="white"
                                />
                            </svg>
                            <div className={cx("info-text")}>
                                <span>Mã số thuế / Mã số doanh nghiệp:</span>{" "}
                                0104340018
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className={cx("footer-bottom")}>
                <span>© 2024. EEV Group.</span>
            </div>
        </footer>
    );
};

export default Footer;
