import React from 'react'

const Proyecto1 = () => {
  return ( 
    <div className='d-flex flex-column gap-4 p-5' style={{textAlign:'justify'}}>
      <p>Una plataforma vibrante y multifacética diseñada para promover eventos artísticos, facilitar la venta de obras de arte y manualidades, ¡y ahora también para que tú, como usuario, puedas ser parte activa de nuestra comunidad creativa!</p>

      <h5>Características Destacadas:</h5>
      <ul>
          <li>🎨 Eventos Artísticos: Descubre y participa en eventos culturales y artísticos de todo tipo.</li>
          <li>🛍️ Mercado de Arte: Explora y adquiere obras de arte únicas y manualidades excepcionales.</li>
          <li>🤝 Registro de Usuarios: Únete a nuestra comunidad creativa. Regístrate para tener tu propio perfil y disfrutar de beneficios exclusivos.</li>
          <li>📢 Publicación de Eventos: Como usuario registrado, puedes publicar y promocionar tus propios eventos artísticos para llegar a una audiencia apasionada.</li>
          <li>💼 Venta de Productos: ¿Tienes creaciones artísticas o manualidades para vender? Publica tus productos y llega a compradores interesados.</li>
      </ul>

      <h5>Tecnologías Utilizadas:</h5>
      <ul>
          <li>Cliente: Vite, React</li>
          <li>Servidor: Flask, Python</li>
          <li>Base de Datos: MySQL</li>
          <li>Plataforma de Pago a través de Stripe</li>
      </ul>
    </div>
   );
}
 
export default Proyecto1;