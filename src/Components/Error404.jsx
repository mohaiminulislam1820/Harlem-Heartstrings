import { useNavigate } from "react-router-dom";


const Error404 = () => {
    const navigate=useNavigate();
    return (
        <div className="container">
            <img src="https://i.ibb.co/CHFD8vL/Error-Page404-03-1-11zon.webp" alt="error 404 page not found illustration" className="rounded-lg border mt-10 shadow-md" />
            <div className="text-center">
                <button className="btn-regular bg-blue-500 text-white mt-6" onClick={()=>navigate('/')}>Back to Home</button>
            </div>
        </div>
    );
};

export default Error404;