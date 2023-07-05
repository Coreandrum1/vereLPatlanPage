import { useState, useRef } from "react";
import { DraggableData, DraggableEvent } from "react-draggable"; // The default

const useWindowButtons = (x: number, y: number) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [position, setPosition] = useState({ x, y });
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [isClosed, setIsClosed] = useState<boolean>(false);

  const handleDrag = (e: DraggableEvent, data: DraggableData): void => {
    e.preventDefault();
    const { x, y } = data;
    setPosition({ x, y });
  };

  const handleOnMinimize = (): void => {
    setPosition({ x: 0, y: windowSize.current[1] - 100 });
    setIsMinimized(true);
  };

  const handleOnMaximize = (): void => {
    setIsMinimized(false);
    setPosition({ x: 300, y: 400 });
  };

  const handleOnClose = (): void => {
    setIsClosed(true);
    //will be close until page reload
  };

  return {
    position,
    isMinimized,
    isClosed,
    handleDrag,
    handleOnMinimize,
    handleOnMaximize,
    handleOnClose,
  };
};

export default useWindowButtons;
