import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { useRef, useState } from "react";

import styles from "./MainWindows.style.module.css";
import minimizeIcon from "../icons/🦆 icon _Window Minimize_.svg";
import maximizeIcon from "../icons/🦆 icon _window maximize_.svg";
import closeIcon from "../icons/🦆 icon _window close_.svg";

const MainWindow = () => {
  const nodeRef = useRef(null);

  const [position, setPosition] = useState({ x: 100, y: 100 });

  const handleDrag = (e: DraggableEvent, data: DraggableData): void => {
    const { x, y } = data;
    setPosition({ x, y });
  };

  return (
    <Draggable nodeRef={nodeRef} onDrag={handleDrag} position={position}>
      <div ref={nodeRef} className={styles.container}>
        <div className={styles.tabContainer}>
          <div className={styles.tabOption}>
            <h2>Home</h2>
          </div>
          <div className={styles.tabOption}>
            <h2>Curriculum</h2>
          </div>
          <div className={styles.tabOption}>
            <h2>Portfolio</h2>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.subContentHeader}>
            <div className={styles.searchGroup}>
              <p>*</p>
              <input type="text"></input>
            </div>
            <div className={styles.buttonsContainer}>
              <img
                src={minimizeIcon}
                style={{ alignSelf: "auto", paddingTop: "12px" }}
              ></img>
              <img src={maximizeIcon}></img>
              <img src={closeIcon}></img>
            </div>
          </div>
          <div className={styles.subContent}></div>
        </div>
      </div>
    </Draggable>
  );
};

export default MainWindow;
