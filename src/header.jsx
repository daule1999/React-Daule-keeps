import React from "react";
import logo from "./keep-512.png";
function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="header" width="70" height="70" />
        <h1>Daule Keeps</h1>
      </div>
    </>
  );
}

export default Header;
