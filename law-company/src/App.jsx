import { lazy, Suspense } from "react";
import styles from "./App.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ArrowUpOutlined } from "@ant-design/icons";
import { motion, useScroll } from "framer-motion";
import Layout from "./pages/Layout/Layout";

const Home = lazy(() => import("./pages/Home/Home"));
// import Home from "./pages/Home/Home";
const Advise = lazy(() => import("./pages/Advise/Advise"));
// import Advise from "./pages/Advise/Advise";
const Recruitment = lazy(() => import("./pages/Recruitment/Recruitment"));
const PostDetail = lazy(() => import("./pages/PostDetail/PostDetail"));
// import PostDetail from "./pages/PostDetail/PostDetail";
// const Login = lazy(() => import("./pages/Login/Login"));
import Login from "./pages/Login/Login";
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
// import Dashboard from "./pages/Dashboard/Dashboard";
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
// import SearchPage from "./pages/SearchPage/SearchPage";
import PrivateRoute from "./components/ProtectRoute";
import { ConfigProvider, Flex, Spin } from "antd";
const cx = classNames.bind(styles);

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: (
                        <Suspense
                            fallback={
                                <div
                                    style={{
                                        height: "100vh",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
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
                            }
                        >
                            <Home />
                        </Suspense>
                    ),
                },
                {
                    path: "/recruitment",
                    element: (
                        <Suspense
                            fallback={
                                <div
                                    style={{
                                        height: "100vh",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
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
                            }
                        >
                            <Recruitment />
                        </Suspense>
                    ),
                },
                {
                    path: "/login",
                    element: <Login />,
                },
                {
                    path: "/advise/:slug",
                    element: (
                        <Suspense
                            fallback={
                                <div
                                    style={{
                                        height: "100vh",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
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
                            }
                        >
                            <Advise />
                        </Suspense>
                    ),
                },
                {
                    path: "/advise/:slug/:id",
                    element: (
                        <Suspense
                            fallback={
                                <div
                                    style={{
                                        height: "100vh",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
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
                            }
                        >
                            <PostDetail />
                        </Suspense>
                    ),
                },
                {
                    path: "/dashboard",
                    element: (
                        <PrivateRoute>
                            <Suspense
                                fallback={
                                    <div
                                        style={{
                                            height: "100vh",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
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
                                }
                            >
                                <Dashboard />
                            </Suspense>
                        </PrivateRoute>
                    ),
                },
                {
                    path: "/search",
                    element: (
                        <Suspense
                            fallback={
                                <div
                                    style={{
                                        height: "100vh",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
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
                            }
                        >
                            <SearchPage />
                        </Suspense>
                    ),
                },
            ],
        },
    ]);

    const [isScroll, setIsScroll] = useState(false);
    const { scrollYProgress } = useScroll();
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <motion.div
                className={cx("progress-bar")}
                style={{ scaleX: scrollYProgress }}
            />
            <div className={cx("app")}>
                <RouterProvider router={router} />
                {isScroll && (
                    <div className={cx("scroll-btn")} onClick={scrollToTop}>
                        <ArrowUpOutlined className={cx("scroll-icon")} />
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
