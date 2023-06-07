import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.password.value);
    }

    return (
        <section>

            

            
        </section>
    );
};

export default Register;