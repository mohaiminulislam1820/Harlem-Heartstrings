import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { Contexts } from '../Context/ContextWrapper';
import StudentClass from './StudentClass';

const MySelectedClasses = () => {
    const { user } = useContext(Contexts);
    const { isLoading, error, data: myClasses } = useQuery({
        queryKey: ['myClasses'],
        queryFn: () => axios.get(`https://harlem-heartstrings-api.vercel.app/my-classes?email=${user.email}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    })

    if (isLoading) return 'Loading...'

    return (
        <section className="container mt-16">
            <h1 className="text-center text-5xl font-bold mb-12">My Selected Classes</h1>

            <div className='overflow-x-auto flex justify-center'>
                <table className="border">
                    <thead>
                        <tr className='border'>
                            <th className="pl-6 py-3">Class Image</th>
                            <th className="pl-6 py-3">Class name</th>
                            <th className="pl-6 py-3">Instructor name</th>
                            <th className="pl-6 py-3">Price</th>
                            <th className="pl-6 py-3">Actions</th>

                        </tr>

                    </thead>

                    <tbody className='divide-y-2'>
                        {myClasses?.data.map(myClass=><StudentClass key={myClass._id} myClass={myClass} userEmail={user.email} />)}
                    </tbody>
                </table>
            </div>
            
        </section>
    );
};

export default MySelectedClasses;