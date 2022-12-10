import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import type { FC } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiShareForwardFill } from "react-icons/ri";

type Props = {
  schoolTitle: string;
  schoolText1: string;
  schoolBtn1: string;
};

const School: FC<Props> = ({ schoolTitle, schoolText1, schoolBtn1 }) => {
  React.useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.title}>{schoolTitle}</div>
      <div
        data-aos="flip-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-linear"
        data-aos-once="true"
        data-aos-offset="200"
      >
        <img
          src="https://live.staticflickr.com/65535/52544599047_561ef0bb6d.jpg"
          alt="Parapanta Clopotiva School"
        />
      </div>
      <p>{schoolText1}</p>
      <button className={styles.buttons}>
        <Link className={styles.btnLink} href="/school">
          {schoolBtn1} <RiShareForwardFill />
        </Link>
      </button>
    </div>
  );
};

export default School;
