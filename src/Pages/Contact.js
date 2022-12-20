import React from "react";
import "../Css/Contact.css";
import "../Css/Css Responsive/ContactResponsive.css";
import linkedinSvg from "../media/Linkedin.svg";
import githubSvg from "../media/Github.svg";
import waveFooterSvg from "../media/layered-waves-haikei (5).svg";
import { useEffect } from "react";

const Contact = () => {
  return (
    <div id="contact" className="Contact">
      <div className="contactContainer">
        <div className="contactTitle">
          <h2>
            {" "}
            Engageons une <span className="conversation">
              conversation
            </span>{" "}
          </h2>
        </div>
        <div className="contactContent">
          <div className="mesContatcs">
            <div className="mesContactsTitre">
              <h3>
                Mes contacts <span className="Purple">:</span>
              </h3>
            </div>
            <div className="mesContactContent">
              <p>
                Mail <span className="Purple">:</span> Dimitriftl@hotmail.com
              </p>
              <p>
                Num <span className="Purple">:</span>{" "}
                <span className="numero">07 82 11 51 25</span>
              </p>
            </div>
            <div className="mesContactSvg">
              <a target='_blank' href="https://www.linkedin.com/in/dimitri-fontenelle/">
                <img src={linkedinSvg} alt="Linkedin" />
              </a>
              <a target='_blank' href="https://github.com/Dimitriftl">
                <img src={githubSvg} alt="Github" />
              </a>
            </div>
          </div>

          <div className="votreMessage">
            <form
              action="https://formsubmit.co/dimitriftl@hotmail.com"
              method="POST"
            >
              <div className="prenomEmail">
                <input
                  required
                  className="inputNom"
                  type="text"
                  name="name"
                  placeholder="Nom, Prénom"
                />
                <input
                  required
                  className="inputEmail"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>

              <div className="sujet">
                <input
                  required
                  className="inputSujet"
                  type="text"
                  name="subject"
                  placeholder="Sujet"
                />
              </div>
              <div className="message">
                <textarea
                  required
                  nameName="inputMessage"
                  placeholder="Message"
                  name="message"
                />
              </div>
              <div className="buttonContainer">
                <button className="buttonEnvoyer" type="submit">
                  ENVOYER !
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="waveFooterSvg">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            className="w6"
            d="M0 423L15 424.7C30 426.3 60 429.7 90 422.7C120 415.7 150 398.3 180 395.7C210 393 240 405 270 405.3C300 405.7 330 394.3 360 395.3C390 396.3 420 409.7 450 408C480 406.3 510 389.7 540 384.3C570 379 600 385 630 393.8C660 402.7 690 414.3 720 417.5C750 420.7 780 415.3 810 406.3C840 397.3 870 384.7 885 378.3L900 372L900 601L885 601C870 601 840 601 810 601C780 601 750 601 720 601C690 601 660 601 630 601C600 601 570 601 540 601C510 601 480 601 450 601C420 601 390 601 360 601C330 601 300 601 270 601C240 601 210 601 180 601C150 601 120 601 90 601C60 601 30 601 15 601L0 601Z"
            fill="#957fef"
          ></path>
          <path
            className="w7"
            d="M0 405L15 406.7C30 408.3 60 411.7 90 416.8C120 422 150 429 180 439.2C210 449.3 240 462.7 270 460.5C300 458.3 330 440.7 360 433C390 425.3 420 427.7 450 428.3C480 429 510 428 540 429.2C570 430.3 600 433.7 630 436.8C660 440 690 443 720 446.7C750 450.3 780 454.7 810 456.3C840 458 870 457 885 456.5L900 456L900 601L885 601C870 601 840 601 810 601C780 601 750 601 720 601C690 601 660 601 630 601C600 601 570 601 540 601C510 601 480 601 450 601C420 601 390 601 360 601C330 601 300 601 270 601C240 601 210 601 180 601C150 601 120 601 90 601C60 601 30 601 15 601L0 601Z"
            fill="#8d76f0"
          ></path>
          <path
            className="w8"
            d="M0 486L15 488C30 490 60 494 90 492C120 490 150 482 180 475C210 468 240 462 270 467C300 472 330 488 360 492.5C390 497 420 490 450 483.8C480 477.7 510 472.3 540 468C570 463.7 600 460.3 630 464C660 467.7 690 478.3 720 481.5C750 484.7 780 480.3 810 478C840 475.7 870 475.3 885 475.2L900 475L900 601L885 601C870 601 840 601 810 601C780 601 750 601 720 601C690 601 660 601 630 601C600 601 570 601 540 601C510 601 480 601 450 601C420 601 390 601 360 601C330 601 300 601 270 601C240 601 210 601 180 601C150 601 120 601 90 601C60 601 30 601 15 601L0 601Z"
            fill="#846ef1"
          ></path>
          <path
            className="w9"
            d="M0 484L15 486.3C30 488.7 60 493.3 90 493.7C120 494 150 490 180 494.8C210 499.7 240 513.3 270 521.5C300 529.7 330 532.3 360 531.7C390 531 420 527 450 526.7C480 526.3 510 529.7 540 525.3C570 521 600 509 630 506C660 503 690 509 720 507.3C750 505.7 780 496.3 810 497.5C840 498.7 870 510.3 885 516.2L900 522L900 601L885 601C870 601 840 601 810 601C780 601 750 601 720 601C690 601 660 601 630 601C600 601 570 601 540 601C510 601 480 601 450 601C420 601 390 601 360 601C330 601 300 601 270 601C240 601 210 601 180 601C150 601 120 601 90 601C60 601 30 601 15 601L0 601Z"
            fill="#7b66f2"
          ></path>
          <path
            className="w10"
            d="M0 541L15 540.5C30 540 60 539 90 536.5C120 534 150 530 180 533.2C210 536.3 240 546.7 270 546.3C300 546 330 535 360 535.3C390 535.7 420 547.3 450 555C480 562.7 510 566.3 540 564.2C570 562 600 554 630 552.7C660 551.3 690 556.7 720 554.8C750 553 780 544 810 537.7C840 531.3 870 527.7 885 525.8L900 524L900 601L885 601C870 601 840 601 810 601C780 601 750 601 720 601C690 601 660 601 630 601C600 601 570 601 540 601C510 601 480 601 450 601C420 601 390 601 360 601C330 601 300 601 270 601C240 601 210 601 180 601C150 601 120 601 90 601C60 601 30 601 15 601L0 601Z"
            fill="#715df2"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Contact;
