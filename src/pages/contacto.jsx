import './contacto.css'

function Contacto() {
    return (
        <section className="contacto" id="contacto">
            <div className="container">
                <h3 className="titulo-contacto">💕 Contáctanos 💕</h3>

                <p className="descripcion-contacto">
                    ¿Tienes dudas, ideas o deseas comunicarte con nosotros?
                    ¡Estaremos felices de leerte! Completa el formulario y te
                    responderemos cuanto antes ✨
                </p>

                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Ingresa tu nombre"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="ejemplo@gmail.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                            placeholder="Escribe tu mensaje aquí..."
                        ></textarea>
                    </div>

                    <button type="submit" className="btn">
                        Enviar mensaje ✨
                    </button>
                </form>

                <div className="contact-info">
                    <h4>📞 Otras formas de comunicarte:</h4>
                    <ul>
                        <li>
                            <strong>Teléfono:</strong> +34 123 456 789
                        </li>
                        <li>
                            <strong>Email:</strong> contacto@mipagina.com
                        </li>
                        <li>
                            <strong>Dirección:</strong> Calle Falsa 123, Ciudad,
                            País
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contacto
