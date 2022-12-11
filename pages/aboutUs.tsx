import React from "react";
import styles from "../styles/Home.module.css";
import TopNav from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

const PAboutUs = () => {
  const { t } = useTranslation(["aboutus", "common", "nav", "footer"]);

  React.useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="animate__animated animate__fadeIn">
      <TopNav />
      <div className={styles.container}>
        <Whatsapp />
        <div className={styles.cardContainer}>
          <div className="animate__animated animate__zoomIn">
            <div className={styles.title}>{t("aboutusTitle")}</div>
          </div>
          <p>{t("aboutusText1")}</p>
          <img
            src="https://live.staticflickr.com/65535/52521128314_ceff8fccf4.jpg"
            alt="Parapanta Clopotiva zbor in tandem"
          />
          <p>{t("aboutusText2")}</p>
          <div className={styles.pilotsAlign}>
            <p className={styles.names}>{t("aboutusName1")}</p>
            <div
              data-aos="flip-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in-linear"
              data-aos-once="true"
              data-aos-offset="200"
            >
              <img
                className={styles.pilotImg}
                src="https://live.staticflickr.com/65535/52532568510_2db6243949.jpg"
                alt="Paragliding instructor flying tandem at Paragliding Clopotiva"
              />
            </div>
            <p className={styles.names}>{t("aboutusName2")}</p>
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-linear"
              data-aos-once="true"
              data-aos-offset="200"
            >
              <img
                className={styles.pilotImg}
                src="https://live.staticflickr.com/65535/52532639093_470248afe2.jpg"
                alt="Instructor de patrapanta in zbor in tandem la Parapanta Clopotiva"
              />
            </div>
            <p className={styles.names}>{t("aboutusName3")}</p>
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-linear"
              data-aos-once="true"
              data-aos-offset="200"
            >
              <img
                className={styles.pilotImg}
                src="https://live.staticflickr.com/65535/52531627007_4d489abf88.jpg"
                alt="Paragliding Romania, tandem flying at Clopotiva"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "aboutus",
      "common",
      "nav",
      "footer",
    ])),
  },
});

export default PAboutUs;
