import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Stripe/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const stripePromise = loadStripe(import.meta.env.VITE_publishable_key);

const Payment = () => {
    const {classId}=useParams();
    const [classDetails,setClassDetails]=useState([]);

    useEffect(()=>{
        axios.get(`https://harlem-heartstrings-api.vercel.app/class/${classId}`)
        .then(data=>setClassDetails(data?.data));
    },[])

    return (
        <div className="container mt-20">
            <h1 className="section-title mb-14">Payment</h1>

            <p className="text-lg font-semibold mb-4">Purchase Item</p>
            <p className="mb-1"><span className="font-semibold">Class Name :</span> {classDetails.name}</p>
            <p className="mb-1"><span className="font-semibold">Instructor Name :</span> {classDetails.instructorName}</p>
            <p className="mb-1"><span className="font-semibold">Price :</span> {classDetails.price}</p>
            <p className="mb-6"><span className="font-semibold">Quantity :</span> 1</p>

            <Elements stripe={stripePromise}>
                <CheckoutForm classId={classId} classDetails={classDetails} />
            </Elements>
        </div>
    );
};

export default Payment;