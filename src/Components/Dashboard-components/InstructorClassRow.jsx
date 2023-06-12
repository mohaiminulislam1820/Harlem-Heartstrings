

const InstructorClassRow = ({ classData }) => {
    const { image, name, instructorName, available_seats, price, status, instructor_email, enrolled, feedback } = classData;
    return (
        <tr>
            <td className='pl-6 py-2'><img src={image} alt="class photo" className="object-cover w-12" /></td>
            <td className='pl-6 py-2'>{name}</td>
            <td className='pl-6 py-2'>{instructorName}</td>
            <td className='pl-6 py-2'>{instructor_email}</td>
            <td className='pl-6 py-2 text-center'>{available_seats}</td>
            <td className='pl-6 py-2'>{price}</td>
            <td className='pl-6 py-2'>{status}</td>
            <td className='pl-6 py-2 text-center'>{enrolled}</td>
            <td className='pl-6 py-2'>{status=='denied'?feedback||'No feedback yet.':''}</td>
            <td className='pl-6 '>
                <div>
                    <button className='btn-table bg-yellow-500 text-black'>Update</button>
                </div>

            </td>
        </tr>
    );
};

export default InstructorClassRow;