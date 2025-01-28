import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="text-container">
          <div className="british">BRITISH</div>
          <div className="council">COUNCIL</div>
        </div>
        <div className="ielts">IELTS™</div>
      </div>
    </nav>
  );
};

export default Navbar;
