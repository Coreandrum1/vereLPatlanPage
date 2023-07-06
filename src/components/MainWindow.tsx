import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { useRef, useState } from "react";
import styles from "./MainWindows.style.module.css";
import minimizeIcon from "../icons/🦆 icon _Window Minimize_.svg";
import maximizeIcon from "../icons/🦆 icon _window maximize_.svg";
import closeIcon from "../icons/🦆 icon _window close_.svg";
import starIcon from "../icons/🦆 icon _star_.svg";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

interface IProps {
  selected: "home" | "curriculum" | "portfolio";
  selectedHandler: (tab: "home" | "curriculum" | "portfolio") => void;
}

const MainWindow: React.FC<IProps> = ({ selected, selectedHandler }) => {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 450, y: 50 });

  const handleDrag = (e: DraggableEvent, data: DraggableData): void => {
    e.preventDefault();
    const { x, y } = data;
    setPosition({ x, y });
  };

  return (
    <Draggable nodeRef={nodeRef} onDrag={handleDrag} position={position}>
      <div ref={nodeRef} className={styles.container}>
        <div className={styles.tabContainer}>
          <Link
            to={"/vereLPatlanPage/home"}
            className={`${styles.tabOption} ${
              selected !== "home" && styles.inactiveTab
            }`}
            onClick={() => {
              console.log("triggered");
              selectedHandler("home");
            }}
          >
            <h2>Home</h2>
          </Link>
          <Link
            to={"/vereLPatlanPage/curriculum"}
            className={`${styles.tabOption} ${
              selected !== "curriculum" && styles.inactiveTab
            }`}
            onClick={() => selectedHandler("curriculum")}
          >
            <h2>Curriculum</h2>
          </Link>
          <Link
            to={"/vereLPatlanPage/portfolio"}
            className={`${styles.tabOption} ${
              selected !== "portfolio" && styles.inactiveTab
            }`}
            onClick={() => selectedHandler("portfolio")}
          >
            <h2>Portfolio</h2>
          </Link>
        </div>

        <div className={styles.content}>
          <div className={styles.subContentHeader}>
            <div className={styles.searchGroup}>
              <img src={starIcon} alt="" />
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
          <div className={styles.subContent}>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default MainWindow;
