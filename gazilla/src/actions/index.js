import axios from 'axios';

export const submitForm = (requestBody) => async dispatch => {
  const res = await axios.post('https://localhost:3000/api/submit', requestBody, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  dispatch({ type: 'RESPONSE', payload: res.request.response });
}