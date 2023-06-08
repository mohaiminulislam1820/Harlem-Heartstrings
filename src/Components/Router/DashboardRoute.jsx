import { useContext } from "react";
import { Contexts } from "../Context/ContextWrapper";
import { useLocation } from "react-router-dom";
import axios from "axios";

const DashboardRoute = () => {

    const { user } = useContext(Contexts);
    const currentLocation=useLocation();

    if(user){
        const role=true;
        console.log(user)
    }
    return (
        <div>
            hello
        </div>
    );
};

export default DashboardRoute;