import React, { useState } from 'react';
import '../styles/components.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            // Opción 1: Usando FormSubmit (servicio gratuito)
            const response = await fetch('https://formsubmit.co/ajax/danielmedinanegrete@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `Nuevo mensaje de ${formData.name} desde Portfolio`,
                    _captcha: 'false'
                })
            });

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: '¡Mensaje enviado con éxito! Te responderé pronto.'
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Error al enviar el mensaje');
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Error al enviar el mensaje. Por favor, intenta nuevamente o contáctame directamente por email.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact" id="contact">
            <h2>./Contacto</h2>
            <p>Si deseas ponerte en contacto, por favor completa el siguiente formulario o envíame un correo electrónico.</p>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        disabled={isSubmitting}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        disabled={isSubmitting}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                    ></textarea>
                </div>
                
                {submitStatus.type && (
                    <div className={`submit-message submit-message--${submitStatus.type}`}>
                        {submitStatus.message}
                    </div>
                )}
                
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
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