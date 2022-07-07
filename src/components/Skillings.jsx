import React from "react";
import styles from "./Skillings.module.css";
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import {__esModule} from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// import "pure-react-carousel/dist/react-carousel.es.css";

export const Skillings = () => {
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

  return (
    //     <div className={styles.content}>
    //   <div className={styles.wrapper}>
    //       <div className={styles.card}>
    //         <div className={styles.circle}>
    //           <div className={styles.bar}>
    //             <div className={styles.box}>85%</div>
    //           </div>
    //         </div>
    //         <div className={styles.text}>
    //           <IoLogoCss3 className={styles.logo} />
    //         </div>
    //       </div>
    //       <div className={styles.card}>
    //         <div className={styles.circle}>
    //           <div className={styles.bar}>
    //             <div className={styles.box}>85%</div>
    //           </div>
    //         </div>
    //         <div className={styles.text}>
    //           <DiJavascript className={styles.logo} color="#fca311" />
    //         </div>
    //       </div>
    //       <div className={styles.card}>
    //     <div className={styles.circle}>
    //       <div className={styles.bar}>
    //         <div className={styles.box}>85%</div>
    //       </div>
    //     </div>
    //     <div className={styles.text}>
    //       <FaReact className={styles.logo} color="#4361ee" />
    //     </div>
    //   </div>

    //   </div>
    // </div>

    <Carousel>
      <div>
        {/* <img src="assets/1.jpeg" /> */}
        <p className="legend">Legend 1</p>
      </div>
      <div>
        {/* <img src="assets/2.jpeg" /> */}
        <p className="legend">Legend 2</p>
      </div>
      <div>
        {/* <img src="assets/3.jpeg" /> */}
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>

    // <Carousel
    // //   responsive={responsive}
    // //   infinite={true}
    //   className="owl-carousel owl-theme skill-slider"
    // >
    //     <div className="item">
    //   <div className={styles.card}>
    //     <div className={styles.circle}>
    //       <div className={styles.bar}>
    //         <div className={styles.box}>85%</div>
    //       </div>
    //     </div>
    //     <div className={styles.text}>
    //       <IoLogoCss3 className={styles.logo} />
    //     </div>
    //   </div>
    //   </div>
    //   <div className={styles.card}>
    //     <div className={styles.circle}>
    //       <div className={styles.bar}>
    //         <div className={styles.box}>85%</div>
    //       </div>
    //     </div>
    //     <div className={styles.text}>
    //       <DiJavascript className={styles.logo} color="#fca311" />
    //     </div>
    //   </div>
    //   <div className={styles.card}>
    //     <div className={styles.circle}>
    //       <div className={styles.bar}>
    //         <div className={styles.box}>85%</div>
    //       </div>
    //     </div>
    //     <div className={styles.text}>
    //       <FaReact className={styles.logo} color="#4361ee" />
    //     </div>
    //   </div>
    // </Carousel>
  );
};
