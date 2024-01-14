import './App.css';
import Navbar from './components/Navbar';
import SobreMi from './components/SobreMi'
import Presentacion from './components/Presentacion'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentacion/>
      <SobreMi/>
      <Proyectos/>
      <Contacto/>
      <Footer/>
    </div>
  );
}

export default App;
