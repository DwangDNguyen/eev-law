import React, { useEffect, useRef } from "react";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    Agreement,
    Banner,
    BgHomeContact,
    Bgr,
    CourtHouse,
    Hammer,
    Knife,
    LogoEEV,
    Rectangle,
    SectionImage1,
    SubBanner,
} from "../../imageEntry";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { LuMouse } from "react-icons/lu";
import Typewriter from "typewriter-effect";
import FormContact from "../../components/FormContact/FormContact";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const Home = () => {
    const navigate = useNavigate();
    const contactRef = useRef(null);
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <HelmetProvider>
            <div className={cx("home")}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>EEV LAW FIRM</title>
                    <meta name="description" content="Home of EEV GROUP" />
                    <link rel="canonical" href="https://eev.vn" />
                </Helmet>
                <div className={cx("home-banner")}>
                    <div className={cx("home-banner-bgr")}>
                        {/* <ImageComponent src={Bgr} alt="bgr" /> */}
                        <img
                            srcSet={`${Bgr} 2x`}
                            loading="lazy"
                            alt="bgr-EEV"
                        />
                    </div>
                    <motion.div
                        className={cx("home-banner-container")}
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <div className={cx("home-banner-slogan")}>
                            <div className={cx("home-banner-slogan-text")}>
                                <p>Công ty Luật TNHH EEV</p>
                                <motion.span variants={textVariants}>
                                    Chúng tôi đem đến cho người dùng những thông
                                    tin luật
                                </motion.span>
                                <Typewriter
                                    options={{
                                        strings: [
                                            "nhanh nhất",
                                            "dễ hiểu nhất",
                                            "đầy đủ nhất",
                                            "chính xác nhất",
                                        ],
                                        autoStart: true,
                                        cursor: "",
                                        loop: true,
                                        wrapperClassName: cx("slogan-text"),
                                    }}
                                />
                            </div>
                            <div className={cx("home-banner-slogan-icon")}>
                                <motion.div
                                    variants={textVariants}
                                    animate="scrollButton"
                                    className={cx("mouse")}
                                >
                                    <LuMouse />
                                </motion.div>
                                <span>Kéo xuống</span>
                            </div>
                        </div>
                        <div className={cx("home-banner-image")}>
                            <img
                                srcSet={`${Banner} 2x`}
                                alt="banner-EEV"
                                loading="lazy"
                                className={cx("img-banner")}
                            />
                            <img
                                srcSet={`${SubBanner} 2x`}
                                alt="banner-EEV"
                                loading="lazy"
                                className={cx("sub-banner")}
                            />
                        </div>
                    </motion.div>
                </div>
                <div className={cx("home-section")}>
                    <div className={cx("home-section-rectangle")}>
                        <img
                            srcSet={`${Rectangle} 2x`}
                            loading="lazy"
                            alt="rectangle"
                        />
                    </div>
                    <div className={cx("home-section-container")}>
                        <div className={cx("home-section-left")}>
                            <img
                                srcSet={`${SectionImage1} 2x`}
                                alt="section-1"
                                loading="lazy"
                                data-aos="fade-left"
                            />
                        </div>
                        <div className={cx("logo-mobile")}>
                            <img
                                srcSet={`${LogoEEV} 2x`}
                                alt="logo-eev"
                                loading="lazy"
                                data-aos="fade-right"
                            />
                        </div>
                        <div
                            className={cx("home-section-right")}
                            data-aos="fade-right"
                        >
                            <p>
                                Tại Công ty Luật EEV, khẩu hiệu “Hợp tác vững
                                chắc - Tầm nhìn sáng suốt - Thành công bền vững”
                                là một lời cam kết đối với khách hàng, chúng tôi
                                sẽ luôn mang đến cho khách hàng dịch vụ tư vấn
                                pháp lý chuyên nghiệp và toàn diện. Cùng với đó
                                là những thông tin luật hữu ích để khách hàng
                                nắm bắt thông tin một cách chính xác nhất.
                            </p>
                            <button
                                data-aos="fade-right"
                                onClick={() => {
                                    contactRef.current.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                        inline: "nearest",
                                        scrollMode: "smooth",
                                    });
                                }}
                            >
                                Liên hệ
                            </button>
                        </div>
                    </div>
                </div>
                <div className={cx("home-service")} data-aos="fade-right">
                    <h2>Dịch vụ của chúng tôi</h2>
                    <span>
                        Dịch vụ tư vấn pháp luật toàn diện phù hợp với nhu cầu
                        của bạn
                    </span>
                    <div className={cx("home-service-container")}>
                        <div className={cx("home-service-item")}>
                            <div className={cx("home-service-item-top")}>
                                <div className={cx("home-service-item-img")}>
                                    <img
                                        srcSet={`${CourtHouse} 2x`}
                                        loading="lazy"
                                        alt="court-house"
                                    />
                                </div>
                                <p>Tư vấn luật doanh nghiệp</p>
                                <span>
                                    Dịch vụ cung cấp lời khuyên pháp lý cho các
                                    công ty về các vấn đề liên quan đến hoạt
                                    động kinh doanh, như thành lập công ty, hợp
                                    đồng, thuế, lao động, và tuân thủ các quy
                                    định pháp luật.
                                </span>
                            </div>
                            <div
                                className={cx("home-service-item-bottom")}
                                onClick={() =>
                                    navigate("/advise/advise-law-company")
                                }
                            >
                                <p>Xem thêm {`>`}</p>
                            </div>
                        </div>
                        <div className={cx("home-service-item")}>
                            <div className={cx("home-service-item-top")}>
                                <div className={cx("home-service-item-img")}>
                                    <img
                                        srcSet={`${Hammer} 2x`}
                                        loading="lazy"
                                        alt="hammer"
                                    />
                                </div>
                                <p>Tư vấn luật hành chính</p>
                                <span>
                                    Dịch vụ cung cấp lời khuyên pháp lý về các
                                    vấn đề liên quan đến quản lý nhà nước, các
                                    thủ tục hành chính, khiếu nại, tố cáo, và
                                    tuân thủ các quy định của cơ quan nhà nước.
                                </span>
                            </div>
                            <div
                                className={cx("home-service-item-bottom")}
                                onClick={() =>
                                    navigate(
                                        "/advise/administrative-law-consultancy"
                                    )
                                }
                            >
                                <p>Xem thêm {`>`}</p>
                            </div>
                        </div>
                        <div className={cx("home-service-item")}>
                            <div className={cx("home-service-item-top")}>
                                <div className={cx("home-service-item-img")}>
                                    <img
                                        srcSet={`${Agreement} 2x`}
                                        loading="lazy"
                                        alt="Agreement"
                                    />
                                </div>
                                <p>Tư vấn luật lao động</p>
                                <span>
                                    Dịch vụ cung cấp lời khuyên pháp lý về các
                                    vấn đề liên quan đến quan hệ lao động, hợp
                                    đồng lao động, quyền lợi và nghĩa vụ của
                                    người lao động và người sử dụng lao động,
                                    cũng như giải quyết tranh chấp lao động.
                                </span>
                            </div>
                            <div
                                className={cx("home-service-item-bottom")}
                                onClick={() =>
                                    navigate("/advise/labor-law-consulting")
                                }
                            >
                                <p>Xem thêm {`>`}</p>
                            </div>
                        </div>
                        <div className={cx("home-service-item")}>
                            <div className={cx("home-service-item-top")}>
                                <div className={cx("home-service-item-img")}>
                                    <img
                                        srcSet={`${Knife} 2x`}
                                        alt="knife"
                                        loading="lazy"
                                    />
                                </div>
                                <p>Tư vấn luật dân sự</p>
                                <span>
                                    Dịch vụ cung cấp lời khuyên pháp lý về các
                                    vấn đề liên quan đến quan hệ dân sự, như hợp
                                    đồng, thừa kế, hôn nhân và gia đình, quyền
                                    sở hữu, và các tranh chấp dân sự khác.
                                </span>
                            </div>
                            <div
                                className={cx("home-service-item-bottom")}
                                onClick={() =>
                                    navigate("/advise/civil-law-consulting")
                                }
                            >
                                <p>Xem thêm {`>`}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("home-contact")} ref={contactRef}>
                    <div className={cx("bg-home-contact")}>
                        <img
                            srcSet={`${BgHomeContact} 2x`}
                            loading="lazy"
                            alt="bg-home-contact"
                        />
                    </div>
                    <div className={cx("form-contact")} data-aos="fade-right">
                        <FormContact />
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Home;
