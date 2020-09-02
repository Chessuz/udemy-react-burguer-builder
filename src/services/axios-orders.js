import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burguer-ea7c0.firebaseio.com/',
});

export default instance;
