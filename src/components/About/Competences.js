import React from "react";
import "../../Css/Competences.css";
import "../../Css/Css Responsive/CompetencesResponsive.css"
import barreCss from "../../media/Barre css.svg"
import barreHtml from "../../media/Barre Html.svg"
import barreJs from "../../media/Barre js.svg"
import barreReact from "../../media/Barre React.svg"
import barreGit from "../../media/Barre Git.svg"

const Competences = () => {
  return (
    <div id="competences" className="Competence">
      <div className="mesCompetence">
        <h2>
          Mes <span className="competence"> compétences</span>.
        </h2>
      </div>
      <div className="competenceContent">
        <div className="competenceContentTitre">
          <h3>Compétences Techniques</h3>
        </div>
        <div className="html">
          <h4>HTML</h4>
          <img src={barreHtml} alt="" />
        </div>
        <div className="css">
        <h4>CSS</h4>
          <img src={barreCss} alt="" />
        </div>
        <div className="js">
        <h4>JS</h4>
          <img src={barreJs} alt="" />
        </div>
        <div className="react">
        <h4>REACT</h4>
          <img src={barreReact} alt="" />
        </div>
        <div className="git">
        <h4>GIT</h4>
          <img src={barreGit} alt="" />
        </div>
      </div>
      <div className="competenceSoft">
        <h4>Sociable • Rigoureux • Esprit d'équipe • Communication • Gestion du stress</h4>
      </div>
    </div>
  );
};

export default Competences;
