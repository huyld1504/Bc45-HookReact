import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <NavLink className="navbar-brand" to={'/'}>
        HYLEEDINK
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" to={'/'} aria-current="page">
              Home <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'/contact'}>
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'/register'}>
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'/login'}>
              Log in
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to={'/detail'}>
              Detail
            </NavLink>
          </li> */}
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hook
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink to={'/use-state-demo'} className="dropdown-item" href="#">
                State Demo
              </NavLink>
              <NavLink to={'/use-effect-demo'} className="dropdown-item" href="#">
                Effect Demo
              </NavLink>
              <NavLink to={'/use-callback-demo'} className="dropdown-item" href="#">
                Callback Demo
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
