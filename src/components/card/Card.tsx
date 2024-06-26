import Draggable from "react-draggable"; // The default
import "./Card.css";
import minimizeIcon from "../../icons/🦆 icon _Window Minimize_.svg";
import maximizeIcon from "../../icons/🦆 icon _window maximize_.svg";
import closeIcon from "../../icons/🦆 icon _window close_.svg";
import { useRef } from "react";
import useWindowButtons from "../../hooks/useWindowButtons";
import useWindowSize from "../../hooks/useWindowSize";

interface IProps {
  windowTitle?: string;
  subContentComponent?: React.ReactNode | string;
  propPosition: {
    x: number;
    y: number;
  };
  height: number;
  width: number;
}

const Card: React.FC<IProps> = ({
  windowTitle,
  subContentComponent,
  propPosition,
  height,
  width,
}) => {
  const nodeRef = useRef(null);

  const {
    // isClosed,
    handleDrag,
    position,
    handleOnClose,
    handleOnMinimize,
    handleOnMaximize,
    isMinimized,
  } = useWindowButtons(propPosition.x, propPosition.y);
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  return (
    <Draggable
      nodeRef={nodeRef}
      onDrag={handleDrag}
      position={position}
      handle=".drag-handle"
      bounds={{
        left: 0,
        right: windowWidth - width,
        top: 0,
        bottom: windowHeight - height,
      }}
    >
      <article
        ref={nodeRef}
        className="cardContainer"
        style={{ width: `${width}px` }}
      >
        <div className={`windowHeader drag-handle`}>
          <h2 className="windowTitle">{windowTitle}</h2>
          <div className="buttonsContainer">
            <img
              alt="minimize"
              src={minimizeIcon}
              style={{ alignSelf: "auto", paddingTop: "10px" }}
              onClick={handleOnMinimize}
            ></img>
            <img
              src={maximizeIcon}
              onClick={handleOnMaximize}
              alt="maximize"
            ></img>
            <img src={closeIcon} onClick={handleOnClose} alt="close"></img>
          </div>
        </div>
        {!isMinimized && (
          <div className="subContainer" style={{ height: `${height}px` }}>
            {subContentComponent}
          </div>
        )}
      </article>
    </Draggable>
  );
};

export default Card;
