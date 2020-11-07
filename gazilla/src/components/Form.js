import React, { useState, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';

const Form = () => {
  const [canSubmit, setSubmit] = useState(false);
  const [phone, setPhone] = useState('');
  const [dateTime, setDateTime] = useState(null);
  const [comment, setComment] = useState('');
  const [isAgree, setIsAgree] = useState(false);

  useEffect(() => {
    setSubmit(phone && dateTime && isAgree);
  }, [phone, dateTime, isAgree]);
  
  const onSubmit = () => {
    console.log('hi there');
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
    </div>
  )
}

export default Form;