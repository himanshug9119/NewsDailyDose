import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/")}`} to="/">
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/business")}`}
                to="/business"
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/entertainment")}`}
                to="/entertainment"
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/health")}`} to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/science")}`}
                to="/science"
              >
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/sports")}`} to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/technology")}`}
                to="/technology"
              >
                Technology
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Custom CSS for active link */}
      <style>
        {`
          .nav-link.active {
            background-color: #343a40;
            border-radius: 0.25rem;
            color: #ffffff !important;
            border: 1px solid #343a40;
            border-radius: 0.5rem;
          }
          .nav-link.active:hover {
            background-color: #9fa5aa;
            border-radius: 0.25rem;
            color: #ffffff !important;
            border: 1px solid #9fa5aa;
            border-radius: 0.5rem;
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
