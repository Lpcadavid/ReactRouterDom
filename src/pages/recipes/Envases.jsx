import React from 'react';

function Envases() {
  return (
    <div className="container">
      <h1>Envases Biodegradables</h1>
      <p>
        Los envases biodegradables son una alternativa sostenible a los envases de plástico tradicionales. Están diseñados para descomponerse de manera natural y reducir el impacto ambiental.
      </p>

      <h2>Beneficios de los Envases Biodegradables</h2>
      <ul>
        <li>Reducen la cantidad de residuos plásticos en vertederos y océanos.</li>
        <li>Se descomponen en un tiempo razonable, dejando menos residuos dañinos.</li>
        <li>Están hechos de materiales renovables y no dañan el medio ambiente.</li>
      </ul>

      <h2>Tipos de Envases Biodegradables</h2>
      <div className="envases-types">
        <div className="type">
          <h3>Envases de Cartón</h3>
          <p>Hechos de papel reciclado, son ideales para alimentos y bebidas.</p>
        </div>
        <div className="type">
          <h3>Envases de Almidón de Maíz</h3>
          <p>Perfectos para comida rápida y para llevar, se descomponen fácilmente.</p>
        </div>
        <div className="type">
          <h3>Envases de Bioplástico</h3>
          <p>Estos envases son una opción más ecológica que los plásticos convencionales.</p>
        </div>
      </div>
    </div>
  );
}

export default Envases;
