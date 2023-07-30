import { Outlet, NavLink, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

const AuthLayout = () => {
    const user = useSelector(state => state.users.currentUser)
    return user ? <Outlet/> : <Navigate to="/login"/>;
};

export default AuthLayout;
