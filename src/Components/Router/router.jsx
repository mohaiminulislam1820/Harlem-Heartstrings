import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import ContextWrapper from "../Context/ContextWrapper";
import Login from "../Login-Register/Login";
import Register from "../Login-Register/Register";
import Instructors from "../OtherPages/Instructors";
import Classes from "../OtherPages/Classes";
import DashboardRoute from "./DashboardRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element:
            <ContextWrapper>
                <App></App>
            </ContextWrapper>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/instructors",
                element: <Instructors />
            },
            {
                path: "/classes",
                element: <Classes />
            },
            {
                path: "/dashboard",
                element: <DashboardRoute />
            },

        ]
    },
    
]);

export default router;