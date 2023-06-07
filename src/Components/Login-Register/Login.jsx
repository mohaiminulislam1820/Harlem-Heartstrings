import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.password.value);
    }

    return (
        <section className="container grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-20">

            <img src="https://i.ibb.co/zQTD37S/b1ab81b5-f8dc-4f16-8527-9b0bef20cdd1-1.jpg" alt="illustration for login" className="rounded-lg" />

            <div className="border rounded-lg shadow-lg p-6 sm:p-10 container">

                <div className="flex items-center flex-col">
                    <img src="https://i.ibb.co/FzdHYpH/7518698-avatar-people-user-icon-1.png" alt="user icon" className=" rounded-full h-20" />

                    <h2 className="text-5xl font-bold">Login</h2>
                </div>

                <form onSubmit={handleSubmit} className="mt-8">

                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="email" className="font-semibold">Email</label>

                        <input type="email" name="email" className="auth-input" placeholder="Your Email" />
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="password" className="font-semibold">Password</label>

                        <input type="password" name="password" className="auth-input" placeholder="password" />
                    </div>

                    <button className="bg-[#F9D949] mt-4 btn-regular" type="submit">Sign In</button>

                </form>

                <hr className="mt-10 mb-4 container" />

                <h1>Don't have an account? <span className="text-[#f45050] font-semibold cursor-pointer" onClick={() => navigate('/register')}>Sign Up</span> here</h1>

                <div className="flex justify-center">
                    <button className="mt-8 border-2 px-8 py-3  font-bold rounded-lg shadow-lg"> <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google icon" className="w-8 inline bg-white rounded-full mr-2" /> Sign In with Google</button>
                </div>
            </div>

        </section>
    );
};

export default Login;