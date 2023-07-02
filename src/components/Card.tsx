import Draggable, { DraggableData, DraggableEvent } from "react-draggable"; // The default
import styles from "./Card.style.module.css";
import minimizeIcon from "../icons/🦆 icon _Window Minimize_.svg";
import maximizeIcon from "../icons/🦆 icon _window maximize_.svg";
import closeIcon from "../icons/🦆 icon _window close_.svg";

import { useRef, useState } from "react";
const Card = () => {
  const nodeRef = useRef(null);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const [position, setPosition] = useState({ x: 300, y: 400 });
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [isClosed, setIsClosed] = useState<boolean>(false);

  const handleDrag = (e: DraggableEvent, data: DraggableData): void => {
    e.preventDefault();
    const { x, y } = data;
    setPosition({ x, y });
  };

  const handleOnMinimize = () => {
    setPosition({ x: 0, y: windowSize.current[1] - 100 });
    setIsMinimized(true);
  };

  const handleOnMaximize = () => {
    setIsMinimized(false);
    setPosition({ x: 300, y: 400 });
  };

  const handleOnClose = () => {
    setIsClosed(true);
    //will be close until page reload
  };

  return (
    <>
      {!isClosed && (
        <Draggable
          nodeRef={nodeRef}
          onDrag={handleDrag}
          position={position}
          handle=".drag-handle"
        >
          <article ref={nodeRef} className={styles.container}>
            <div className={`${styles.windowHeader} drag-handle`}>
              <h2 className={styles.windowTitle}>Profile</h2>
              <div className={styles.buttonsContainer}>
                <img
                  src={minimizeIcon}
                  style={{ alignSelf: "auto", paddingTop: "10px" }}
                  onClick={handleOnMinimize}
                ></img>
                <img src={maximizeIcon} onClick={handleOnMaximize}></img>
                <img src={closeIcon} onClick={handleOnClose}></img>
              </div>
            </div>
            {!isMinimized && <div className={styles.subContainer}></div>}
          </article>
        </Draggable>
      )}
    </>
  );
};

export default Card;
