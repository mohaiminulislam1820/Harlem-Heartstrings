import { Link, Navigate, Outlet } from "react-router-dom";
import home from '../../assets/home.svg'
import addClass from '../../assets/add-class.svg'
import classes from '../../assets/manage-class.svg'

const InstructorDashboard = () => {
    return (
        <>
            <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 items-stretch">

                <div className="bg-yellow-400 col-span-1 py-16 pl-10 md:min-h-[770px] text-black">
                    <h1 className="text-5xl font-bold mb-10">Instructor Dashboard</h1>
                    <hr className="border-2 mb-8 border-black"/>

                    <div className="flex flex-col gap-6">

                        <Link to="/" className="font-bold">
                            <img src={home} alt="home icon" className="inline" /> Home</Link>

                        <Link to="add-class" className="font-bold"><img src={addClass} alt="add class icon" className="inline" /> Add a Class</Link>

                        <Link to="instructor-classes" className="font-bold"><img src={classes} alt="instructor classes icon" className="inline" /> My Classes</Link>
                    </div>
                </div>

                <div className="col-span-1 lg:col-span-2 xl:col-span-3">
                <Navigate to='/dashboard/instructor-classes'></Navigate>
                    <Outlet></Outlet>
                </div>

            </section>

        </>
    );
};

export default InstructorDashboard;