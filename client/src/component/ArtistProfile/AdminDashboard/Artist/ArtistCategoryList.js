import React from 'react';
import { Button } from 'react-bootstrap';

const ArtistCategoryList = () => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Artist Categories</h4>
                <Button variant="primary">Add New</Button>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>SI No</th>
                        <th>Category Name</th>
                        <th>Category Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Painting</td>
                        <td>PA01</td>
                        <td>
                            <Button variant="warning" size="sm" className="me-2">Edit</Button>
                            <Button variant="danger" size="sm">Delete</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default ArtistCategoryList;
