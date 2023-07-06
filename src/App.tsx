import "./App.css";
import Card from "./components/Card";
import MainWindow from "./components/MainWindow";
import TaskBar from "./components/TaskBar";
import DesktopIcons from "./components/DesktopIcons";
import { useState } from "react";
import FormattedPlainText from "./components/FormattedPlainText";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState<
    "home" | "curriculum" | "portfolio"
  >("home");

  return (
    <>
      <MainWindow selected={selectedTab} selectedHandler={setSelectedTab} />
      <DesktopIcons selected={selectedTab} selectedHandler={setSelectedTab} />
      {/*
      <Card windowTitle="Profile" propPosition={{ x: 300, y: 400 }} />
      <Card
        windowTitle="About Me"
        propPosition={{ x: 1300, y: 400 }}
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
       */}

      <TaskBar />
    </>
  );
}

export default App;
