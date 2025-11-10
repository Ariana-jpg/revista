import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import NavbarVisitante from './navbarVisitante';
import NavbarUsuario from './navbarUsuario';


function Header() {
    const [usuario, setUsuario] = useState(null);
    const auth = getAuth();

    return (
        <>
            <NavbarVisitante />
            <NavbarUsuario />
        </>
    )
}

export default Header;