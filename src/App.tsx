import "./App.css";
import MainWindow from "./components/MainWindow";
import TaskBar from "./components/TaskBar";
import DesktopIcons from "./components/DesktopIcons";
import { useState, useRef } from "react";
import Card from "./components/Card";
import FormattedPlainText from "./components/FormattedPlainText";
import { useLocation } from "react-router-dom";
import SkillList from "./components/SkillList";

type PageType = "home" | "curriculum" | "portfolio";

function App() {
  const location = useLocation();
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const currPath = location.pathname.replace("/", "") || "home";
  const [selectedTab, setSelectedTab] = useState<PageType>(
    currPath as PageType
  );

  return (
    <>
      <MainWindow selected={selectedTab} selectedHandler={setSelectedTab} />
      <DesktopIcons selected={selectedTab} selectedHandler={setSelectedTab} />
      {(location.pathname === "/home" || location.pathname === "/") && (
        <Card
          windowTitle="Profile"
          propPosition={{
            x: windowSize.current[0] * 0.15,
            y: windowSize.current[1] * 0.4,
          }}
          height={300}
          width={400}
        />
      )}

      {(location.pathname === "/home" || location.pathname === "/") && (
        <Card
          windowTitle="About Me"
          propPosition={{
            x: windowSize.current[0] * 0.6,
            y: windowSize.current[1] * 0.45,
          }}
          height={250}
          width={600}
          subContentComponent={
            <FormattedPlainText
              text="Hey there! I'm Verenice López, a passionate graphic designer on a
          mission. With my trusty tools of creativity, including brushes, pencils,
          and a sprinkle of feline inspiration, I bring art to life. Welcome to my
          personal brand, where I blend my love for drawing, painting, and, of
          course, cats! Curious to explore more about me and my captivating
          projects? Come, take a peek!"
            />
          }
        />
      )}
      {location.pathname === "/curriculum" && (
        <Card
          windowTitle="Software skills"
          propPosition={{
            x: windowSize.current[0] * 0.15,
            y: windowSize.current[1] * 0.45,
          }}
          height={300}
          width={600}
          subContentComponent={<SkillList />}
        />
      )}

      {/*
       */}

      <TaskBar />
    </>
  );
}

export default App;
