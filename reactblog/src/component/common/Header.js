import React from "react";
import { NavLink } from "react-router-dom";

function Header({ headText }) {
  return (
    <div>
      <div className="ui four item menu">
        <NavLink className="item" exact to="/">
          HomePage
        </NavLink>
        <NavLink className="item" to="/list">
          ListPage
        </NavLink>
        <NavLink className="item" to="/write">
          WirtePage
        </NavLink>
        <NavLink className="item" to="/login">
          LoginPage
        </NavLink>
      </div>
      <br />
      <h1 className="ui header" style={{ textAlign: "center" }}>
        {headText}
      </h1>
      <br />
    </div>
  );
}

export default Header;
