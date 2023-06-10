import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { Contexts } from '../Context/ContextWrapper';
import InstructorClassRow from './InstructorClassRow';

const InstructorClasses = () => {
    const { user } = useContext(Contexts);
    const { isLoading, error, data: classes } = useQuery({
        queryKey: ['instructor-classes'],
        queryFn: () => axios.get(`https://harlem-heartstrings-api.vercel.app/instructor-classes?email=${user.email}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    })

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <section>
            <h1 className="container mt-16 font-bold text-center text-5xl mb-12 ">My Classes</h1>

            <div className='overflow-x-auto'>
                <table className="border">
                    <thead>
                        <tr className='border'>
                            <th className="pl-6 py-3">Class Image</th>
                            <th className="pl-6 py-3">Class name</th>
                            <th className="pl-6 py-3">Instructor name</th>
                            <th className="pl-6 py-3">Instructor email</th>
                            <th className="pl-6 py-3">Available seats</th>
                            <th className="pl-6 py-3">Price</th>
                            <th className="pl-6 py-3">Status</th>
                            <th className="pl-6 py-3">Total Enrolled</th>
                            <th className="pl-6 py-3">Feedback</th>
                            <th className="pl-6 py-3">Actions</th>

                        </tr>

                    </thead>

                    <tbody className='divide-y-2'>
                        {classes.data.map(classData => <InstructorClassRow key={classData._id} classData={classData} />)}
                    </tbody>
                </table>

            </div>

        </section>
    );
};

export default InstructorClasses;