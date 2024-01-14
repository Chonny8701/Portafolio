import React from "react";
import Slider from './Slider'
import "../stylessheets/Presentacion.css";
import imgPerfil from "../images/img_perfil.png";
import imgHand from "../images/hand.png";
import imgHTML from "../images/ico_html.png";
import imgCSS from "../images/ico_css.png";
import imgJS from "../images/ico_js.png";
import imgBT from "../images/ico_bootstrap.png";
import imgREACT from "../images/ico_react.svg";
import imgGIT from "../images/ico_git.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Presentacion = () => {
  return (
    <div id="presentacion" className="container seccion-1 general">
      <div className="row gy-5">
        <div className="col-lg-7 d-flex flex-column justify-content-center alig-items-center">
          <div className="row gy-5 ">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <h2>Full Stack Developer</h2>
            <img src={imgHand} alt="mano saludando" id="img-hand" />
          </div>
          <div className="col-12">
            <p>
            Welcome to my portfolio! My name is <b>José Daniel Rodríguez Chong</b>, and I am a a Full Stack Developer passionate about crafting seamless and innovative web experiences. My expertise extends from front-end design to robust back-end development.
            </p>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center gap-4">
            <a className="presentacion-icono-linkedin" href="https://www.linkedin.com/in/jos%C3%A9-daniel-rodr%C3%ADguez-chong-077485161/" target="_blank"><FaLinkedin  size={40}/></a>
            <a className="presentacion-icono-github" href="https://github.com/Chonny8701" target="_blank"><FaGithub  size={40} /></a>
          </div>
          </div>
        </div>
        <div className="col-lg-5 justify-content-center align-items-center">
          <img src={imgPerfil} id="img-perfil" alt="imagen de perfil"/>
        </div>
        <div className="col-lg-12 justify-content-center">
          <div className="row gy-4">
            <div className="col-lg-3 d-flex justify-content-center" style={{padding:"0px"}}><h5 className="d-flex justify-content-center align-items-center" style={{height:"100%", padding:"0 10px", borderRight:"2px solid orange" }}>Tech Stack</h5></div>
            <div className="col-lg-9 d-flex justify-content-around align-items-center">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentacion;
