import React, { useEffect, useState } from 'react'

function Appointment() {
    const [appoint, setAppoint] = useState([])

    useEffect(()=>{
        fetch("/appointments")
        .then(resp => resp.json())
        .then(data=> 
            setAppoint(data))
    },[])

    function deleteList(id) {
        fetch(`/appointments/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then((data) => {
            
          });
      }

  return (
    <div>
      {appoint.map((table)=>{
        return(
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <h1>Your Appointment</h1>
    <br></br>
  <p class="text-gray-700 text-base">Name: {table.name}</p>
    <p class="text-gray-700 text-base">Email: {table.email}</p>
    <p class="text-gray-700 text-base">Appointment Date: {table.appointment_date}</p>
    <p class="text-gray-700 text-base">Appointment Time: {table.appointment_time}</p>
    <button class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Edit
</button>    
<button class="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
onClick={()=> deleteList(appoint.id)}> {""}
  Delete
</button>

  </div>

</div>
        )
       

      })}
    </div>
  )
}

export default Appointment
