import React from "react";
import "../Css/TopPage.css";
import "../Css/Css Responsive/TopPageResponsive.css"
import MyImage from "../media/Dimitri-Picture.png";
import waveSvg from "../media/layered-waves-haikei (6).svg";
import mouseSvg from "../media/iconmonstr-mouse-4 1.svg";
import arrowSvg from "../media/iconmonstr-arrow-65 1.svg";

const TopPage = () => {
  return (
    <div className="TopPage">
      <div className="TopPageMainContainer">
        <div className="topPageLeftSide">
          <div className="topPageFirstText">
            <h1 className="firsH1">Salut moi c'est Dimitri,</h1>
            <h2 className="secondH2">
              <span className="spanDev"> Développeur </span>{" "}
              <span className="spanReact"> React </span>{" "}
            </h2>
          </div>
          <div className="topPageSecondText">
            <h2>Et sur ce site je te montre mes projets perso.</h2>
          </div>
        </div>
        <div className="topPagerightside">
          <img src={MyImage} alt="Image de Dimitri" />
        </div>
      </div>
      <div className="divSvg">
        <svg width="928" height="388" preserveAspectRatio="none" viewBox="0 0 928 388" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_80_10)">
<path className="w1" d="M-32 184L-12 188.2C8 192.3 48 200.7 88 202C128 203.3 168 197.7 208 183.3C248 169 288 146 328 144C368 142 408 161 448 155.2C488 149.3 528 118.7 568 111C608 103.3 648 118.7 688 126.7C728 134.7 768 135.3 808 129.7C848 124 888 112 908 106L928 100V389H908C888 389 848 389 808 389C768 389 728 389 688 389C648 389 608 389 568 389C528 389 488 389 448 389C408 389 368 389 328 389C288 389 248 389 208 389C168 389 128 389 88 389C48 389 8 389 -12 389H-32V184Z" fill="#957FEF"/>
<path className="w2" d="M-32 151L-12 161.7C8 172.3 48 193.7 88 201.7C128 209.7 168 204.3 208 197.7C248 191 288 183 328 181.2C368 179.3 408 183.7 448 182.7C488 181.7 528 175.3 568 186.5C608 197.7 648 226.3 688 227C728 227.7 768 200.3 808 193.7C848 187 888 201 908 208L928 215V389H908C888 389 848 389 808 389C768 389 728 389 688 389C648 389 608 389 568 389C528 389 488 389 448 389C408 389 368 389 328 389C288 389 248 389 208 389C168 389 128 389 88 389C48 389 8 389 -12 389H-32V151Z" fill="#7065BA"/>
<path className="w3" d="M-32 200L-12 213C8 226 48 252 88 266.8C128 281.7 168 285.3 208 270.8C248 256.3 288 223.7 328 220.7C368 217.7 408 244.3 448 256.8C488 269.3 528 267.7 568 266C608 264.3 648 262.7 688 252.7C728 242.7 768 224.3 808 227.5C848 230.7 888 255.3 908 267.7L928 280V389H908C888 389 848 389 808 389C768 389 728 389 688 389C648 389 608 389 568 389C528 389 488 389 448 389C408 389 368 389 328 389C288 389 248 389 208 389C168 389 128 389 88 389C48 389 8 389 -12 389H-32V200Z" fill="#4F4C86"/>
<path className="w4" d="M-32 292L-12 291.5C8 291 48 290 88 280.3C128 270.7 168 252.3 208 257.7C248 263 288 292 328 295.8C368 299.7 408 278.3 448 270.5C488 262.7 528 268.3 568 277C608 285.7 648 297.3 688 292.2C728 287 768 265 808 263.3C848 261.7 888 280.3 908 289.7L928 299V389H908C888 389 848 389 808 389C768 389 728 389 688 389C648 389 608 389 568 389C528 389 488 389 448 389C408 389 368 389 328 389C288 389 248 389 208 389C168 389 128 389 88 389C48 389 8 389 -12 389H-32V292Z" fill="#333355"/>
<path className="w5" d="M-32 292L-12 301.2C8 310.3 48 328.7 88 333.7C128 338.7 168 330.3 208 325.3C248 320.3 288 318.7 328 319.7C368 320.7 408 324.3 448 326C488 327.7 528 327.3 568 326.2C608 325 648 323 688 316.7C728 310.3 768 299.7 808 296.5C848 293.3 888 297.7 908 299.8L928 302V389H908C888 389 848 389 808 389C768 389 728 389 688 389C648 389 608 389 568 389C528 389 488 389 448 389C408 389 368 389 328 389C288 389 248 389 208 389C168 389 128 389 88 389C48 389 8 389 -12 389H-32V292Z" fill="#1E1E33"/>
</g>
<defs>
<clipPath id="clip0_80_10">
<rect width="960" height="400" fill="white" transform="translate(-32 -12)"/>
</clipPath>
</defs>
</svg>
      </div>
      <div className="mouseSvgContainer">
        <a href="#aboutId">
          <div className="schrollSvg">
            <img className="mouseSvg" src={mouseSvg} alt="" />
            <img className="ArrowSvg" src={arrowSvg} alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default TopPage;
