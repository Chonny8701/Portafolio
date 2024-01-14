import React from "react";
import '../stylessheets/SobreMi.css'
import imgHabilidades from '../images/img_skills.png'

const SobreMi = () => {
  return (
    <section id="sobre-mi"  className="container seccion-2 general">
      <div className="d-flex flex-column justify-content-center align-items-center mb-3" style={{border:"none"}}>
        <img src={imgHabilidades} alt="Libro" width="80"  style={{border: "50%", top: "0px"}}/>
        <h3 className="item">SKILLS</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-about-me">
            <div className="u-center">
              <section className="skills">
              <h4 className="item">FRONTEND</h4>
              <ul className="tabla text-start">
                <li className="list-experiencia-item">
                  <div className="d-flex">
                    <img src={process.env.PUBLIC_URL + '/images/icon-html.svg'} alt="HTML ICON" height={"30px"}/>
                    <div style={{padding:"0px"}}><b className="negrita">HTML. </b></div>
                  </div>
                </li>
                <li className="list-experiencia-item">
                  <div className="d-flex">
                    <img src={process.env.PUBLIC_URL + '/images/icon-css.svg'} alt="CSS ICON" height={"30px"}/>
                    <div style={{padding:"0px"}}><b className="negrita">CSS. </b></div>
                  </div>
                </li>
                <li className="list-experiencia-item">
                  <div className="d-flex">
                    <img src={process.env.PUBLIC_URL + '/images/icon-js.svg'} alt="JS ICON" height={"30px"}/>
                    <div style={{padding:"0px"}}><b className="negrita">JavaScript. </b></div>
                  </div>
                </li>
                <li className="list-experiencia-item">
                  <div className="d-flex">
                    <img src={process.env.PUBLIC_URL + '/images/icon-bootstrap.svg'} alt="bootstrap ICON" height={"30px"}/>
                    <div style={{padding:"0px"}}><b className="negrita">Bootstrap. </b></div>
                  </div>
                </li>                                
                <li className="list-experiencia-item">
                  <div className="d-flex">
                    <img src={process.env.PUBLIC_URL + '/images/icon-react.svg'} alt="react ICON" height={"30px"}/>
                    <div style={{padding:"0px"}}><b className="negrita">React. </b></div>
                  </div>
                </li>
                <li className="list-experiencia-item">
                <div className="d-flex">
                    <img src={process.env.PUBLIC_URL + '/images/icon-sass.svg'} alt="sass ICON" height={"30px"}/>
                    <div style={{padding:"0px"}}><b className="negrita">Sass. </b></div>
                  </div>
                </li>
              </ul>
              </section>
            </div>
          </div>
          <div className="col-lg-3 col-about-me">
            <div className="u-center">
              <section className="skills">
              <h4 className="item">BACKEND</h4>
              <ul className="tabla text-start">
                <li className="list-experiencia-item">
                  <div className="d-flex">
                    <img src={process.env.PUBLIC_URL + '/images/icon-python.svg'} alt="python ICON" height={"30px"}/>
                    <div style={{padding:"0px"}}><b className="negrita">PYTHON. </b></div>
                  </div>
                </li>
                <li className="list-experiencia-item">
                  <div className="d-flex">
                    <img src={process.env.PUBLIC_URL + '/images/icon-flask.svg'} alt="flask ICON" height={"30px"}/>
                    <div style={{padding:"0px"}}><b className="negrita">FLASK. </b></div>
                  </div>
                </li>
                <li className="list-experiencia-item">
                  <div className="d-flex">
                    <img src={process.env.PUBLIC_URL + '/images/icon-nodejs.svg'} alt="nodejs ICON" height={"30px"}/>
                    <div style={{padding:"0px"}}><b className="negrita">Node JS. </b></div>
                  </div>
                </li>
                <li className="list-experiencia-item">
                  <div className="d-flex">
                    <img src={process.env.PUBLIC_URL + '/images/icon-express.svg'} alt="express ICON" height={"30px"}/>
                    <div style={{padding:"0px"}}><b className="negrita">Express. </b></div>
                  </div>
                </li>
              </ul>
              </section>
            </div>
          </div>
          <div className="col-lg-3 col-about-me">
            <div className="u-center">
              <section className="skills">
              <h4 className="item">DATA MANAGEMENT</h4>
              <ul className="tabla text-start">
                <li className="list-experiencia-item">
                  <div className="d-flex">
                    <img src={process.env.PUBLIC_URL + '/images/icon-mongodb.svg'} alt="HTML ICON" height={"30px"}/>
                    <div style={{padding:"0px"}}><b className="negrita">MongoDB. </b></div>
                  </div>
                </li>
                <li className="list-experiencia-item">
                  <div className="d-flex">
                    <img src={process.env.PUBLIC_URL + '/images/icon-mysql.svg'} alt="CSS ICON" height={"30px"}/>
                    <div style={{padding:"0px"}}><b className="negrita">MySQL. </b></div>
                  </div>
                </li>
              </ul>
              </section>
            </div>
          </div>
          <div className="col-lg-3 col-about-me">
            <div className="u-center">
              <section className="skills">
              <h4 className="item">SOFTWARE DEVELOPMENT</h4>
              <ul className="tabla text-start">
                <li className="list-experiencia-item">
                  <div className="d-flex">
                    <img src={process.env.PUBLIC_URL + '/images/icon-git.svg'} alt="git ICON" height={"30px"}/>
                    <div style={{padding:"0px"}}><b className="negrita">GIT. </b></div>
                  </div>
                </li>
                <li className="list-experiencia-item">
                  <div className="d-flex">
                    <img src={process.env.PUBLIC_URL + '/images/icon-docker.svg'} alt="docker ICON" height={"30px"}/>
                    <div style={{padding:"0px"}}><b className="negrita">MySQL. </b></div>
                  </div>
                </li>
              </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
