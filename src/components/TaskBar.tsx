import styles from "./TaskBar.style.module.css";
import iconWindows from "../icons/🦆 icon _windows_.svg";
import iconTwitter from "../icons/🦆 icon _twitter_.svg";
import iconInstagram from "../icons/🦆 icon _Instagram_.svg";
import iconFacebook from "../icons/🦆 icon _facebook_.svg";
import { useState, useEffect } from "react";
import moment from "moment";

const TaskBar: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles.stickyNavbar}>
      <div className={styles.startIcons}>
        <img src={iconWindows}></img>
        <input className={styles.searchInput} type="text"></input>
      </div>
      <div className={styles.middleIcons}>
        <a href="https://www.instagram.com/pepperjam89/" target="_blank">
          <img src={iconTwitter}></img>
        </a>
        <a href="https://www.instagram.com/pepperjam89/" target="_blank">
          <img src={iconInstagram}></img>
        </a>
        <a href="https://www.instagram.com/pepperjam89/" target="_blank">
          <img src={iconFacebook}></img>
        </a>
      </div>
      <div className={styles.endIcons}>
        <h2>
          {moment().format("L")}, {moment(time).format("LTS")}
        </h2>
      </div>
    </div>
  );
};

export default TaskBar;
