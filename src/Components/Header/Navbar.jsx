import ActiveLink from "./ActiveLink";


const Navbar = () => {
    return (
        <nav className="container my-10 flex justify-between flex-wrap items-center">
            <h1 className="font-bold text-4xl text-[#F45050] ">FiddleSticks</h1>

            <div className="flex flex-wrap gap-6">

                <ActiveLink to={''} >Home</ActiveLink>

                <ActiveLink to={''} >Instructors</ActiveLink>

                <ActiveLink to={''} >Classes</ActiveLink>

                <ActiveLink to={''} >Dashboard</ActiveLink>

                <button>Login</button>

            </div>

        </nav>
    );
};

export default Navbar;