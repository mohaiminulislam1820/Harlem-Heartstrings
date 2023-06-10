import axios from 'axios';

const getPopularClasses = async user => {
    const result = await axios.get('https://harlem-heartstrings-api.vercel.app/popular-classes');

    return result;
}

export default getPopularClasses;