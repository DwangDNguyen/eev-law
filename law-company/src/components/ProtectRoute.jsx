import React, { useRef, useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
    const currentUser = useSelector((state) => state.user.user);
    if (!currentUser) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default PrivateRoute;
