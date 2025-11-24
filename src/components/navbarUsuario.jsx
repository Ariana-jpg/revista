import { Link } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'

function NavbarUsuario() {
    const auth = getAuth()

    const cerrarSesion = async () => {
        await signOut(auth)
    }

    return (
        <header className="bg-pink-200 backdrop-blur-sm bg-opacity-80 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                
                {/* TÍTULO */}
                <h1 className="text-3xl font-bold text-pink-700 tracking-wide font-sans">
                    Bienvenida ✨
                </h1>

                {/* MENÚ */}
                <nav>
                    <ul className="flex gap-6 text-lg font-medium text-pink-700 font-sans items-center">

                        <li className="hover:text-pink-600 transition transform hover:scale-110">
                            <Link to="/">Inicio</Link>
                        </li>

                        {/* NUEVOS LINKS EXCLUSIVOS */}
                        <li className="hover:text-pink-600 transition transform hover:scale-110">
                            <Link to="/maquillaje">Maquillaje</Link>
                        </li>

                        <li className="hover:text-pink-600 transition transform hover:scale-110">
                            <Link to="/skincare">Skincare</Link>
                        </li>

                        <li className="hover:text-pink-600 transition transform hover:scale-110">
                            <Link to="/ropa">Ropa</Link>
                        </li>

                        <li className="hover:text-pink-600 transition transform hover:scale-110">
                            <Link to="/contacto">Contacto</Link>
                        </li>

                        <li className="hover:text-pink-600 transition transform hover:scale-110">
                            <Link to="/comunidad">Comunidad</Link>
                        </li>

                        {/* BOTÓN CERRAR SESIÓN */}
                        <li>
                            <button
                                onClick={cerrarSesion}
                                className="bg-pink-500 text-pink-50 px-4 py-2 rounded-xl shadow-md hover:bg-pink-400 transition transform hover:scale-105 font-semibold"
                            >
                                Cerrar Sesión
                            </button>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavbarUsuario
