// src/components/ForgotPassword.js
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would integrate with your backend
    fetch('/api/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMessage('Password reset link sent to your email');
          setError('');
        } else {
          setError(data.message || 'An error occurred');
          setMessage('');
        }
      })
      .catch((error) => {
        setError('An error occurred');
        setMessage('');
      });
  };

  return (
    <div style={{ display: 'flex' }}>
      <h2>Forgot Password</h2>
      {message && <Alert variant="success">{message}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send Reset Link
        </Button>
        <br/><Link to="/login">Login?</Link>
      </Form>
    </div>
  );
};

export default ForgotPassword;
