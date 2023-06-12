import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const UserRow = ({ userData, adminEmail }) => {
    const { image, name, email, role, _id } = userData;

    const queryClient = useQueryClient();

    const handleUpdateRole = async (updatedRole) => {
        const result = await axios.patch(`https://harlem-heartstrings-api.vercel.app/update-user-role/${_id}?email=${adminEmail}`, JSON.stringify({ role: updatedRole }), {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (result.data.modifiedCount == 1) {
            toast('✅ Updated user role');
            queryClient.invalidateQueries({ queryKey: ['users'] });
        }
    }

    return (
        <tr>
            <td className='pl-6 py-2'><img src={image} alt="class photo" className="h-14 object-cover" /></td>
            <td className='pl-6 py-2 text-center'>{name}</td>
            <td className='pl-6 py-2 text-center'>{email}</td>
            <td className='pl-6 py-2 text-center'>{role}</td>
            <td className='pl-6 flex gap-2 py-2'>
                <button className='btn-table bg-yellow-400 text-black' disabled={role == 'instructor' ? true : false} onClick={() => handleUpdateRole('instructor')}>Make Instructor</button>
                <button className='btn-table bg-blue-600 text-white' disabled={role == 'admin' ? true : false} onClick={() => handleUpdateRole('admin')}>Make Admin</button>
            </td>
        </tr>
    );
};

export default UserRow;