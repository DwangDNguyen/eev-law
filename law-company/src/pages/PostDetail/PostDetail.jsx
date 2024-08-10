import React, { useEffect, useState } from "react";
import styles from "./PostDetail.module.scss";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostRight from "../../components/PostRight/PostRight";
import { useSelector } from "react-redux";
import { api } from "../../utils/axios";
import { ConfigProvider, Flex, Spin } from "antd";
import { BgHeader } from "../../imageEntry";

const cx = classNames.bind(styles);
const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [recentPosts, setRecentPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    // const recentPost = useSelector((state) => state.posts.recentPosts);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const res = await api.get("/getPost/" + id);

                const resNewestPosts = await api.get("/newestPosts");
                setPost(res.data);
                setRecentPosts(resNewestPosts.data);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    return (
        <div className={cx("post-detail")}>
            <div className={cx("post-header")}>
                <div className={cx("post-header-bg")}>
                    <img
                        srcSet={`${BgHeader} 2x`}
                        alt="bg-law"
                        loading="lazy"
                    />
                </div>
                <h2>{post?.category}</h2>
            </div>
            <div className={cx("post-container")}>
                {loading ? (
                    <div className={cx("loading")}>
                        <Flex justify="center" align="middle">
                            <ConfigProvider
                                theme={{ token: { colorPrimary: "#cb935d" } }}
                            >
                                <Spin size="large" />
                            </ConfigProvider>
                        </Flex>
                    </div>
                ) : (
                    <div className={cx("post-content")}>
                        <h1>{post?.title}</h1>
                        <div className={cx("post-time")}>
                            {new Date(post?.createdAt).toLocaleDateString()}
                        </div>
                        <p className={cx("post-intro")}>{post?.intro}</p>
                        <div className={cx("post-image")}>
                            <img
                                src={post?.image.url}
                                alt={post?.title}
                                loading="lazy"
                            />
                        </div>

                        <div
                            className={cx("post-detail-content")}
                            dangerouslySetInnerHTML={{
                                __html: post && post.content,
                            }}
                        ></div>
                    </div>
                )}

                <div className={cx("post-right")}>
                    <PostRight recentPosts={recentPosts} loading={loading} />
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
