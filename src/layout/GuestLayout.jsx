import { Outlet, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const GuestLayout = () => {
    const user = useSelector(state => state.users.currentUser)

    return !user ? <Outlet/> : <Navigate to="/"/>;
};

export default GuestLayout;
