import React from "react";
import { useState } from "react";
import Apropos from "../components/About/Apropos";
import Competences from "../components/About/Competences";
import "../Css/About.css";
import '../Css/Css Responsive/AboutResponsive.css'

const About = ({
  switchAbout,
  setSwitchAbout,
  leftSide,
  setLeftSide,
  rightSide,
  setRightSide
}) => {
  // const [switchAbout, setSwitchAbout] = useState(true);

  // const [leftSide, setLeftSide] = useState(true);
  // const [rightSide, setRightSide] = useState(false);

  const aboutSide = () => {
    setSwitchAbout(true);
    setLeftSide(true);
    console.log("about true");
    setRightSide(false);
  };

  const competenceSide = () => {
    setSwitchAbout(false);
    setRightSide(true);
    console.log("competence true");
    setLeftSide(false);
  };

  return (
    <div className="About">
      <div id="aboutId" className="buttonSwicthContainer">
        <div className="buttonSwicthContent">
          <div
            className={leftSide ? "active1" : "buttonSwitchLeft"}
            onClick={aboutSide}
          >
            <p>À propos</p>
          </div>
          <div
            className={rightSide ? "active2" : "buttonSwitchRight" }
            onClick={competenceSide}
          >
            <p>Compétences</p>
          </div>
        </div>
      </div>
      <div className="aboutContainer">
        {switchAbout ? <Apropos /> : <Competences />}
      </div>
    </div>
  );
};

export default About;
