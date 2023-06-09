import { useContext } from "react";
import { Contexts } from "../Context/ContextWrapper";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Contexts);
    const currentLocation = useLocation();

    if (loading)
        return 'loading...'

    return (
        <>
            {user
                ? <>{children}</>
                : <Navigate to='/login' state={{ from: currentLocation?.pathname }} replace />
            }
        </>
    );
};

export default PrivateRoute;