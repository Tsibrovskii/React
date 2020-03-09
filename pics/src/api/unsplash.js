import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID ddY7q4CtsGaYuCoE7CCCnxeT3dZhVLxdkvjzm_dtc_c'
  }
});