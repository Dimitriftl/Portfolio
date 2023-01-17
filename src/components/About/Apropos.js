import React from "react";
import "../../Css/Apropos.css";
import "../../Css/Css Responsive/AproposResponsive.css";
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
            Salut, moi c'est Dimitri, j'ai 20 ans et je suis développeur React.
            Je recherche actuellement une alternance.
          </p>
          <p>
            Concernant mon parcours, après mon BAC je suis parti en licence
            d'économie gestion mais ça ne m'a vraiment pas plu. J'ai donc décidé
            de quitter cette école et peu de temps après j'ai découvert le
            métier de Développeur web, ça a été une révélation pour moi. J'ai
            commencé avec de simples tutoriels HTML/CSS et depuis, je me forme
            en autodidacte au langage JavaScript ainsi qu'au Framework React.
          </p>

          <p>
            Concernant mon alternance, elle se déroulera via 3W Academy pour
            une durée de 1 an avec un rythme de 3 semaines en entreprise et 1 semaine
            consacrée à la formation.
          </p>
        </div>
        <div className="secondSvg">
          <img src={secondSvg} alt="" />
        </div>
        <div className="mesReseauxSvg">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/dimitri-fontenelle/"
          >
            <img src={linkedinSvg} alt="Linkedin" />
          </a>
          <a target="_blank" href="https://github.com/Dimitriftl">
            <img src={githubSvg} alt="Github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
