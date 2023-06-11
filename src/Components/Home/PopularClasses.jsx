import { useQuery } from "@tanstack/react-query";
import getPopularClasses from "../../utitlity-functions/getPopularClasses";
import PopularClassCard from "./PopularClassCard";


const PopularClasses = () => {
    const { isLoading, data: popularClasses = [] } = useQuery({
        queryKey: ['popular-classes'],
        queryFn: () => getPopularClasses()
    });

    if (isLoading) return 'Loading...';

    return (
        <div className="mt-24 container">
            <h1 className="text-center font-bold text-5xl mb-6">Popular Classes</h1>
            <p className="text-center text-gray-700"> If you are looking for some inspiration and motivation, check out our popular classes. These are the courses that our students love and recommend. Don't miss this chance to enroll in one of our popular classes and take your violin skills to the next level.</p>

            <div className="container my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularClasses?.data?.map(popularClass => <PopularClassCard key={popularClass._id} popularClass={popularClass} />)}
            </div>
        </div>
    );
};

export default PopularClasses;