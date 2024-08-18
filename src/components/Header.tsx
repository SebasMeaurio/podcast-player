import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {"Música a toda hora"}
        <img src="./src/assets/imagenes/musicLogo.png" alt="Logo" />
      </div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." />
      </div>
      <div className={styles.profile}>
        {"Iniciar Sesión"}
       <img src="./src/assets/imagenes/acceso.png" alt="User profile" />
        
      </div>
    </header>
  );
}

export default Header;
