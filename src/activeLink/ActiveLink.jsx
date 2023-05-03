import React from "react";
import { NavLink } from "react-router-dom";
import  "./Activelink.css"

const ActiveLink = ({ to,children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
        {children}
    </NavLink>
  );
};

export default ActiveLink;
