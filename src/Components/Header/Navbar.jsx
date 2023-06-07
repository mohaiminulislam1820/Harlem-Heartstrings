import { useNavigate } from "react-router-dom";
import ActiveLink from "./ActiveLink";


const Navbar = () => {

    const navigate=useNavigate();

    return (
        <nav className="container my-10 flex justify-between flex-wrap items-center gap-x-32 gap-y-6">
            <h1 className="font-bold text-4xl text-[#F45050] cursor-pointer" onClick={()=>navigate('/')}>Harlem Heartstrings</h1>

            <div className="flex flex-wrap gap-6">

                <ActiveLink to={''} >Home</ActiveLink>

                <ActiveLink to={''} >Instructors</ActiveLink>

                <ActiveLink to={''} >Classes</ActiveLink>

                <ActiveLink to={''} >Dashboard</ActiveLink>

                <button onClick={()=>navigate('/login')}>Login</button>

            </div>

        </nav>
    );
};

export default Navbar;