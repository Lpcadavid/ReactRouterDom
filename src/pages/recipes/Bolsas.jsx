import React from 'react';


const Bolsas = () => {
  return (
    <div className="container">
      <h1>Bolsas Biodegradables</h1>
      <p>
        Las bolsas biodegradables son una alternativa sostenible a las bolsas de plástico convencionales. Están hechas de materiales orgánicos que se descomponen de manera natural, ayudando a reducir la contaminación ambiental.
      </p>

      <h2>¿Por qué elegir bolsas biodegradables?</h2>
      <ul>
        <li>Se descomponen más rápido que las bolsas de plástico tradicionales.</li>
        <li>Están hechas de recursos renovables, como almidón de maíz y celulosa.</li>
        <li>Contribuyen a la reducción de desechos plásticos en los vertederos y océanos.</li>
        <li>Son seguras para el medio ambiente y no liberan toxinas al descomponerse.</li>
      </ul>

      <h2>Tipos de Bolsas Biodegradables</h2>
      <div className="bolsas-types">
        <div className="type">
          <h3>Bolsas de Almidón de Maíz</h3>
          <p>Estas bolsas son fabricadas a partir de almidón de maíz y son completamente biodegradables y compostables.</p>
        </div>
        <div className="type">
          <h3>Bolsas de Papel Reciclado</h3>
          <p>Hechas de papel reciclado, estas bolsas son una opción ecológica y se descomponen fácilmente.</p>
        </div>
        <div className="type">
          <h3>Bolsas de Bioplástico</h3>
          <p>Estas bolsas están hechas de bioplásticos que se descomponen más rápidamente que los plásticos convencionales.</p>
        </div>
      </div>
    </div>
  );
};

export default Bolsas;