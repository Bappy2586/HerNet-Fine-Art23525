// src/components/AssignFunction.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';

const AssignFunction = () => {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  const [modules, setModules] = useState(['Module1', 'Module2']); // Example modules
  const [selectedModule, setSelectedModule] = useState('');
  const [actions, setActions] = useState('');
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

  const handleAssignFunction = async (event) => {
    event.preventDefault();
    try {
      const functionActions = actions.split(',').map(action => action.trim());
      await axios.post('/api/assign-function', { roleId: selectedRole, module: selectedModule, actions: functionActions }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setMessage('Function assigned successfully');
    } catch (error) {
      console.error('Error assigning function', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Assign Functions to Roles</h2>
      {message && <Alert variant="success">{message}</Alert>}
      <Form onSubmit={handleAssignFunction}>
        <Form.Group controlId="selectRole">
          <Form.Label>Select Role</Form.Label>
          <Form.Control as="select" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
            <option value="">Select Role</option>
            {roles.map(role => (
              <option key={role._id} value={role._id}>{role.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="selectModule">
          <Form.Label>Select Module</Form.Label>
          <Form.Control as="select" value={selectedModule} onChange={(e) => setSelectedModule(e.target.value)}>
            <option value="">Select Module</option>
            {modules.map((module, index) => (
              <option key={index} value={module}>{module}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="actions">
          <Form.Label>Actions (comma separated)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter actions"
            value={actions}
            onChange={(e) => setActions(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Assign Functions</Button>
      </Form>
    </div>
  );
};

export default AssignFunction;
