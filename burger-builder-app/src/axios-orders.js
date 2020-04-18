import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-walker.firebaseio.com/'
});

export default instance;