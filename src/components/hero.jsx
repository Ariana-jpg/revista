import { Link } from 'react-router-dom'
import './hero.css'

function Hero() {
    return (
        <section className="hero" id="inicio">
            <div className="container">
                <h2>
                    Bienvenida a tu revista favorita, donde lo bonito inspira
                </h2>
                <p>
                    ¿Quieres saber más, necesitas ayuda o deseas compartir algo
                    con nosotras?
                </p>
                <Link to="/contacto" className="btn_hero">
                    Cont&aacute;ctanos
                </Link>
            </div>
        </section>
    )
}

export default Hero
