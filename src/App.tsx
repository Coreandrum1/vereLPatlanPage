import "./App.css";
import Card from "./components/Card";
import MainWindow from "./components/MainWindow";
import TaskBar from "./components/TaskBar";
import DesktopIcons from "./components/DesktopIcons";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState<
    "home" | "curriculum" | "portfolio"
  >("home");

  return (
    <>
      <DesktopIcons selected={selectedTab} selectedHandler={setSelectedTab} />
      <MainWindow selected={selectedTab} selectedHandler={setSelectedTab} />
      <Card />
      <TaskBar />
    </>
  );
}

export default App;
