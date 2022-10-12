import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container } from "react-bootstrap";


function Home () {

    const [service, setService] = useState([])
    // useEffect(()=>{
    //     const fetchData = async () => {
    //         const response = await fetch("http://127.0.0.1:3000/services")
    //         const serviceData = await response.json()
    //         setService(serviceData.slice(0,15))
    //     }
    //     fetchData()
    // },[])
    useEffect(()=>{
        fetch("/services")
        .then((res) => res.json())
        .then((data)=>setService(data))
    }, [])
    return <>
        <h1 tex>Gossip & Glamour
</h1>
        <p>Choose from one of our collective services</p>
        {/* <p>To a full beauty and co experience</p> */}
        <Container>
            
        <Row>
                {service.map((service, k) => (
                    <Col key={k} xs={12} md={4} lg={3}>
                        <Card >
                            <Card.Img src={service.image_url} />

                            <Card.Body>
                                <Card.Title>{service.name}</Card.Title>
                                <Card.Text>{service.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

        

    </>
}
 
export default Home;