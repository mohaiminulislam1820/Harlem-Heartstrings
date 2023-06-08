import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ClassCard from './ClassCard';

const Classes = () => {
    const { isLoading, error, data: classes } = useQuery({
        queryKey: ['classes'],
        queryFn: () => axios.get('https://harlem-heartstrings-api.vercel.app/classes'),
    })

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <section className='container mt-16'>

            <h2 className='text-5xl font-bold text-center mb-12'>Classes</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {classes.data.map(violinClass => <ClassCard key={violinClass._id} violinClass={violinClass} />) }
            </div>

        </section>
    );
    };

export default Classes;