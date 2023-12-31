import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { Contexts } from '../Context/ContextWrapper';
import UserRow from './UserRow';
import Loading from '../Loading';

const ManageUsers = () => {
    const { user } = useContext(Contexts);
    const { isLoading, error, data: users } = useQuery({
        queryKey: ['users'],
        queryFn: () => axios.get(`https://harlem-heartstrings-api.vercel.app/allusers?email=${user.email}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    })

    if (isLoading) return <Loading/>

    return (
        <div className='mt-16 overflow-x-auto '>
            <h1 className='text-center text-5xl font-bold mb-16'>All Users</h1>
            <table>
                <thead>
                    <tr className='border '>
                        <th className="pl-6 py-3">Image</th>
                        <th className="pl-6 py-3">Name</th>
                        <th className="pl-6 py-3">Email</th>
                        <th className="pl-6 py-3">Role</th>
                        
                        <th className="pl-6 py-3 pr-6">Actions</th>

                    </tr>

                </thead>

                <tbody className='divide-y-2 border'>
{users.data.map(userData=><UserRow key={userData._id} userData={userData} adminEmail={user.email} />)}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;