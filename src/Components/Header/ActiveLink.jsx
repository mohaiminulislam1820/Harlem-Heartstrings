import { useContext } from 'react';
import { NavLink } from 'react-router-dom';


const ActiveLink = ({ to, children }) => {


    return (
        <NavLink to={to} className={({ isActive }) => isActive ? 'border-b-4 border-b-[#3C486B] text-lg font-semibold' : `text-lg font-semibold`}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;