import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container } from "react-bootstrap";


function Home () {

    const [services, setServices] = useState([])
  
    useEffect(()=>{
        fetch("/services")
        .then((res) => res.json())
        .then((data)=>setServices(data))
    }, [])
    return <>
        {/* <h1 tex>Gossip & Glamour</h1> */}
        <br></br>
        <br></br>
        <p> At Gossip & Glamour, we offer a complete range of beauty services to fit your needs.
            From hair styling, to facial skin care,to body massage,to manicures,pedicures and more,
            We are your all-in-one resource for a beautiful new you.  Come experience it today</p>
            <br></br>
        {/* <p>To a full beauty and co experience</p> */}
        <Container>
            
        <div class="grid gap-10 px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {services.map((service)=>{
      return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={service.image_url} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{service.name}</div>
      <p class="text-gray-700 text-base">
        {service.description}
      </p>
    </div>
  </div>)
    })}
  </div>
        </Container>

        

    </>
}
 
export default Home;