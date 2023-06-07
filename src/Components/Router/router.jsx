import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import ContextWrapper from "../Context/ContextWrapper";


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

        ]
    }
]);

export default router;