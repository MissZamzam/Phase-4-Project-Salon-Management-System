import React from 'react'
import './Appointment.css';
import { useState } from 'react';

function Appointment({handlePosting}) {
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    appointment_date: '',
    appointment_time: '',
  })

  function handleSubmit(e){
    e.preventDefault();
    fetch(`http://localhost:3000/appointments`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(appointmentData)
    })
    .then(r => r.json())
    .then(data => {
        handlePosting(data)
    })

    setAppointmentData({
        name: '',
        email: '',
        appointment_date: '',
        appointment_time: '',
    })
}

  function handleChange(e){
    setAppointmentData({
        ...appointmentData, [e.target.name]: e.target.value,
    });
} 
  return (
    <div className="container3">
      <div className="contact-box1">
        <div className="lefti"></div>
        <div className="right">
          <h2>Book</h2>
          <form>
            <input
              type='text'
              name='name'
              required
              className ="field"
              placeholder='name'
              value={appointmentData.name}
              onChange={handleChange}
            ></input>
            <br />
            <input
              type='email'
              name='email'
              required
              className='field'
              placeholder='email'
              value={appointmentData.email}
              onChange={handleChange}
            ></input>
            <input
               type='number'
               name='appointment_date'
               placeholder="appointment_date"
               className='field'
               value={appointmentData.appointment_date}
              onChange={handleChange}
            ></input>
           <input
               type='number'
               name='appointment_time'
               required
               className='field'
               placeholder='appointment_time'
               value={appointmentData.appointment_time}
              onChange={handleChange}
           ></input>
          <button className="btn2" onClick={handleSubmit}>Send</button>
          </form>
        </div>
      </div>
	  </div>
  )
}

export default Appointment;