import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import React from "react";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate();
    const jwt_token = Cookies.get("jwt");

    console.log("Token found " + jwt_token);

    if (!jwt_token) {
        console.log("No token found");
        navigate("/login");
        return;
    }

    return <>{children}</>;
}

export default ProtectedRoute;
