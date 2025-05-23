// src/FileUpload.js

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './FileUpload.css';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    // Handle file upload logic here
    const formData = new FormData();
    formData.append('file', file);

    // Simulate a file upload
    setTimeout(() => {
      setMessage(`File ${file.name} uploaded successfully!`);
    }, 1000);
  };

  return (
    <Container className="file-upload-container">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">File Upload</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select File</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>

            {message && <Alert variant="info">{message}</Alert>}

            <Button variant="primary" type="submit" className="w-100">
              Upload
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FileUpload;
