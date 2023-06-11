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
        <div className="mt-24">
            <h1 className="text-center font-bold text-5xl">Popular Classes</h1>

            <div className="container my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularClasses?.data?.map(popularClass => <PopularClassCard key={popularClass._id} popularClass={popularClass} />)}
            </div>
        </div>
    );
};

export default PopularClasses;