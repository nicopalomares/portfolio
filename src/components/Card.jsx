import React from "react";
import style from "./Card.module.css";
import img1 from "./assets/img/Cards/ImagenMyTicket.png";
import { BsGithub } from "react-icons/bs";
import { BsLaptop } from "react-icons/bs";
import { Link } from "react-scroll";

export default function Card({ name, img, linkH, linkD }) {
  return (
    <div className={style.contein}>
      <img src={img} className={style.img} />
    </div>
  );
}
