import "./App.css";
import MainWindow from "./components/mainWindow/MainWindow";
import TaskBar from "./components/taskbar/TaskBar";
import DesktopIcons from "./components/desktopIcons/DesktopIcons";
import { useState, useRef } from "react";
import Card from "./components/card/Card";
import FormattedPlainText from "./components/formattedPlainText/FormattedPlainText";
import { useLocation } from "react-router-dom";
import SkillList from "./components/skillList/SkillList";

type PageType = "home" | "curriculum" | "portfolio";

function App() {
  const location = useLocation();
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const currPath = location.pathname.replace("/", "") || "home";
  const [selectedTab, setSelectedTab] = useState<PageType>(
    currPath as PageType
  );

  return (
    <main className="appContainer">
      <MainWindow selected={selectedTab} selectedHandler={setSelectedTab} />
      <DesktopIcons selected={selectedTab} selectedHandler={setSelectedTab} />
      {(location.pathname === "/home" || location.pathname === "/") && (
        <Card
          windowTitle="Profile"
          propPosition={{
            x: 0,
            y: 0,
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

      <TaskBar />
    </main>
  );
}

export default App;
