import React, { FC } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiShareForwardFill } from "react-icons/ri";

type Props = {
  voucherTitle: string;
  voucherText1: string;
  voucherBtn: string;
};

const Voucher: FC<Props> = ({ voucherTitle, voucherText1, voucherBtn }) => {
  React.useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.title}>{voucherTitle}</div>
      <p>{voucherText1}</p>
      <div
        data-aos="flip-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-linear"
        data-aos-once="true"
        data-aos-offset="200"
      >
        <img
          src="https://live.staticflickr.com/65535/52591506930_5e1765cf98_c.jpg"
          alt="Voucher Paragliding Clopotiva"
        />
      </div>
      <button className={styles.buttons}>
        <Link className={styles.btnLink} href="/voucher">
          {voucherBtn} <RiShareForwardFill />
        </Link>
      </button>
    </div>
  );
};

export default Voucher;
