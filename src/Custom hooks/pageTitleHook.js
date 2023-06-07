import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTitle = () => {
    const currentLocation = useLocation();

    useEffect(() => {
        if (currentLocation.pathname == '/')
            document.title = "Harlem Heartstrings - Home"
        else {
            const title = currentLocation.pathname.split('/')[1];
            document.title = "Harlem Heartstrings - " + title[0].toUpperCase() + title.slice(1);
        }

    }, [currentLocation.pathname])
}

export default usePageTitle;