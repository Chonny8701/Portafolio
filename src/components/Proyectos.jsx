import React, {useState} from "react";
import Modal from './Modal'
import "../stylessheets/Proyectos.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Proyecto1 from "./Proyecto1";
import Proyecto2 from "./Proyecto2";
import Proyecto3 from "./Proyecto3";
import { MdOutlineDescription } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Proyectos = () => {
  const proyecto1 = {
    url_imagen: process.env.PUBLIC_URL + '/images/proyecto1-1.png',
    titulo: 'E-Commerce Factory of Art',
   }
  const proyecto2 = {
    url_imagen: process.env.PUBLIC_URL + '/images/proyecto2-1.png',
    titulo: 'Trading Bot',
  }
  const proyecto3 = {
    url_imagen: process.env.PUBLIC_URL + '/images/proyecto3-1.png',
    titulo: 'Appointment Booking',
  }
  // Estado para controlar la visibilidad ventana modal de proyecto1
  const [isOpenModalProyecto1, setIsOpenModalProyecto1] = useState(false)
  const openModalProyecto1 = () => { setIsOpenModalProyecto1(true); }
  const closeModalProyecto1 = () =>{ setIsOpenModalProyecto1(false)  }

  // Estado para controlar la visibilidad ventana modal de proyecto2
  const [isOpenModalProyecto2, setIsOpenModalProyecto2] = useState(false)
  const openModalProyecto2 = () => { setIsOpenModalProyecto2(true); }
  const closeModalProyecto2 = () =>{ setIsOpenModalProyecto2(false)  }

  // Estado para controlar la visibilidad ventana modal de proyecto3
  const [isOpenModalProyecto3, setIsOpenModalProyecto3] = useState(false)
  const openModalProyecto3 = () => { setIsOpenModalProyecto3(true); }
  const closeModalProyecto3 = () =>{ setIsOpenModalProyecto3(false)  }

  const [imagenTarjeta, setImagenTarjeta] = useState(null)
  const [tituloTarjeta, setTituloTarjeta] = useState(null)
  const [descripcionTarjeta, setDescripcionTarjeta] = useState(null)

  return (
    <div id="proyectos" className="container seccion-3 general">
      <div className="d-flex flex-column justify-content-center align-items-center mb-3" style={{border:"none"}}>
        <img src={process.env.PUBLIC_URL + '/images/icon-projects.png'} alt="Libro" width="80"  style={{border: "50%", top: "0px"}}/>
        <h3 className="card-title item">PROJECTS</h3>
      </div>
      <div className="d-flex justify-content-center flex-wrap gap-2">
        <Card style={{ width: '30vw', minWidth: '350px'}}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/proyecto1-1.webp'} />
          <Card.Body>
            <Card.Title>E-Commerce Factory of Art</Card.Title>
            <div className="d-flex justify-content-around"  style={{margin:"30px"}}>
              <div className="proyectos-icono" onClick={openModalProyecto1}> Description <MdOutlineDescription   size={25} /></div>
              <a className="proyectos-icono" href="https://github.com/Chonny8701/FART" target="_blank"> Code <FaGithub  size={25} /></a>
              <a className="proyectos-icono" href="https://d589-139-47-122-206.ngrok-free.app" target="_blank"> Live Demo <FaExternalLinkAlt  size={25} /></a>
            </div>
            {/* <Button variant="dark" onClick={openModalProyecto1}>Show Details</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: '30vw', minWidth: '350px'}}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/proyecto2-1.webp'} />
          <Card.Body>
            <Card.Title>Trading Bot</Card.Title>
            <div className="d-flex justify-content-around"  style={{margin:"30px"}}>
              <div className="proyectos-icono" onClick={openModalProyecto2}> Description <MdOutlineDescription   size={25} /></div>
              <a className="proyectos-icono" href="https://github.com/Chonny8701/TradingBot" target="_blank"> Code <FaGithub  size={25} /></a>
              <a className="proyectos-icono" href="https://bf35-139-47-122-206.ngrok-free.app" target="_blank"> Live Demo <FaExternalLinkAlt  size={25} /></a>
            </div>
            {/* <Button variant="dark" onClick={openModalProyecto2}>Show Details</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: '30vw', minWidth: '350px'}}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/proyecto3-1.webp'} />
          <Card.Body>
            <Card.Title>Appointment Booking</Card.Title>
            <div className="d-flex justify-content-around"  style={{margin:"30px"}}>
              <div className="proyectos-icono" onClick={openModalProyecto3}> Description <MdOutlineDescription   size={25} /></div>
              <a className="proyectos-icono" href="https://github.com/Chonny8701/CYR" target="_blank"> Code <FaGithub  size={25} /></a>
              <a className="proyectos-icono" href="https://9430-139-47-122-206.ngrok-free.app" target="_blank"> Live Demo <FaExternalLinkAlt  size={25} /></a>
            </div>
            {/* <Button variant="dark" onClick={openModalProyecto3}>Show Details</Button> */}
          </Card.Body>
        </Card>
      </div>
      {/* ---------------------------Ventana Modal Visualizar Proyecto1--------------------------- */}
      <Modal isOpen={isOpenModalProyecto1} closeModal={closeModalProyecto1} imagenTarjeta={imagenTarjeta} tituloTarjeta={tituloTarjeta} descripcionTarjeta={descripcionTarjeta}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          {/* Contenido del modal */}
          <Card style={{ width: '60vw', minWidth: '350px'}}>
            <Card.Img variant="top" src={proyecto1.url_imagen} />
            <Card.Body>
              <Card.Title>{proyecto1.titulo}</Card.Title>
              <Card.Text><Proyecto1/></Card.Text>
            </Card.Body>
          </Card>
          <Button variant="dark" style={{marginTop:"20px", width:"300px"}} onClick={closeModalProyecto1}>Cerrar</Button>
        </div>
      </Modal>

      {/* ---------------------------Ventana Modal Visualizar Proyecto2--------------------------- */}
      <Modal isOpen={isOpenModalProyecto2} closeModal={closeModalProyecto2} imagenTarjeta={imagenTarjeta} tituloTarjeta={tituloTarjeta} descripcionTarjeta={descripcionTarjeta}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          {/* Contenido del modal */}
          <Card style={{ width: '60vw', minWidth: '350px'}}>
            <Card.Img variant="top" src={proyecto2.url_imagen} />
            <Card.Body>
              <Card.Title>{proyecto2.titulo}</Card.Title>
              <Card.Text><Proyecto2/></Card.Text>
            </Card.Body>
          </Card>
          <Button variant="dark" style={{marginTop:"20px", width:"300px"}} onClick={closeModalProyecto2}>Cerrar</Button>
        </div>
      </Modal>

      {/* ---------------------------Ventana Modal Visualizar Proyecto1--------------------------- */}
      <Modal isOpen={isOpenModalProyecto3} closeModal={closeModalProyecto3} imagenTarjeta={imagenTarjeta} tituloTarjeta={tituloTarjeta} descripcionTarjeta={descripcionTarjeta}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          {/* Contenido del modal */}
          <Card style={{ width: '60vw', minWidth: '350px'}}>
            <Card.Img variant="top" src={proyecto3.url_imagen} />
            <Card.Body>
              <Card.Title>{proyecto3.titulo}</Card.Title>
              <Card.Text><Proyecto3/></Card.Text>
            </Card.Body>
          </Card>
          <Button variant="dark" style={{marginTop:"20px", width:"300px"}} onClick={closeModalProyecto3}>Cerrar</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Proyectos;
