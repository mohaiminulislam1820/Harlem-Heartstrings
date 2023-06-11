import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructors = () => {
    const { isLoading, data: popularInstructors = [] } = useQuery({
        queryKey: ['popular-instuctors'],
        queryFn: () => axios.get('https://harlem-heartstrings-api.vercel.app/popular-instructors')
    });

    if (isLoading) return 'Loading...';

    return (
        <div className="mt-24">
            <h1 className="text-center font-bold text-5xl">Popular Instuctors</h1>

            <div className="container my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularInstructors?.data?.map(popularInstructor => <PopularInstructorCard key={popularInstructor._id} popularInstructor={popularInstructor} />)}
            </div>
        </div>
    );
};

export default PopularInstructors;