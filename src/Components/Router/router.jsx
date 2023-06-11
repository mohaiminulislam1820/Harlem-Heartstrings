import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import ContextWrapper from "../Context/ContextWrapper";
import Login from "../Login-Register/Login";
import Register from "../Login-Register/Register";
import Instructors from "../OtherPages/Instructors";
import Classes from "../OtherPages/Classes";
import DashboardRoute from "./DashboardRoute";
import ManageClasses from "../Dashboard-components/ManageClasses";
import ManageUsers from "../Dashboard-components/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../Dashboard-components/AddClass";
import InstructorClasses from "../Dashboard-components/InstructorClasses";
import MySelectedClasses from "../Dashboard-components/MySelectedClasses";
import MyEnrolledClasses from "../Dashboard-components/MyEnrolledClasses";
import Payment from "../Dashboard-components/Payment";
import PaymentHistory from "../Dashboard-components/PaymentHistory";
import Error404 from "../Error404";


const router = createBrowserRouter([
    {
        path: "/",
        element:
            <ContextWrapper>
                <App></App>
            </ContextWrapper>,
        errorElement: <Error404 />,
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
                element: <PrivateRoute><DashboardRoute /></PrivateRoute>,
                children: [
                    {
                        path: "manage-classes",
                        element: <ManageClasses />
                    },
                    {
                        path: "manage-users",
                        element: <ManageUsers />
                    },
                    {
                        path: "add-class",
                        element: <AddClass />
                    },
                    {
                        path: "instructor-classes",
                        element: <InstructorClasses />
                    },
                    {
                        path: "my-selected-classes",
                        element: <MySelectedClasses />
                    }
                    ,
                    {
                        path: "my-enrolled-classes",
                        element: <MyEnrolledClasses />
                    },
                    {
                        path: "payment",
                        element: <Payment />
                    },
                    {
                        path: "payment-history",
                        element: <PaymentHistory />
                    }
                ]
            },

        ]
    },
    {
        path: "*",
        element: <Error404 />
    }

]);

export default router;