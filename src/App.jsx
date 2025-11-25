// npm install react-router-dom
import { HashRouter, Routes, Route } from 'react-router-dom'

import './App.css'

// Layout
import Header from './components/header.jsx'
import Hero from './components/hero.jsx'
import Footer from './components/footer.jsx'

// Componentes principales
import Contenido from './components/contenido.jsx'
import Contacto from './pages/contacto.jsx'
import Comunidad from './components/comunidad.jsx'

// Páginas protegidas
import Ropa from './components/ropa.jsx'
import Maquillaje from './components/maquillaje.jsx'
import Skincare from './components/skincare.jsx'

// Login y registro
import Login from './components/Login.jsx'
import RegistrarCuenta from './components/RegistrarCuenta.jsx'

// Rutas privadas
import RutaPrivada from './components/RutaPrivada.jsx'

function App() {
    return (
        <HashRouter>
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
        </HashRouter>
    )
}

export default App
