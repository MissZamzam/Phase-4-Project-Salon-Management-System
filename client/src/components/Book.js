import React from 'react'
import './Appointment.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';


function Book({user}) {
  // const [appointmentData, setAppointmentData] = useState({
  //   name: '',
  //   email: '',
  //   appointment_date: '',
  //   appointment_time: '',
  // })
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [appointment_date, setAppointment_date]=useState("")
  const [appointment_time, setAppointment_time]=useState("")
  const [user_id] =useState(user.id)


const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault();
    fetch(`/appointments`,{
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          name,
          email,
          appointment_date,
          appointment_time,
          user_id,
        }
      )
  })
  .then(r => r.json())
    // .then(data=>
      // console.log(data))
    navigate("/appointment")
  
}
// console.log(appointmentData)
  

  return (
    <div className="container3">
      <div className="contact-box1">
        <div className="lefti"></div>
        <div className="right">
          <h2>Book Appointment</h2>
          <form>
            <input
              type='text'
              name='name'
              required
              className ="field"
              placeholder='name'
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            ></input>
            <br />
            <input
              type='email'
              name='email'
              required
              className='field'
              placeholder='email'
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            ></input>
            <input
               type='date'
               name='appointment_date'
               placeholder="appointment_date"
               className='field'
               value={appointment_date}
               onChange={(e)=>{setAppointment_date(e.target.value)}}
               ></input>
           <input
               type='time'
               name='appointment_time'
               required
               className='field'
               placeholder='appointment_time'
               value={appointment_time}
               onChange={(e)=>{setAppointment_time(e.target.value)}}
               ></input>
          <button className="btn2" type="submit" onClick={handleSubmit}>Book Appointment</button>
          </form>
        </div>
      </div>
	  </div>
  )
}

export default Book;