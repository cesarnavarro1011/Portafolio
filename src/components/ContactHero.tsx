import React from 'react';
import styles from './ContactHero.module.css';
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";

const ContactHero = () => {
  return (
    <div className={styles.example2}> 
      <ul className={styles.example2}>
        <li className={styles.iconContent}>
          <a href="https://www.linkedin.com/in/dev-cesarnavarro/" target="_blank" rel="Linkedin" data-social="Linkedin">
            <div className={styles.filled}></div>
            <BsLinkedin/>
          </a>
        </li>
        <li className={styles.iconContent}>
          <a href="https://github.com/cesarnavarro1011" target="_blank"  rel="GitHub" data-social="github">
            <div className={styles.filled}></div>
            <SiGithub/>
          </a>
        </li>
        <li className={styles.iconContent}>
          <a href="https://www.instagram.com/cesar_venera/" target="_blank" rel="instagram" data-social="instagram">
            <div className={styles.filled}></div>
            <BsInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactHero;
