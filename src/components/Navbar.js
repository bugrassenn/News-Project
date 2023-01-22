import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <>
      <header className="Header">
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1475872/draw_svg20210702-6381-1bvxca.svg.png"
                alt=""
                className="logo"
              />
            </div>
            <div className="col-lg-6 links">
              <Link to="/" className="Link">
                Home
              </Link>
              <Link to="/signIn" className="Link">
                User Sign In
              </Link>
              <Link to="/admin" className="Link">
                Admin Login
              </Link>
              <Link
                to="/add"
                className="btn btn-sm btn-danger"
                style={{ float: "right" }}
              >
                Add News
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
