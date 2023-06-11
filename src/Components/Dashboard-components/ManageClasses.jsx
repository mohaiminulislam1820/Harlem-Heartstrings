import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext, useRef } from 'react';
import { Contexts } from '../Context/ContextWrapper';
import ClassRow from './ClassRow';
import { toast } from 'react-toastify';
import Loading from '../Loading';

const ManageClasses = () => {
    const { user } = useContext(Contexts);

    const refId = useRef();
    const refFeedback = useRef();
    const refModal = useRef();

    const { isLoading, error, data: classes } = useQuery({
        queryKey: ['allclasses'],
        queryFn: () => axios.get(`https://harlem-heartstrings-api.vercel.app/allclasses?email=${user.email}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    })

    const handleSendFeedback = async () => {
        const result = await axios.patch(`https://harlem-heartstrings-api.vercel.app/update-feedback/${refId.current}?email=${user.email}`, JSON.stringify({ feedback: refFeedback.current.value }), {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log(result);
        if (result) {
            toast('✅ Sent your feedback.')
        }
        refModal.current.checked = false;
    }

    if (isLoading) return <Loading/>

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="mt-16">
            <h1 className="text-center text-5xl font-bold mb-16">All Classes</h1>

            <div className='overflow-x-auto'>
                <table className="border">
                    <thead>
                        <tr className='border'>
                            <th className="pl-6 py-3">Class Image</th>
                            <th className="pl-6 py-3">Class name</th>
                            <th className="pl-6 py-3">Instructor name</th>
                            <th className="pl-6 py-3">Instructor email</th>
                            <th className="pl-6 py-3">Available seats</th>
                            <th className="pl-6 py-3">Price</th>
                            <th className="pl-6 py-3">Status</th>
                            <th className="pl-6 py-3">Actions</th>

                        </tr>

                    </thead>

                    <tbody className='divide-y-2'>
                        {classes.data.map(classData => <ClassRow key={classData._id} classData={classData} adminEmail={user.email} refId={refId} />)}
                    </tbody>
                </table>
            </div>

            {/* modal */}
            <input type="checkbox" ref={refModal} id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-white">
                    <label htmlFor="my_modal_6" className="btn btn-sm btn-circle absolute right-2 top-2 border-2">✕</label>
                    <h3 className="font-bold text-lg mb-3">Your Feedback : </h3>
                    <input type='text' ref={refFeedback} required className="py-3 px-4 border-2 w-10/12 rounded-md" />
                    <div className="modal-action">
                        <button className="btn-regular bg-blue-600 text-white" onClick={handleSendFeedback}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageClasses;