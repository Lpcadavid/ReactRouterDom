import React from 'react';



const Tipos = () => {
  return (
    <div className="container">
      <h1>Tipos de Productos Biodegradables</h1>
      
      <section className="tipo">
        <h2>1. Bolsas Biodegradables</h2>
        <p>
          Las bolsas biodegradables están hechas de materiales que se descomponen más rápidamente que las bolsas de plástico tradicionales. Son ideales para reducir el impacto ambiental de los desechos plásticos.
        </p>
        <ul>
          <li>Materiales comunes: almidón de maíz, celulosa.</li>
          <li>Beneficios: reducen la contaminación, se descomponen en un tiempo menor.</li>
        </ul>
      </section>

      <section className="tipo">
        <h2>2. Envases Biodegradables</h2>
        <p>
          Los envases biodegradables se utilizan para productos alimenticios y otros artículos. Estos envases están diseñados para descomponerse de manera natural, minimizando así el impacto ambiental.
        </p>
        <ul>
          <li>Materiales comunes: PLA (ácido poliláctico), papel reciclado.</li>
          <li>Beneficios: reducen el uso de plásticos, son seguros para el medio ambiente.</li>
        </ul>
      </section>   

      <section className="tipo">
        <h2>3. Toallitas Biodegradables</h2>
        <p>
          Las toallitas biodegradables son una opción sostenible para la limpieza personal y del hogar. Se descomponen de manera más rápida y eficiente que las toallitas desechables convencionales.
        </p>
        <ul>
          <li>Materiales comunes: fibras naturales, como el algodón o el papel reciclado.</li>
          <li>Beneficios: menos residuos, más amigables con el medio ambiente.</li>
        </ul>
      </section>
    </div>
  );
};

export default Tipos;