import React from "react";
import styles from "../styles/Home.module.css";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import type { FC } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer: FC = () => {
  const { t } = useTranslation("footer");

  React.useEffect(() => {
    AOS.init({});
  }, []);

  let isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div className={styles.footer}>
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className={styles.footerTitle}
      >
        {t("footerFollow")}
      </div>
      <p>
        <em>
          <small>{t("footerCoffee")}</small>
        </em>
      </p>
      <div className={styles.socialMedia}>
        <a
          style={{ display: "flex" }}
          href="https://www.facebook.com/parapantaromania.ro"
          target="blank"
        >
          <FaFacebookSquare />{" "}
          <div style={{ marginLeft: "10px", marginTop: "-5px" }}>
            {t("footerFb")}
          </div>
        </a>

        <a
          style={{ display: "flex" }}
          href="https://www.instagram.com/parapanta_clopotiva/"
          target="blank"
        >
          <FaInstagramSquare />{" "}
          <div style={{ marginLeft: "10px", marginTop: "-5px" }}>
            {t("footerInst")}
          </div>
        </a>
      </div>
      <div className={styles.orangeLine}></div>
      <div
        className={styles.footerBottom}
        style={isMobile ? { float: "left" } : { textAlign: "center" }}
      >
        {t("footerBottom")}
      </div>
    </div>
  );
};

export default Footer;
