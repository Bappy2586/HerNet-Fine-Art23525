// src/components/RoleForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';

const RoleEdit = () => {
  const [roleName, setRoleName] = useState('');
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const response = await axios.get('/api/roles', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setRoles(response.data);
    } catch (error) {
      console.error('Error fetching roles', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (selectedRole) {
        await axios.put(`/api/roles/${selectedRole._id}`, { name: roleName }, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setMessage('Role updated successfully');
      } else {
        await axios.post('/api/roles', { name: roleName }, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setMessage('Role created successfully');
      }
      setRoleName('');
      setSelectedRole(null);
      fetchRoles();
    } catch (error) {
      console.error('Error submitting role', error);
    }
  };


  return (
    <div className="container mt-5">
      <h2>Manage Roles</h2>
      {message && <Alert variant="success">{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formRoleName">
          <Form.Label>Role Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter role name"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          {selectedRole ? 'Update Role' : 'Create Role'}
        </Button>
      </Form>
    </div>
  );
};

export default RoleEdit;
