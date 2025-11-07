import './contenido.css'

function Contenido() {
    return (
        <section className="features" id="caracteristicas">
            <div className="container">
            <h3>Características</h3>
            <div className="feature-list">
                <div className="feature">
                <h4>Rápido</h4>
                <p>Carga rápida y optimizada para todos los dispositivos.</p>
                </div>
                <div className="feature">
                <h4>Simple</h4>
                <p>Diseño minimalista y fácil de mantener.</p>
                </div>
                <div className="feature">
                <h4>Escalable</h4>
                <p>Preparado para migrar a React u otros frameworks.</p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Contenido;