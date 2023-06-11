import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const StudentClass = ({ myClass, userEmail }) => {
    const { name, image, instructorName, price, _id } = myClass;
    const queryClient = useQueryClient();
    const navigate=useNavigate();

    const handleDelete = async () => {
        const result = await axios.patch(`https://harlem-heartstrings-api.vercel.app/remove-class/${_id}?email=${userEmail}`,{}, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
  
        if (result.data.modifiedCount == 1) {
            toast('✅ Deleted class successfully');
            queryClient.invalidateQueries({ queryKey: ['myClasses'] });
        }
    }
    return (
        <tr>
            <td className='pl-6 py-2'><img src={image} alt="class photo" className="w-16 object-cover" /></td>
            <td className='pl-6 py-2'>{name}</td>
            <td className='pl-6 py-2'>{instructorName}</td>
            <td className='pl-6 py-2'>{price}</td>
            <td className='pl-6'>
                <div className="flex gap-2 ">
                    <button className='btn-table bg-yellow-500 block' onClick={()=>navigate(`/dashboard/payment/${_id}`)}>Pay</button>
                    <button className='btn-table bg-red-500 text-white mr-4 block' onClick={handleDelete}>Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default StudentClass;