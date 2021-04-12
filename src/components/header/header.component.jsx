import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="ui pointing menu">
  <Link className="active item" to="/">
        Priorites
   </Link>
   <Link className="active item" to="/members">
         Members
    </Link>
  </div>
);

export default Header;
