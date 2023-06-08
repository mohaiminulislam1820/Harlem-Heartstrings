import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import InstuctorCard from './InstuctorCard';

const Instructors = () => {

    const { isLoading, error, data: instructors } = useQuery({
        queryKey: ['instructors'],
        queryFn: () => axios.get('https://harlem-heartstrings-api.vercel.app/instructors'),
    })

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    
    return (
        <section className='container mt-16'>

            <h2 className='text-5xl font-bold text-center mb-12'>Instructors</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                { instructors.data.map(instructor=> <InstuctorCard key={instructor._id} instructor={instructor} />) }
            </div>

        </section>
    );
};

export default Instructors;