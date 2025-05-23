import artistCategoryRoutes from "./routes/ArtistCategoryListRoute.js";


# Full Stack Artist User CRUD Example

This is a corrected version of your MERN (MongoDB, Express, React, Node.js) CRUD application for managing users (Artist Category List).

## Structure

```
full-stack-artist-user-crud/
│
├── server/
│   ├── controller/
│   │   ├── ArtistCategoryListController.js
│   │  
│   ├── model/
│   │   └── ArtistCategoryListModel.js
│   ├── routes/
│   │   └── ArtistCategoryListRoute.js
│   ├── .env
│   └── index.js
│
└── client/
    └── src/
        └── component/
            └── AdminDashboard/
                └── Artist/
                    ├── ArtistCategoryList.js
                    └── ArtistCategoryList.css
```

---

## 1. Server Code

```javascript name=server/index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/userRoute.js"; // <-- fixed import path
import artistCategoryRoutes from "./routes/ArtistCategoryListRoute.js";

// Load environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/", routes);
app.use("/api", artistCategoryRoutes); // <-- This line is required!

// Database connection
const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

if (!PORT || !MONGOURL || !process.env.SECRET_KEY) {
  console.error("Missing required environment variables. Check your .env file.");
  process.exit(1);
}

mongoose
  .connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port :${PORT}`);
    });
  })
  .catch((error) => console.log(error));











javascript name=server/controller/ArtistCategoryListController.js
import ArtistCategory from "../model/ArtistCategoryListModel.js";

export const create = async (req, res) => {
  try {
    const { email } = req.body;
    const artistExist = await ArtistCategory.findOne({ email });
    if (artistExist) {
      return res.status(400).json({ message: "Artist already exists." });
    }
    const newArtist = new ArtistCategory(req.body);
    await newArtist.save();
    res.status(201).json({ message: "Artist created successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getAllArtists = async (req, res) => {
  try {
    const artists = await ArtistCategory.find();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getArtistById = async (req, res) => {
  try {
    const artist = await ArtistCategory.findById(req.params.id);
    if (!artist) {
      return res.status(404).json({ message: "Artist not found." });
    }
    res.status(200).json(artist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const artist = await ArtistCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!artist) {
      return res.status(404).json({ message: "Artist not found." });
    }
    res.status(200).json({ message: "Artist updated successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteArtist = async (req, res) => {
  try {
    const artist = await ArtistCategory.findByIdAndDelete(req.params.id);
    if (!artist) {
      return res.status(404).json({ message: "Artist not found." });
    }
    res.status(200).json({ message: "Artist deleted successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};


















javascript name=server/controller/ArtistCategoryListModel.js

import mongoose from "mongoose";

const artistCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  }
});

export default mongoose.model("ArtistCategory", artistCategorySchema);













javascript name=server/controller/ArtistCategoryListRoute.js
import express from "express";
import {
  create,
  getAllArtists,
  getArtistById,
  update,
  deleteArtist,
} from "../controller/ArtistCategoryListController.js";

const router = express.Router();

router.post("/artist", create); // create
router.get("/artists", getAllArtists); // read all
router.get("/artist/:id", getArtistById); // read one
router.put("/artist/:id", update); // update
router.delete("/artist/:id", deleteArtist); // delete

export default router;










env file name=server/.env
PORT=8000
MONGO_URL=mongodb://localhost:27017/mern
SECRET_KEY=HelloWorld















## 2. Client Code

```javascript name=client/src/component/AdminDashboard/Artist/ArtistCategoryList.js
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
      <h3>Add New Artist</h3>
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



















```javascript name=client/src/component/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Services from "./Services";
import LoanCalculator from "./component/LoanCalculator";
import NidInfo from "./component/NidInfo";
import MobileInfo from "./component/MobileInfo";
import ChangePassword from "./ChangePassword";
import ForgotPassword from "./ForgotPassword";
import UserProfile from "./UserProfile";
import FileUpload from "./component/FileUpload";
import FileDownload from "./component/FileDownload";
import Role from "./page/Role";
import RoleManagement from "./page/RoleManagement";
import AssignRole from "./page/AssignRole";
import AssignFunction from "./page/AssignFunction";
import CreateUser from "./page/CreateUser";
import Footer from "./Footer";
import About from "./component/About";
import Artist from "./component/arts/Artis";
import AboutUs from "./component/AboutUs/AboutUs";
import ArtEvent from "./component/ArtEvent/ArtEvent";
import ArtMarket from "./component/ArtMarket/ArtMarket";
import PreOwnedArts from "./component/PreOwnedArt/PreOwnedArt";
import Buy from "./component/Buy/Buy";
import Gallery from "./component/Galleries/Galleries";
import ContactUs from "./component/ContactUs/ContactUs";
import ArtistProfile from "./component/ArtistProfile/ArtistProfile";
import ArtOrg from "./component/ArtOrg/ArtOrg";
import ArtHistory from "./component/ArtHistory/ArtHistory";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import Profile from "./component/auth/Profile";
import Dashboard from "./component/AdminDashboard/Dashboard";
import AddArtistCategory from "./component/AdminDashboard/Artist/AddArtistCategory";
import ArtistProfileList from "./component/AdminDashboard/Artist/ArtistProfileList";
import AddArtistProfile from "./component/AdminDashboard/Artist/AddArtistProfile";
// import AddArtMarket from "./component/AdminDashboard/ArtMarket/AddArtMarket";

import { ArtistList, AddArtist, UpdateArtist } from './component/AdminDashboard/Artist/ArtistCategoryList';

import "./App.css";

function App() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: "https://via.placeholder.com/100",
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You have been logged out.");
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/loan-calculator" element={<LoanCalculator />} />
          <Route path="/nid-info" element={<NidInfo />} />
          <Route path="/mobile-info" element={<MobileInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/userProfile" element={<UserProfile user={user} />} />
          <Route path="/fileUpload" element={<FileUpload />} />
          <Route path="/fileDownload" element={<FileDownload />} />
          <Route path="/role" element={<Role />} />
          <Route path="/roleManagement" element={<RoleManagement />} />
          <Route path="/assignRole" element={<AssignRole />} />
          <Route path="/assignFunction" element={<AssignFunction />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/artis" element={<Artist />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/artEvent" element={<ArtEvent />} />
          <Route path="/artMarket" element={<ArtMarket />} />
          <Route path="/preOwnedArts" element={<PreOwnedArts />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/artistProfile" element={<ArtistProfile />} />
          <Route path="/artOrg" element={<ArtOrg />} />
          <Route path="/artHistory" element={<ArtHistory />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addArtistCategory" element={<AddArtistCategory />} />
          <Route path="/artistProfileList" element={<ArtistProfileList />} />
          <Route path="/add-artist" element={<AddArtistProfile />} />
          {/* <Route path="/addArtMarket" element={<AddArtMarket />} /> */}

          {/* Artist CRUD routes */}
          <Route path="/artist-categories" element={<ArtistList />} />
          <Route path="/add-artist-category" element={<AddArtist />} />
          <Route path="/update-artist/:id" element={<UpdateArtist />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
