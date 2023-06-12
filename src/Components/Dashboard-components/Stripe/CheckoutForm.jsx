import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Contexts } from "../../Context/ContextWrapper";
import { toast } from "react-toastify";



const CheckoutForm = ({ classId, classDetails }) => {
    const { user } = useContext(Contexts);
    const stripe = useStripe();
    const elements = useElements();
    const submitRef = useRef();

    const [errMsg, setErrMsg] = useState(null);
    const [clientSecret, setClientSecret] = useState('');
    const getClientSecret = async () => {
        const res = await axios.post(`https://harlem-heartstrings-api.vercel.app/create-payment-intent?email=${user.email}`, JSON.stringify({ classId }), {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });

        setClientSecret(res?.data?.clientSecret);
    }

    useEffect(() => {
        getClientSecret();
    }, [])

    const handleSubmit = async e => {
        e.preventDefault();
        submitRef.current.disabled = true;
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setErrMsg(error.message);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if (confirmError) {
            setErrMsg(confirmError.message);
        }
        if (paymentIntent.status == 'succeeded') {
            const data = { classId: classId, paymentId: paymentIntent.id };
            const res = await axios.patch(`https://harlem-heartstrings-api.vercel.app/save-payment?email=${user.email}`, JSON.stringify(data), {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            toast('	✅ Payment Successful, You have been enrolled to the class');
            submitRef.current.disabled = true;
        }

    }

    return (
        <form onSubmit={handleSubmit} className=" border p-3 rounded-lg">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn-regular mt-6 bg-yellow-400" type="submit" ref={submitRef} disabled={!stripe || !elements || !clientSecret}>
                Pay
            </button>

            {errMsg && <div className="text-red-600">{errMsg}</div>}
        </form>
    );
};

export default CheckoutForm;