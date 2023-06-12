import { useNavigate } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import { useContext } from "react";
import { Contexts } from "../Context/ContextWrapper";
import Loading from "../Loading";


const Navbar = () => {

    const navigate = useNavigate();

    const { user, signOutUser, loading } = useContext(Contexts);

    return (
        <nav className="container py-10 flex justify-between flex-wrap items-center gap-x-32 gap-y-6">
            <h1 className="font-bold text-4xl text-[#3C486B] cursor-pointer" onClick={() => navigate('/')}>Harlem Heartstrings</h1>

            <div className="flex flex-wrap gap-6 items-center">

                <ActiveLink to={'/'} >Home</ActiveLink>

                <ActiveLink to={'/instructors'} >Instructors</ActiveLink>

                <ActiveLink to={'/classes'} >Classes</ActiveLink>

                {loading ? <Loading />
                    : user
                        ? <>
                            <ActiveLink to={'/dashboard'} >Dashboard</ActiveLink>
                            <img src={user.photoURL || 'https://i.ibb.co/FzdHYpH/7518698-avatar-people-user-icon-1.png'} alt="user icon" className="rounded-full object-cover w-12" />

                            <button onClick={signOutUser} className="btn-regular bg-slate-700 text-white">Sign Out</button>
                        </>
                        : <button onClick={() => navigate('/login')} className="btn-regular bg-slate-600 text-white">Login</button>
                }

            </div>

        </nav>
    );
};

export default Navbar;