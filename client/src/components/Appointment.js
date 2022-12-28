import React, { useEffect, useState } from 'react'

function Appointment({appointment, onDeleteAppointment}) {
    const [appoint, setAppoint] = useState([])
    const [editData, setEditData] = useState({})
    useEffect(()=>{
        fetch("/appointments")
        .then(resp => resp.json())
        .then(data=> 
            setAppoint(data))
    },[])

   

    function handleDeleteClick(id) {
      fetch(`/appointments/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        // .then(() => onDeleteAppointment(id));

        .then(() => {        
          const deleting = appoint.filter((table) => table.id !== id);   
               setAppoint(deleting);     
              console.log('data')
              })
        .catch((err) => console.log(err));    alert("delete was successful");  
    }

    function handleEdit(appointmentData){
        setEditData(() => appointmentData)

    }

    function handleChange(event){
      setEditData({...editData,[event.target.name]: event.target.value})
    }

     function handleSubmitEdittedData(e){
      // console.log(editData)
      e.preventDefault()
      fetch(`/appointments/${editData.id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            name: editData.name,
            email: editData.email,
            appointment_date: editData.appointment_date,
            appointment_time: editData.appointment_time
          }
        )
    })
    .then(r => r.json())
     }
   


  return (
    <div>
      {appoint.map((table)=>{
        return(
<div  class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <h1>Your Appointment</h1>

    <br></br>
  <p class="text-gray-700 text-base">Name: {table.name}</p>
    <p class="text-gray-700 text-base">Email: {table.email}</p>
    <p class="text-gray-700 text-base">Appointment Date: {table.appointment_date}</p>
    <p class="text-gray-700 text-base">Appointment Time: {table.appointment_time}</p>
    <button type="button" class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=> handleEdit(table)}>
       Edit
    </button>  
  <button class="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteClick(table.id)}>
  Delete
</button>

  </div>

</div>
        )
       

      })}
      
     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLabel"> Appointment Edit Form</h5>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">
             <form>
             <input
             onChange={handleChange}
              type='text'
              name='name'
              required
              className ="field"
              placeholder='name'
              value={editData.name}/>
                <input
                onChange={handleChange}
              type='email'
              name='email'
              required
              className='field'
              placeholder='email'
              value={editData.email}   />
              <input
              onChange={handleChange}
               type='date'
               name='appointment_date'
               placeholder="appointment_date"
               className='field'
               value={editData.appointment_date}
            />
           <input
           onChange={handleChange}
               type='time'
               name='appointment_time'
               required
               className='field'
               placeholder='appointment_time'
                value={editData.appointment_time}
              />
             </form>
           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" onClick={handleSubmitEdittedData}>Save changes</button>
            </div>
         </div>
       </div>
     </div>









    </div>
  )
}

export default Appointment
