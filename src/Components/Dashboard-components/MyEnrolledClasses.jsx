import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { Contexts } from "../Context/ContextWrapper";
import Loading from "../Loading";
import MyEnrolledClassCard from "./MyEnrolledClassCard";


const MyEnrolledClasses = () => {
    const { user } = useContext(Contexts);
    const { isLoading, data: enrolledClasses = [] } = useQuery({
        queryKey: ['student-enrolled-classes'],
        queryFn: () => axios.get(`https://harlem-heartstrings-api.vercel.app/enrolled-classes?email=${user.email}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    })

    if (isLoading) return <Loading></Loading>;

    return (
        <div className="mt-20 container">
            <h1 className="section-title mb-16">My Enrolled Classes</h1>
<p>{enrolledClasses?.data?.length==0&& 'Enolled in no classes'}</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {enrolledClasses.data.map(enrolledClass=><MyEnrolledClassCard key={enrolledClass._id} enrolledClass={enrolledClass} />)}
            </div>
        </div>
    );
};

export default MyEnrolledClasses;