// npm install react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Firebase (ya inicializado en ./firebase)
import "./App.css";

// Layout
import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import Footer from "./components/footer.jsx";

// Componentes principales
import Contenido from "./components/contenido.jsx";
import Contacto from "./pages/contacto.jsx";
import Comunidad from "./components/comunidad.jsx";

// Páginas protegidas
import Ropa from "./components/ropa.jsx";
import Maquillaje from "./components/maquillaje.jsx";
import Skincare from "./components/skincare.jsx";

// Sistema de login
import Login from "./components/Login.jsx";
import RegistrarCuenta from "./components/RegistrarCuenta.jsx";

// Ruta privada
import RutaPrivada from "./components/RutaPrivada.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />

      <Routes>

        {/* Página principal */}
        <Route path="/" element={<Contenido />} />

        {/* Contacto (pública) */}
        <Route path="/contacto" element={<Contacto />} />

        {/* 🔒 RUTAS PRIVADAS */}
        <Route
          path="/maquillaje"
          element={
            <RutaPrivada>
              <Maquillaje />
            </RutaPrivada>
          }
        />
        <Route
          path="/skincare"
          element={
            <RutaPrivada>
              <Skincare />
            </RutaPrivada>
          }
        />
        <Route
          path="/ropa"
          element={
            <RutaPrivada>
              <Ropa />
            </RutaPrivada>
          }
        />
        <Route
          path="/comunidad"
          element={
            <RutaPrivada>
              <Comunidad />
            </RutaPrivada>
          }
        />

        {/* Login y registro */}
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/registrarse" element={<RegistrarCuenta />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
