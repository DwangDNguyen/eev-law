import React from "react";
import styles from "./CardPost.module.scss";
import classNames from "classnames/bind";
import { Card } from "antd";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const CardPost = ({ post, slug }) => {
    return (
        <div className={cx("post-item")}>
            <div className={cx("post-item-image")}>
                <img
                    srcSet={`${post.image.url} 2x`}
                    alt={post.title}
                    loading="lazy"
                />
            </div>
            <div className={cx("post-item-content")}>
                <span className={cx("post-item-time")}>
                    {new Date(post.createdAt).toLocaleDateString()}
                </span>
                <Link
                    to={`/advise/${slug}/${post._id}`}
                    className={cx("post-item-title")}
                >
                    {post.title}
                </Link>
                <p>{post.intro}</p>
            </div>
        </div>
    );
};

export default CardPost;
