import React, { useRef, useState } from "react";
import styles from "./SearchInput.module.scss";
import classNames from "classnames/bind";
import { Input, message } from "antd";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const { Search } = Input;

const SearchInput = ({ size }) => {
    const [search, setSearch] = useState("");
    const inputRef = useRef(null);
    const navigate = useNavigate();

    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setSearch(e.target.value);
    // };
    const onSearch = (value, _e, info) => {
        if (value === "") {
            return message.error("Vui lòng nhập thông tin tìm kiếm");
        }

        navigate(`/search?q=${encodeURIComponent(value)}`);
        setSearch("");
        if (inputRef.current) {
            inputRef.current.blur();
        }
    };
    return (
        <div className={cx("search")}>
            <Search
                placeholder="Tìm kiếm bài viết"
                onSearch={onSearch}
                ref={inputRef}
                value={search}
                enterButton
                size={size}
                className={cx("search-input")}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchInput;
