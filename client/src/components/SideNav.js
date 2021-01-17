import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="side-nav">
      <Link to="/notes">Notes</Link>
      <Link to="/weather">Weather</Link>
    </div>
  );
};

export default SideNav;
