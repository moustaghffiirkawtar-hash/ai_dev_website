import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ routes }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3 sticky-top">
      <div className="container">
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center gap-2"
        >
          <img
            src="/img/logo.png"
            alt="AI & Dev Community Logo"
            style={{ width: "36px", height: "36px", objectFit: "contain" }}
          />
          <span className="fs-5">AI & Dev Community</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto d-flex align-items-center gap-1">
            {routes.map(({ path, text }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className="nav-link px-3 py-2 rounded-3"
              >
                {text}
              </NavLink>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdu_abXzvs4gCvMcGVI3BvOTdo4Sn_tCop03G0CrhUkmEHYJA/viewform?urp=gmail_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-4 py-2 rounded-pill ms-3 fw-bold shadow-sm"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
