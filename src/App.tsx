import "./App.css";
import MainWindow from "./components/MainWindow";
import TaskBar from "./components/TaskBar";
import DesktopIcons from "./components/DesktopIcons";
import { useState } from "react";
import Card from "./components/Card";
import FormattedPlainText from "./components/FormattedPlainText";
import { useLocation } from "react-router-dom";
import SkillList from "./components/SkillList";

function App() {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState<
    "home" | "curriculum" | "portfolio"
  >("home");

  return (
    <>
      <MainWindow selected={selectedTab} selectedHandler={setSelectedTab} />
      <DesktopIcons selected={selectedTab} selectedHandler={setSelectedTab} />
      {location.pathname === "/home" && (
        <Card
          windowTitle="Profile"
          propPosition={{ x: 300, y: 400 }}
          height={300}
          width={400}
        />
      )}

      {location.pathname === "/home" && (
        <Card
          windowTitle="About Me"
          propPosition={{ x: 1300, y: 400 }}
          height={300}
          width={400}
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
          propPosition={{ x: 300, y: 400 }}
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
