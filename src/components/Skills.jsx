import meter1 from "./assets/svg/circulo1.svg";
import meter2 from "./assets/svg/circulo2.svg";
import meter3 from "./assets/svg/circulo3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "./Skills.module.css";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "./assets/img/color-sharp.png"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import "react-circular-progressbar/dist/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const percentage = 66;

  return (
    <section className={style.contentSkills} id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className={style.skill}>
                  <div className={style.outer}>
                    <div className={style.inner}>
                      <div className={style.number}>
                        65%
                      </div>
                    </div>
                  </div>
                </div>
                
              </Carousel>
            </div>
          </div>
          <FaReact className={style.logosre} />
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};
