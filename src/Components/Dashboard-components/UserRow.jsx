

const UserRow = ({ userData }) => {
    const { image, name, email, role } = userData;
    return (
        <tr>
            <td className='pl-6 py-2'><img src={image} alt="class photo" className="h-14 object-cover" /></td>
            <td className='pl-6 py-2'>{name}</td>
            <td className='pl-6 py-2'>{email}</td>
            <td className='pl-6 py-2'>{role}</td>
            <td className='pl-6 flex gap-2 py-2'>
                <button className='btn-table bg-yellow-400'>Make Instructor</button>
                <button className='btn-table bg-blue-500 text-white'>Make Admin</button>
            </td>
        </tr>
    );
};

export default UserRow;