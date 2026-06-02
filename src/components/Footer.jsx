import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0 small">
          &copy; {new Date().getFullYear()} AI & Dev Community.
        </p>
        <ul className="nav">
          <li className="nav-item">
            <a href="/about" className="nav-link text-white-50 px-2">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link text-white-50 px-2">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="/list-of-members" className="nav-link text-white-50 px-2">
              Members
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
