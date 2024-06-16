import { useRef } from "react";
import "./DesktopIcons.css";
import folderClosedIcon from "../../icons/🦆 icon _folder_.svg";
import folderOpenIcon from "../../icons/🦆 icon _opened folder_.svg";
import { Link } from "react-router-dom";

interface IProps {
  selected: "home" | "curriculum" | "portfolio";
  selectedHandler: (tab: "home" | "curriculum" | "portfolio") => void;
}

const DesktopIcons = ({ selected, selectedHandler }: IProps) => {
  const nodeRef = useRef(null);
  return (
    <div className="desktopIconContainer">
      <Link
        to={"/home"}
        ref={nodeRef}
        className="folderContainer"
        onClick={() => selectedHandler("home")}
      >
        <img
          alt="home"
          src={selected === "home" ? folderOpenIcon : folderClosedIcon}
        ></img>
        <p>Home</p>
      </Link>
      <Link
        to={"/curriculum"}
        className="folderContainer"
        onClick={() => selectedHandler("curriculum")}
      >
        <img
          alt="curriculum"
          src={selected === "curriculum" ? folderOpenIcon : folderClosedIcon}
        ></img>
        <p>Curriculum</p>
      </Link>
      <Link
        to={"/portfolio"}
        className="folderContainer"
        onClick={() => selectedHandler("portfolio")}
      >
        <img
          alt="portfolio"
          src={selected === "portfolio" ? folderOpenIcon : folderClosedIcon}
        ></img>
        <p>Porfolio</p>
      </Link>
    </div>
  );
};

export default DesktopIcons;
