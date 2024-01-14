import React from 'react'
import '../stylessheets/Footer.css'

const Footer = () => {
  let fecha = new Date

  return ( 
    <footer className='container-fluid d-flex justify-content-center align-items-center footer'><p >Copyrights &#169; ({fecha.getFullYear()}). All rights are reserved </p></footer>
   );
}
 
export default Footer;