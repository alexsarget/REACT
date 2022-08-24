import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";


function App() {
  return (
    
    <div className="layout">
        {/*Cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>Mis Peliculas</h1>
        </header>

        {/*Barra de navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/*contenido principal*/}
        <section className="content">
          {/*Aqui va el listado de la peliculas */}
          <Listado/>
        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
            <Buscador/>
        
        {/*Crear*/}   
            <Crear/>
        </aside>

        <footer className="footer">
            &copy; Master en Javascript ES12 y TypeScript
        </footer>
    </div>
  );
}

export default App;
