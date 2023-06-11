import { useContext } from "react";
import { Contexts } from "../Context/ContextWrapper";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Contexts);
    const currentLocation = useLocation();

    if (loading)
        return <Loading/>

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