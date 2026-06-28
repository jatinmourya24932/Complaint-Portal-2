import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles }) {

    const token = sessionStorage.getItem("token");
    const role = sessionStorage.getItem("role");

    const loginTime = Number(sessionStorage.getItem("loginTime"));

    const THIRTY_MINUTES = 30 * 60 * 1000;

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if (Date.now() - loginTime > THIRTY_MINUTES) {

        sessionStorage.clear();

        return <Navigate to="/login" replace />;
    }

    if (
        allowedRoles &&
        !allowedRoles.includes(role)
    ) {

        return <Navigate to="/login" replace />;

    }

    return children;

}