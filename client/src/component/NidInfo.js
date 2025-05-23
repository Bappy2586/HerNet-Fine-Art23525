import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const NidInfo = () => {
  const [nid, setNid] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setNid(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const data = await getUserInfo(nid);
    if (data) {
      setUserData(data);
    }
  };

  const getUserInfo = async (nid) => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`https://api.example.com/bd-nid?nid=${nid}`, {
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
          <h1>Bangladesh NID Lookup</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNid">
              <Form.Label>National ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter NID"
                value={nid}
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
              <p>Date of Birth: {userData.dob}</p>
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

export default NidInfo;
