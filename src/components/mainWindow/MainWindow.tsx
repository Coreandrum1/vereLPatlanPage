import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { useEffect, useRef, useState } from "react";
import "./MainWindows.css";
import minimizeIcon from "../../icons/🦆 icon _Window Minimize_.svg";
import maximizeIcon from "../../icons/🦆 icon _window maximize_.svg";
import closeIcon from "../../icons/🦆 icon _window close_.svg";
import starIcon from "../../icons/🦆 icon _star_.svg";
import { Outlet, Link } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";

interface IProps {
  selected: "home" | "curriculum" | "portfolio";
  selectedHandler: (tab: "home" | "curriculum" | "portfolio") => void;
}

const MainWindow: React.FC<IProps> = ({
  selected,
  selectedHandler,
}: IProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize();
  const [position, setPosition] = useState({ x: width / 10 + 50, y: 50 });
  const [elementSize, setElementSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Function to update the width
    const updateWidth = () => {
      if (nodeRef.current) {
        setElementSize({
          width: nodeRef.current.offsetWidth,
          height: nodeRef.current.offsetHeight,
        });
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleDrag = (_e: DraggableEvent, data: DraggableData): void => {
    const { x, y } = data;
    setPosition({ x, y });
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      onDrag={handleDrag}
      position={position}
      handle=".drag-handle"
      bounds={{
        left: 0,
        right: width - elementSize.width,
        top: 0,
        bottom: height - elementSize.height,
      }}
    >
      <div ref={nodeRef} className="mainWindowContainer">
        <div className="tabContainer">
          <Link
            to={"/home"}
            className={`tabOption ${selected !== "home" && "inactiveTab"}`}
            onClick={() => {
              console.log("triggered");
              selectedHandler("home");
            }}
          >
            <h2>Home</h2>
          </Link>
          <Link
            to={"/curriculum"}
            className={`tabOption ${
              selected !== "curriculum" && "inactiveTab"
            }`}
            onClick={() => selectedHandler("curriculum")}
          >
            <h2>Curriculum</h2>
          </Link>
          <Link
            to={"/portfolio"}
            className={`tabOption ${selected !== "portfolio" && "inactiveTab"}`}
            onClick={() => selectedHandler("portfolio")}
          >
            <h2>Portfolio</h2>
          </Link>
        </div>

        <div className="content">
          <div className={`subContentHeader drag-handle`}>
            <div className="searchGroup">
              <img src={starIcon} alt="" />
              <input type="text"></input>
            </div>
            <div className="buttonsContainer">
              <img
                alt="minimize"
                src={minimizeIcon}
                style={{ alignSelf: "auto", paddingTop: "12px" }}
              ></img>
              <img src={maximizeIcon} alt="maximize"></img>
              <img src={closeIcon} alt="close"></img>
            </div>
          </div>
          <div className="subContent">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default MainWindow;
