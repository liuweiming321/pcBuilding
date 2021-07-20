import React, { useState } from "react";
import * as Io5Icons from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <div className="navbar">
        <Link to="#" className="menuIcon">
          <Io5Icons.IoCartOutline onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "navMenu active" : "navMenu"}>
        <p>This is a Shopping cart</p>
      </nav>
    </div>
  );
}

export default Navbar;
