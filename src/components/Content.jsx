import React from "react";
import style from "./Content.module.css";
import Lottie from "react-lottie";
import * as animationData from "./assets/lotties/developer.json";
import { motion } from "framer-motion";
import { GrDocumentUser } from "react-icons/gr";
import pdf from "./cv.pdf"
import {BsArrowRightCircle } from "react-icons/bs"



export default function Content() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.9,
        staggerChildren: 0.8,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // const saveFile = (pdf) => {
  //   saveAs(
  //     pdf,
  //     "example.pdf"
  //   );
  // };

  return (
    <div className={style.content}>
      <div className={style.contenedor}>
        <div className={style.div1}>
          <motion.h1
            animate={{ x: 50 }}
            transition={{ ease: "easeOut", duration: 3 }}
            className={style.titulo}
          >
            Hello I'm Nico!
          </motion.h1>
          <motion.ul variants={container} initial="hidden" animate="visible">
            {[
              "I am Front End Developer",
              "and student of enginering",
              "I seek to innovate and contribute my knowledge",
              " Get to know me better!",
            ].map((index) => (
              <motion.li key={index} className={style.text} variants={item}>
                {index}
              </motion.li>
            ))}
          </motion.ul>
            <a href={pdf} download="Cv" className={style.cv}>
              <motion.div initial={{x:0}} animate={{x:5, transition:{duration:0.5,ease:"easeIn",repeat:Infinity,repeatType:"reverse"}}}><BsArrowRightCircle className={style.flecha}/></motion.div>
              <GrDocumentUser className={style.doc}/>
            </a>
        </div>
        <div className={style.div2}>
          <Lottie options={defaultOptions} />
        </div>
      </div>
      {/* <BsCaretDownFill color="white" /> */}
    </div>
  );
}
