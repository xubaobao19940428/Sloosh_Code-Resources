import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg wrapper__navbar position-relative z-2"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div className="container position-relative">
          <NavLink to="/" exact class="navbar-brand">
            <img src="./../images/Logo.png" alt="" />
          </NavLink>

          <button
            class={"navbar-toggler nav__button position-relative "}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            className="collapse navbar-collapse wrapper__navbar-menu ml-lg-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav menu__center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  class="nav-link bold font__size--14 text__14-1024 active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/podcast"
                  class="nav-link bold font__size--14 text__14-1024 "
                >
                  Podcast
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/course"
                  class="nav-link bold font__size--14 text__14-1024 "
                >
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  class="nav-link bold font__size--14 text__14-1024 "
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact"
                  class="nav-link bold font__size--14 text__14-1024 "
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item d-lg-none">
                <div className="d-flex justify-content-end align-items-center">
                  <NavLink
                    to="/login"
                    className="semi-bold font__size--14 text__14-1024 color__white mr-4"
                  >
                    Log in
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="semi-bold font__size--14 text__14-1024 color__purple btn btn__white shadow btn__head"
                  >
                    Get Started
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>

          <div className="d-none d-lg-flex align-items-center">
            <NavLink
              to="/login"
              className="semi-bold font__size--14 text__14-1024 color__white mr-4"
            >
              Log in
            </NavLink>
            <NavLink
              to="/register"
              className="semi-bold font__size--14 text__14-1024 color__purple btn btn__white shadow btn__head"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
