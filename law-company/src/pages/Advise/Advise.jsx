import React, { useState, useEffect } from "react";
import styles from "./Advise.module.scss";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { advise } from "../../lib/dummyData";
import CardPost from "../../components/CardPost/CardPost";
import { ConfigProvider, Pagination } from "antd";
import { Flex, Spin } from "antd";
import axios from "axios";
import { api } from "../../utils/axios";
import PostRight from "../../components/PostRight/PostRight";
import { Error } from "../../imageEntry";
import { useDispatch, useSelector } from "react-redux";
import { addRecentPosts } from "../../app/posts/postsSlice";

import { HelmetProvider, Helmet } from "react-helmet-async";

const cx = classNames.bind(styles);

const Advise = () => {
    const { slug, id } = useParams();

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [totalPosts, setTotalPosts] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [recentPosts, setRecentPosts] = useState([]);

    const data = advise.find((item) => item.slug === slug);
    console.log(slug);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            const res = await api.get(
                `/getPosts/${slug}?page=${currentPage}&pageSize=8`
            );
            const resNewestPost = await api.get("/newestPosts");
            console.log(res);
            const totalAllPosts = res.data.totalPosts;
            setPosts(res.data.posts);
            setTotalPosts(totalAllPosts.length);
            setRecentPosts(resNewestPost.data);
            dispatch(addRecentPosts(res.data.lastMonthPosts));
            setIsLoading(false);
        };

        fetchPosts();
    }, [slug, currentPage]);

    const handleChangePage = (e) => {
        setCurrentPage(e);
        // window.scrollTo(0, 0);
    };

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{data.name}</title>
                <meta name="description" content="Advise of EEV GROUP" />
                <link rel="canonical" href="https://eev.vn" />
            </Helmet>
            <div className={cx("advise-header")}>
                <div className={cx("advise-header-bg")}>
                    <img
                        srcSet={`${data.image} 2x`}
                        alt={data.name}
                        loading="lazy"
                    />
                </div>
                <h1>{data.name}</h1>
            </div>
            <div className={cx("advise-container")}>
                {posts.length === 0 && !isLoading ? (
                    <div className={cx("error")}>
                        <img
                            srcSet="https://res.cloudinary.com/dknl2t1z1/image/upload/v1723256197/not-found_exyonc.webp 2x"
                            alt="Error"
                            loading="lazy"
                        />
                        <span>Hiện không có bài viết nào</span>
                    </div>
                ) : (
                    <div className={cx("advise-container-left")}>
                        <div className={cx("advise-container-list-post")}>
                            {isLoading ? (
                                <div className={cx("loading")}>
                                    <Flex justify="center" align="middle">
                                        <ConfigProvider
                                            theme={{
                                                token: {
                                                    colorPrimary: "#cb935d",
                                                },
                                            }}
                                        >
                                            <Spin size="large" />
                                        </ConfigProvider>
                                    </Flex>
                                </div>
                            ) : (
                                posts
                                    .filter(
                                        (post) => post.category === data.name
                                    )
                                    .map((post) => (
                                        <CardPost
                                            key={post._id}
                                            post={post}
                                            slug={slug}
                                        />
                                    ))
                            )}
                        </div>

                        <div className={cx("pagination")}>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorBgTextActive: "#fff",
                                        colorPrimary: "#fff",
                                    },
                                    components: {
                                        Pagination: {
                                            itemActiveBg: "#1a284d",
                                            itemBg: "#1a284d",
                                        },
                                    },
                                }}
                            >
                                <Pagination
                                    defaultCurrent={1}
                                    total={totalPosts}
                                    showSizeChanger={false}
                                    pageSize={8}
                                    onChange={handleChangePage}
                                />
                            </ConfigProvider>
                        </div>
                    </div>
                )}

                <div className={cx("advise-container-right")}>
                    <PostRight recentPosts={recentPosts} loading={isLoading} />
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Advise;
