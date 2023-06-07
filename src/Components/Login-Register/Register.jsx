import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
    }

    return (
        <section className="container grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-12">

            <img src="https://i.ibb.co/zQTD37S/b1ab81b5-f8dc-4f16-8527-9b0bef20cdd1-1.jpg" alt="illustration for creating account" className="rounded-lg" />

            <div className="border rounded-lg shadow-lg p-6 lg:p-10 container">

                <div className="flex items-center flex-col mt-8">

                    <h2 className="text-5xl font-bold">Create Account</h2>

                    <hr className="mt-10 mb-4 container" />

                    <h1>Already have an account? <span className="text-[#f45050] font-semibold cursor-pointer" onClick={() => navigate('/register')}>Sign In</span> here</h1>
                </div>

                <form onSubmit={handleSubmit} className="mt-10">

                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="name" className="font-semibold">Name</label>

                        <input type="text" name="name" className="auth-input" placeholder="Your Name" />
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="email" className="font-semibold">Email</label>

                        <input type="email" name="email" className="auth-input" placeholder="Your Email" />
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="password" className="font-semibold">Password</label>

                        <input type="password" name="password" className="auth-input" placeholder="****" />
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="rePassword" className="font-semibold">Confirm Password</label>

                        <input type="password" name="rePassword" className="auth-input" placeholder="****" />
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="photoUrl" className="font-semibold">Photo URL</label>

                        <input type="url" name="photoUrl" className="auth-input" placeholder="photo url (eg: https://example.com/photo.jpg )" />
                    </div>

                    <button className="bg-[#F9D949] mt-6 mb-8 btn-regular" type="submit">Sign Up</button>

                </form>




            </div>

        </section>
    );
};

export default Register;