import axios from 'axios';

const setToken = async (email) => {
    const token=await axios.get(`https://harlem-heartstrings-api.vercel.app/token?email=${email}`);

    localStorage.setItem('token',token.data.token);
}

export default setToken;