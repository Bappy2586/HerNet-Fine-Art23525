import React, { useState, useEffect } from "react";
import "./ArtistCategoryList.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

// ADD ARTIST FORM
export const AddArtist = () => {
  const [artist, setArtist] = useState({ name: "", email: "", address: "" });
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setArtist({ ...artist, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/artist", artist);
      toast.success(res.data.message, { position: "top-right" });
      navigate("/artist-categories");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error occurred", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="addUser">
      <Link to="/artist-categories" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Back
      </Link>
      <h3>CategoryList</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={inputHandler}
            name="name"
            value={artist.name}
            autoComplete="off"
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            onChange={inputHandler}
            name="email"
            value={artist.email}
            autoComplete="off"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            onChange={inputHandler}
            name="address"
            value={artist.address}
            autoComplete="off"
            placeholder="Enter Address"
            required
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

// ARTIST LIST
export const ArtistList = () => {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/artists");
        setArtists(res.data);
      } catch (error) {
        toast.error("Error while fetching data", { position: "top-right" });
      }
    };
    fetchData();
  }, []);

  const deleteArtist = async (artistId) => {
    try {
      const res = await axios.delete(`http://localhost:8000/api/artist/${artistId}`);
      setArtists((prev) => prev.filter((a) => a._id !== artistId));
      toast.success(res.data.message, { position: "top-right" });
    } catch {
      toast.error("Delete failed", { position: "top-right" });
    }
  };

  return (
    <div className="userTable">
      <Link to="/add-artist-category" className="btn btn-primary">
        Add Artist <i className="fa-solid fa-user-plus"></i>
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {artists.map((artist, idx) => (
            <tr key={artist._id}>
              <td>{idx + 1}</td>
              <td>{artist.name}</td>
              <td>{artist.email}</td>
              <td>{artist.address}</td>
              <td className="actionButtons">
                <Link to={`/update-artist/${artist._id}`} className="btn btn-info">
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <button
                  onClick={() => deleteArtist(artist._id)}
                  className="btn btn-danger"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// UPDATE ARTIST FORM
export const UpdateArtist = () => {
  const [artist, setArtist] = useState({ name: "", email: "", address: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setArtist({ ...artist, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/artist/${id}`)
      .then((res) => setArtist(res.data))
      .catch(() => toast.error("Failed to fetch artist data", { position: "top-right" }));
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:8000/api/artist/${id}`, artist);
      toast.success(res.data.message, { position: "top-right" });
      navigate("/artist-categories");
    } catch {
      toast.error("Update failed", { position: "top-right" });
    }
  };

  return (
    <div className="addUser">
      <Link to="/artist-categories" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Back
      </Link>
      <h3>Update Artist</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={artist.name}
            onChange={inputHandler}
            name="name"
            autoComplete="off"
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={artist.email}
            onChange={inputHandler}
            name="email"
            autoComplete="off"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={artist.address}
            onChange={inputHandler}
            name="address"
            autoComplete="off"
            placeholder="Enter Address"
            required
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