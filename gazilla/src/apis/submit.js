import axios from 'axios';

export default axios.create({
  baseURL: 'https://interview.gazilla-lounge.ru/api/submit',
  headers: {
    'Content-Type': 'application/json'
  }
});