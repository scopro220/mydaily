import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="side-nav">
      <Link to="/notes">Notes</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/weather">Weather</Link>
      <Link to="/todo">To-Do</Link>
      <Link to="/directions">Directions</Link>
    </div>
  );
};

export default SideNav;
