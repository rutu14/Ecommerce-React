import { Navigate, Outlet } from "react-router";
import { useUserActions } from "../context";

export const PrivateRoute = () => {
    const { state } = useUserActions();
    const { tokenPresent } = state;

    return tokenPresent ? <Outlet/> : <Navigate to="/login" />;
}