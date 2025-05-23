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