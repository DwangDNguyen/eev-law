import React, { useEffect, useState } from "react";
import styles from "./SearchPage.module.scss";
import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";
import { api } from "../../utils/axios";
import { BgHeader, Error } from "../../imageEntry";
import CardPost from "../../components/CardPost/CardPost";
import { Pagination } from "antd";
import { Flex, Spin } from "antd";
import { Helmet, HelmetProvider } from "react-helmet-async";

const cx = classNames.bind(styles);
const SearchPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const q = searchParams.get("q");
    const [searchPosts, setSearchPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [totalPosts, setTotalPosts] = useState();

    useEffect(() => {
        const fetchSearchPost = async () => {
            setIsLoading(true);
            const res = await api.get("/search", {
                params: { q: String(q), page: currentPage, pageSize: 2 },
            });

            const totalAllPosts = res.data.totalPosts;
            setSearchPosts(res.data.posts);
            setTotalPosts(totalAllPosts.length);
            setIsLoading(false);
        };

        fetchSearchPost();
    }, [q, currentPage]);
    const handleChangePage = (e) => {
        setCurrentPage(e);
        // window.scrollTo(0, 0);
    };
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tìm kiếm - EEV LAW FIRM</title>
                <meta name="description" content="Search  EEV LAW FIRM" />
                <link rel="canonical" href="https://eev.vn" />
            </Helmet>
            <div className={cx("search-page-header")}>
                <div className={cx("search-page-bg")}>
                    <img
                        srcSet={`${BgHeader} 2x`}
                        alt="bg-law"
                        loading="lazy"
                    />
                </div>
                <h1>Kết quả tìm kiếm</h1>
                <span>Cho từ khóa "{q}"</span>
            </div>
            <div className={cx("search-page-container")}>
                {searchPosts.length === 0 && !isLoading ? (
                    <div className={cx("error")}>
                        <img
                            srcSet={`${Error} 2x`}
                            alt="Error"
                            loading="lazy"
                        />
                        <span>Không tìm thấy bài viết nào</span>
                    </div>
                ) : (
                    <div className={cx("search-page-content")}>
                        <div className={cx("search-page-result")}>
                            {isLoading ? (
                                <div className={cx("loading")}>
                                    <Flex justify="center" align="middle">
                                        <Spin size="large" />
                                    </Flex>
                                </div>
                            ) : (
                                searchPosts.map((post) => (
                                    <CardPost key={post._id} post={post} />
                                ))
                            )}
                        </div>

                        <div className={cx("pagination")}>
                            <Pagination
                                defaultCurrent={1}
                                total={totalPosts}
                                showSizeChanger={false}
                                pageSize={2}
                                onChange={handleChangePage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </HelmetProvider>
    );
};

export default SearchPage;

// Báo cáo giám sát
