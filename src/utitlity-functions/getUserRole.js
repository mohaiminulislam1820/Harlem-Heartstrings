import axios from "axios";

const getUserRole = async email => {
    const role = await axios.get(`https://harlem-heartstrings-api.vercel.app/role?email=${email}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    return role;
}

export default getUserRole;