// src/components/AssignRole.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';

const AssignRole = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

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

  const handleAssignRoles = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/assign-role', { userId: selectedUser, roleIds: selectedRoles }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setMessage('Roles assigned successfully');
    } catch (error) {
      console.error('Error assigning roles', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Assign Roles to Users</h2>
      {message && <Alert variant="success">{message}</Alert>}
      <Form onSubmit={handleAssignRoles}>
        <Form.Group controlId="selectUser">
          <Form.Label>Select User</Form.Label>
          <Form.Control as="select" value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
            <option value="">Select User</option>
            {users.map(user => (
              <option key={user._id} value={user._id}>{user.username}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="selectRoles">
          <Form.Label>Select Roles</Form.Label>
          <Form.Control as="select" multiple value={selectedRoles} onChange={(e) => setSelectedRoles([...e.target.selectedOptions].map(o => o.value))}>
            {roles.map(role => (
              <option key={role._id} value={role._id}>{role.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Assign Roles</Button>
      </Form>
    </div>
  );
};

export default AssignRole;
