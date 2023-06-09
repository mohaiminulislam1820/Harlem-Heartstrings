import { Link, Outlet } from "react-router-dom";
import home from '../../assets/home.svg'
import classes from '../../assets/classes.svg'
import user from '../../assets/user.svg'


const AdminDashboard = () => {
    return (
        <>
            <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 items-stretch">

                <div className="bg-yellow-400 col-span-1 py-16 pl-10 md:min-h-[770px]">
                    <h1 className="text-5xl font-bold mb-10">Admin Dashboard</h1>
                    <hr className="border-2 mb-8 border-black" />
                    <div className="flex flex-col gap-6">

                        <Link to="/" className="font-bold">
                            <img src={home} alt="home icon" className="inline" /> Home</Link>

                        <Link to="manage-classes" className="font-bold"><img src={classes} alt="classes icon" className="inline" /> Manage Classes</Link>

                        <Link to="manage-users" className="font-bold"><img src={user} alt="user icon" className="inline" /> Manage Users</Link>
                    </div>
                </div>

                <div className="col-span-1 lg:col-span-2 xl:col-span-3">

                    <Outlet></Outlet>
                </div>

            </section>

        </>
    );
};

export default AdminDashboard;