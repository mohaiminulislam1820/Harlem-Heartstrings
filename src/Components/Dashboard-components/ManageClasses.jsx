import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { Contexts } from '../Context/ContextWrapper';
import ClassRow from './ClassRow';

const ManageClasses = () => {
    const { user } = useContext(Contexts);
    const { isLoading, error, data: classes } = useQuery({
        queryKey: ['classes'],
        queryFn: () => axios.get(`https://harlem-heartstrings-api.vercel.app/allclasses?email=${user.email}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    })

    if (isLoading) return 'Loading...'
    console.log(classes)
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="mt-16 overflow-x-auto">
            <h1 className="text-center text-5xl font-bold mb-16">All Classes</h1>

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
                        <th className="pl-6 py-3">Actions</th>

                    </tr>

                </thead>

                <tbody className='divide-y-2'>
                    {classes.data.map(classData => <ClassRow key={classData._id} classData={classData} />)}
                </tbody>
            </table>


        </div>
    );
};

export default ManageClasses;