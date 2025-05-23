import React, { useState } from "react";
import "./AddArtistProfile.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AddArtistProfile = () => {
    const users = {
        sno: "",
        catagory: "",
        name: "",
        contact: "",
        image: "",
    };
    const [user, setUser] = useState(users);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/user", user);
            toast.success(response.data.message, { position: "top-right" });
            navigate("/artistProfileList");
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to add user. Please try again.", { position: "top-right" });
        }
    };

    return (
        <div className="addUser">
            <Link to="/dashboard" type="button" className="btn btn-secondary">
                <i className="fa-solid fa-backward"></i> Back
            </Link>
            <h3>Add New User</h3>
            <form className="addUserForm" onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="sno">S No:</label>
                    <input
                        type="text"
                        id="sno"
                        onChange={inputHandler}
                        name="sno"
                        autoComplete="off"
                        placeholder="Enter your ID"
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="catagory">Category No:</label>
                    <input
                        type="text"
                        id="catagory"
                        onChange={inputHandler}
                        name="catagory"
                        autoComplete="off"
                        placeholder="Enter your category"
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        onChange={inputHandler}
                        name="name"
                        autoComplete="off"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="contact">Contact:</label>
                    <input
                        type="text"
                        id="contact"
                        onChange={inputHandler}
                        name="contact"
                        autoComplete="off"
                        placeholder="Enter your Contact"
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="image">Image:</label>
                    <input
                        type="text"
                        id="image"
                        onChange={inputHandler}
                        name="image"
                        autoComplete="off"
                        placeholder="Enter your Image"
                    />
                </div>
                <div className="inputGroup">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddArtistProfile;