import { useContext, useEffect, useState } from "react";
import { Contexts } from "../Context/ContextWrapper";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ClassCard from './ClassCard';
import getUserRole from "../../utitlity-functions/getUserRole";
import Loading from "../Loading";

const Classes = () => {
    const { user } = useContext(Contexts);
    const [role,setRole]=useState(null);

    const { isLoading, error, data: classes } = useQuery({
        queryKey: ['classes'],
        queryFn: () => axios.get('https://harlem-heartstrings-api.vercel.app/classes'),
    });

    const run=async()=>{
        const result=await getUserRole(user?.email);
        console.log(result.data.role)
        setRole(result?.data?.role || null);
    }

    useEffect(()=>{
        if(user?.email)
            run();    
    },[user])

    if (isLoading) return <Loading></Loading>

    if (error) return 'An error has occurred: ' + error.message

    return (
        <section className='container mt-16'>

            <h2 className='text-5xl font-bold text-center mb-12'>Classes</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {classes.data.map(violinClass => <ClassCard key={violinClass._id} violinClass={violinClass} userEmail={user?.email} role={role} />) }
            </div>

        </section>
    );
    };

export default Classes;