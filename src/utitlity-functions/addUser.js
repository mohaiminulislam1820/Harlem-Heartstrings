import axios from 'axios';

const addUserToDb = async user => {
    await axios.post('https://harlem-heartstrings-api.vercel.app/user', JSON.stringify(user), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export default addUserToDb;