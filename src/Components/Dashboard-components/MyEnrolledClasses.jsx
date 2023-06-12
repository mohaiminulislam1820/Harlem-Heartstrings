import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const MyEnrolledClasses = () => {
    const {isLoading,data:enrolledClasses}=useQuery({
        queryKey:['student-enrolled-classes'],
        queryFn:()=>axios.get()
    })

    return (
        <div className="mt-20 container">
            <h1 className="section-title">My Enrolled Classes</h1>
            
        </div>
    );
};

export default MyEnrolledClasses;