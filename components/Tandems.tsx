import React, { FC } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiShareForwardFill } from "react-icons/ri";

type Props = {
  tandemTitle: string;
  tandemText1: string;
  tandemBtn1: string;
};

const Tandems: FC<Props> = ({ tandemTitle, tandemText1, tandemBtn1 }) => {
  React.useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.title}>{tandemTitle}</div>
      <div
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-offset="200"
      >
        <img
          src="https://live.staticflickr.com/65535/52532199999_3e53b7dbb7.jpg"
          alt="Tandem flying at Clopotiva site"
        />
      </div>
      <p>{tandemText1}</p>
      <button className={styles.buttons}>
        <Link className={styles.btnLink} href="/tandems">
          {tandemBtn1} <RiShareForwardFill />
        </Link>
      </button>
    </div>
  );
};

export default Tandems;
