import React from "react";
import style from "./Header.module.css";
import Lottie from "react-lottie";
import * as animationData from "./assets/lotties/muñequito.json";
import { Link } from "react-scroll";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Header() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={style.contenedor}>
      <div className={style.lottie}>
        <Lottie options={defaultOptions} />
      </div>
      <div className={style.links}>
        <a href="https://www.linkedin.com/in/nicolas-palomares/" smooth={true} duration={1000} className={style.icon}>
          <BsLinkedin color="#0096c7"   className={style.svg}/>
        </a>
        <a href="https://github.com/nicopalomares" smooth={true} duration={1000} className={style.icon}>
          <BsGithub color="#6c757d" className={style.svg}/>
        </a>
        <Link to="content2" smooth={true} duration={1000}>
          <h4>Work</h4>
        </Link>
        <Link>
          <h4>About me</h4>
        </Link>
        <Link>
          <h4>Contact</h4>
        </Link>
      </div>
    </div>
  );
}
