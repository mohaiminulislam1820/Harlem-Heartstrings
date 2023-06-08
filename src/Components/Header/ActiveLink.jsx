import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? 'border-b-4 border-b-red-400 text-lg font-semibold' : 'text-lg font-semibold text-gray-700'}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;