import React from "react";
import "../../Css/Apropos.css";
import "../../Css/Css Responsive/AproposResponsive.css"
import firstSvg from "../../media/Vector1.svg";
import secondSvg from "../../media/Vector2.svg";
import linkedinSvg from "../../media/Linkedin.svg";
import githubSvg from "../../media/Github.svg";

const Apropos = () => {
  return (
    <div className="Apropos">
      <div className="aPropoDeMoi">
        <h2>
          À <span className="propos"> propos</span> de moi.
        </h2>
      </div>
      <div className="aproposContent">
        <div className="firtsSvg">
          <img src={firstSvg} alt="" />
        </div>
        <div className="textContainer">
          <p>
            Salut moi c'est Dimitri j'ai 20 ans et je suis un développeur React
            à la recherche d'une alternance.
          </p>
          <p>Concernant mon parcours, après mon
            bac j'étais parti en licence d'économie gestion ce n'était clairement
            pas pour moi j'ai donc décidé de quitter cette école, peu après j'ai
            découvert le métier de développeur web et ca a été une révélation
            pour moi j'ai commencé avec des tutoriels basiques sur HTML / CSS et
            depuis je me forme en autodidact en apprenant le langage JavaScript
            ainsi que le framework React.</p>

            <p>Concernant mon alternance ça sera avec
            OpenClassRooms pour une durée de 1 an avec un rythme de 4 jours en
            entreprise et 1 jour consacré à la formation par semaine.</p>
        </div>
        <div className="secondSvg">
          <img src={secondSvg} alt="" />
        </div>
        <div className="mesReseauxSvg">
          <a target='_blank' href="https://www.linkedin.com/in/dimitri-fontenelle/"><img  src={linkedinSvg} alt="Linkedin" /></a>
          <a target='_blank' href="https://github.com/Dimitriftl"><img  src={githubSvg} alt="Github" /></a>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
