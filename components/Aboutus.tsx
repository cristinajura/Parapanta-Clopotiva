import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import type { FC } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiShareForwardFill } from "react-icons/ri";

type Props = {
  aboutusTitle: string;
  aboutusText1: string;
  aboutusBtn: string;
};

const AboutUs: FC<Props> = ({ aboutusTitle, aboutusText1, aboutusBtn }) => {
  React.useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.title}>{aboutusTitle}</div>
      <p>{aboutusText1}</p>
      <div
        data-aos="flip-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-linear"
        data-aos-once="true"
        data-aos-offset="200"
      >
        <img
          src="https://live.staticflickr.com/65535/52521128314_ceff8fccf4.jpg"
          alt="Parapanta Clopotiva"
        />
      </div>
      <button className={styles.buttons}>
        <Link className={styles.btnLink} href="/aboutUs">
          {aboutusBtn} <RiShareForwardFill />
        </Link>
      </button>
    </div>
  );
};

export default AboutUs;
