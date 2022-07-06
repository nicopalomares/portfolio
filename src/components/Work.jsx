import React from "react";
import style from "./Work.module.css";
import Card from "./Card";
import img1 from "./assets/img/Cards/ImagenMyTicket.png";
import img2 from "./assets/img/Cards/apiFood.png";
import img3 from "./assets/img/Cards/qrioLanding.png";
import Lottie from "react-lottie";
import * as animationData from "./assets/lotties/dibujito.json";
import { motion } from "framer-motion";
import { useState } from "react";
import { ModalMio } from "./ModalMio";
import { Link } from "react-scroll";
// import video from "./assets/videos/apiFood.mp4";
// Modal.setAppElement('#yourAppElement');
import { BsGithub } from "react-icons/bs";
import { BsLaptop } from "react-icons/bs";

export default function Work() {
  const arr = [
    {
      name: "My Ticket",
      img: img1,
      linkH: "https://github.com/JuanDls01/client-concerts",
      linkD: "",
      description: "",
    },
    {
      name: "Api Food",
      img: img2,
      linkH: "https://github.com/nicopalomares/food-recipes",
      linkD: "",
      description:
        "Esta es una single page aplication que trata sobre recetas de comida que cuenta con un filtros para dietas,recetas creadas o existentes,un formulario para crear recetas y demas",
    },
    {
      name: "Landing Qrio",
      img: img3,
      linkH: "https://github.com/nicopalomares/qrio-landing",
      linkD: "",
      description: "",
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [showModal, setShowModal] = useState(false);
  const [selectedWork, setSelectedWork] = useState({});

  return (
    <section id="content2" className={style.content2}>
      <div className={style.contenedor}>
        <div className={style.contentWorks}>
          <h2 className={style.title}>Experiences ands works</h2>
          <div className={style.cards}>
            {arr.map((e) => (
              <Link to="content2" smooth={true} duration={1000}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    setSelectedWork(e);
                    setShowModal(true);
                  }}
                >
                  <Card
                    name={e.name}
                    img={e.img}
                    linkH={e.linkH}
                    linkD={e.linkD}
                  />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
        {showModal && (
          <ModalMio setShowModal={setShowModal}>
            <h2>{selectedWork.name}</h2>
            <h4 className={style.description}>Description</h4>
            <p>{selectedWork.description}</p>
             <div>
              {/* <video loop autoPlay className={style.video}>
                <source src={video} type="video/mp4"></source>
              </video>  */}
            </div>
            <div>
              <BsGithub href={selectedWork.linkH} className={style.github}/>
              <BsLaptop href="" className={style.github}/>
            </div>
          </ModalMio>
        )}
        <div className={style.content}>
          <div className={style.lottie}>
            <Lottie options={defaultOptions} />
          </div>
          {/* <motion.h2
            className={style.descrip}
            initial={{y:0}} animate={{y:1, transition:{duration:1,ease:"circIn",repeat:Infinity,repeatType:"reverse"}}}
          >
            Estamos trabajando duro para que quede completo...
          </motion.h2> */}
        </div>
      </div>
    </section>
  );
}
