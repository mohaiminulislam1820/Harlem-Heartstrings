import { useQuery } from "@tanstack/react-query";

const PopularInstructors = () => {
    const { isLoading, data: popularClasses = [] } = useQuery({
        queryKey: ['popular-classes'],
        queryFn: () => axios.get('')
    });
    return (
        <div>
            
        </div>
    );
};

export default PopularInstructors;