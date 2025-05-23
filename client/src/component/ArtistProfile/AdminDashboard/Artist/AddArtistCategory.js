
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

const AddArtistCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryCode, setCategoryCode] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (categoryName.trim() === '' || categoryCode.trim() === '') {
      setError('Please fill in all fields.');
      setSuccess('');
    } else {
      // Simulate API call or add to local state
      console.log('Category added:', {
        name: categoryName,
        code: categoryCode
      });

      setSuccess('Category added successfully!');
      setError('');
      setCategoryName('');
      setCategoryCode('');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h3 className="mb-4 text-center">Add Artist Category</h3>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="categoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="categoryCode">
              <Form.Label>Category Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category code"
                value={categoryCode}
                onChange={(e) => setCategoryCode(e.target.value)}
              />
            </Form.Group>

            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <Button variant="primary" type="submit" className="w-100">
              Add Category
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddArtistCategory;
