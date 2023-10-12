import { Navigate, Outlet } from "react-router";
import { useAuth } from "../Authentication/AuthProvider";


export const ProtectedRoute = () => {
    const { token } = useAuth();

    if (!token) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
};