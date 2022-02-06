import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import("./Navbar.scss");

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>News and Popular</span>
          <span>Listes</span>
        </div>
        <div className="right">
          <SearchIcon />
          <span>KID</span>
          <NotificationsIcon />
          <img src="" alt="" />
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
