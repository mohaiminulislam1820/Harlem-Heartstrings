import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";


const ClassRow = ({ classData, adminEmail, refId }) => {
    const { image, name, instructorName, available_seats, price, status, instructor_email, _id } = classData;

    const queryClient = useQueryClient();

    const handleTaskStatus = async (taskStatus) => {
        const result = await axios.patch(`https://harlem-heartstrings-api.vercel.app/update-task-status/${_id}?email=${adminEmail}`, JSON.stringify({ status: taskStatus }), {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (result.data.modifiedCount == 1) {
            toast('✅ Updated task Status');
            queryClient.invalidateQueries({ queryKey: ['allclasses'] });
        }
    }

    return (
        <tr>
            <td className='pl-6 py-2'><img src={image} alt="class photo" className="object-cover w-12" /></td>
            <td className='pl-6 py-2'>{name}</td>
            <td className='pl-6 py-2'>{instructorName}</td>
            <td className='pl-6 py-2'>{instructor_email}</td>
            <td className='pl-6 py-2'>{available_seats}</td>
            <td className='pl-6 py-2'>{price}</td>
            <td className='pl-6 py-2'>{status}</td>
            <td className='pl-6  '>
                <div className="flex gap-2 items-center py-2">
                    <button className='btn-table bg-green-600 text-white' disabled={status == "pending" ? false : true} onClick={() => handleTaskStatus('approved')}>Approve</button>
                    <button className='btn-table bg-red-500' disabled={status == "pending" ? false : true} onClick={() => handleTaskStatus('denied')}>Deny</button>
                    <label htmlFor="my_modal_6" className='btn-table bg-yellow-400' onClick={() => refId.current = _id}>Send Feedback</label>
                </div>
            </td>
        </tr>
    );
};

export default ClassRow;