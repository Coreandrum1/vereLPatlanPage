import Draggable from "react-draggable"; // The default
import styles from "./Card.style.module.css";
import minimizeIcon from "../icons/🦆 icon _Window Minimize_.svg";
import maximizeIcon from "../icons/🦆 icon _window maximize_.svg";
import closeIcon from "../icons/🦆 icon _window close_.svg";
import useWindowButtons from "../hooks/useWindowButtons";
import { useRef } from "react";

interface IProps {
  windowTitle?: string;
  subContentComponent?: React.ReactNode | string;
  propPosition: {
    x: number;
    y: number;
  };
}

const Card: React.FC<IProps> = ({
  windowTitle,
  subContentComponent,
  propPosition,
}) => {
  const nodeRef = useRef(null);

  const {
    isClosed,
    handleDrag,
    position,
    handleOnClose,
    handleOnMinimize,
    handleOnMaximize,
    isMinimized,
  } = useWindowButtons(propPosition.x, propPosition.y);

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
              <h2 className={styles.windowTitle}>{windowTitle}</h2>
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
            {!isMinimized && (
              <div className={styles.subContainer}>{subContentComponent}</div>
            )}
          </article>
        </Draggable>
      )}
    </>
  );
};

export default Card;
