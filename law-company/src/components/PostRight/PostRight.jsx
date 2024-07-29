import React from "react";
import styles from "./PostRight.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput/SearchInput";
import { ConfigProvider, Flex, Spin } from "antd";

const cx = classNames.bind(styles);

const PostRight = ({ recentPosts, loading }) => {
    return (
        <div className={cx("post-right")}>
            <div className={cx("search-component")}>
                <SearchInput size={"large"} />
            </div>
            <div className={cx("post-right-recent-posts")}>
                <h3>Bài viết gần đây</h3>
                {loading ? (
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
                    <div className={cx("post-right-recent-posts-list")}>
                        {recentPosts?.map((item) => (
                            <Link
                                to={`/advise/${item.slug}/${item._id}`}
                                key={item._id}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostRight;
