import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageUser = ({ users, onEdit, onDelete }) => {
  return (
    <Container>
      <h2 className="mb-4">Manage Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th><Link  to="/createUser"><button variant="info">ADD USER</button></Link></th>
            <th colSpan={5}></th>
          </tr>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>User Name </th>
            <th>Password</th>
            <th>Email</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.userName}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>
                <Button
                  variant="warning"
                  className="mr-2 btn-sm"
                 // onClick={() => onEdit(index)}
                >
                <Link as={Link} to="/EditUserModal">Edit</Link>
                </Button>
              </td>
              <td>
                <Button
                  className="mr-2 btn-sm"
                  variant="danger"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageUser;
