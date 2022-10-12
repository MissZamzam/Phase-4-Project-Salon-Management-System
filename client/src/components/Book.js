import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Appointments = () => {
  return (
    <>
      <div style={{ display: "block", width: 700, padding: 30 }}>
        <h4>Appointment</h4>
        <Form>
          <Form.Group>
            <Form.Label>Enter your full name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter your email address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your your email address"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Service</Form.Label>
            <Form.Control type="text" placeholder="Service" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control type="number" placeholder="dd/mm/yy" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Time</Form.Label>
            <Form.Control type="number" placeholder="00:00" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Book Appointment
          </Button>
          <Button variant="primary" type="submit">
            Change Appointment
          </Button>
          <Button variant="primary" type="submit">
            Cancel Appointment
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Appointments;
