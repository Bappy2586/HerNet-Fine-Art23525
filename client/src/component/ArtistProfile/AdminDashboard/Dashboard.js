import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import "./Dashboard.css";
const Dashboard = () => {
    return (
        <div className='container-fluid'>
            {/* Top Navbar */}
            <div className='row'>
                <div className='col-md-12'>
                    <Navbar className="bg-light justify-content-end p-3">
                        <Link to="/settings" className="me-3">Settings</Link>
                        <Link to="/logout">Logout</Link>
                    </Navbar>
                </div>
            </div>

            {/* Sidebar and Content */}
            <div className='row'>
                {/* Left Sidebar */}
                <div className="col-md-4 border-end bg-light min-vh-100">
                    <nav className="p-4">
                        <h5 className="mb-4">Dashboard Menu</h5>
                        <hr/>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link to="/artist-categories" className="nav-link text-dark">
                                    🎨 Artist Category List
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/artistProfileList" className="nav-link text-dark">
                                    👤 Artist Profile List
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/addArtistCategory" className="nav-link text-dark">
                                    ➕ Add Artist Category
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/add-artist" className="nav-link text-dark">
                                    🆕 Add Artist Profile
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/manage-users" className="nav-link text-dark">
                                    🧑 Manage Users
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/reports" className="nav-link text-dark">
                                    📊 Reports
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>


                {/* Right Content Area */}
                <div className='col-md-8 p-3'>
                    <Outlet /> {/* This will render the right content based on route */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
