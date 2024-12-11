import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { ReactNode } from "react";

function ProtectedRoute({ children }: { children: ReactNode }) {
    const jwt_token = Cookies.get("jwt");

    if (!jwt_token) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
}

export default ProtectedRoute;
