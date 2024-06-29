"use client"
import React, { useState, ChangeEvent } from 'react';
import styles from './Title.module.css'; // Asegúrate de importar los estilos CSS

const Title: React.FC = () => {
  // Inicialización del estado
  const [isChecked, setIsChecked] = useState<boolean>(true);

  // Función para manejar el cambio del checkbox
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  // JSX que representa la estructura del componente
  return (
    <div className={styles.container}>
      <div className={styles.radioWrapper}>
        <input  
          className={styles.input}
          type="checkbox"
          aria-hidden={undefined} // Esto debería manejarse correctamente según tus necesidades
          name="btn"
          id="value-2"
          checked={isChecked}
          onChange={handleChange}
        />
        <div className={styles.btn}>
          <span aria-hidden="true">-</span>Project
          <span className={styles.btnGlitch} aria-hidden="true">
            Project
          </span>
          <label className={styles.number}>r1</label>
        </div>
      </div>
    </div>
  );
};

export default Title;
