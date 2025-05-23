// src/components/RoleManagement.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Table, Alert } from 'react-bootstrap';

const RoleManagement = () => {
  const [roleName, setRoleName] = useState('');
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

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
      setError('Error fetching roles');
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
      setError('Error submitting role');
    }
  };

  const handleEdit = (role) => {
    setRoleName(role.name);
    setSelectedRole(role);
  };

  const handleDelete = async (roleId) => {
    try {
      await axios.delete(`/api/roles/${roleId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setMessage('Role deleted successfully');
      fetchRoles();
    } catch (error) {
      console.error('Error deleting role', error);
      setError('Error deleting role');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Manage Roles</h2>
      {message && <Alert variant="success">{message}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <h3 className="mt-5">Roles List</h3>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role._id}>
              <td>{role.name}</td>
              <td>
                <Button variant="warning" className="me-2" onClick={() => handleEdit(role)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(role._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RoleManagement;
