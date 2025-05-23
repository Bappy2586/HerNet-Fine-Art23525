import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const MobileInfo = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const data = await getUserInfo(mobileNumber);
    if (data) {
      setUserData(data);
    }
  };

  const getUserInfo = async (mobileNumber) => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`https://api.example.com/mobile-info?number=${mobileNumber}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include any necessary headers, such as API keys
        },
      });
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      setError(error.message);
      return null;
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Mobile Number Lookup</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter mobile number"
                value={mobileNumber}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Get Information
            </Button>
          </Form>
          {error && <p style={{color: 'red'}}>{error}</p>}
          {userData && (
            <div>
              <h2>User Details</h2>
              <p>Name: {userData.name}</p>
              <p>Operator: {userData.operator}</p>
              <p>Address: {userData.address}</p>
              <p>Gender: {userData.gender}</p>
              <p>Email: {userData.email}</p>
              <p>Phone: {userData.phone}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MobileInfo;
