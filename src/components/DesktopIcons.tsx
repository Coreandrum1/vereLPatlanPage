import React, { useRef } from "react";
import styles from "./DesktopIcons.styles.module.css";
import folderClosedIcon from "../icons/🦆 icon _folder_.svg";
import folderOpenIcon from "../icons/🦆 icon _opened folder_.svg";

interface IProps {
  selected: "home" | "curriculum" | "portfolio";
  selectedHandler: (tab: "home" | "curriculum" | "portfolio") => void;
}

const DesktopIcons: React.FC<IProps> = ({ selected, selectedHandler }) => {
  const nodeRef = useRef(null);
  return (
    <div className={styles.container}>
      <div
        ref={nodeRef}
        className={styles.folderContainer}
        onClick={() => selectedHandler("home")}
      >
        <img
          src={selected === "home" ? folderOpenIcon : folderClosedIcon}
        ></img>
        <p>Home</p>
      </div>
      <div
        className={styles.folderContainer}
        onClick={() => selectedHandler("curriculum")}
      >
        <img
          src={selected === "curriculum" ? folderOpenIcon : folderClosedIcon}
        ></img>
        <p>Curriculum</p>
      </div>
      <div
        className={styles.folderContainer}
        onClick={() => selectedHandler("portfolio")}
      >
        <img
          src={selected === "portfolio" ? folderOpenIcon : folderClosedIcon}
        ></img>
        <p>Porfolio</p>
      </div>
    </div>
  );
};

export default DesktopIcons;
