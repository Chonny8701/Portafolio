import React from 'react'

const Proyecto3 = () => {
  return ( 
    <div className='d-flex flex-column gap-4 p-5' style={{textAlign:'justify'}}>
      <p>App web desarrollada con Vite/React diseñada para la gestión de reservas en negocios. Incluye funciones de registro, inicio de sesión, configuración de negocios y gestión eficiente de reservas. En el servidor Flask/Python, se realizan tareas diarias de generación automática de citas. ¡Optimiza tu tiempo y agenda citas fácilmente!</p>

      <h5>Características Principales:</h5>
      <ul>
          <li>Registro de Usuarios: Crea tu cuenta para acceder a funciones personalizadas y gestionar tus reservas.</li>
          <li>Login Seguro: Inicia sesión de forma segura para acceder a tu perfil y gestionar tus reservas.</li>
          <li>Configuración de Negocios: Personaliza la información de tu negocio, incluidos horarios y servicios ofrecidos.</li>
          <li>Gestión de Reservas: Agenda, modifica o cancela fácilmente tus citas. Visualiza un historial completo de tus reservas anteriores.</li>
          <li>Generación Automática de Citas: El servidor Flask/Python se encarga de tareas diarias, como la generación automática de citas, para optimizar la eficiencia del negocio.</li>
      </ul>
    </div>
   );
}
 
export default Proyecto3;