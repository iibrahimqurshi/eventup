import React , {useContext , useState} from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for internal navigation
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/animate.css";
import "../css/fontawesome.css";
import "../App.css";
import logo from "../assets/images/site_logo.png";
import { AuthContext } from './AuthContext.js';
const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <header className="app_header sticky">
      <div className="container">
        {/* Logo */}
        <div className="row align-items-center">
          <div className="col col-lg-2 col-5 p-9">
            <div className="site_logo">
              <Link className="site_link" to="/">
                <img src={logo} alt="Eventup" />
              </Link>
            </div>
          </div>
          {/* Logo end */}
          

          {/* Menu */}
          <div className="col col-lg-7 col-2 pl-5">
            <nav className="main_menu navbar navbar-expand-lg">
              <div
                className="main_menu_inner collapse navbar-collapse justify-content-center"
                id="main_menu_dropdown"
              >
                <ul className="main_menu_list unordered_list_center">
                  <li>
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/events">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* Menu end */}

          {/* Login/Signup Buttons */}
          <div className="col col-lg-3 col-5">
            <ul className="header_btns_group unordered_list_end">
              {/* Mobile menu button */}
              <li>
                <button className="mobile_menu_btn" type="button">
                  <i className="far fa-bars"></i>
                </button>
              </li>

              {!isLoggedIn && (
              <li>
                <Link className="btn border_dark" to="/login">
                  <span>
                    <small>Login</small>
                    <small>Login</small>
                  </span>
                </Link>
              </li>
               )}
              {!isLoggedIn && (
              <li>
                <Link className="btn btn_dark" to="/signup">
                  <span>
                    <small>Sign Up</small>
                    <small>Sign Up</small>
                  </span>
                </Link>
              </li>
               )}

             {isLoggedIn && (
              <li>
                <button className="btn btn_dark" onClick={logout}>
                  <span>
                    <small>Logout</small>
                    <small>Logout</small>
                  </span>
                </button>
              </li>
               )}




            </ul>
          </div>
          {/* Login/Signup Buttons end */}
        </div>
      </div>
      <script src="main.js"></script>
      <script src="bootstrap.min.js"></script>
    </header>
    
  );
};

export default Header;
