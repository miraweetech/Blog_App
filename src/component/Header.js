import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <div className="container-fluid justify-content-between">
            <h2 className="navbar-brand">JSOM</h2>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <h2 className="nav-link">
                    <Link
                      to="/"
                      style={{ color: "#ffffff8c", textDecoration: "none" }}
                    >
                      Author
                    </Link>
                  </h2>
                </li>
                <li className="nav-item">
                  <h2 className="nav-link">
                    <Link
                      to="/"
                      style={{ color: "#ffffff8c", textDecoration: "none" }}
                    >
                      MostLikedPost
                    </Link>
                  </h2>
                </li>
                <li className="nav-item">
                  <h2 className="nav-link">
                    <Link
                      to="/"
                      style={{ color: "#ffffff8c", textDecoration: "none" }}
                    >
                      MostCommentPost
                    </Link>
                  </h2>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
