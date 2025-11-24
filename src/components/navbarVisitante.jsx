import { Link } from 'react-router-dom'

function NavbarVisitantes() {
    return (
        <header className="bg-pink-200 backdrop-blur-sm bg-opacity-80 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                
                {/* LOGO */}
                <h1 className="text-3xl font-bold text-pink-700 tracking-wide font-sans">
                    Mi Revista
                </h1>

                {/* MENÚ */}
                <nav>
                    <ul className="flex gap-6 text-lg font-medium text-pink-800 font-sans items-center">

                        <li className="hover:text-pink-600 transition transform hover:scale-110">
                            <Link to="/">Inicio</Link>
                        </li>

                        {/* MAQUILLAJE (requiere registro) */}
                        <li className="hover:text-pink-600 transition transform hover:scale-110">
                            <Link to="/iniciar-sesion">Maquillaje</Link>
                        </li>

                        {/* SKINCARE (requiere registro) */}
                        <li className="hover:text-pink-600 transition transform hover:scale-110">
                            <Link to="/iniciar-sesion">Skincare</Link>
                        </li>

                        {/* ROPA (requiere registro) */}
                        <li className="hover:text-pink-600 transition transform hover:scale-110">
                            <Link to="/iniciar-sesion">Ropa</Link>
                        </li>

                        <li className="hover:text-pink-600 transition transform hover:scale-110">
                            <Link to="/contacto">Contacto</Link>
                        </li>

                        <li className="hover:text-pink-600 transition transform hover:scale-110">
                            <Link to="/iniciar-sesion">Comunidad</Link>
                        </li>

                        <li className="hover:text-pink-600 transition transform hover:scale-110">
                            <Link to="/iniciar-sesion">Iniciar Sesión</Link>
                        </li>

                        <li className="hover:text-pink-600 transition transform hover:scale-110">
                            <Link to="/registrarse">Registrarse</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavbarVisitantes
