import React, { useState } from 'react';
import Header from '../componentes/Header';
import Swal from 'sweetalert2';
import Footer from '../componentes/Footer';


const Contacto = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!name || !email || !message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, completa todos los campos.',
      })
      return;
    }

    // Aquí enviarías los datos del formulario a un servidor
    console.log('Datos enviados:', { name, email, message });

    // Mostrar mensaje de éxito
    Swal.fire({
      icon: 'success',
      title: '¡Mensaje enviado!',
      text: 'Tu mensaje ha sido recibido.',
    })

    // Limpiar los campos del formulario
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container">
      <Header />
      <h1>Envia tus comentarios</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Correo electrónico:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Mensaje:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        <br />
        <button type="submit">Enviar</button>
      </form>
      <Footer />
    </div>
  );
};

export default Contacto;