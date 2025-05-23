import React from "react";
import SidebarItem from "./SidebarItem";
import "bootstrap/dist/css/bootstrap.min.css";

const items = [
  {
    title: "Dashboard",
    icon: "glyphicon glyphicon-dashboard",
    children: [
      { title: "Overview", icon: "glyphicon glyphicon-stats" },
      { title: "Reports", icon: "glyphicon glyphicon-list-alt" },
    ],
  },
  {
    title: "Settings",
    icon: "glyphicon glyphicon-cog",
    children: [
      { title: "Profile", icon: "glyphicon glyphicon-user" },
      { title: "Preferences", icon: "glyphicon glyphicon-wrench" },
    ],
  },
  {
    title: "Messages",
    icon: "glyphicon glyphicon-envelope",
  },
];

const Sidebar = () => {
  return (
    <div
      className="sidebar"
      style={{
        width: "230px",
        height: "100vh",
        position: "fixed",
        top: "0px",
        left: "0px",
        backgroundColor: "#343a40",
        color: "#fff",
        padding: "10px",
        boxShadow: "2px 0px 5px rgba(177, 43, 43, 0.2)",
      }}
    >
      <h4 className="text-center">My Sidebar</h4>
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
