

const InstructorClassRow = ({ classData }) => {
    const { image, name, instructorName, available_seats, price, status, instructor_email, enrolled, feedback } = classData;
    return (
        <tr>
            <td className='pl-6 py-2'><img src={image} alt="class photo" /></td>
            <td className='pl-6 py-2'>{name}</td>
            <td className='pl-6 py-2'>{instructorName}</td>
            <td className='pl-6 py-2'>{instructor_email}</td>
            <td className='pl-6 py-2 text-center'>{available_seats}</td>
            <td className='pl-6 py-2'>{price}</td>
            <td className='pl-6 py-2'>{status}</td>
            <td className='pl-6 py-2 text-center'>{enrolled}</td>
            <td className='pl-6 py-2'>{feedback|| 'No feedback yet.'}</td>
            <td className='pl-6 flex gap-2 py-2'>
                <button className='btn-table bg-yellow-500'>Update</button>
            </td>
        </tr>
    );
};

export default InstructorClassRow;