import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Stripe/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_publishable_key);

const Payment = () => {
    const {classId}=useParams();
    return (
        <div className="container mt-20">
            <h1 className="section-title mb-14">Payment</h1>

            <Elements stripe={stripePromise}>
                <CheckoutForm classId={classId} />
            </Elements>
        </div>
    );
};

export default Payment;