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
      <div className={styles.container}>
        <TopNav />

        <Whatsapp />
        <div className={styles.cardContainer}>
          <div className="animate__animated animate__zoomIn">
            <div className={styles.title}>{t("aboutusTitle")}</div>
          </div>
          <p>{t("aboutusText1")}</p>
          <img
            src="https://live.staticflickr.com/65535/52521128314_ceff8fccf4.jpg"
            alt="Parapanta Clopotiva"
          />
          <p>{t("aboutusText2")}</p>
          <div className={styles.pilotsAlign}>
            <p className={styles.names}>{t("aboutusName1")}</p>
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-offset="200"
            >
              <img
                className={styles.pilotImg}
                src="https://live.staticflickr.com/65535/52532568510_2db6243949.jpg"
                alt="Basti in tandem flying"
              />
            </div>
            <p className={styles.names}>{t("aboutusName2")}</p>
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-offset="200"
            >
              <img
                className={styles.pilotImg}
                src="https://live.staticflickr.com/65535/52532639093_470248afe2.jpg"
                alt="Stefan in tandem flying"
              />
            </div>
            <p className={styles.names}>{t("aboutusName3")}</p>
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-offset="200"
            >
              <img
                className={styles.pilotImg}
                src="https://live.staticflickr.com/65535/52531627007_4d489abf88.jpg"
                alt="Arpi in tandem flying"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
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
