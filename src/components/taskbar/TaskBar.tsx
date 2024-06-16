import "./TaskBar.css";
import iconWindows from "../../icons/🦆 icon _windows_.svg";
import iconTwitter from "../../icons/🦆 icon _twitter_.png";
import iconInstagram from "../../icons/🦆 icon _Instagram_.svg";
import iconFacebook from "../../icons/🦆 icon _facebook_.svg";
import { useState, useEffect } from "react";
import moment from "moment";

const TaskBar = () => {
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
    <div className="stickyNavbar">
      <div className="startIcons">
        <img alt="windows" src={iconWindows}></img>
        <input className="searchInput" type="text"></input>
      </div>
      <div className="middleIcons">
        <a href="https://www.instagram.com/pepperjam89/" target="_blank">
          <img alt="twitter" src={iconTwitter}></img>
        </a>
        <a href="https://www.instagram.com/pepperjam89/" target="_blank">
          <img alt="instagram" src={iconInstagram}></img>
        </a>
        <a href="https://www.instagram.com/pepperjam89/" target="_blank">
          <img alt="facebook" src={iconFacebook}></img>
        </a>
      </div>
      <div className="endIcons">
        <h2>
          {moment().format("L")}, {moment(time).format("LTS")}
        </h2>
      </div>
    </div>
  );
};

export default TaskBar;
