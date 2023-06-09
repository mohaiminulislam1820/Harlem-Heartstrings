import React from 'react';

const ClassRow = ({ classData }) => {
    const { image, name, instructorName, available_seats, price, status, instructor_email } = classData;
    return (
        <tr>
            <td className='pl-6 py-2'><img src={image} alt="class photo" /></td>
            <td className='pl-6 py-2'>{name}</td>
            <td className='pl-6 py-2'>{instructorName}</td>
            <td className='pl-6 py-2'>{instructor_email}</td>
            <td className='pl-6 py-2'>{available_seats}</td>
            <td className='pl-6 py-2'>{price}</td>
            <td className='pl-6 py-2'>{status}</td>
            <td className='pl-6 flex gap-2 py-2'>
                <button className='btn-table bg-green-600 text-white'>Approve</button>
                <button className='btn-table bg-red-500'>Deny</button>
                <button className='btn-table bg-yellow-400'>Feedback</button></td>
        </tr>
    );
};

export default ClassRow;