import React, { useState, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Modal from './Modal';
import axios from 'axios';

const Form = () => {
  const [canSubmit, setSubmit] = useState(false);
  const [phone, setPhone] = useState('');
  const [dateTime, setDateTime] = useState(null);
  const [comment, setComment] = useState('');
  const [isAgree, setIsAgree] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setSubmit(phone && dateTime && isAgree);
  }, [phone, dateTime, isAgree]);

  const onSubmit = () => {
    const requestBody = {
      id: 1,
      'data': {
        'phone': phone,
        'date': new Date(dateTime).getTime(),
        'comment': comment
      }
    }
    const res = axios.post('https://localhost:3000/api/submit', JSON.stringify(requestBody), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return(
    <div>
      <div>
        <label>Enter Phone Number</label>
        <input
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label>Enter Date and Time</label>
        <DateTimePicker
          onChange={value => setDateTime(value)}
          value={dateTime}
        />
      </div>
      <div>
        <label>Enter Comment</label>
        <input
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </div>
      <div>
        <label>Agree with terms</label>
        <input
          type='checkbox'
          value={isAgree}
          onChange={e => setIsAgree(!isAgree)}
        />
      </div>
      <div>
        <button disabled={!canSubmit} onClick={() => onSubmit()}>Submit</button>
      </div>
      {modal ?
        <Modal
          closeModal={setModal(!modal)}
        />
        : null
      }
    </div>
  )
}

export default Form;