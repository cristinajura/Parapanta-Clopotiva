import React from "react";
import styles from "../styles/Home.module.css";
import { BsWhatsapp } from "react-icons/bs";

const Whatsapp = () => {
  return (
    <div className={styles.whatsapp}>
      <a href="https://api.whatsapp.com/send?phone=40784743214" target="blank">
        <BsWhatsapp />
      </a>
    </div>
  );
};

export default Whatsapp;
