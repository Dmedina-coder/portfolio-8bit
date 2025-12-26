import React from 'react';
import '../styles/components.css';

const Contact: React.FC = () => {
    return (
        <section className="contact" id="contact">
            <h2>./Contacto</h2>
            <p>Si deseas ponerte en contacto, por favor completa el siguiente formulario o envíame un correo electrónico.</p>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
            <br />
            <p>También puedes encontrarme en las redes sociales:</p>
            <ul className="social-links">
                <li>
                    <a href="https://www.linkedin.com/in/daniel-medina-negrete-696b78113" target="_blank" rel="noopener noreferrer">
                        <img src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Icon-Logo.wine.svg" alt="LinkedIn" />
                        <span>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Dmedina-coder" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                        <span>GitHub</span>
                    </a>
                </li>
            </ul>
            <p>O envíame un correo directamente a: <a href="mailto:danielmedinanegrete@gmail.com">danielmedinanegrete@gmail.com</a></p>
        </section>
    );
};

export default Contact;