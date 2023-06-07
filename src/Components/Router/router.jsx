import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import ContextWrapper from "../Context/ContextWrapper";
import Login from "../Login-Register/Login";
import Register from "../Login-Register/Register";


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

        ]
    }
]);

export default router;