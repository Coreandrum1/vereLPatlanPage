import React from "react";
import styles from "./TaskBar.style.module.css";
import iconWindows from "../icons/🦆 icon _windows_.svg";
import iconTwitter from "../icons/🦆 icon _twitter_.svg";
import iconInstagram from "../icons/🦆 icon _Instagram_.svg";
import iconFacebook from "../icons/🦆 icon _facebook_.svg";

const TaskBar = () => {
  return (
    <div className={styles.stickyNavbar}>
      <div className={styles.startIcons}>
        <img src={iconWindows}></img>
        <input className={styles.searchInput} type="text"></input>
      </div>
      <div className={styles.middleIcons}>
        <img src={iconTwitter}></img>
        <img src={iconInstagram}></img>
        <img src={iconFacebook}></img>
      </div>
      <div className={styles.endIcons}>Hola</div>
    </div>
  );
};

export default TaskBar;
