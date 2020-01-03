import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://property-analysis.herokuapp.com',
        headers: {
            Authorization: token
        }
    });
};