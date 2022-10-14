import React from "react";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Appointment from './Appointment';
import AppointmentDetails from "./AppointmentPages";

function AppointmentPage(){
    const [allAppointments, setAllAppointments] = useState([])
    // const navigate = useNavigate()

    useEffect(() => {
      fetch('/appointments')
      .then(r => r.json())
      .then(data => setAllAppointments(data))
    }, []);

    function handlePosting(data){
      setAllAppointments([...allAppointments, data])
    }

    function deleteAppointment(id){
      fetch(`/appointments/${id}`,{
          method: "DELETE",
      })
      .then(r => r.json())
      .then(() => {
          const goThru = allAppointments.filter((appointment) => appointment.id !== id)
              setAllAppointments(goThru)
          })
    }

    function handleUpdateAppointment(updateAppointment) {
      const updatedAppointment = allAppointments.map((appointment) => {
        if (appointment.id === updatedAppointment.id) {
          return updatedAppointment;
        } else {
          return appointment;
        }
      });
      setAllAppointments(updatedAppointment);
    }

    return (
      <div>
        <Appointment handlePosting={handlePosting}/>
        <AppointmentDetails allAppointments={allAppointments} deleteAppointment={deleteAppointment}/>
      </div>
  )
}

export default AppointmentPage