

import React, { useState, useEffect } from "react";

const Appointment = () => {
  const [client, setClient] = useState({});

  const [clients, setClients] = useState([]);

  function handleChange(e) {
    setClient({...client,[e.target.name]: e.target.value});
  }

  // handle create & update
  const handleFormSubmission = async (event, func) => {
    event.preventDefault();

    const URL = func === 'create'
      ? `http://127.0.0.1:3000/appointments`
      : `http://127.0.0.1:3000/${client?.id}`;

    const method = func === 'create' ? "POST" : "PUT";

    try {
      const resp = await fetch(URL, {method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(client)});

      if (resp.status === 200) setClient({});

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch("http://127.0.0.1:3000/appointments/");

      const json = await resp.json();

      if (resp.status === 200) setClients(json)
      } catch (error) {
        setClients([])
      }

    })();
  }, []);

  function deleteList(id) {
    fetch(`http://127.0.0.1:3000/appointments/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => {
        
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 col-lg-6">
          Form
          <form method="POST">
            <label class="form-label">Full Name</label>
            <input
              name="name"
              type="text"
              value={client.name}
              class="form-control"
              placeholder="Full Name"
              onChange={handleChange}
            />
            <label class="form-label">Email address</label>
            <input
              name="email"
              type="email"
              value={client.email}
              class="form-control"
              placeholder="Email Address"
              onChange={handleChange}
            />
            <label class="form-label">Service</label>
            <input
              name="service"
              type="text"
              value={client.service}
              class="form-control"
              placeholder="Service"
              onChange={handleChange}
            />
            <label class="form-label">Appointment Date</label>
            <input
              name="appointment_date"
              type="tel"
              value={client.appointment_date}
              class="form-control"
              placeholder="Appointment Date"
              onChange={handleChange}
            />
            <label class="form-label">Appointment Time</label>
            <input
              name="appointment_time"
              type="tel"
              value={client.appointment_time}
              class="form-control"
              placeholder="Appointment Time"
              onChange={handleChange}
            />
            
            <button
              type="submit"
              class="btn btn-primary mt-2"
              onClick={(event) => handleFormSubmission(event, client?.id ? 'update': 'create')}
            >
              Submit
            </button>
          </form>
        </div>

        <div className="col-12 col-md-7 col-lg-6">
          List
          <div>
            {
              (Array.isArray(clients) ? clients : []).map((person) => {
      
              return (
                <div>
                  <ul>
                    <li>
                      Full Name: {person.name}
                      <br />
                      Email Address: {person.email}
                      <br />
                      Service : {person.service}
                      <br />
                      Appointment Date : {person.appointment_date}
                      <br /> 
                      Appointment Time : {person.appointment_time}
                    </li>
                    <button onClick={() => setClient(person)} className="btn btn-primary">Edit</button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteList(person.id)}
                    >
                      {" "}
                      Delete
                    </button>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}










 
export default Appointment;