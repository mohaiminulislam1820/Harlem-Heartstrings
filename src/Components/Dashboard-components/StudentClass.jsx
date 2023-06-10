
const StudentClass = ({ myClass }) => {
    const { name, image, instructorName, price } = myClass
    return (
        <tr>
            <td className='pl-6 py-2'><img src={image} alt="class photo" className="w-16 object-cover" /></td>
            <td className='pl-6 py-2'>{name}</td>
            <td className='pl-6 py-2'>{instructorName}</td>
            <td className='pl-6 py-2'>{price}</td>
            <td className='pl-6'>
                <div className="flex gap-2 ">
                    <button className='btn-table bg-yellow-500 block'>Pay</button>
                    <button className='btn-table bg-red-500 text-white mr-4 block'>Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default StudentClass;