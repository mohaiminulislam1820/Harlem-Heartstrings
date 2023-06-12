import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { Contexts } from "../Context/ContextWrapper";
import Loading from "../Loading";
import PaymentHistoryCard from "./PaymentHistoryCard";


const PaymentHistory = () => {
    const {user}=useContext(Contexts);
    const {isLoading,data:payment_history=[]}=useQuery({
        queryKey:['payment-history'],
        queryFn:()=>axios.get(`https://harlem-heartstrings-api.vercel.app/payment-history?email=${user.email}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    })

    if(isLoading) return <Loading></Loading>;

    return (
        <div className="container mt-20">
            <h1 className="section-title mb-16">Payment History</h1>

            <p>{payment_history?.data?.length==0&& 'No selected classes'}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{payment_history?.data?.map(paymentDetails=><PaymentHistoryCard key={paymentDetails?.created} paymentDetails={paymentDetails} />)}
        </div>
            
        </div>
    );
};

export default PaymentHistory;