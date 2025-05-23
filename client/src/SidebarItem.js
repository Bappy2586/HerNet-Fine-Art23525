import React, { useState } from "react";

const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Main Sidebar Item */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          padding: "10px",
          borderBottom: "1px solid #777",
          display: "flex",
          alignItems: "center",
          gap: "10px", // Space between icon and text
        }}
      >
        {item.icon && (
          <i className={item.icon} style={{ fontSize: "16px" }}></i>
        )}
        <span>{item.title}</span>

        {/* Arrow Icon for Dropdown */}
        {item.children && (
          <i
            className={`glyphicon ${
              open ? "glyphicon-chevron-down" : "glyphicon-chevron-right"
            }`}
            style={{ marginLeft: "auto" }}
          ></i>
        )}
      </div>

      {/* Submenu */}
      {open && item.children && (
        <div style={{ paddingLeft: "20px", backgroundColor: "#23272b" }}>
          {item.children.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
