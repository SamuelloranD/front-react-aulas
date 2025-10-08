import React, { useState } from 'react';
import styles from './Dark.module.css'; // importa como módulo

const Dark = () => {
  const [themeLight, setThemeLight] = useState(true);

  function mudarTema() {
    setThemeLight(!themeLight);
  }

  return (
    <div className={themeLight ? styles.lightmode : styles.darkmode}>
      <h1>Troque o tema!</h1>
      <button onClick={mudarTema}>
        {themeLight ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
}

export default Dark;
