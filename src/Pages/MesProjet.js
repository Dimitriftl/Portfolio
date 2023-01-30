import React from "react";
import "../Css/MesProjets.css";
import "../Css/Css Responsive/MesProjetsResponsive.css";
import pomodoroScreen from "../media/Pomodoro screen.PNG";
import testTechniqueTest from "../media/Test technique screen.PNG";
import bookiScreen from "../media/Booki screen.PNG";
import Netflix from '../media/Netflix.jpg'
import projetsBackground from "../media/stacked-peaks-haikei.svg";
import EyeSvg from "../media/EyeSvg.svg";

const MesProjets = () => {
  return (
    <div id="Projets" className="MesProjets">
      <div className="mesProjetsSvg">
        <img src={projetsBackground} alt="backGround" />
      </div>
      <div className="mesProjetsContainer">
        <div className="mesProjetsTitre">
          <h2>
            Mes <span className="projet">projets</span>
          </h2>
        </div>
        <div className="cardsContainer">
          {/* 1ERE CARTE */}

          <div className="cardContainer">
            <div className="CardTitle">
              <h3>
                <span>Pomodoro</span> Timer
              </h3>
            </div>
            <div className="card">
              <div className="cardBackground">
                <a
                  target={"_blank"}
                  href="https://dimitri-pomodoro.vercel.app/"
                >
                  <img
                    className="backgroundImage"
                    src={pomodoroScreen}
                    alt="Capture d'écran du pomodoro"
                  />
                  <img className="eyeSvg" src={EyeSvg} alt="oeil svg" />
                </a>
              </div>
              <div className="cardBottom">
                <div className="pastilleContainer">
                  <div className="pastille">
                    <p>React</p>
                  </div>
                  <div className="pastille">
                    <p>JS</p>
                  </div>
                  <div className="pastille">
                    <p>CSS</p>
                  </div>
                  <div className="pastille">
                    <p>HTML</p>
                  </div>
                </div>
                <div className="cardBottomText">
                  <p>
                    Projet personnel, création d’une application web Pomodoro
                    Timer avec le framework React, Javascript, HTML/CSS,
                    Firebase et vercel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2EME CARTE */}

          <div className="cardContainer">
            <div className="CardTitle">
              <h3>
                Test <span>technique</span>
              </h3>
            </div>
            <div className="card">
              <div className="cardBackground">
                <a
                  target={"_blank"}
                  href="https://stalwart-bavarois-613f1b.netlify.app/"
                >
                  <img
                    className="backgroundImage"
                    src={testTechniqueTest}
                    alt="Capture d'écran test technique"
                  />
                  <img className="eyeSvg" src={EyeSvg} alt="oeil svg" />
                </a>
              </div>
              <div className="cardBottom">
                <div className="pastilleContainer">
                  <div className="pastille">
                    <p>JS</p>
                  </div>
                  <div className="pastille">
                    <p>CSS</p>
                  </div>
                  <div className="pastille">
                    <p>HTML</p>
                  </div>
                </div>
                <div className="cardBottomText">
                  <p>
                    Test technique réalisé pour une entreprise. Développement
                    d'une maquette responsive avec HTML/CSS et Javascript.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3EME CARTE */}

          <div className="cardContainer">
            <div className="CardTitle">
              <h3>
                <span>NETFLIX</span>
              </h3>
            </div>
            <div className="card">
              <div className="cardBackground">
                <a
                  target={"_blank"}
                  href="https://clone-netflix-zsyw.vercel.app/"
                >
                  <img
                    className="backgroundImage"
                    src={Netflix}
                    alt="Capture d'écran Booki"
                  />
                  <img className="eyeSvg" src={EyeSvg} alt="oeil svg" />
                </a>
              </div>
              <div className="cardBottom">
                <div className="pastilleContainer">
                <div className="pastille">
                    <p>React</p>
                  </div>
                  <div className="pastille">
                    <p>JS</p>
                  </div>
                  <div className="pastille">
                    <p>CSS</p>
                  </div>
                  <div className="pastille">
                    <p>HTML</p>
                  </div>
                </div>
                <div className="cardBottomText">
                  <p>
                    Reproduction du site Netflix avec React, tailwind et firebase. Authentification, sauvegarde de données.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MesProjets;
