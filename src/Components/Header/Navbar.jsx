import { useNavigate } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import { useContext } from "react";
import { Contexts } from "../Context/ContextWrapper";


const Navbar = () => {

    const navigate = useNavigate();

    const { user, signOutUser } = useContext(Contexts);

    return (
        <nav className="container my-10 flex justify-between flex-wrap items-center gap-x-32 gap-y-6">
            <h1 className="font-bold text-4xl text-[#F45050] cursor-pointer" onClick={() => navigate('/')}>Harlem Heartstrings</h1>

            <div className="flex flex-wrap gap-6 items-center">

                <ActiveLink to={'/'} >Home</ActiveLink>

                <ActiveLink to={'/instructors'} >Instructors</ActiveLink>

                <ActiveLink to={'/classes'} >Classes</ActiveLink>

                {
                    user
                        ? <>
                            <ActiveLink to={''} >Dashboard</ActiveLink>
                            <img src={user.photoURL || 'https://i.ibb.co/FzdHYpH/7518698-avatar-people-user-icon-1.png'} alt="user icon" className="rounded-full object-cover w-12" />

                            <button onClick={signOutUser}>Sign Out</button>
                        </>
                        : <button onClick={() => navigate('/login')}>Login</button>
                }

            </div>

        </nav>
    );
};

export default Navbar;