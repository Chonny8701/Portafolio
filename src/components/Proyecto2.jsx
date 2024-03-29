import React from 'react'

const Proyecto2 = () => {
  return ( 
    <div className='d-flex flex-column gap-4 p-5' style={{textAlign:'justify'}}>
      <p>TradingBot es un proyecto que proporciona una página web interactiva para visualizar el precio de diversas criptomonedas, así como sus gráficas de comportamiento utilizando velas cartesianas y diferentes indicadores que ayudan a predecir su futuro comportamiento en el mercado. Además, el proyecto implementa una lógica básica de trading automatizado, donde el bot realiza compras cuando el índice de fuerza relativa (RSI) se encuentra por debajo de un mínimo establecido y vende cuando está por encima de un máximo.</p>
      <h5>Características Principales:</h5>
      <ul>
          <li>Visualización de Precios y Gráficas: TradingBot muestra de manera clara y concisa los precios en tiempo real de diversas criptomonedas. Los usuarios pueden seleccionar la criptomoneda de su interés y observar su comportamiento a través de gráficas de velas cartesianas.</li>
          <li>Indicadores Técnicos: La plataforma incorpora indicadores técnicos, como el RSI, que ayudan a los usuarios a analizar la salud del mercado y tomar decisiones informadas sobre sus inversiones.</li>
          <li>Trading Automatizado: La lógica de trading automatizado del bot permite realizar compras automáticas cuando el RSI cae por debajo de un umbral mínimo predefinido y vender cuando supera un umbral máximo. Esto brinda a los usuarios una herramienta automatizada para ejecutar estrategias de trading basadas en indicadores técnicos.</li>
          <li>Recopilación de Datos desde la API de Binance: El proyecto accede a la API de Binance para recopilar datos en tiempo real sobre precios, volumen y otros indicadores relevantes para las criptomonedas seleccionadas.</li>
      </ul>

      <h5>Tecnologías Utilizadas:</h5>
      <ul>
          <li>Cliente (React con Vite): La interfaz de usuario dinámica se construye utilizando React, un marco de desarrollo de JavaScript. Vite se utiliza como herramienta de construcción para optimizar el rendimiento y la eficiencia del desarrollo.</li>
          <li>Servidor (Python Flask): La lógica del servidor se implementa utilizando Flask, un marco de desarrollo web en Python. Flask facilita la creación de rutas, gestión de solicitudes HTTP y conexión con la API de Binance.</li>
      </ul>
    </div>
   );
}
 
export default Proyecto2;