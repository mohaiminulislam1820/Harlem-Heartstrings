import axios from "axios";
import { toast } from "react-toastify";

const ClassCard = ({ violinClass, userEmail, role }) => {
    const { name, image, instructorName, available_seats, price,_id } = violinClass;

    const handleSelect = async () => {
        if(!role){
            toast("Please Login First");
            return;
        }
        const result = await axios.patch(`https://harlem-heartstrings-api.vercel.app/update-selected-class?email=${userEmail}`, JSON.stringify({ selected_class: _id }), {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        
        if (result?.data?.modifiedCount == 1) {
            toast('✅ Selected Class Successfully');
        }
        else if (result?.data?.modifiedCount == 'exists') {
            toast('⚠️ Class already added');
        }
    }
    return (
        <div className="border rounded-lg shadow-md p-6">
            <img src={image} alt="class photo" className="object-cover h-[300px] w-full mb-8 rounded-md" />

            <p className="mb-2"><span className="font-semibold">Class Name : </span>{name}</p>

            <p className="mb-2"><span className="font-semibold">Instructor Name : </span>{instructorName}</p>

            <p className="mb-2"><span className="font-semibold">Available Seats : </span>{available_seats}</p>

            <p className="mb-2"><span className="font-semibold">Price : </span>{price}</p>

            <button className="btn-regular bg-[#F9D949] mt-4" disabled={role == 'admin' || role=='instructor' ? true : false} onClick={handleSelect}>Select</button>

        </div>
    );
};

export default ClassCard;