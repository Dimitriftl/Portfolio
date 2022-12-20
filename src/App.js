import Navbar from "./components/TopPage/Navbar";
import TopPage from "./Pages/TopPage";
import './index.css';
import About from "./Pages/About";
import MesProjets from "./Pages/MesProjet";
import Contact from "./Pages/Contact";
import { useState } from "react";

function App() {

  const [switchAbout, setSwitchAbout] = useState(true);
  const [leftSide, setLeftSide] = useState(true);
  const [rightSide, setRightSide] = useState(false);


  return (
    <div className="App">
      <Navbar 
      switchAbout={switchAbout}
      setSwitchAbout={setSwitchAbout}
      leftSide={leftSide}
      setLeftSide={setLeftSide}
      rightSide={rightSide}
      setRightSide={setRightSide}
      />
      <TopPage />
      <About
      switchAbout={switchAbout}
      setSwitchAbout={setSwitchAbout}
      leftSide={leftSide}
      setLeftSide={setLeftSide}
      rightSide={rightSide}
      setRightSide={setRightSide}
      />
      <MesProjets />
      <Contact />
    </div>
  );
}

export default App;
