import { Link, Outlet } from "react-router-dom";
import home from '../../assets/home.svg'
import mySelected from '../../assets/add-class.svg'
import myClasses from '../../assets/my-selected.svg'
import payHistory from '../../assets/payment-history.svg'

const StudentDashboard = () => {
    return (
        <>
            <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 items-stretch">

                <div className="bg-yellow-400 col-span-1 py-16 pl-10 md:min-h-[770px]">
                    <h1 className="text-5xl font-bold mb-10">Student Dashboard</h1>
                    <hr className="border-2 mb-8 border-black" />
                    <div className="flex flex-col gap-6">

                        <Link to="/" className="font-bold"> <img src={home} alt="home icon" className="inline" /> Home</Link>

                        <Link to="my-selected-classes" className="font-bold"><img src={mySelected} alt="selected classes icon" className="inline" /> My Selected Classes</Link>

                        <Link to="my-enrolled-classes" className="font-bold"><img src={myClasses} alt="enrolled classes icon" className="inline" /> My Enrolled Classes</Link>

                        <Link to="payment-history" className="font-bold"><img src={payHistory} alt="payment history icon" className="inline" /> Payment History</Link>
                    </div>
                </div>

                <div className="col-span-1 lg:col-span-2 xl:col-span-3">

                    <Outlet></Outlet>
                </div>

            </section>

        </>
    );
};

export default StudentDashboard;