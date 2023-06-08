import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Contexts } from "../Context/ContextWrapper";
import { toast } from "react-toastify";
import auth from "../../firebase-config";
import { updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";

const Register = () => {

    const { register, handleSubmit } = useForm({ mode: "onSubmit" });

    const navigate = useNavigate();

    const { signUpWithEmail, signOutUser } = useContext(Contexts);

    const [errorMsg, setErrorMsg] = useState('');

    const errorMsgHandler = (msg) => {
        setErrorMsg('⛔ ' + msg);
        setTimeout(() => setErrorMsg(''), 4000);
    }

    const onSubmit = async data => {
        if (data.email === '' || data.password === '' || data.rePassword === '') {
            errorMsgHandler('Cannot submit empty email or password fields');
            return;
        }

        if (data.password.length < 6) {
            errorMsgHandler('Password length has to be at least 6 characters');
            return;
        }

        if (data.password !== data.rePassword) {
            errorMsgHandler('Confirmed password do not match with Password');
            return;
        }

        if (! /[A-Z]/.test(data.password)) {
            errorMsgHandler('Password must include a capital letter');
            return;
        }

        if (! /[^a-zA-Z0-9\s]/.test(data.password)) {
            errorMsgHandler('Password must include a special character');
            return;
        }

        try {
            const newUser = await signUpWithEmail(data.email, data.password);

            if (newUser) {
                toast('✅ You have signed up successfully');

                await updateProfile(auth.currentUser, { displayName: data.name, photoURL: data.photoUrl });

                await signOutUser();
                navigate('/login');
            }
        }

        catch (error) {
            errorMsgHandler(error.code);
        }
    }

    return (
        <section className="container grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-12">

            <img src="https://i.ibb.co/sjvfc4S/b4840356-320f-477b-bac0-b6e4d7469b83-1.jpg" alt="illustration for creating account" className="rounded-lg" />

            <div className="border rounded-lg shadow-lg p-6 lg:p-10 container">

                <div className="flex items-center flex-col mt-8">

                    <h2 className="text-5xl font-bold">Create Account</h2>

                    <hr className="mt-10 mb-4 container" />

                    <h1>Already have an account? <span className="text-[#f45050] font-semibold cursor-pointer" onClick={() => navigate('/login')}>Sign In</span> here</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-10 pb-8">

                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="name" className="font-semibold">Name</label>

                        <input type="text" {...register("name", { required: true, message: "Can not be empty" })} className="auth-input" placeholder="Your Name" />
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="email" className="font-semibold">Email</label>

                        <input type="email" {...register("email")} className="auth-input" placeholder="Your Email" />
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="password" className="font-semibold">Password</label>

                        <input type="password" {...register("password")} className="auth-input" placeholder="must include a capital letter and a special chracter" />
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="rePassword" className="font-semibold">Confirm Password</label>

                        <input type="password" {...register("rePassword")} className="auth-input" placeholder="****" />
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="photoUrl" className="font-semibold">Photo URL</label>

                        <input type="url" {...register("photoUrl")} className="auth-input" placeholder="photo url (eg: https://example.com/photo.jpg )" />
                    </div>

                    <button className="bg-[#F9D949] mt-6 btn-regular" type="submit">Sign Up</button>

                    <span className='text-red-400 ml-4'>{errorMsg}</span>

                </form>

            </div>

        </section>
    );
};

export default Register;