import React from "react";
import '../stylessheets/Navbar.css'
import imgMan from '../images/ico_man.png'

const Navbar = () => {
  return (
    <div className="container general">
      <nav className="navbar navbar-expand-lg contenedor-barra" data-bs-theme="dark">
        <div className="container barra-navegacion ">
          <a className="navbar-brand" href="#presentacion">
            <img src={imgMan} alt="Libro" width="50"  style={{marginRight:"10px"}}/>
            Welcome!
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            color="red"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link text-white" aria-current="page" href="#sobre-mi"><b>Skills</b></a>
              <a className="nav-link text-white" href="#proyectos"><b>Projects</b></a>
              <a className="nav-link text-white" href="#contacto"><b>Contact</b></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
