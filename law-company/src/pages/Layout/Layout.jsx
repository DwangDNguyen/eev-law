import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../ScrollToTop";
const cx = classNames.bind(styles);
function Layout() {
    return (
        <div className={cx("layout")}>
            <ScrollToTop />
            <header className={cx("navbar")}>
                <Navbar />
            </header>
            <div className={cx("content")}>
                <Outlet />
            </div>
            <footer className={cx("footer")}>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;
