import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../firebase';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function RutaPrivada({ children }) {

    const auth = getAuth(app);
    const [usuario, setUsuario] = useState(undefined); // undefined = cargando

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUsuario(user);
        });
        return () => unsubscribe();
    }, []);

    // Mientras Firebase verifica sesión → mostramos pantalla de carga
    if (usuario === undefined) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-pink-100 text-pink-700 text-2xl">
                Cargando...
            </div>
        );
    }

    // Si no está registrado → lo mandamos a iniciar sesión
    if (!usuario) {
        return <Navigate to="/iniciar-sesion" replace />;
    }

    // Si está logueado → mostramos la página protegida
    return children;
}

export default RutaPrivada;
