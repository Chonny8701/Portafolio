import React, { useRef} from "react";
import emailjs from '@emailjs/browser';
import "../stylessheets/Contacto.css";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contacto = () => {

  const form = useRef();

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, public_key)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  const abrirCorreo = () => {
    const direccionCorreo = "pirolsaens@yahoo.es";

    // Genera la URL de Gmail con el correo electrónico prellenado
    const urlGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${direccionCorreo}`;

    // Abre una nueva ventana o pestaña con la URL de Gmail
    window.open(urlGmail, "_blank");
  };

  return (
    <section id="contacto" className="container d-flex flex-column general seccion-4">
      <div className="d-flex flex-column justify-content-center align-items-center mb-3" style={{border:"none"}}>
        <img src={process.env.PUBLIC_URL + '/images/icon-contact.png'} alt="Libro" width="80"  style={{border: "50%", top: "0px"}}/>
        <h3 className="card-title item">CONTACT</h3>
      </div>
      <div className="card mb-3" style={{ border: "none" }}>
        <div className="row contacto-fila-1">
          <div className="col-lg-8 contacto-columna-1 px-5">
            <p>Thank you for visiting my portfolio! If you are interested in working together, have any questions or just want to say hi, please feel free to reach out to me.</p>
            <Form
              ref={form} 
              onSubmit={sendEmail}
              className="d-flex flex-column w-100"
              //  
            >
              <div className="d-flex gap-1">
                <Form.Group className="mb-1 flex-grow-1" controlId="name-usuario">
                  <Form.Control name="user_name" type="text" placeholder="Name" required/>
                </Form.Group>
                <Form.Group className="mb-1 flex-grow-1" controlId="email-usuario">
                  <Form.Control name="user_email" type="email" placeholder="Email" required/>
                </Form.Group>
              </div>


              <Form.Group className="mb-1" controlId="subject-usuario">
                <Form.Control name="subject" type="text" placeholder="Subject" required/>
              </Form.Group>

              <Form.Group className="mb-1" controlId="message-usuario" >
                <Form.Control name="message" as="textarea" placeholder="Message" required style={{minHeight:"100px"}}/>
              </Form.Group>


              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className="col-lg-4 contacto-columna-2 gap-5">
            <div className="d-flex justify-content-center container p-1 gap-4">
              <a
                className="icono-linkedin"
                href="https://www.linkedin.com/in/jos%C3%A9-daniel-rodr%C3%ADguez-chong-077485161/"
                target="_blank"
              >
                <FaLinkedin size={40} />
              </a>
              <a
                className="icono-github"
                href="https://github.com/Chonny8701"
                target="_blank"
              >
                <FaGithub size={40} />
              </a>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center container p-1 gap-4">
              <div className="card-contacto">
                <div>
                  <BiPhone
                    size={25}
                    color="white"
                    style={{ marginRight: "15px" }}
                  />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <p>
                    <b>+34 698 245 390</b>
                  </p>
                </div>
              </div>

              <a
                className="card-contacto"
                href="https://wa.me/+34698245390"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <FaWhatsapp
                    size={25}
                    color="white"
                    style={{ marginRight: "20px" }}
                  />
                </div>
                <div className="d-flex flex-column align-items-start">
                  <p>
                    <b>+34 698 245 390</b>
                  </p>
                </div>
              </a>

              <a
                className="card-contacto"
                onClick={abrirCorreo}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <MdOutlineMarkEmailRead
                    size={25}
                    color="white"
                    style={{ marginRight: "20px" }}
                  />
                </div>
                <div className="d-flex flex-column align-items-start">
                  <p>
                    <b>pirolsaens@yahoo.es</b>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
